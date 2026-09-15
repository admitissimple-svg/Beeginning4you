import { BEE_VECTOR_PATH } from './beePath';

interface BeeLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  layout?: 'horizontal' | 'stacked' | 'mark-only';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function BeeLogo({
  size = 'md',
  showTagline = false,
  layout = 'horizontal',
  theme = 'light',
  className = ''
}: BeeLogoProps) {
  const isDark = theme === 'dark';
  const primaryTextColor = isDark ? 'text-white' : 'text-[#181B1E]';
  const secondaryTextColor = isDark ? 'text-[#9CA3AF]' : 'text-[#64748B]';
  
  // As explicitly requested: Line is BLACK, Pencil is BLUE
  const pencilColor = isDark ? '#90CDF4' : '#1E4D69';
  const lineColor = isDark ? '#FFFFFF' : '#181B1E';

  // Standalone Mark Only
  if (layout === 'mark-only') {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        <svg
          viewBox="0 0 100 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-8"
          aria-hidden="true"
        >
          <path
            d="M72 16 C 54 22, 38 14, 26 28 C 16 40, 8 48, 4 52"
            stroke={lineColor}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <g transform="translate(72, 16) rotate(-30)">
            <polygon points="0,0 8,-3 8,3" fill={pencilColor} />
            <polygon points="8,-3 14,-4.5 14,4.5 8,3" stroke={pencilColor} strokeWidth="1.2" fill="none" />
            <rect x="14" y="-4.5" width="28" height="9" stroke={pencilColor} strokeWidth="1.2" fill="none" />
            <line x1="14" y1="-1.5" x2="42" y2="-1.5" stroke={pencilColor} strokeWidth="0.8" />
            <line x1="14" y1="1.5" x2="42" y2="1.5" stroke={pencilColor} strokeWidth="0.8" />
            <rect x="42" y="-4.5" width="5" height="9" stroke={pencilColor} strokeWidth="1.2" fill="none" />
            <path d="M47,-4.5 H51 C53,-4.5 54,-2 54,0 C54,2 53,4.5 51,4.5 H47 Z" stroke={pencilColor} strokeWidth="1.2" fill="none" />
          </g>
        </svg>
      </div>
    );
  }

  // Stacked Layout (Exact replica of the brand identity)
  if (layout === 'stacked') {
    const scale = {
      sm: {
        beeH: 'h-9',
        ginning: 'text-3xl',
        gap: 'w-4',
        four: 'text-3xl',
        you: 'text-3xl',
        spacing: '-mt-2',
      },
      md: {
        beeH: 'h-12 sm:h-14',
        ginning: 'text-4xl sm:text-5xl',
        gap: 'w-5 sm:w-6',
        four: 'text-4xl sm:text-5xl',
        you: 'text-4xl sm:text-5xl',
        spacing: '-mt-3',
      },
      lg: {
        beeH: 'h-14 sm:h-16',
        ginning: 'text-5xl sm:text-6xl',
        gap: 'w-6 sm:w-8',
        four: 'text-5xl sm:text-6xl',
        you: 'text-5xl sm:text-6xl',
        spacing: '-mt-4',
      },
      xl: {
        beeH: 'h-16 sm:h-20 lg:h-24',
        ginning: 'text-5xl sm:text-6xl lg:text-7xl',
        gap: 'w-6 sm:w-8 lg:w-10',
        four: 'text-5xl sm:text-6xl lg:text-7xl',
        you: 'text-5xl sm:text-6xl lg:text-7xl',
        spacing: '-mt-5 sm:-mt-6',
      }
    }[size];

    return (
      <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
        {/* First Line: "Bee" vector + seamless line + blue pencil + "ginning" in ADLaM Display */}
        <div className="relative flex items-end justify-center tracking-tight pt-10 sm:pt-12">
          {/* Unified Vector Artwork: "Bee" glyph in Baguet Script seamlessly joined to the wave line & pencil */}
          <svg
            viewBox="0 25 150 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${scale.beeH} w-auto overflow-visible shrink-0 select-none pb-0.5`}
            aria-label="Bee"
          >
            {/* Baguet Script glyph path for "Bee" */}
            <path d={BEE_VECTOR_PATH} fill={lineColor} />

            {/* FLAWLESS CONTINUATION:
                Wave path starts inside the tail of the second 'e' at (144.4, 76.5),
                exits through the center of the terminal at (145.25, 74.7)
                with matching tangent (0.416, -0.909) and stroke width 3.8.
                Guarantees zero kink, zero step, zero gap, and 100% mathematical continuity. */}
            <path
              d="M 144.4 76.5 C 153.5 56.5, 168 42, 185 46 C 204 50, 226 32, 245 16"
              stroke={lineColor}
              strokeWidth="3.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* BLUE Pencil positioned at (245, 16) rotated along the wave trajectory */}
            <g transform="translate(245, 16) rotate(-40)">
              {/* Graphite tip */}
              <polygon points="0,0 12,-3.5 12,3.5" fill={pencilColor} />
              {/* Wooden sharpened cone */}
              <polygon points="12,-3.5 24,-6 24,6 12,3.5" stroke={pencilColor} strokeWidth="1.6" fill="none" />
              {/* Hexagonal pencil shaft */}
              <rect x="24" y="-6" width="46" height="12" stroke={pencilColor} strokeWidth="1.6" fill="none" />
              {/* Facet lines */}
              <line x1="24" y1="-2" x2="70" y2="-2" stroke={pencilColor} strokeWidth="1.1" />
              <line x1="24" y1="2" x2="70" y2="2" stroke={pencilColor} strokeWidth="1.1" />
              {/* Metal ferrule */}
              <rect x="70" y="-6" width="7" height="12" stroke={pencilColor} strokeWidth="1.6" fill="none" />
              {/* Eraser */}
              <path d="M77,-6 H84 C87.5,-6 89.5,-3 89.5,0 C89.5,3 87.5,6 84,6 H77 Z" stroke={pencilColor} strokeWidth="1.6" fill="none" />
            </g>
          </svg>

          {/* Spacing gap between Bee and ginning */}
          <span className={`inline-block ${scale.gap}`} aria-hidden="true" />

          {/* "ginning" in ADLaM Display */}
          <span
            className={`font-adlam ${scale.ginning} ${primaryTextColor} font-normal lowercase tracking-tight leading-none`}
          >
            ginning
          </span>
        </div>

        {/* Second Line: "4" in yellow + "you" in dark text, both in ADLaM Display */}
        <div className={`relative z-10 flex items-baseline justify-center gap-2 ${scale.spacing} mt-1`}>
          <span className={`font-adlam ${scale.four} text-[#D99B26] font-normal leading-none`}>
            4
          </span>
          <span
            className={`font-adlam ${scale.you} ${primaryTextColor} font-normal lowercase leading-none`}
          >
            you
          </span>
        </div>

        {/* Optional Tagline */}
        {showTagline && (
          <p
            className={`mt-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] ${secondaryTextColor}`}
          >
            Digital solutions for small businesses
          </p>
        )}
      </div>
    );
  }

  // Horizontal Layout (Compact for navbar, header, footer)
  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      {/* Unified Vector Artwork: "Bee" glyph in Baguet Script seamlessly joined to the wave line & pencil */}
      <svg
        viewBox="0 25 150 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 sm:h-7 w-auto overflow-visible shrink-0 select-none mr-2 sm:mr-3 pb-0.5"
        aria-label="Bee"
      >
        <path d={BEE_VECTOR_PATH} fill={lineColor} />
        <path
          d="M 144.4 76.5 C 153.5 56.5, 168 42, 185 46 C 204 50, 226 32, 245 16"
          stroke={lineColor}
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g transform="translate(245, 16) rotate(-40)">
          <polygon points="0,0 12,-3.5 12,3.5" fill={pencilColor} />
          <polygon points="12,-3.5 24,-6 24,6 12,3.5" stroke={pencilColor} strokeWidth="1.6" fill="none" />
          <rect x="24" y="-6" width="46" height="12" stroke={pencilColor} strokeWidth="1.6" fill="none" />
          <line x1="24" y1="-2" x2="70" y2="-2" stroke={pencilColor} strokeWidth="1.1" />
          <line x1="24" y1="2" x2="70" y2="2" stroke={pencilColor} strokeWidth="1.1" />
          <rect x="70" y="-6" width="7" height="12" stroke={pencilColor} strokeWidth="1.6" fill="none" />
          <path d="M77,-6 H84 C87.5,-6 89.5,-3 89.5,0 C89.5,3 87.5,6 84,6 H77 Z" stroke={pencilColor} strokeWidth="1.6" fill="none" />
        </g>
      </svg>

      {/* ginning 4 you in ADLaM Display */}
      <div className="flex items-baseline gap-1 leading-none">
        <span
          className={`font-adlam text-lg sm:text-xl ${primaryTextColor} font-normal lowercase tracking-tight leading-none`}
        >
          ginning
        </span>
        <span className="font-adlam text-lg sm:text-xl text-[#D99B26] font-normal ml-1 leading-none">
          4
        </span>
        <span
          className={`font-adlam text-lg sm:text-xl ${primaryTextColor} font-normal lowercase leading-none`}
        >
          you
        </span>
      </div>
    </div>
  );
}
