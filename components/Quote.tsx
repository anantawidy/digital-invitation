import React from 'react';
import { LeafyDivider } from './Ornaments';

const Quote: React.FC = () => {
  return (
    <section id="quote" className="py-16 px-4 md:py-20 md:px-8 text-center bg-transparent relative">
      <div className="max-w-3xl mx-auto relative">
        <div className="border-t border-b border-gold/50 py-8">
            <p className="font-serif text-xl md:text-3xl italic text-seashell leading-relaxed">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
            </p>
            <p className="mt-4 font-sans font-semibold text-gold text-base md:text-lg">(Ar-Rum: 21)</p>
        </div>
        <LeafyDivider className="w-40 mx-auto mt-8 text-gold opacity-50"/>
      </div>
    </section>
  );
};

export default Quote;