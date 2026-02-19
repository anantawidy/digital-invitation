import React from 'react';

export const OliveBranch: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} width="100" height="200" viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
        <path d="M50 0 V 250" strokeWidth="1"/>
        <ellipse cx="50" cy="40" rx="10" ry="4" transform="rotate(30 50 40)"/>
        <ellipse cx="50" cy="70" rx="10" ry="4" transform="rotate(-30 50 70)"/>
        <ellipse cx="50" cy="100" rx="10" ry="4" transform="rotate(30 50 100)"/>
        <ellipse cx="50" cy="130" rx="10" ry="4" transform="rotate(-30 50 130)"/>
        <ellipse cx="50" cy="160" rx="10" ry="4" transform="rotate(30 50 160)"/>
        <ellipse cx="50" cy="190" rx="10" ry="4" transform="rotate(-30 50 190)"/>
        <ellipse cx="50" cy="220" rx="10" ry="4" transform="rotate(30 50 220)"/>
    </svg>
);

export const FloralCorner: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 100 C 20 80, 40 60, 50 50" />
        <path d="M 100 0 C 80 20, 60 40, 50 50" />
        <circle cx="50" cy="50" r="5" fill="currentColor" stroke="none"/>
        <path d="M 50 50 C 60 40, 75 25, 80 15" />
        <path d="M 50 50 C 40 60, 25 75, 15 80" />
        <ellipse cx="80" cy="15" rx="5" ry="3" transform="rotate(-45 80 15)" />
        <ellipse cx="15" cy="80" rx="5" ry="3" transform="rotate(-45 15 80)" />
    </svg>
);

export const OrnamentalDivider: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10H80" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5" />
        <path d="M120 10H200" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5" />
        <path d="M90 10C92.5 7.5 97.5 7.5 100 10C102.5 12.5 107.5 12.5 110 10" stroke="currentColor" strokeOpacity="0.8" strokeWidth="0.75"/>
    </svg>
);

export const Sunflower: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="15" fill="#6B4F2F"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(0 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(30 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(60 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(90 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(120 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(150 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(180 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(210 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(240 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(270 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(300 50 50)"/>
        <path d="M50 0 L45 30 H 55 Z" transform="rotate(330 50 50)"/>
    </svg>
);

export const LemonSlice: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45"/>
        <circle cx="50" cy="50" r="35" strokeWidth="2"/>
        <path d="M50 15 V 85"/>
        <path d="M15 50 H 85"/>
        <path d="M25 25 L 75 75"/>
        <path d="M25 75 L 75 25"/>
    </svg>
);

export const LeafyVine: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 50" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 25 Q 50 0, 100 25 T 200 25" strokeWidth="1.5"/>
        <path d="M 40 12 A 10 10 0 0 1 50 20" />
        <path d="M 60 38 A 10 10 0 0 0 50 30" />
        <path d="M 140 12 A 10 10 0 0 1 150 20" />
        <path d="M 160 38 A 10 10 0 0 0 150 30" />
    </svg>
);