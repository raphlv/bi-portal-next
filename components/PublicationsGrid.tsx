'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Download, FileText, ArrowRight, Eye, Layers } from 'lucide-react';
import { publications } from '@/lib/biData';

export default function PublicationsGrid() {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200" id="laporan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-700 block mb-1">
              Repositori Publikasi & Riset
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-bi-blue-900 tracking-tight">
              Laporan Utama & Kajian Bank Indonesia
            </h2>
          </div>
          <Link
            href="/publikasi"
            className="text-xs font-bold text-bi-blue-700 hover:text-bi-blue-900 flex items-center gap-1.5"
          >
            <span>Telusuri Seluruh Seri Kajian</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-bi-sm hover:shadow-bi-lg hover:border-bi-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Book Cover Container */}
                <div className="relative h-48 w-full overflow-hidden bg-bi-blue-900 p-4 flex items-center justify-center">
                  <img
                    src={pub.coverImage}
                    alt={pub.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Decorative Frame */}
                  <div className="relative z-10 text-center text-white p-3 border border-white/20 rounded-xl bg-black/40 backdrop-blur-sm w-full">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-bi-gold-300 block mb-1">
                      {pub.category}
                    </span>
                    <h4 className="text-xs font-bold text-white line-clamp-2 leading-tight">
                      {pub.title}
                    </h4>
                    <span className="text-[10px] text-slate-300 block mt-1 font-mono">
                      {pub.period}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 z-20">
                    <span className="px-2 py-0.5 text-[9px] font-extrabold rounded-full bg-bi-gold-500 text-bi-blue-950 shadow-sm">
                      RESMI
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-bi-blue-900 group-hover:text-bi-blue-700 transition-colors line-clamp-2 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {pub.summary}
                  </p>
                </div>
              </div>

              {/* Action Download */}
              <div className="p-4 pt-2 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-slate-500">
                  {pub.fileSize}
                </span>

                <button
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bi-blue-700 hover:bg-bi-blue-800 text-white font-bold text-xs transition-colors shadow-sm"
                  onClick={() => alert(`Mengunduh dokumen: ${pub.title}`)}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
