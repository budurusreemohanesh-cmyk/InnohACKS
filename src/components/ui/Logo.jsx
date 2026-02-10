import React from 'react';

export const Logo = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 64" // Adjusted viewbox for balance
      fill="none"
      className={className}
      {...props}
    >
      {/* Left Bracket (<) */}
      <path
        d="M38 10L10 32L38 54"
        stroke="url(#left-gradient)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right Bracket (>) */}
      <path
        d="M62 10L90 32L62 54"
        stroke="url(#right-gradient)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs>
        {/* Gradient for Left Bracket: Red (Top) to Blue (Bottom) */}
        <linearGradient id="left-gradient" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EA4335" /> {/* Brand Red */}
          <stop offset="100%" stopColor="#4285F4" /> {/* Brand Blue */}
        </linearGradient>

        {/* Gradient for Right Bracket: Green (Top) to Yellow (Bottom) */}
        <linearGradient id="right-gradient" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34A853" /> {/* Brand Green */}
          <stop offset="100%" stopColor="#FBBC05" /> {/* Brand Yellow */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
