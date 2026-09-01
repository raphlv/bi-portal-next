'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Download, Shield, Sparkles } from 'lucide-react';
import { newsArticles } from '@/lib/biData';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      badge: 'HASIL RAPAT DEWAN GUBERNUR (RDG)',
      title: 'BI-Rate Dipertahankan Sebesar 6,00% untuk Memperkuat Stabilitas Nilai Tukar Rupiah',
      subtitle: 'Fokus kebijakan moneter diarahkan pro-stability untuk mitigasi rambatan ketidakpastian global serta memastikan inflasi 2026 tetap terjaga dalam sasaran 2,5% ± 1%.',
      linkText: 'Baca Siaran Pers Lengkap',
      href: '/publikasi',
      tag: 'Kebijakan Moneter',
      date: '21 Agustus 2026',
      stats: [
        { label: 'BI-Rate', val: '6.00%' },
        { label: 'Deposit Facility', val: '5.25%' },
        { label: 'Lending Facility', val: '6.75%' }
      ],
      bgGradient: 'from-bi-blue-950 via-bi-blue-900 to-bi-blue-800'
    },
    {
      id: 2,
      badge: 'INTERKONEKSI PEMBAYARAN DIGITAL LINTAS NEGARA',
      title: 'Perluasan Kerja Sama QRIS Antarnegara dan Local Currency Settlement (LCT)',
      subtitle: 'Inovasi pembayaran digital tanpa konversi mata uang ketiga mempermudah wisatawan, UMKM, dan perdagangan regional dengan integrasi transaksi seketika.',
      linkText: 'Eksplorasi Ekosistem QRIS',
      href: '/sistem-pembayaran',
      tag: 'Sistem Pembayaran',
      date: '28 Agustus 2026',
      stats: [
        { label: 'Merchant QRIS', val: '32+ Juta' },
        { label: 'Negara Mitra', val: '6 Negara' },
        { label: 'Pertumbuhan', val: '+165% YoY' }
      ],
      bgGradient: 'from-[#002244] via-[#003366] to-bi-blue-700'
    },
    {
      id: 3,
      badge: 'KETAHANAN SEKTOR EKSTERNAL',
      title: 'Cadangan Devisa Indonesia Meningkat Menjadi USD 150,2 Miliar pada Akhir Juli 2026',
      subtitle: 'Posisi cadangan devisa setara pembiayaan 6,5 bulan impor, jauh di atas standar kecukupan internasional 3 bulan, menjaga stabilitas makroekonomi dan sistem keuangan.',
      linkText: 'Lihat Data Statistik Devisa',
      href: '/kurs',
      tag: 'Makroekonomi',
      date: '07 Agustus 2026',
      stats: [
        { label: 'Total Devisa', val: 'USD 150.2 B' },
        { label: 'Kecukupan Impor', val: '6.5 Bulan' },
        { label: 'Kondisi', val: 'Sangat Sehat' }
      ],
      bgGradient: 'from-bi-blue-900 via-bi-blue-850 to-indigo-950'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-bi-blue-950 text-white min-h-[460px] sm:min-h-[500px] flex items-center">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(197, 160, 89, 0.25) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Decorative Glow Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bi-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-bi-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Slide Content */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Top Category Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-gold-500/20 text-bi-gold-300 border border-bi-gold-500/40">
                <Sparkles className="w-3 h-3 text-bi-gold-400" />
                {slide.badge}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {slide.date}
              </span>
            </div>

            {/* Slide Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight sm:leading-snug drop-shadow-md">
              {slide.title}
            </h1>

            {/* Slide Subtitle / Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bi-gold-500 hover:bg-bi-gold-400 text-bi-blue-950 font-bold text-xs sm:text-sm shadow-bi-gold-glow hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>{slide.linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/publikasi"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-bi-gold-300" />
                <span>Unduh Siaran Pers (PDF)</span>
              </Link>
            </div>

          </div>

          {/* Right Highlight Stats Card */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-b from-white/15 to-white/5 border border-white/20 rounded-2xl p-5 backdrop-blur-md shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <span className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-300 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-bi-gold-400" /> Ringkasan Indikator
                </span>
                <span className="text-[10px] text-slate-300 px-2 py-0.5 rounded bg-white/10 font-mono">
                  RESMI
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                {slide.stats.map((st, sIdx) => (
                  <div key={sIdx} className="bg-black/20 rounded-xl p-2.5 border border-white/10">
                    <span className="text-[10px] sm:text-[11px] text-slate-300 block mb-1 truncate">
                      {st.label}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white block tabular-nums">
                      {st.val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-300 bg-bi-blue-900/60 rounded-xl p-3 border border-bi-blue-700/50 leading-relaxed">
                Bank Indonesia berkomitmen menjaga stabilitas moneter dan mendorong pertumbuhan ekonomi yang inklusif dan berkelanjutan bagi kemakmuran bangsa.
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Indicators & Navigation Controls */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-bi-gold-400' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
