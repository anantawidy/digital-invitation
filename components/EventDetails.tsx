import React from 'react';
import { OliveBranch } from './Ornaments';

const EventCard: React.FC<{ title: string; date: string; time: string; location: string; address: string }> = ({ title, date, time, location, address }) => (
    <div className="w-full md:w-1/2 p-2 md:p-4">
        <div className="bg-card-bg p-6 md:p-8 rounded-lg shadow-sm text-center backdrop-blur-sm h-full border border-gold/50">
            <h3 className="font-serif text-3xl md:text-4xl text-gold">{title}</h3>
            <div className="my-3 md:my-4 border-t border-gold/50 w-16 mx-auto"></div>
            <p className="font-semibold text-base md:text-base text-seashell">{date}</p>
            <p className="text-sm md:text-base text-seashell">{time}</p>
            <p className="mt-4 font-semibold text-base md:text-base text-seashell">{location}</p>
            <p className="text-xs md:text-sm text-seashell/90">{address}</p>
        </div>
    </div>
);

const EventDetails: React.FC = () => {
  return (
    <section id="acara" className="py-16 px-4 md:py-20 md:px-8 bg-transparent relative">
      <OliveBranch className="absolute bottom-0 -left-12 text-gold opacity-10 transform rotate-90 scale-75" />
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-gold mb-8 md:mb-12">Detail Acara</h2>
        <div className="flex flex-col md:flex-row -m-2 md:-m-4">
          <EventCard 
            title="Akad Nikah"
            date="Sabtu, 04 April 2026"
            time="09.00 - 10.00 WIB"
            location="Masjid Jami' Baiturrahman"
            address="Jl. Bukit Cinere Raya, Depok"
          />
          <EventCard 
            title="Resepsi"
            date="Sabtu, 04 April 2026"
            time="11.00 - 14.00 WIB"
            location="Masjid Jami' Baiturrahman"
            address="Jl. Bukit Cinere Raya, Depok"
          />
        </div>
        <a 
          href="https://maps.app.goo.gl/ZU9dTVzVdGhZVzzi8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-8 md:mt-12 inline-block bg-deep-olive text-seashell font-sans px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Lihat Lokasi
        </a>
      </div>
    </section>
  );
};

export default EventDetails;