import { kv } from "@vercel/kv";
import { Router, Request, Response } from 'express';

// Tipe data didefinisikan ulang di sini untuk menghindari masalah impor di edge runtime
interface RsvpEntry {
  id: string;
  name: string;
  message: string;
  attendance: 'Hadir' | 'Tidak Hadir';
  createdAt: number;
}

type NewRsvpEntry = Omit<RsvpEntry, 'id' | 'createdAt'>;

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const wishes: RsvpEntry[] = (await kv.lrange('wishes', 0, -1)) || [];
        res.status(200).json(wishes);
    } catch (error) {
        console.error('API Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
        res.status(500).json({ error: errorMessage });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const body = req.body as NewRsvpEntry;

        if (!body.name || !body.message || !body.attendance) {
            return res.status(400).json({ error: 'Nama, ucapan, dan kehadiran wajib diisi.' });
        }

        const newWish: RsvpEntry = {
            id: `wish_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            name: body.name.slice(0, 50), // Batasi panjang nama
            message: body.message.slice(0, 500), // Batasi panjang pesan
            attendance: body.attendance,
            createdAt: Date.now(),
        };
        
        await kv.lpush('wishes', newWish);

        res.status(201).json(newWish);
    } catch (error) {
        console.error('API Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
        res.status(500).json({ error: errorMessage });
    }
});

export default router;