'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Eye, Phone, Building2, HelpCircle, UserCheck } from 'lucide-react';

export default function TopBar() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [highContrast, setHighContrast] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('id-ID', options).format(now) + ' WIB');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const changeFontSize = (size: 'sm' | 'md' | 'lg') => {
    setFontSize(size);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('text-scale-sm', 'text-scale-md', 'text-scale-lg');
      document.documentElement.classList.add(`text-scale-${size}`);
    }
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('high-contrast');
    }
  };

  return (
    <div className="bg-bi-blue-950 text-slate-200 text-xs border-b border-bi-blue-900/60 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-1.5 gap-2">
          
          {/* Left: Operational Status & Live Clock */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">Operasional Pasar Aktif</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">{currentTime || 'Memuat waktu...'}</span>
          </div>

          {/* Right: Accessibility, Language, and Quick Portals */}
          <div className="flex items-center gap-4 text-[11px]">
            {/* Quick Internal Portals */}
            <div className="hidden md:flex items-center gap-3 text-slate-300 border-r border-slate-700/60 pr-3">
              <Link href="/layanan" className="hover:text-bi-gold-400 flex items-center gap-1 transition-colors">
                <Phone className="w-3 h-3 text-bi-gold-400" />
                <span>BICARA 131</span>
              </Link>
              <Link href="/layanan" className="hover:text-bi-gold-400 flex items-center gap-1 transition-colors">
                <Building2 className="w-3 h-3 text-bi-blue-400" />
                <span>e-Licensing</span>
              </Link>
              <Link href="/rupiah" className="hover:text-bi-gold-400 flex items-center gap-1 transition-colors">
                <UserCheck className="w-3 h-3 text-emerald-400" />
                <span>PINTAR BI</span>
              </Link>
            </div>

            {/* Accessibility Controls */}
            <div className="flex items-center gap-1 text-slate-400">
              <span className="hidden sm:inline text-[10px] uppercase font-semibold text-slate-500 mr-1">Teks:</span>
              <button
                onClick={() => changeFontSize('sm')}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  fontSize === 'sm' ? 'bg-bi-blue-700 text-white' : 'hover:text-white'
                }`}
                title="Ukuran teks kecil"
              >
                A-
              </button>
              <button
                onClick={() => changeFontSize('md')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  fontSize === 'md' ? 'bg-bi-blue-700 text-white' : 'hover:text-white'
                }`}
                title="Ukuran teks normal"
              >
                A
              </button>
              <button
                onClick={() => changeFontSize('lg')}
                className={`px-1.5 py-0.5 rounded text-[12px] font-bold ${
                  fontSize === 'lg' ? 'bg-bi-blue-700 text-white' : 'hover:text-white'
                }`}
                title="Ukuran teks besar"
              >
                A+
              </button>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/80 rounded-md p-0.5 border border-slate-700/50">
              <button
                onClick={() => setLang('id')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  lang === 'id' ? 'bg-bi-blue-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  lang === 'en' ? 'bg-bi-blue-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
