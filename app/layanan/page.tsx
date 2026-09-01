import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Headphones,
  Phone,
  Mail,
  MessageSquare,
  FileCheck,
  Building2,
  HelpCircle,
  ShieldAlert,
  Send,
  ExternalLink,
  BookOpen,
  MapPin,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Layanan Publik & BICARA 131 - Bank Indonesia',
  description: 'Pusat layanan informasi publik Bank Indonesia, Contact Center BICARA 131, pengaduan perlindungan konsumen sistem pembayaran, portal perizinan e-Licensing, dan PPID.',
};

export default function LayananPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-bi-blue-700">Beranda</Link>
          <span>/</span>
          <span className="text-slate-400">Layanan Publik</span>
          <span>/</span>
          <span className="text-bi-blue-800 font-bold">Pusat Layanan & BICARA 131</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-bi-blue-950 via-bi-blue-900 to-bi-blue-800 text-white rounded-3xl p-6 sm:p-8 shadow-bi-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950 inline-block">
              Layanan Publik Terpadu
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Contact Center BICARA 131 & Layanan Perizinan
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bank Indonesia menyediakan saluran komunikasi terintegrasi untuk melayani permohonan informasi publik, pengaduan konsumen jasa sistem pembayaran, dan perizinan penyelenggara jasa pembayaran.
            </p>
          </div>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-bi-blue-50 text-bi-blue-700 flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-bi-gold-700 block">Saluran Telepon Resmi</span>
              <h2 className="text-xl font-bold text-bi-blue-900">BICARA 131</h2>
              <p className="text-xs text-slate-600 mt-1">
                Layanan telepon langsung bebas pulsa untuk informasi kebijakan, riset, dan konsultasi publik.
              </p>
            </div>
            <div className="pt-2 text-xs font-bold text-bi-blue-700">
              (021) 131 / (021) 2981 0000
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 block">WhatsApp Asisten Virtual</span>
              <h2 className="text-xl font-bold text-bi-blue-900">Chatbot Resmi BI</h2>
              <p className="text-xs text-slate-600 mt-1">
                Respon instan 24/7 untuk mengecek kurs JISDOR, jadwal RDG, penukaran uang, dan pelaporan kendala.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/62811131131"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center gap-1"
              >
                <span>+62 811-131-131</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-700 block">Surat Elektronik</span>
              <h2 className="text-xl font-bold text-bi-blue-900">bicara@bi.go.id</h2>
              <p className="text-xs text-slate-600 mt-1">
                Layanan korespondensi resmi permohonan narasumber riset, audiensi, dan perlindungan konsumen.
              </p>
            </div>
            <div className="pt-2 text-xs font-bold text-purple-700">
              Respon maksimal 1x24 jam kerja
            </div>
          </div>

        </div>

        {/* Portals List (e-Licensing, PPID, Museum BI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* e-Licensing */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-4" id="elicensing">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-bi-blue-50 text-bi-blue-700 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-bi-blue-900">
                e-Licensing (Perizinan Terpadu)
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Portal permohonan izin penyelenggara jasa pembayaran (PJP), penyelenggara infrastruktur sistem pembayaran (PIP), dan instrumen pasar keuangan secara terpadu dan transparan.
            </p>
            <div className="pt-2">
              <a
                href="https://e-licensing.bi.go.id"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bi-blue-700 hover:bg-bi-blue-800 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <span>Masuk ke Portal e-Licensing</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* PPID */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-4" id="ppid">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-bi-gold-700 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-bi-blue-900">
                PPID (Pejabat Pengelola Informasi & Dokumentasi)
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pelayanan permohonan informasi publik Bank Indonesia sesuai dengan Undang-Undang No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
            </p>
            <div className="pt-2">
              <a
                href="https://ppid.bi.go.id"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bi-gold-500 hover:bg-bi-gold-400 text-bi-blue-950 font-bold text-xs transition-colors shadow-sm"
              >
                <span>Permohonan Informasi Publik (PPID)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Museum Bank Indonesia */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-4" id="museum">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-700 block mb-1">
                Wisata Edukasi Sejarah
              </span>
              <h2 className="text-xl font-bold text-bi-blue-900">
                Museum Bank Indonesia (MuBI)
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-bi-blue-800">
              <Clock className="w-4 h-4 text-bi-gold-600" />
              <span>Selasa - Minggu: 08.00 - 15.30 WIB (Senin & Libur Nasional Tutup)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
            <p>
              Museum Bank Indonesia menempati gedung peninggalan De Javasche Bank di kawasan Kota Tua Jakarta. Menyajikan sejarah perjalanan bank sentral, koleksi mata uang nusantara dari masa ke masa, serta ruang khazanah emas moneter.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Alamat Museum:</span>
              <span>Jl. Pintu Besar Utara No. 3, Kota Tua, Pinangsia, Tamansari, Jakarta Barat 11110</span>
              <span className="block pt-1 text-bi-blue-700 font-semibold">Tiket Masuk: Rp 5.000 (Gratis untuk pelajar/mahasiswa bertanda pengenal)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
