'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calculator,
  Banknote,
  QrCode,
  CalendarDays,
  Headphones,
  FileCheck,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { quickLinks } from '@/lib/biData';

export default function QuickActions() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-bi-blue-700 group-hover:text-white transition-colors" />;
      case 'Banknote':
        return <Banknote className="w-6 h-6 text-bi-gold-600 group-hover:text-white transition-colors" />;
      case 'QrCode':
        return <QrCode className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />;
      case 'CalendarDays':
        return <CalendarDays className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />;
      default:
        return <ArrowRight className="w-6 h-6 text-bi-blue-700" />;
    }
  };

  const getBgIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return 'bg-bi-blue-50 group-hover:bg-bi-blue-700';
      case 'Banknote': return 'bg-amber-50 group-hover:bg-bi-gold-600';
      case 'QrCode': return 'bg-sky-50 group-hover:bg-sky-600';
      case 'CalendarDays': return 'bg-indigo-50 group-hover:bg-indigo-600';
      case 'Headphones': return 'bg-emerald-50 group-hover:bg-emerald-600';
      case 'FileCheck': return 'bg-purple-50 group-hover:bg-purple-600';
      default: return 'bg-slate-100 group-hover:bg-bi-blue-700';
    }
  };

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-700 block mb-1">
              Layanan & Akses Cepat
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-bi-blue-900 tracking-tight">
              Pintasan Unggulan Bank Indonesia
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Akses instan ke alat kalkulator kurs valas, jadwal agenda moneter, pemesanan kas keliling, dan pusat informasi publik.
          </p>
        </div>

        {/* 6 Quick Action Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quickLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group bg-white rounded-2xl p-5 border border-slate-200/90 shadow-bi-sm hover:shadow-bi-lg hover:border-bi-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${getBgIcon(item.icon)}`}>
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-bi-blue-50 group-hover:text-bi-blue-700 transition-colors uppercase tracking-wider border border-slate-200/60">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-bi-blue-900 group-hover:text-bi-blue-700 transition-colors mb-1.5 flex items-center justify-between">
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-bi-blue-700 group-hover:text-bi-blue-900">
                <span>Buka Layanan</span>
                <ArrowRight className="w-4 h-4 text-bi-gold-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
