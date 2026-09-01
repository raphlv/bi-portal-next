'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ShieldCheck, Award, Calendar, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { upcomingAgendas } from '@/lib/biData';

export default function EducationSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: CBP Rupiah Campaign Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-bi-blue-900 via-bi-blue-850 to-bi-blue-950 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-bi-lg">
            
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-bi-gold-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500 text-bi-blue-950">
                  Gerakan Nasional
                </span>
                <span className="text-xs text-bi-gold-300 font-semibold">
                  Kedaulatan & Identitas Bangsa
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                  Cinta, Bangga, Paham Rupiah (CBP Rupiah)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Rupiah bukan sekadar alat pembayaran, melainkan simbol kedaulatan Negara Kesatuan Republik Indonesia (NKRI) dan pemersatu bangsa.
                </p>
              </div>

              {/* 3 Pillars of CBP */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                {/* Cinta */}
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center font-black">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">1. Cinta Rupiah</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Mengenali ciri keaslian 3D (Dilihat, Diraba, Diterawang) dan merawat fisik dengan 5 Jangan (Jangan Dilipat, Dicoret, Distapler, Diremas, Dibasahi).
                  </p>
                </div>

                {/* Bangga */}
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-bi-gold-500/20 text-bi-gold-300 flex items-center justify-center font-black">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">2. Bangga Rupiah</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Menggunakan Rupiah sebagai satu-satunya alat pembayaran yang sah di seluruh wilayah kedaulatan NKRI.
                  </p>
                </div>

                {/* Paham */}
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">3. Paham Rupiah</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Bijak dalam bertransaksi, rajin menabung, berinvestasi sehat, dan mendukung produk UMKM buatan anak bangsa.
                  </p>
                </div>

              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/rupiah"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bi-gold-500 hover:bg-bi-gold-400 text-bi-blue-950 font-bold text-xs transition-colors shadow-sm"
                >
                  <span>Panduan Ciri Keaslian Rupiah (3D)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/rupiah#pintar"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
                >
                  <span>PINTAR BI (Kas Keliling)</span>
                </Link>
              </div>

            </div>

          </div>

          {/* Right Column: Upcoming Agenda & Event Calendar */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-bi-sm space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-bi-gold-700 block">
                  Kalender Resmi 2026
                </span>
                <h3 className="text-base font-bold text-bi-blue-900">
                  Agenda & Jadwal Kegiatan BI
                </h3>
              </div>
              <Link
                href="/moneter"
                className="text-xs font-bold text-bi-blue-700 hover:underline flex items-center gap-1"
              >
                Lihat Semua
              </Link>
            </div>

            {/* Agenda List */}
            <div className="space-y-3">
              {upcomingAgendas.map((agenda) => (
                <div
                  key={agenda.id}
                  className="bg-white rounded-xl p-3.5 border border-slate-200/80 hover:border-bi-blue-300 transition-all shadow-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-bi-blue-50 text-bi-blue-700 border border-bi-blue-100">
                      {agenda.type}
                    </span>
                    <span className="text-[11px] font-semibold text-bi-gold-700 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {agenda.date}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-800 leading-snug">
                    {agenda.title}
                  </h4>

                  <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {agenda.time}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      {agenda.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <Link
                href="/layanan"
                className="text-xs font-bold text-bi-blue-700 hover:text-bi-blue-900 inline-flex items-center gap-1"
              >
                <span>Unduh Jadwal RDG Tahunan Bank Indonesia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
