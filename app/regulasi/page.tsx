'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { regulations } from '@/lib/biData';
import { BookOpen, Search, Download, Filter, FileText, CheckCircle2, Shield, Calendar } from 'lucide-react';

export default function RegulasiPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Semua');

  const filteredRegulations = regulations.filter((reg) => {
    const matchesSearch =
      reg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'Semua' || reg.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-bi-blue-700">Beranda</Link>
          <span>/</span>
          <span className="text-slate-400">Ketentuan Hukum</span>
          <span>/</span>
          <span className="text-bi-blue-800 font-bold">Regulasi Bank Indonesia</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-bi-blue-950 via-bi-blue-900 to-bi-blue-800 text-white rounded-3xl p-6 sm:p-8 shadow-bi-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950 inline-block">
              Ketentuan & Produk Hukum
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Peraturan Bank Indonesia (PBI) & PADG
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Kumpulan peraturan, petunjuk teknis pelaksanaan kebijakan moneter, makroprudensial, dan tata kelola sistem pembayaran perbankan Indonesia.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-bi-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nomor peraturan, judul ketentuan, atau kata kunci (contoh: SRBI, SNAP, QRIS)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-bi-blue-700"
              />
            </div>

            <div className="flex gap-2">
              {['Semua', 'PBI', 'PADG'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedType === type
                      ? 'bg-bi-blue-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Regulations List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-2">
            <span>Ditemukan {filteredRegulations.length} dokumen ketentuan hukum</span>
            <span>Diurutkan berdasarkan tanggal terbaru</span>
          </div>

          {filteredRegulations.map((reg) => (
            <div
              key={reg.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-bi-sm hover:shadow-bi-md transition-all space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-bi-blue-100 text-bi-blue-800">
                    {reg.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    {reg.status}
                  </span>
                </div>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Diundangkan: {reg.datePublished}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-bi-blue-900 leading-snug">
                {reg.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {reg.summary}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Kategori: <strong className="text-slate-700">{reg.category}</strong> • Ukuran: {reg.fileSize}
                </span>

                <button
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bi-blue-700 hover:bg-bi-blue-800 text-white font-bold text-xs transition-colors shadow-sm"
                  onClick={() => alert(`Mengunduh salinan resmi: ${reg.number}`)}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh Dokumen PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
