import React from 'react';
import { LeafyDivider } from './Ornaments';

const MapSection: React.FC = () => {
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Masjid+Jami'+Baiturrahman,Jl.+Bukit+Cinere+Raya+No.150C,Gandul,Kec.+Cinere,Kota+Depok,Jawa+Barat+16514`;
  const mapDirectUrl = "https://maps.app.goo.gl/ZU9dTVzVdGhZVzzi8";

  return (
    <section id="lokasi" className="py-16 px-4 md:py-20 md:px-8 bg-transparent">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-gold mb-8">Lokasi Acara</h2>
        <div className="w-full h-80 md:h-96 bg-old-burgundy rounded-lg shadow-sm overflow-hidden relative border border-gold/50">
          <div className="absolute inset-0 bg-old-burgundy flex items-center justify-center z-10">
            <div className="text-center p-4 bg-card-bg backdrop-blur-sm rounded-lg shadow-sm max-w-xs border border-gold/50">
                <p className="font-semibold text-seashell">Peta Lokasi Akan Tampil di Sini</p>
                <p className="text-sm text-seashell/80 mt-1">
                    Untuk menampilkan peta interaktif, pemilik undangan perlu mengkonfigurasi Google Maps API Key.
                </p>
            </div>
          </div>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pernikahan"
            className="relative z-0 opacity-20"
          ></iframe>
        </div>
        <LeafyDivider className="w-40 mx-auto my-8 text-gold opacity-30"/>
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