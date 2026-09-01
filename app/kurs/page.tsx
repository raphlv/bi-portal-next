import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { exchangeRates, historicalData } from '@/lib/biData';
import CurrencyCalculator from '@/components/CurrencyCalculator';
import MarketCharts from '@/components/MarketCharts';
import {
  TrendingUp,
  Download,
  Calendar,
  Info,
  ShieldCheck,
  FileSpreadsheet,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kurs Transaksi BI & JISDOR - Bank Indonesia',
  description: 'Informasi nilai tukar mata uang asing resmi Bank Indonesia, kurs referensi JISDOR USD/IDR, kurs transaksi harian, dan kalkulator valas terpadu.',
};

export default function KursPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-bi-blue-700">Beranda</Link>
          <span>/</span>
          <span className="text-slate-400">Statistik & Data</span>
          <span>/</span>
          <span className="text-bi-blue-800 font-bold">Kurs JISDOR & Transaksi Valas</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-bi-blue-950 via-bi-blue-900 to-bi-blue-800 text-white rounded-3xl p-6 sm:p-8 shadow-bi-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950 inline-block">
              Statistik Valuta Asing
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Jakarta Interbank Spot Dollar Rate (JISDOR) & Kurs Transaksi
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              JISDOR adalah kurs referensi yang merepresentasikan nilai transaksi pasar spot antarbank domestik USD/IDR secara riil dan transparan.
            </p>
          </div>
        </div>

        {/* JISDOR Card Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              JISDOR Terkini (USD/IDR)
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-bi-blue-900 tabular-nums">
                Rp 15.845,00
              </span>
              <span className="text-xs font-bold text-emerald-600">
                -35 IDR (Menguat)
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block pt-1 border-t border-slate-100">
              Per 01 September 2026 - Pukul 15:30 WIB
            </span>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Volume Transaksi Spot
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-bi-blue-900 tabular-nums">
                USD 1.84 B
              </span>
              <span className="text-xs font-semibold text-slate-600">
                Interbank
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block pt-1 border-t border-slate-100">
              Likuiditas Pasar Valas Domestik Terjaga Baik
            </span>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Instrumen Pendukung
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-bi-gold-700">
                SRBI & SVBI
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Instrumen pro-market untuk menarik capital inflow dan stabilitas nilai tukar.
            </p>
          </div>
        </div>

        {/* Currency Calculator Component */}
        <CurrencyCalculator />

        {/* Market Visual Charts */}
        <MarketCharts />

        {/* Info Box: Mekanisme JISDOR */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-4">
          <h2 className="text-lg font-bold text-bi-blue-900 flex items-center gap-2">
            <Info className="w-5 h-5 text-bi-blue-700" />
            Mekanisme Penetapan Kurs JISDOR & Transaksi BI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-800 text-sm">1. Metodologi JISDOR</h3>
              <p>
                JISDOR disusun berdasarkan rata-rata tertimbang volume transaksi pembelian dan penjualan spot valuta asing antarbank di Indonesia yang dicatat melalui sistem Bank Indonesia Real Time Electronic Trading Platform dari pukul 08.00 hingga 16.00 WIB.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-800 text-sm">2. Kurs Transaksi Bank Indonesia</h3>
              <p>
                Kurs Transaksi Bank Indonesia merupakan kurs acuan yang digunakan dalam transaksi Bank Indonesia dengan pihak ketiga, termasuk pemerintah. Kurs jual dan kurs beli dihitung dengan menambahkan dan mengurangkan selisih rentang (spread) terhadap kurs tengah.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
