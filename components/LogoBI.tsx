import React from 'react';
import Link from 'next/link';

interface LogoBIProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function LogoBI({
  variant = 'dark',
  size = 'md',
  showSubtitle = true
}: LogoBIProps) {
  const isLight = variant === 'light';

  // Sizing definitions
  const emblemSize = size === 'sm' ? 36 : size === 'lg' ? 52 : 44;
  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none select-none">
      {/* Official Bank Indonesia Monogram Emblem */}
      <div 
        className="relative flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: emblemSize, height: emblemSize }}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Decorative Shield / Ring */}
          <circle
            cx="60"
            cy="60"
            r="56"
            stroke={isLight ? '#FFFFFF' : '#003F87'}
            strokeWidth="3.5"
            strokeDasharray="1 0"
            fill={isLight ? 'rgba(255,255,255,0.06)' : '#F0F6FC'}
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke={isLight ? '#C5A059' : '#C5A059'}
            strokeWidth="1.5"
          />

          {/* Central Stylized "B" and "I" Monogram with Wings */}
          {/* Left Wing / Pillar */}
          <path
            d="M36 28 H47 V92 H36 Z"
            fill={isLight ? '#FFFFFF' : '#003F87'}
          />
          {/* Upper Loop of B */}
          <path
            d="M47 28 H66 C77 28 85 34 85 45 C85 55 77 60 66 60 H47 Z"
            fill={isLight ? '#FFFFFF' : '#003F87'}
          />
          <path
            d="M47 38 H64 C70 38 74 41 74 45 C74 49 70 52 64 52 H47 Z"
            fill={isLight ? '#002B49' : '#FFFFFF'}
          />
          {/* Lower Loop of B with Extended Dynamic Wing */}
          <path
            d="M47 56 H68 C80 56 89 63 89 74 C89 85 80 92 68 92 H47 Z"
            fill={isLight ? '#FFFFFF' : '#003F87'}
          />
          <path
            d="M47 66 H66 C73 66 78 69 78 74 C78 79 73 82 66 82 H47 Z"
            fill={isLight ? '#002B49' : '#FFFFFF'}
          />
          {/* Gold Accent Crown / Sparkle */}
          <circle cx="60" cy="18" r="4" fill="#C5A059" />
          <path d="M60 12 L62 17 L67 18 L62 19 L60 24 L58 19 L53 18 L58 17 Z" fill="#D4AF37" />
        </svg>
      </div>

      {/* Official Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-bold tracking-tight leading-none ${titleSize} ${
            isLight ? 'text-white' : 'text-bi-blue-800'
          }`}
          style={{ letterSpacing: '0.04em' }}
        >
          BANK INDONESIA
        </span>
        {showSubtitle && (
          <span
            className={`font-semibold uppercase tracking-wider ${subSize} mt-0.5 ${
              isLight ? 'text-bi-gold-300' : 'text-bi-gold-700'
            }`}
          >
            Bank Sentral Republik Indonesia
          </span>
        )}
      </div>
    </Link>
  );
}
