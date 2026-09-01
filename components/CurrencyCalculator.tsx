'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeftRight,
  TrendingDown,
  TrendingUp,
  RefreshCw,
  Info,
  Calendar,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { exchangeRates } from '@/lib/biData';

export default function CurrencyCalculator() {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [amount, setAmount] = useState<number>(1000);
  const [mode, setMode] = useState<'valas-to-idr' | 'idr-to-valas'>('valas-to-idr');
  const [rateType, setRateType] = useState<'middle' | 'buy' | 'sell'>('middle');

  const curr = exchangeRates.find((c) => c.currency === selectedCurrency) || exchangeRates[0];

  const getEffectiveRate = () => {
    if (rateType === 'buy') return curr.buy;
    if (rateType === 'sell') return curr.sell;
    return curr.middle;
  };

  const effectiveRate = getEffectiveRate();

  const calculateResult = () => {
    if (isNaN(amount) || amount <= 0) return 0;
    if (mode === 'valas-to-idr') {
      // For JPY, rate is per 100 JPY
      if (curr.currency === 'JPY') {
        return (amount / 100) * effectiveRate;
      }
      return amount * effectiveRate;
    } else {
      if (curr.currency === 'JPY') {
        return (amount / effectiveRate) * 100;
      }
      return amount / effectiveRate;
    }
  };

  const result = calculateResult();

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 2,
    }).format(val);
  };

  const formatForeign = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
    }).format(val);
  };

  const toggleMode = () => {
    setMode(mode === 'valas-to-idr' ? 'idr-to-valas' : 'valas-to-idr');
  };

  return (
    <section className="py-12 bg-white" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-700 block mb-1">
              Pasar Valuta Asing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-bi-blue-900 tracking-tight">
              Kalkulator Kurs & Nilai Tukar Transaksi BI
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Kurs transaksi Bank Indonesia digunakan sebagai referensi transaksi valuta asing perbankan dan otoritas moneter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Calculator Form */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-bi-sm">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <span className="text-xs font-extrabold text-bi-blue-900 uppercase tracking-wider">
                Hitung Konversi Mata Uang
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                {curr.lastUpdated}
              </span>
            </div>

            {/* Rate Type Selector (Tengah / Beli / Jual) */}
            <div className="mb-4">
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Jenis Kurs Referensi:
              </label>
              <div className="grid grid-cols-3 gap-1.5 bg-slate-200/80 p-1 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setRateType('middle')}
                  className={`py-1.5 rounded-lg transition-all ${
                    rateType === 'middle'
                      ? 'bg-bi-blue-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-bi-blue-800'
                  }`}
                >
                  Kurs Tengah
                </button>
                <button
                  onClick={() => setRateType('buy')}
                  className={`py-1.5 rounded-lg transition-all ${
                    rateType === 'buy'
                      ? 'bg-bi-blue-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-bi-blue-800'
                  }`}
                >
                  Kurs Beli
                </button>
                <button
                  onClick={() => setRateType('sell')}
                  className={`py-1.5 rounded-lg transition-all ${
                    rateType === 'sell'
                      ? 'bg-bi-blue-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-bi-blue-800'
                  }`}
                >
                  Kurs Jual
                </button>
              </div>
            </div>

            {/* Currency Selector & Input */}
            <div className="space-y-4">
              {/* Input Amount */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {mode === 'valas-to-idr' ? `Jumlah (${curr.currency})` : 'Jumlah Rupiah (IDR)'}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                    min="1"
                    className="w-full pl-4 pr-24 py-3 bg-white border border-slate-300 rounded-xl text-base font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-bi-blue-700 shadow-sm"
                  />
                  <div className="absolute inset-y-0 right-2 flex items-center">
                    {mode === 'valas-to-idr' ? (
                      <select
                        value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}
                        className="bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 py-1.5 px-2 rounded-lg border border-slate-300 focus:outline-none cursor-pointer"
                      >
                        {exchangeRates.map((c) => (
                          <option key={c.currency} value={c.currency}>
                            {c.flag} {c.currency}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-xs font-bold px-3 py-1.5 bg-slate-100 rounded-lg text-slate-700 border border-slate-300">
                        🇮🇩 IDR
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-1">
                <button
                  onClick={toggleMode}
                  className="p-2 rounded-full bg-bi-blue-700 hover:bg-bi-blue-800 text-white shadow-md transition-transform hover:rotate-180 duration-300"
                  title="Tukar Arah Konversi"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>
              </div>

              {/* Output Result */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {mode === 'valas-to-idr' ? 'Hasil Konversi ke Rupiah (IDR)' : `Hasil Konversi ke ${curr.currency}`}
                </label>
                <div className="p-4 bg-gradient-to-r from-bi-blue-900 to-bi-blue-800 text-white rounded-xl border border-bi-blue-700 shadow-inner">
                  <span className="text-[11px] text-bi-gold-300 font-semibold block mb-0.5">
                    Estimasi Nilai Transaksi:
                  </span>
                  <div className="text-xl sm:text-2xl font-black tracking-tight tabular-nums">
                    {mode === 'valas-to-idr' ? formatRupiah(result) : `${curr.symbol} ${formatForeign(result)}`}
                  </div>
                  <div className="text-[11px] text-slate-300 mt-2 pt-2 border-t border-white/10 flex justify-between">
                    <span>1 {curr.currency} = Rp {effectiveRate.toLocaleString('id-ID')}</span>
                    <span className="text-bi-gold-300 font-semibold">Kurs {rateType.toUpperCase()}</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
              <Info className="w-3.5 h-3.5 flex-shrink-0 text-bi-blue-700" />
              <span>Nilai perhitungan bersifat indikatif untuk keperluan informasi publik.</span>
            </div>

          </div>

          {/* Right Column: Currency Rates Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-bi-sm overflow-hidden flex flex-col justify-between">
            
            <div>
              {/* Table Header */}
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-bi-blue-900">
                    Tabel Kurs Transaksi Bank Indonesia
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    Mata Uang Utama Terhadap Rupiah (IDR)
                  </span>
                </div>
                <Link
                  href="/kurs"
                  className="text-xs font-bold text-bi-blue-700 hover:text-bi-blue-900 flex items-center gap-1"
                >
                  <span>Lihat Riwayat & JISDOR</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Rates Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-4">Mata Uang</th>
                      <th className="py-2.5 px-4 text-right">Kurs Beli (IDR)</th>
                      <th className="py-2.5 px-4 text-right">Kurs Jual (IDR)</th>
                      <th className="py-2.5 px-4 text-right">Kurs Tengah</th>
                      <th className="py-2.5 px-4 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {exchangeRates.map((rate) => (
                      <tr
                        key={rate.currency}
                        className={`hover:bg-bi-blue-50/50 transition-colors ${
                          selectedCurrency === rate.currency ? 'bg-bi-blue-50/80 font-semibold' : ''
                        }`}
                      >
                        <td className="py-3 px-4 flex items-center gap-2">
                          <span className="text-base">{rate.flag}</span>
                          <div>
                            <span className="font-bold text-slate-900 block">{rate.currency}</span>
                            <span className="text-[10px] text-slate-500 hidden sm:block">{rate.currencyName}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-slate-700 tabular-nums">
                          {rate.buy.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-slate-700 tabular-nums">
                          {rate.sell.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-bi-blue-800 tabular-nums">
                          {rate.middle.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => setSelectedCurrency(rate.currency)}
                            className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-slate-100 hover:bg-bi-blue-700 hover:text-white text-bi-blue-800 transition-colors"
                          >
                            Pilih
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Footer Notes */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>*Kurs JPY dihitung per 100 Yen Jepang.</span>
              <span className="font-medium text-bi-blue-800">
                Pembaruan: Setiap hari kerja pkl 15:30 WIB
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
