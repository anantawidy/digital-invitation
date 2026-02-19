import React from 'react';
import { OrnamentalDivider } from './Ornaments';

const MapSection: React.FC = () => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=Masjid%20Jami'%20Baiturrahman%2C%20Jl.%20Bukit%20Cinere%20Raya%20No.150C%2C%20Gandul%2C%20Kec.%20Cinere%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016514&z=17&output=embed`;
  const mapDirectUrl = "https://maps.app.goo.gl/tSwNnuRo3uY4vEWN9";

  return (
    <section id="lokasi" className="py-16 px-4 md:py-20 md:px-8 bg-transparent">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-gold mb-8">Lokasi Acara</h2>
        <div className="w-full h-80 md:h-96 bg-old-burgundy rounded-lg shadow-sm overflow-hidden relative border border-gold/50">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pernikahan"
          ></iframe>
        </div>
        <OrnamentalDivider className="w-40 mx-auto my-8 text-gold opacity-30"/>
        <a 
          href={mapDirectUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-deep-olive text-seashell font-sans px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Buka di Google Maps
        </a>
      </div>
    </section>
  );
};

export default MapSection;