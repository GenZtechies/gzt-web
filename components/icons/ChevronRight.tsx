import React from "react";

const ChevronRight = ({ className }: { className?: string }) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5.0625 10.125L8.4375 6.75L5.0625 3.375" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ChevronRight;
