import React from 'react';
import { FloralCorner, LeafyVine } from './Ornaments';

const ProfileCard: React.FC<{ name: string, childDescription: string, parents: string, initial: string }> = ({ name, childDescription, parents, initial }) => {
    const nameParts = name.split(',');
    const mainName = nameParts[0];
    const degree = nameParts.length > 1 ? `,${nameParts[1]}` : '';

    return (
        <div className="w-full md:w-1/2 p-2 md:p-4">
            <div className="bg-card-bg p-6 md:p-8 rounded-lg shadow-sm text-center backdrop-blur-sm h-full flex flex-col justify-center border border-gold/50">
                <p className="font-serif text-7xl md:text-8xl text-gold opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{initial}</p>
                <div className='relative'>
                    <h3 className="font-serif text-3xl md:text-4xl text-seashell">
                        {mainName}
                        {degree && <span className="text-xl md:text-2xl opacity-80">{degree}</span>}
                    </h3>
                    <div className="my-3 md:my-4 border-t border-gold/50 w-16 mx-auto"></div>
                    <p className="text-sm md:text-sm text-seashell/90">{childDescription}</p>
                    <p className="font-semibold mt-1 text-sm md:text-base text-seashell">{parents}</p>
                </div>
            </div>
        </div>
    );
};

const BrideGroom: React.FC = () => {
  return (
    <section id="mempelai" className="py-16 px-4 md:py-20 md:px-8 bg-transparent relative">
        <FloralCorner className="absolute top-8 left-0 w-24 h-24 text-gold opacity-20 transform -scale-x-100" />
        <FloralCorner className="absolute bottom-8 right-0 w-24 h-24 text-gold opacity-20" />
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-gold mb-2">Pasangan Mempelai</h2>
        <LeafyVine className="w-48 mx-auto my-4 text-gold opacity-30" />
         <p className="font-sans text-sm md:text-base text-seashell mb-8 md:mb-12">Dengan Rahmat Tuhan Yang Maha Esa, kami bermaksud menyelenggarakan pernikahan putra-putri kami:</p>
        <div className="flex flex-col md:flex-row -m-2 md:-m-4">
           <ProfileCard 
              initial="G"
              name="Alfath Rohmah Citra Ginnia, S.Kom"
              childDescription="Putri Pertama dari:"
              parents="Bapak Sugiyono & (Almh) Ibu Kurniasih"
           />
           <ProfileCard 
              initial="A"
              name="Ananta Widyaswara, S.Kom"
              childDescription="Putra Kedua dari:"
              parents="Bapak Anang Sudjarwoko & Ibu Evi Pratiwi"
           />
        </div>
      </div>
    </section>
  );
};

export default BrideGroom;