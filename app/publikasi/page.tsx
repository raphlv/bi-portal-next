import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { newsArticles, publications } from '@/lib/biData';
import NewsSection from '@/components/NewsSection';
import PublicationsGrid from '@/components/PublicationsGrid';
import { BookOpen, FileText, Download, Filter, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Publikasi & Siaran Pers - Bank Indonesia',
  description: 'Pusat siaran pers resmi, berita kebijakan, pidato dewan gubernur, serta repositori laporan perekonomian dan kajian stabilitas keuangan Bank Indonesia.',
};

export default function PublikasiPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-bi-blue-700">Beranda</Link>
          <span>/</span>
          <span className="text-slate-400">Komunikasi & Riset</span>
          <span>/</span>
          <span className="text-bi-blue-800 font-bold">Publikasi & Siaran Pers</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-bi-blue-950 via-bi-blue-900 to-bi-blue-800 text-white rounded-3xl p-6 sm:p-8 shadow-bi-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950 inline-block">
              Ruang Komunikasi Publik & Riset
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Pusat Publikasi, Siaran Pers, & Kajian Ilmiah
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Transparansi komunikasi kebijakan moneter, laporan pertanggungjawaban tahunan, dan publikasi riset ekonomi makro terkemuka Bank Indonesia.
            </p>
          </div>
        </div>

        {/* Newsroom Section Component */}
        <NewsSection />

        {/* Publications Grid Component */}
        <PublicationsGrid />

      </div>
    </div>
  );
}
