import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { boardOfGovernors } from '@/lib/biData';
import {
  Building2,
  Users,
  Compass,
  Award,
  Shield,
  MapPin,
  Landmark,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Bank Indonesia - Profil & Dewan Gubernur',
  description: 'Profil kelembagaan Bank Indonesia, visi misi, profil Dewan Gubernur, struktur organisasi, sejarah bank sentral, serta jaringan kantor perwakilan dalam dan luar negeri.',
};

export default function TentangBIPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-bi-blue-700">Beranda</Link>
          <span>/</span>
          <span className="text-slate-400">Kelembagaan</span>
          <span>/</span>
          <span className="text-bi-blue-800 font-bold">Tentang Bank Indonesia</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-bi-blue-950 via-bi-blue-900 to-bi-blue-800 text-white rounded-3xl p-6 sm:p-8 shadow-bi-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950 inline-block">
              Bank Sentral Republik Indonesia
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Profil & Visi Transformasi Bank Indonesia
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Lembaga negara yang independen dalam melaksanakan tugas dan wewenangnya, bebas dari campur tangan pemerintah dan/atau pihak lain, kecuali untuk hal-hal yang secara tegas diatur dalam undang-undang.
            </p>
          </div>
        </div>

        {/* Visi, Misi, & Nilai Strategis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-bi-blue-50 text-bi-blue-700 flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-bi-blue-900">Visi Bank Indonesia</h2>
            <p className="text-sm text-slate-700 leading-relaxed italic bg-slate-50 p-4 rounded-2xl border-l-4 border-bi-gold-500">
              "Menjadi bank sentral digital terdepan yang berkontribusi nyata terhadap perekonomian nasional dan terbaik di antara negara emerging markets untuk Indonesia Maju."
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-bi-gold-700 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-bi-blue-900">Nilai Strategis (NILAI)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>1. Kejujuran & Integritas:</strong> Menjunjung tinggi etika dan kebenaran.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>2. Profesionalisme:</strong> Kompeten dan bertanggung jawab penuh.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>3. Keunggulan:</strong> Inovatif dan berorientasi pada kualitas terbaik.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>4. Mengutamakan Kepentingan Umum:</strong> Melayani kepentingan bangsa.
              </div>
            </div>
          </div>

        </div>

        {/* Dewan Gubernur Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-6" id="dewan-gubernur">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-700 block mb-1">
              Pimpinan Tertinggi
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-bi-blue-900">
              Dewan Gubernur Bank Indonesia
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Dewan Gubernur dipimpin oleh Gubernur, didampingi oleh seorang Deputi Gubernur Senior dan sekurang-kurangnya empat atau sebanyak-banyaknya tujuh orang Deputi Gubernur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardOfGovernors.map((gov, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between group hover:border-bi-blue-300 hover:shadow-bi-md transition-all"
              >
                <div className="space-y-3">
                  <div className="h-44 w-full rounded-xl overflow-hidden bg-slate-200 relative">
                    <img
                      src={gov.photo}
                      alt={gov.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-bi-blue-900/90 text-white backdrop-blur-sm">
                        Periode: {gov.period}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-bi-gold-700 block">
                      {gov.role}
                    </span>
                    <h3 className="text-base font-bold text-bi-blue-900">
                      {gov.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {gov.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jaringan Kantor Perwakilan */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-bi-sm space-y-6" id="kpw">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold text-bi-blue-900">
              Jaringan Kantor Perwakilan Bank Indonesia
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Menjangkau seluruh wilayah nusantara dan pusat keuangan internasional dunia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-sm font-bold text-bi-blue-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-bi-gold-600" />
                46 Kantor Perwakilan Dalam Negeri (KPwDN)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tersebar di seluruh provinsi dan kota strategis untuk mendukung pelaksanaan fungsi moneter daerah, pemenuhan uang kartal layak edar, dan pengendalian inflasi daerah bersama TPID.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-sm font-bold text-bi-blue-900 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-bi-blue-700" />
                5 Kantor Perwakilan Luar Negeri (KPwLN)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Berlokasi di pusat keuangan dunia: **London, New York, Tokyo, Singapura, dan Beijing** guna memperkuat diplomasi moneter internasional dan pengelolaan investasi devisa.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
