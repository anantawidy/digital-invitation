import { kv } from "@vercel/kv";

export const config = {
  runtime: 'edge',
};

// Tipe data didefinisikan ulang di sini untuk menghindari masalah impor di edge runtime
interface RsvpEntry {
  id: string;
  name: string;
  message: string;
  attendance: 'Hadir' | 'Tidak Hadir';
  createdAt: number;
}

type NewRsvpEntry = Omit<RsvpEntry, 'id' | 'createdAt'>;

export default async function handler(request: Request) {
  try {
    if (request.method === 'GET') {
      const wishes: RsvpEntry[] = (await kv.lrange('wishes', 0, -1)) || [];
      // Data sudah tersimpan dalam urutan kronologis terbalik (terbaru dulu) dengan lpush
      return new Response(JSON.stringify(wishes), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else if (request.method === 'POST') {
      const body = await request.json() as NewRsvpEntry;

      if (!body.name || !body.message || !body.attendance) {
        return new Response(JSON.stringify({ error: 'Nama, ucapan, dan kehadiran wajib diisi.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const newWish: RsvpEntry = {
        id: `wish_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        name: body.name.slice(0, 50), // Batasi panjang nama
        message: body.message.slice(0, 500), // Batasi panjang pesan
        attendance: body.attendance,
        createdAt: Date.now(),
      };
      
      await kv.lpush('wishes', newWish);

      return new Response(JSON.stringify(newWish), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}