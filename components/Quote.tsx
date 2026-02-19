import React from 'react';
import { Sunflower } from './Ornaments';

const Quote: React.FC = () => {
  return (
    <section id="quote" className="py-16 px-4 md:py-20 md:px-8 text-center bg-transparent relative overflow-hidden">
      <Sunflower className="absolute -top-8 -left-8 w-32 h-32 text-gold opacity-10 -rotate-45" />
      <Sunflower className="absolute -bottom-8 -right-8 w-32 h-32 text-gold opacity-10 rotate-135" />
      <div className="max-w-3xl mx-auto relative">
        <div className="border-t border-b border-gold/50 py-8 space-y-6">
            <p className="italic text-sm md:text-base text-seashell">"A Love That Transcends Time and Lives in Perfect Harmony"</p>
            <div className="flex items-center justify-center text-gold/80 my-4">
                <span className="flex-grow h-px bg-gold/50"></span>
                <span className="mx-4 text-2xl">✦</span>
                <span className="flex-grow h-px bg-gold/50"></span>
            </div>
            <p className="font-serif text-xl md:text-3xl italic text-seashell leading-relaxed">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
            </p>
            <p className="mt-4 font-sans font-semibold text-gold text-base md:text-lg">(Ar-Rum: 21)</p>

        </div>
        <svg className="w-40 mx-auto mt-8 text-gold opacity-50" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
          <path d="M 10 10 H 190" strokeWidth="0.5" />
          <path d="M 80 10 C 90 5, 95 5, 100 10" />
          <path d="M 100 10 C 105 15, 110 15, 120 10" />
        </svg>
      </div>
    </section>
  );
};

export default Quote;