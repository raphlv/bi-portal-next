import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Banknote,
  Heart,
  Award,
  ShieldCheck,
  Eye,
  Hand,
  Sun,
  UserCheck,
  AlertTriangle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pengelolaan Uang Rupiah & CBP - Bank Indonesia',
  description: 'Informasi uang Rupiah kertas dan logam, ciri keaslian 3D (Dilihat, Diraba, Diterawang), kampanye Cinta Bangga Paham Rupiah, dan layanan penukaran kas PINTAR BI.',
};

export default function RupiahPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-bi-blue-700">Beranda</Link>
          <span>/</span>
          <span className="text-slate-400">Fungsi Utama</span>
          <span>/</span>
          <span className="text-bi-blue-800 font-bold">Pengelolaan Uang Rupiah</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-bi-blue-950 via-bi-blue-900 to-bi-blue-800 text-white rounded-3xl p-6 sm:p-8 shadow-bi-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950 inline-block">
              Simbol Kedaulatan Negara
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Pengelolaan & Kedaulatan Uang Rupiah
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bank Indonesia merupakan satu-satunya lembaga yang berwenang melakukan pengeluaran, pengedaran, penarikan, dan pemusnahan uang Rupiah di wilayah Negara Kesatuan Republik Indonesia.
            </p>
          </div>
        </div>

        {/* 3D Ciri Keaslian Rupiah */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-700 block mb-1">
              Panduan Edukasi Keamanan
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-bi-blue-900">
              Kenali Ciri Keaslian Uang Rupiah dengan Metode 3D
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Dilihat */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-bi-blue-700 text-white flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-bi-blue-900">1. Dilihat</h3>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-bi-blue-700 font-bold">•</span>
                  <span>Warna uang tampak cerah, tajam, dan tidak pudar.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-bi-blue-700 font-bold">•</span>
                  <span>Gambar pahlawan nasional, ornamen nusantara, dan peta NKRI tercetak presisi.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-bi-blue-700 font-bold">•</span>
                  <span>Benang pengaman berubah warna (colour-shifting) saat dimiringkan.</span>
                </li>
              </ul>
            </div>

            {/* 2. Diraba */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-bi-gold-600 text-white flex items-center justify-center font-bold">
                <Hand className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-bi-blue-900">2. Diraba</h3>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-bi-gold-700 font-bold">•</span>
                  <span>Terasa kasar pada bagian gambar utama pahlawan dan lambang Garuda Pancasila (cetak intaglio).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-bi-gold-700 font-bold">•</span>
                  <span>Kode tuna netra (blind code) berbentuk garis timbul di sisi samping uang.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-bi-gold-700 font-bold">•</span>
                  <span>Bahan kertas khusus berbahan serat kapas yang kuat dan lentur.</span>
                </li>
              </ul>
            </div>

            {/* 3. Diterawang */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-bi-blue-900">3. Diterawang</h3>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Tanda air (watermark) pahlawan nasional dan electrotype ornamen tampak jelas saat diarahkan ke cahaya.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Gambar saling isi (rectoverso) logo Bank Indonesia terlihat utuh dan sempurna.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 5 Jangan Merawat Rupiah */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-4">
          <div className="flex items-center gap-2 text-bi-blue-900">
            <ShieldCheck className="w-6 h-6 text-bi-gold-600" />
            <h2 className="text-xl font-bold">Gerakan 5 Jangan: Rawat Rupiah Kita</h2>
          </div>
          <p className="text-xs text-slate-600">
            Hindari perlakuan yang dapat merusak kualitas fisik uang Rupiah:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            {['1. Jangan Dilipat', '2. Jangan Dicoret', '3. Jangan Distapler', '4. Jangan Diremas', '5. Jangan Dibasahi'].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                <span className="text-xs font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PINTAR BI Card */}
        <div className="bg-gradient-to-r from-bi-blue-900 to-bi-blue-800 text-white rounded-3xl p-6 sm:p-8 shadow-bi-md flex flex-col md:flex-row md:items-center justify-between gap-6" id="pintar">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950 inline-block">
              Layanan Kas Keliling
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              PINTAR BI (Penukaran Uang Rupiah Baru & Lusuh)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Pemesanan jadwal penukaran uang pecahan baru, uang cacat, atau uang yang telah dicabut dari peredaran secara mandiri melalui aplikasi resmi PINTAR.
            </p>
          </div>

          <a
            href="https://pintar.bi.go.id"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-bi-gold-500 hover:bg-bi-gold-400 text-bi-blue-950 font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2 flex-shrink-0 self-start md:self-center"
          >
            <span>Buka Portal PINTAR BI</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
