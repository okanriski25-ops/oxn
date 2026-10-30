import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  showTagline = true,
}) => {
  const isLight = variant === 'light';
  const slateColor = isLight ? '#FFFFFF' : '#222930';
  const secondarySlate = isLight ? '#E2E8F0' : '#333E48';
  const limeGreen = '#8DB63F';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Main OXN BUILD Graphic */}
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 460 160"
          className="h-10 sm:h-12 md:h-14 w-auto overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* LETTER 'O' */}
          <g transform="translate(10, 15)">
            {/* Outer rounded rect */}
            <path
              d="M 40 0 L 100 0 C 122 0 140 18 140 40 L 140 70 C 140 92 122 110 100 110 L 40 110 C 18 110 0 92 0 70 L 0 40 C 0 18 18 0 40 0 Z"
              fill={slateColor}
            />
            {/* Inner counter cut */}
            <path
              d="M 45 32 L 95 32 C 104 32 112 40 112 49 L 112 61 C 112 70 104 78 95 78 L 45 78 C 36 78 28 70 28 61 L 28 49 C 28 40 36 32 45 32 Z"
              fill={isLight ? '#1A202C' : '#FFFFFF'}
            />
          </g>

          {/* LETTER 'X' */}
          <g transform="translate(165, 15)">
            {/* Top-Left to Bottom-Right Slash - Upper Slate Part */}
            <path
              d="M 0 0 L 32 0 L 78 62 L 50 62 Z"
              fill={secondarySlate}
            />
            {/* Top-Left to Bottom-Right Slash - Lower Lime Green Part */}
            <path
              d="M 50 62 L 78 62 L 114 110 L 82 110 Z"
              fill={limeGreen}
            />
            {/* Bottom-Left to Top-Right Slash */}
            <path
              d="M 0 110 L 34 110 L 114 0 L 80 0 Z"
              fill={slateColor}
            />
          </g>

          {/* LETTER 'N' (Architectural Skyscraper Profile) */}
          <g transform="translate(295, 0)">
            {/* Main N Body with angled roofline */}
            <path
              d="M 0 125 L 34 125 L 34 68 L 88 125 L 118 125 L 118 20 L 84 32 L 84 86 L 34 32 L 0 32 Z"
              fill={slateColor}
            />
            {/* Vertical Accent Stripe (Lime Green) */}
            <rect
              x="124"
              y="32"
              width="6"
              height="93"
              rx="1.5"
              fill={limeGreen}
            />
            {/* Right Architectural Pillar */}
            <path
              d="M 134 40 L 152 48 L 152 125 L 134 125 Z"
              fill={secondarySlate}
            />
          </g>
        </svg>
      </div>

      {/* Sub-Brand Text: BUILD */}
      <div
        className={`tracking-[0.38em] font-extrabold text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1 font-['Plus_Jakarta_Sans'] ${
          isLight ? 'text-white' : 'text-[#222930]'
        }`}
      >
        B U I L D
      </div>

      {/* Sub-Pillars & Tagline if requested */}
      {showTagline && variant === 'full' && (
        <div className="flex flex-col items-center mt-1.5">
          <div
            className={`flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold uppercase ${
              isLight ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <span>RENOVATION</span>
            <span className="w-1 h-1 rounded-full bg-[#8DB63F] inline-block" />
            <span>CONSTRUCTION</span>
            <span className="w-1 h-1 rounded-full bg-[#8DB63F] inline-block" />
            <span>INTERIOR</span>
          </div>

          <div
            className={`text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-medium mt-1 ${
              isLight ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            — BUILD BETTER. LIVE BETTER. —
          </div>
        </div>
      )}
    </div>
  );
};
