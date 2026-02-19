import React, { useState, useEffect, useRef, useCallback } from 'react';
import Cover from './components/Cover';
import Quote from './components/Quote';
import CountdownTimer from './components/CountdownTimer';
import BrideGroom from './components/BrideGroom';
import EventDetails from './components/EventDetails';
import RsvpSection from './components/RsvpSection';
import MapSection from './components/MapSection';
import GiftSection from './components/GiftSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { MusicIcon, MuteIcon } from './components/Icons';
import FloatingNav from './components/FloatingNav';

const App: React.FC = () => {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('to');
    if (name) {
      setGuestName(name);
    }
  }, []);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [audio] = useState(new Audio('https://cdn.jsdelivr.net/gh/anantawidy/wedding-music@main/Nadhif%20Basalamah%20-%20bergema%20sampai%20selamanya%20(Official%20Lyric%20Video).mp3'));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const scrollAnimationRef = useRef<number | null>(null);

  const stopAutoScrolling = useCallback(() => {
    if (isAutoScrolling) {
      setIsAutoScrolling(false);
    }
  }, [isAutoScrolling]);

  useEffect(() => {
    audio.loop = true;
    if (isPlaying) {
      audio.play().catch(error => console.error("Audio play failed:", error));
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    setIsPlaying(true);
    document.body.style.overflow = 'auto';
    // Delay auto-scroll to let initial animations finish
    setTimeout(() => setIsAutoScrolling(true), 2500);
  };
  
  useEffect(() => {
    if (isInvitationOpen) {
      const firstSection = document.getElementById('quote');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isInvitationOpen]);

  // Auto-scroll logic
  useEffect(() => {
    const scrollStep = 0.5; // Adjust for desired slowness

    const autoScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setIsAutoScrolling(false);
        return;
      }
      window.scrollBy(0, scrollStep);
      scrollAnimationRef.current = requestAnimationFrame(autoScroll);
    };

    if (isAutoScrolling) {
      scrollAnimationRef.current = requestAnimationFrame(autoScroll);
    } else if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }

    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Stop auto-scroll on user interaction
  useEffect(() => {
    const events: (keyof WindowEventMap)[] = ['wheel', 'touchstart', 'keydown'];
    events.forEach(event => window.addEventListener(event, stopAutoScrolling));

    return () => {
      events.forEach(event => window.removeEventListener(event, stopAutoScrolling));
    };
  }, [stopAutoScrolling]);


  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isInvitationOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isInvitationOpen]);

  return (
    <div className="text-seashell font-sans relative overflow-x-hidden">
      {!isInvitationOpen && <Cover onOpen={handleOpenInvitation} guestName={guestName} />}

      <main className={`transition-opacity duration-1000 ${isInvitationOpen ? 'opacity-100' : 'opacity-0'} relative`}>
        <Quote />
        <CountdownTimer />
        <BrideGroom />
        <EventDetails />
        <RsvpSection />
        <MapSection />
        <GiftSection />
        <Gallery />
        <Footer />
      </main>
      
      {isInvitationOpen && (
        <>
          <FloatingNav onNavClick={stopAutoScrolling} />
          <button 
            onClick={toggleMusic} 
            className="fixed bottom-20 md:bottom-4 right-4 bg-deep-olive text-seashell p-3 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110"
            aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
          >
            {isPlaying ? <MusicIcon /> : <MuteIcon />}
          </button>
        </>
      )}
    </div>
  );
};

export default App;