'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Calendar, Clock, Download, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { newsArticles } from '@/lib/biData';

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState<string>('Semua');

  const categories = ['Semua', 'Siaran Pers', 'Berita', 'Pidato', 'Edukasi'];

  const filteredNews = activeTab === 'Semua'
    ? newsArticles
    : newsArticles.filter((n) => n.category === activeTab);

  return (
    <section className="py-12 bg-white" id="siaran-pers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-700 block mb-1">
              Ruang Komunikasi Publik
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-bi-blue-900 tracking-tight">
              Siaran Pers & Berita Kebijakan Terkini
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl text-xs font-bold border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === cat
                    ? 'bg-bi-blue-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-bi-blue-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news, idx) => (
            <article
              key={news.id}
              className={`bg-white rounded-2xl border border-slate-200/90 shadow-bi-sm hover:shadow-bi-lg hover:border-bi-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                news.featured && idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Image & Badge Overlay */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-bi-blue-800 text-white shadow-sm">
                      {news.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-bi-gold-300" />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-bi-gold-300" />
                      {news.readTime}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <span className="text-[11px] font-semibold text-bi-gold-700 block mb-1">
                    {news.author}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-bi-blue-900 group-hover:text-bi-blue-700 transition-colors line-clamp-2 mb-2 leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {news.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100">
                <Link
                  href={`/publikasi?slug=${news.slug}`}
                  className="text-xs font-bold text-bi-blue-700 hover:text-bi-blue-900 flex items-center gap-1 group/btn"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <button
                  className="p-2 rounded-lg text-slate-400 hover:text-bi-blue-700 hover:bg-slate-100 transition-colors"
                  title="Unduh Salinan Resmi"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/publikasi"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bi-blue-800 hover:bg-bi-blue-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <span>Buka Arsip Siaran Pers & Berita Lengkap</span>
            <ArrowRight className="w-4 h-4 text-bi-gold-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
