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

export const LeafyDivider: React.FC<{className?: string}> = ({ className }) => (
     <svg className={className} viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
        <path d="M 10 10 H 190" strokeWidth="0.5" />
        <path d="M 80 10 C 90 5, 95 5, 100 10" />
        <path d="M 100 10 C 105 15, 110 15, 120 10" />
    </svg>
);