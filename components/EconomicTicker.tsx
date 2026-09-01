'use client';

import React from 'react';
import Link from 'next/link';
import { TrendingUp, TrendingDown, ArrowUpRight, ShieldCheck, Activity, ChevronRight } from 'lucide-react';
import { economicIndicators } from '@/lib/biData';

export default function EconomicTicker() {
  return (
    <section className="bg-gradient-to-r from-bi-blue-900 via-bi-blue-800 to-bi-blue-900 text-white py-3.5 border-y border-bi-blue-700/40 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3 pb-2 border-b border-bi-blue-700/50">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bi-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-bi-gold-500"></span>
            </span>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span>Indikator Moneter & Keuangan Utama</span>
            </h2>
            <span className="hidden sm:inline text-[11px] px-2 py-0.5 rounded-full bg-bi-blue-700 text-bi-gold-300 font-semibold border border-bi-gold-500/30">
              Update Resmi
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-300">
            <span className="hidden md:inline text-slate-400">
              Berdasarkan Rapat Dewan Gubernur (RDG) & Rilis Statistik Terbaru
            </span>
            <Link
              href="/kurs"
              className="text-bi-gold-300 hover:text-white font-bold inline-flex items-center gap-1 transition-colors"
            >
              <span>Lihat Detail Statistik</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Indicators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {economicIndicators.map((item) => (
            <Link
              key={item.id}
              href="/moneter"
              className="group bg-white/10 hover:bg-white/15 border border-white/10 hover:border-bi-gold-400/50 rounded-xl p-2.5 sm:p-3 transition-all duration-200 backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 group-hover:text-bi-gold-300 transition-colors truncate">
                  {item.shortName}
                </span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-bi-gold-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="my-0.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg font-black text-white tracking-tight tabular-nums">
                    {item.value}
                  </span>
                  <span className="text-[11px] font-semibold text-bi-gold-300">
                    {item.unit}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-300 mt-1 pt-1 border-t border-white/10">
                <span className="truncate text-slate-400">{item.period.split('(')[0]}</span>
                <span className={`font-bold flex-shrink-0 ${item.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {item.change.split(' ')[0]}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
