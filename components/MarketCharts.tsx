'use client';

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { historicalData } from '@/lib/biData';
import { BarChart3, TrendingUp, Info } from 'lucide-react';

export default function MarketCharts() {
  const [activeChart, setActiveChart] = useState<'jisdor' | 'birate-inflasi'>('jisdor');

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-700 block mb-1">
              Visualisasi Data Moneter
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-bi-blue-900 tracking-tight">
              Dinamika Tren & Stabilitas Pasar Keuangan
            </h2>
          </div>

          {/* Toggle Tab */}
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm text-xs font-bold">
            <button
              onClick={() => setActiveChart('jisdor')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeChart === 'jisdor'
                  ? 'bg-bi-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-bi-blue-800'
              }`}
            >
              Tren JISDOR (USD/IDR)
            </button>
            <button
              onClick={() => setActiveChart('birate-inflasi')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeChart === 'birate-inflasi'
                  ? 'bg-bi-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-bi-blue-800'
              }`}
            >
              BI-Rate vs Inflasi
            </button>
          </div>
        </div>

        {/* Chart Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-bi-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-6">
            <div>
              <h3 className="text-base font-bold text-bi-blue-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-bi-blue-700" />
                {activeChart === 'jisdor' ? 'Perkembangan Nilai Tukar JISDOR USD/IDR (7 Hari Terakhir)' : 'Korelasi BI-Rate dan Inflasi YoY'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Sumber: Bank Indonesia - Departemen Pengelolaan Moneter & Badan Pusat Statistik (BPS)
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              {activeChart === 'jisdor' ? (
                <span className="flex items-center gap-1.5 text-bi-blue-700">
                  <span className="w-3 h-3 rounded-full bg-bi-blue-700"></span> JISDOR Spot (IDR)
                </span>
              ) : (
                <>
                  <span className="flex items-center gap-1.5 text-bi-blue-700">
                    <span className="w-3 h-3 rounded-full bg-bi-blue-700"></span> BI-Rate (%)
                  </span>
                  <span className="flex items-center gap-1.5 text-bi-gold-600">
                    <span className="w-3 h-3 rounded-full bg-bi-gold-500"></span> Inflasi YoY (%)
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Chart Rendering Container */}
          <div className="h-72 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              {activeChart === 'jisdor' ? (
                <AreaChart data={historicalData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorJisdor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#003F87" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#003F87" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis
                    domain={[15800, 15950]}
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    tickFormatter={(val) => `Rp ${val.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#002B49',
                      color: '#ffffff',
                      borderRadius: '12px',
                      border: 'none',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                      fontSize: '12px',
                    }}
                    formatter={(value: any) => [`Rp ${Number(value).toLocaleString('id-ID')}`, 'Kurs JISDOR']}
                  />
                  <Area
                    type="monotone"
                    dataKey="jisdor"
                    stroke="#003F87"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorJisdor)"
                  />
                </AreaChart>
              ) : (
                <LineChart data={historicalData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis domain={[0, 8]} stroke="#64748b" fontSize={12} tickLine={false} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#002B49',
                      color: '#ffffff',
                      borderRadius: '12px',
                      border: 'none',
                      fontSize: '12px',
                    }}
                    formatter={(value: any, name: string) => [
                      `${value}%`,
                      name === 'biRate' ? 'BI-Rate (Suku Bunga)' : 'Inflasi IHK'
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="biRate"
                    stroke="#003F87"
                    strokeWidth={3}
                    dot={{ r: 4, fill: '#003F87' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="inflation"
                    stroke="#C5A059"
                    strokeWidth={3}
                    dot={{ r: 4, fill: '#C5A059' }}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-bi-blue-700" />
              Toleransi rentang sasaran inflasi 2026 berada pada 2,5% ± 1%.
            </span>
            <span className="font-semibold text-bi-blue-800">
              Kondisi Terkini: Stabil & Terkendali
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
