'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, FileText, TrendingUp, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { newsArticles, regulations, publications, economicIndicators } from '@/lib/biData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut Ctrl+K / Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredNews = query.trim()
    ? newsArticles.filter(n => n.title.toLowerCase().includes(query.toLowerCase()) || n.summary.toLowerCase().includes(query.toLowerCase()))
    : newsArticles.slice(0, 3);

  const filteredRegs = query.trim()
    ? regulations.filter(r => r.title.toLowerCase().includes(query.toLowerCase()) || r.number.toLowerCase().includes(query.toLowerCase()))
    : regulations.slice(0, 2);

  const filteredIndicators = query.trim()
    ? economicIndicators.filter(i => i.name.toLowerCase().includes(query.toLowerCase()) || i.shortName.toLowerCase().includes(query.toLowerCase()))
    : economicIndicators.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/70">
          <Search className="w-5 h-5 text-bi-blue-700 mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Cari regulasi, kurs, siaran pers, BI-Rate, QRIS..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-200 rounded border border-slate-300">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Results / Suggestions */}
        <div className="overflow-y-auto p-4 space-y-5 text-left divide-y divide-slate-100">
          
          {/* Quick Keywords */}
          {!query && (
            <div className="pb-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Pencarian Populer
              </span>
              <div className="flex flex-wrap gap-2">
                {['BI-Rate 2026', 'JISDOR Hari Ini', 'QRIS Antarnegara', 'PINTAR Penukaran Uang', 'Cadangan Devisa', 'PBI Moneter'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1 bg-slate-100 text-bi-blue-800 rounded-full hover:bg-bi-blue-50 hover:text-bi-blue-700 transition-colors font-medium border border-slate-200/60"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Indikator Ekonomi */}
          {filteredIndicators.length > 0 && (
            <div className="pt-3">
              <span className="text-[11px] font-bold text-bi-blue-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <TrendingUp className="w-3.5 h-3.5" /> Indikator Ekonomi Utama
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {filteredIndicators.map((ind) => (
                  <Link
                    key={ind.id}
                    href="/moneter"
                    onClick={onClose}
                    className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-bi-blue-50/60 hover:border-bi-blue-200 transition-all block group"
                  >
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-bi-blue-800 block truncate">
                      {ind.shortName}
                    </span>
                    <span className="text-sm font-bold text-bi-blue-700 tabular-nums">
                      {ind.value} <span className="text-xs font-normal text-slate-500">{ind.unit}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Siaran Pers & Berita */}
          {filteredNews.length > 0 && (
            <div className="pt-3">
              <span className="text-[11px] font-bold text-bi-blue-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <FileText className="w-3.5 h-3.5" /> Siaran Pers & Berita Terkait
              </span>
              <div className="space-y-2">
                {filteredNews.map((news) => (
                  <Link
                    key={news.id}
                    href="/publikasi"
                    onClick={onClose}
                    className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start justify-between gap-3 group border border-transparent hover:border-slate-100"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-bi-blue-100 text-bi-blue-800">
                          {news.category}
                        </span>
                        <span className="text-[11px] text-slate-400">{news.date}</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-800 group-hover:text-bi-blue-700 line-clamp-1">
                        {news.title}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-bi-blue-600 flex-shrink-0 mt-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Regulasi */}
          {filteredRegs.length > 0 && (
            <div className="pt-3">
              <span className="text-[11px] font-bold text-bi-gold-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <BookOpen className="w-3.5 h-3.5" /> Regulasi & Ketentuan
              </span>
              <div className="space-y-2">
                {filteredRegs.map((reg) => (
                  <Link
                    key={reg.id}
                    href="/regulasi"
                    onClick={onClose}
                    className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start justify-between gap-3 group border border-transparent hover:border-slate-100"
                  >
                    <div>
                      <span className="text-xs font-bold text-bi-gold-700 block mb-0.5">
                        {reg.number}
                      </span>
                      <p className="text-xs text-slate-700 line-clamp-1 group-hover:text-bi-blue-800">
                        {reg.title}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/60 mt-1 flex-shrink-0">
                      {reg.status}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 flex justify-between items-center">
          <span>Tekan <strong>ESC</strong> untuk menutup</span>
          <Link href="/publikasi" onClick={onClose} className="text-bi-blue-700 font-semibold hover:underline flex items-center gap-1">
            Lihat Semua Publikasi <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
