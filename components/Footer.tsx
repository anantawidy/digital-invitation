import React from 'react';
import { OliveBranch } from './Ornaments';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-40 px-4 md:pt-20 md:pb-28 md:px-8 text-center bg-transparent text-seashell/80 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative">
        <p className="text-xs md:text-sm leading-relaxed">
          Terima kasih atas doa dan restu yang telah diberikan. Merupakan suatu kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        </p>
        <div className="my-6 md:my-8 border-t border-gold/50 w-24 mx-auto"></div>
        <h3 className="font-serif text-3xl md:text-4xl text-gold">Ginnia & Ananta</h3>
        <p className="mt-4 text-xs tracking-wider">#theHarmoNIAofANANTA</p>
        <p className="mt-2 text-xs">2026</p>
        <OliveBranch className="absolute -bottom-24 -right-8 text-gold opacity-20 rotate-90 scale-75" />
        <OliveBranch className="absolute -top-24 -left-8 text-gold opacity-20 -rotate-90 scale-75" />
      </div>
    </footer>
  );
};

export default Footer;