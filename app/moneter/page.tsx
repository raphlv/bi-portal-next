import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingUp,
  Shield,
  Activity,
  Calendar,
  Layers,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Info
} from 'lucide-react';
import { economicIndicators, upcomingAgendas } from '@/lib/biData';

export const metadata: Metadata = {
  title: 'Kebijakan Moneter & Makroprudensial - Bank Indonesia',
  description: 'Arah bauran kebijakan moneter Bank Indonesia, penetapan BI-Rate, operasi moneter pasar uang, kerangka target inflasi, dan stabilitas sistem keuangan.',
};

export default function MoneterPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-bi-blue-700">Beranda</Link>
          <span>/</span>
          <span className="text-slate-400">Fungsi Utama</span>
          <span>/</span>
          <span className="text-bi-blue-800 font-bold">Kebijakan Moneter & Makroprudensial</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-bi-blue-950 via-bi-blue-900 to-bi-blue-800 text-white rounded-3xl p-6 sm:p-8 shadow-bi-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950 inline-block">
              Mandat Utama Bank Sentral
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Bauran Kebijakan Moneter & Stabilitas Sistem Keuangan
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bank Indonesia mengintegrasikan kebijakan moneter yang berfokus pada stabilitas (pro-stability) dengan kebijakan makroprudensial, sistem pembayaran, dan pendalaman pasar keuangan yang mendorong pertumbuhan ekonomi (pro-growth).
            </p>
          </div>
        </div>

        {/* 3 Key Pillars of Monetary Policy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-bi-blue-50 text-bi-blue-700 flex items-center justify-center font-bold mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-bi-gold-700 block">
                Suku Bunga Acuan
              </span>
              <h2 className="text-lg font-bold text-bi-blue-900 mt-1">
                BI-Rate: 6,00%
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Dipertahankan konsisten untuk menjaga stabilitas nilai tukar Rupiah dari dampak ketidakpastian global serta memastikan inflasi terkendali dalam sasaran 2,5% ± 1%.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold">
              Deposit Facility: 5,25% | Lending: 6,75%
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-3">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                Inflasi Terjaga
              </span>
              <h2 className="text-lg font-bold text-bi-blue-900 mt-1">
                Target Sasaran: 2,5 ± 1%
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Penguatan sinergi Pengendalian Inflasi bersama Tim Pengendalian Inflasi Pusat dan Daerah (TPIP & TPID) melalui Gerakan Nasional Pengendalian Inflasi Pangan (GNPIP).
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold">
              Realisasi Juli 2026: 2,12% YoY
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-bi-gold-700 flex items-center justify-center font-bold mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-bi-gold-700 block">
                Makroprudensial
              </span>
              <h2 className="text-lg font-bold text-bi-blue-900 mt-1">
                Insentif Likuiditas (KLM)
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Pemberian pelonggaran likuiditas makroprudensial hingga ratusan triliun rupiah guna mendorong intermediasi perbankan ke sektor prioritas hilirisasi dan UMKM.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] text-bi-gold-700 font-semibold">
              Pertumbuhan Kredit: 12,40% YoY
            </div>
          </div>

        </div>

        {/* Detail Operasi Moneter Pro-Market */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold text-bi-blue-900">
              Operasi Moneter Pro-Market Bank Indonesia
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Instrumen inovatif untuk memperkuat efektivitas transmisi kebijakan dan pendalaman pasar uang domestik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-bi-blue-700 block">
                1. Sekuritas Rupiah Bank Indonesia (SRBI)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Surat berharga dalam mata uang Rupiah yang diterbitkan Bank Indonesia sebagai instrumen operasi moneter kontraksi untuk menyerap likuiditas dan menarik dana asing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-bi-blue-700 block">
                2. Sekuritas Valas Bank Indonesia (SVBI)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instrumen moneter dalam valuta asing berdenominasi USD guna memperkuat likuiditas valas dan pengelolaan cadangan devisa di pasar domestik.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-bi-blue-700 block">
                3. Sukuk Valas Bank Indonesia (SUVBI)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instrumen berbasis syariah dalam valuta asing untuk mendukung pendalaman pasar keuangan syariah dan instrumen likuiditas bagi perbankan syariah.
              </p>
            </div>
          </div>
        </div>

        {/* Jadwal Rapat Dewan Gubernur */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-bi-blue-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-bi-blue-700" />
              Jadwal Rapat Dewan Gubernur (RDG) Bulanan 2026
            </h2>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-bi-blue-50 text-bi-blue-700">
              Jadwal Resmi
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              { month: 'September 2026', date: '17 - 18 September 2026', status: 'Upcoming' },
              { month: 'Oktober 2026', date: '15 - 16 Oktober 2026', status: 'Scheduled' },
              { month: 'November 2026', date: '19 - 20 November 2026', status: 'Scheduled' },
              { month: 'Desember 2026', date: '16 - 17 Desember 2026', status: 'Scheduled' },
            ].map((rdg, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-bi-gold-700 block">{rdg.month}</span>
                <span className="text-sm font-bold text-slate-900 block mt-1">{rdg.date}</span>
                <span className="text-[10px] text-slate-500 block mt-1">Pengumuman: Hari Ke-2 Pkl 14:00 WIB</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
