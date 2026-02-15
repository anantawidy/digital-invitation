import React, { useState, useEffect, useCallback } from 'react';
import { FloralCorner } from './Ornaments';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from './Icons';

const galleryImages = [
  'https://lh3.googleusercontent.com/d/1G9BN8TkQzkV82etdkuT0pQmRKuc1gEtx',
  'https://lh3.googleusercontent.com/d/1_cVXMb0hfbtnuQb0u9etZlkKk68MNcv7',
  'https://lh3.googleusercontent.com/d/19yf-I9HcVkH64JBMa4H2DsBwwmTS3ZuC',
  'https://lh3.googleusercontent.com/d/1w6odDl3hxVgDGSvAJcH1_m0rgjnqmnJR',
  'https://lh3.googleusercontent.com/d/1kftHNGV6PG-8BYpGbKI0ffG2xPLj6-QA',
  'https://lh3.googleusercontent.com/d/1ol1IOKwalb61QoXQZgMSOAjQPJ_jaWox',
];

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const showNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  }, []);

  const showPrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') showNextImage();
        else if (e.key === 'ArrowLeft') showPrevImage();
        else if (e.key === 'Escape') closeLightbox();
    };

    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, showNextImage, showPrevImage, closeLightbox]);

  return (
    <section id="gallery" className="py-16 px-4 md:py-20 md:px-8 bg-transparent relative">
      <FloralCorner className="absolute bottom-0 -left-4 w-24 h-24 text-gold opacity-10 transform -scale-x-100" />
      <FloralCorner className="absolute top-0 -right-4 w-24 h-24 text-gold opacity-10" />
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-gold mb-8 md:mb-12">Galeri Foto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-sm group border border-gold/30 bg-black/20 aspect-square cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={src} 
                  alt={`Prewedding photo ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
          ))}
        </div>
      </div>
      
      {lightboxOpen && (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center fade-in-fast"
            onClick={closeLightbox}
        >
            <button 
                className="absolute top-4 right-4 text-seashell/80 hover:text-seashell transition-colors z-50 p-2"
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                aria-label="Close gallery"
            >
                <XMarkIcon className="w-8 h-8"/>
            </button>

            <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-seashell/80 hover:text-seashell transition-colors z-50 p-2 rounded-full bg-white/10 hover:bg-white/20"
                onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
                aria-label="Previous image"
            >
                <ChevronLeftIcon className="w-8 h-8"/>
            </button>

            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <img 
                    src={galleryImages[currentImageIndex]} 
                    alt={`Prewedding photo ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
            </div>
            
            <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-seashell/80 hover:text-seashell transition-colors z-50 p-2 rounded-full bg-white/10 hover:bg-white/20"
                onClick={(e) => { e.stopPropagation(); showNextImage(); }}
                aria-label="Next image"
            >
                <ChevronRightIcon className="w-8 h-8"/>
            </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;