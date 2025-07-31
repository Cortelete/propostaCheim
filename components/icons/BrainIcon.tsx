
import React from 'react';

const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118A2.25 2.25 0 0 1 .879 17.52a3 3 0 0 0 .01-5.786 3 3 0 0 0 .01-5.786 2.25 2.25 0 0 1 2.118-2.475 2.25 2.25 0 0 1 2.118 2.475 3 3 0 0 0 5.786.01 3 3 0 0 0 5.786-.01 2.25 2.25 0 0 1 2.475-2.118 2.25 2.25 0 0 1 2.475 2.118 3 3 0 0 0-.01 5.786 3 3 0 0 0-.01 5.786 2.25 2.25 0 0 1-2.118 2.475 2.25 2.25 0 0 1-2.118-2.475 3 3 0 0 0-5.78-1.128Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
);

export default BrainIcon;
