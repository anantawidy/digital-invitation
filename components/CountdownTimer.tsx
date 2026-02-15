import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { FloralCorner } from './Ornaments';

const CountdownTimer: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown('2026-04-04T09:00:00');
  
  const TimeUnit: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-1 md:mx-4">
      <div className="w-16 h-16 md:w-28 md:h-28 flex items-center justify-center bg-card-bg rounded-lg shadow-sm backdrop-blur-sm border border-gold/50">
        <span className="font-serif text-3xl md:text-6xl text-seashell">{value}</span>
      </div>
      <span className="mt-2 font-sans text-xs md:text-base text-seashell/80 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <section id="countdown" className="py-16 px-4 md:py-20 md:px-8 bg-transparent relative">
      <FloralCorner className="absolute top-0 right-0 w-24 h-24 text-gold opacity-10 transform" />
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-gold mb-8">Menuju Hari Bahagia</h2>
        <div className="flex justify-center">
          <TimeUnit value={days} label="Hari" />
          <TimeUnit value={hours} label="Jam" />
          <TimeUnit value={minutes} label="Menit" />
          <TimeUnit value={seconds} label="Detik" />
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;