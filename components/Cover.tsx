import React from 'react';
import { OliveBranch } from './Ornaments';

const Cover: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  return (
    <div className="fixed inset-0 bg-old-burgundy/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 md:p-8 z-50 h-screen overflow-hidden">
        <div className="relative z-10">
            <p className="font-sans text-base md:text-lg text-seashell tracking-wider fade-in">The Wedding of</p>
            <h1 className="font-serif text-5xl md:text-8xl my-2 md:my-4 text-gold fade-in-delay flex flex-col items-center leading-tight md:leading-tight">
                <span>Ginnia</span>
                <span className="text-3xl md:text-6xl my-0 md:my-2 font-sans">&</span>
                <span>Ananta</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-seashell fade-in-slow">04 April 2026</p>
            
            <div className='mt-6 md:mt-8 fade-in-slow'>
                <p className="italic text-sm md:text-base text-seashell">"A Love That Transcends Time and Lives in Perfect Harmony"</p>
                <p className="font-bold text-base md:text-lg text-seashell mt-2">#theHarmoNIAofANANTA</p>
            </div>

            <button
                onClick={onOpen}
                className="mt-8 md:mt-12 bg-deep-olive text-seashell font-sans px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
                Buka Undangan
            </button>
        </div>
        <OliveBranch className="absolute bottom-0 left-0 text-gold opacity-20 -translate-x-1/4" />
        <OliveBranch className="absolute top-0 right-0 text-gold opacity-20 translate-x-1/4 rotate-180" />
    </div>
  );
};

export default Cover;