import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  QrCode,
  Zap,
  Layers,
  ShieldCheck,
  Globe,
  Smartphone,
  CreditCard,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sistem Pembayaran & Digitalisasi - Bank Indonesia',
  description: 'Infrastruktur dan kebijakan sistem pembayaran Bank Indonesia: QRIS, BI-FAST, Standar Nasional Open API Pembayaran (SNAP), dan Proyek Garuda Rupiah Digital.',
};

export default function SistemPembayaranPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-bi-blue-700">Beranda</Link>
          <span>/</span>
          <span className="text-slate-400">Fungsi Utama</span>
          <span>/</span>
          <span className="text-bi-blue-800 font-bold">Sistem Pembayaran Digital</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-[#001D38] via-[#002B49] to-bi-blue-700 text-white rounded-3xl p-6 sm:p-8 shadow-bi-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950 inline-block">
              Blueprint Sistem Pembayaran Indonesia (BSPI 2030)
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Akselerasi Ekosistem Ekonomi & Keuangan Digital Nasional
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mewujudkan sistem pembayaran yang Cepat, Mudah, Murah, Aman, dan Andal (CeMuMUAH) guna mengintegrasikan ekonomi digital secara inklusif di seluruh pelosok negeri.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Digital Payment System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. QRIS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold mb-3">
                <QrCode className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-bi-gold-700 block">
                Standar Nasional & Cross-Border
              </span>
              <h2 className="text-base font-bold text-bi-blue-900 mt-1">
                QRIS & QRIS Antarnegara
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Satu QR code untuk seluruh aplikasi pembayaran. Telah terhubung antarnegara dengan Thailand, Malaysia, Singapura, UAE, dan Korea Selatan.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] text-sky-700 font-bold">
              32+ Juta Merchant Terdaftar
            </div>
          </div>

          {/* 2. BI-FAST */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 block">
                Transfer Seketika 24/7
              </span>
              <h2 className="text-base font-bold text-bi-blue-900 mt-1">
                BI-FAST Payment
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Infrastruktur sistem pembayaran ritel nasional yang memfasilitasi transaksi transfer dana secara real-time, 24/7, aman, dan efisien dengan biaya terjangkau.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] text-indigo-700 font-bold">
              Tarif Maks. Rp 2.500 / Transaksi
            </div>
          </div>

          {/* 3. SNAP Open API */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-3">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700 block">
                Interkoneksi Open Banking
              </span>
              <h2 className="text-base font-bold text-bi-blue-900 mt-1">
                SNAP (Standar Open API)
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Standar Nasional Open API Pembayaran untuk menyeragamkan bahasa integrasi antarmuka perbankan dengan fintech secara aman dan terproteksi.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] text-purple-700 font-bold">
              Standarisasi Open Finance
            </div>
          </div>

          {/* 4. Proyek Garuda */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-bi-blue-50 text-bi-blue-700 flex items-center justify-center font-bold mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-bi-blue-700 block">
                Central Bank Digital Currency
              </span>
              <h2 className="text-base font-bold text-bi-blue-900 mt-1">
                Proyek Garuda (Digital Rupiah)
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Inisiatif pengembangan mata uang digital bank sentral (CBDC) sebagai bentuk kedaulatan Rupiah di era digital untuk transaksi wholesale dan ritel.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] text-bi-blue-700 font-bold">
              Kedaulatan Rupiah Digital
            </div>
          </div>

        </div>

        {/* Infrastruktur Sistem Pembayaran Nilai Besar (Wholesale) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold text-bi-blue-900">
              Sistem Pembayaran Nilai Besar & Kliring (Wholesale)
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Jantung transaksi finansial skala besar dan penyelesaian akhir (settlement) antarlembaga keuangan di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-bi-blue-900">
                1. BI-RTGS (Real Time Gross Settlement)
              </h3>
              <p className="leading-relaxed">
                Sistem transfer dana elektronik antarpeserta dalam mata uang Rupiah dan Valas yang penyelesaiannya dilakukan secara seketika per transaksi (gross). Merupakan pilar utama stabilitas sistem keuangan nasional untuk transaksi bernilai di atas Rp 100 juta.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-bi-blue-900">
                2. BI-SSSS & BI-ETP
              </h3>
              <p className="leading-relaxed">
                Bank Indonesia Scripless Securities Settlement System (BI-SSSS) untuk penatausahaan dan transaksi surat berharga, serta Electronic Trading Platform (BI-ETP) untuk memfasilitasi transaksi pasar uang secara transparan.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
