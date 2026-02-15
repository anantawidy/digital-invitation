import React, { useState, useEffect, useRef } from 'react';
import { CoupleIcon, CalendarIcon, GiftIcon, RsvpIcon, GalleryIcon, MapPinIcon } from './Icons';

const navItems = [
    { id: 'mempelai', icon: <CoupleIcon className="w-6 h-6" /> },
    { id: 'acara', icon: <CalendarIcon className="w-6 h-6" /> },
    { id: 'rsvp', icon: <RsvpIcon className="w-6 h-6" /> },
    { id: 'lokasi', icon: <MapPinIcon className="w-6 h-6" /> },
    { id: 'gift', icon: <GiftIcon className="w-6 h-6" /> },
    { id: 'gallery', icon: <GalleryIcon className="w-6 h-6" /> },
];

interface FloatingNavProps {
    onNavClick: () => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ onNavClick }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    const sectionElements = useRef<Map<string, HTMLElement>>(new Map());

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter(entry => entry.isIntersecting);

                if (visibleEntries.length > 0) {
                    const mostVisibleEntry = visibleEntries.reduce((prev, current) => {
                        return prev.intersectionRatio > current.intersectionRatio ? prev : current;
                    });
                    setActiveSection(mostVisibleEntry.target.id);
                }
            },
            { 
                rootMargin: '-30% 0px -30% 0px', 
                threshold: 0
            }
        );

        const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
        
        sections.forEach(section => {
            if (section) {
                sectionElements.current.set(section.id, section);
                observer.current?.observe(section);
            }
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        onNavClick();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center justify-center gap-2 bg-card-bg backdrop-blur-md rounded-full shadow-lg border border-gold/50 p-2">
                {navItems.map(item => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`p-3 rounded-full transition-all duration-300 ${
                            activeSection === item.id 
                                ? 'bg-gold/20 text-gold scale-110' 
                                : 'text-seashell/70 hover:bg-gold/10 hover:text-seashell'
                        }`}
                        aria-label={`Go to ${item.id} section`}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default FloatingNav;