import React, { useState, FormEvent, useEffect } from 'react';
import type { RsvpEntry } from '../types';
import { OrnamentalDivider } from './Ornaments';

const RsvpSection: React.FC = () => {
  const [wishes, setWishes] = useState<RsvpEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState<'Hadir' | 'Tidak Hadir'>('Hadir');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await fetch('/api/wishes');
        if (!response.ok) {
          throw new Error('Gagal memuat ucapan');
        }
        const data: RsvpEntry[] = await response.json();
        setWishes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishes();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    const newWishData = { name, message, attendance };

    try {
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWishData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal mengirim ucapan. Silakan coba lagi.');
      }

      const savedWish: RsvpEntry = await response.json();
      
      setWishes([savedWish, ...wishes]);
      
      setName('');
      setMessage('');
      setAttendance('Hadir');

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-16 px-4 md:py-20 md:px-8 bg-transparent">
      <div className="max-w-2xl mx-auto text-center">
        <OrnamentalDivider className="w-40 mx-auto mb-4 text-gold opacity-50" />
        <h2 className="font-serif text-3xl md:text-5xl text-gold mb-8">Ucapan & Doa</h2>
        <div className="bg-card-bg p-6 md:p-8 rounded-lg shadow-sm backdrop-blur-sm border border-gold/50">
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-seashell">Nama</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white/10 border border-gold/50 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold text-seashell disabled:opacity-50"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-seashell">Ucapan</label>
              <textarea 
                id="message" 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white/10 border border-gold/50 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold text-seashell disabled:opacity-50"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
             <div>
              <label htmlFor="attendance" className="block text-sm font-medium text-seashell">Konfirmasi Kehadiran</label>
              <select
                id="attendance"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value as 'Hadir' | 'Tidak Hadir')}
                className="mt-1 block w-full px-3 py-2 bg-deep-olive border border-gold/50 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold text-seashell disabled:opacity-50"
                disabled={isSubmitting}
              >
                <option className="bg-old-burgundy text-seashell">Hadir</option>
                <option className="bg-old-burgundy text-seashell">Tidak Hadir</option>
              </select>
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button type="submit" className="w-full bg-deep-olive text-seashell font-sans px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isSubmitting}>
              {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
            </button>
          </form>
        </div>
        
        <div className="mt-12 max-h-96 overflow-y-auto text-left space-y-4 p-2">
          {isLoading && <p className="text-seashell/80 text-center">Memuat ucapan...</p>}
          {!isLoading && !error && wishes.length === 0 && <p className="text-seashell/80 text-center">Jadilah yang pertama mengirim ucapan!</p>}
          {!isLoading && error && <p className="text-red-400 text-center">{error}</p>}
          {wishes.map(wish => (
            <div key={wish.id} className="bg-card-bg p-4 rounded-lg shadow-sm border border-gold/30 fade-in-fast">
              <p className="font-bold text-seashell mb-2">{wish.name} <span className={`text-xs font-normal px-2 py-0.5 rounded-full ${wish.attendance === 'Hadir' ? 'bg-deep-olive/70 text-white' : 'bg-red-500/70 text-white'}`}>{wish.attendance}</span></p>
              <p className="text-seashell/90 italic">"{wish.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;