'use client';

import React from 'react';
import Link from 'next/link';
import LogoBI from './LogoBI';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ExternalLink,
  ChevronRight,
  Send,
  MessageSquare
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bi-blue-950 text-slate-300 border-t-4 border-bi-gold-500">
      
      {/* Top Banner: Hotline BICARA 131 */}
      <div className="bg-bi-blue-900 border-b border-bi-blue-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-bi-gold-500 text-bi-blue-950 flex items-center justify-center font-black flex-shrink-0 shadow-bi-gold-glow">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-bi-gold-300 block">
                  Contact Center Resmi 24/7
                </span>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                  <span>BICARA 131</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Bebas Pulsa
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <a
                href="mailto:bicara@bi.go.id"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors flex items-center gap-2 border border-white/15"
              >
                <Mail className="w-3.5 h-3.5 text-bi-gold-300" />
                <span>bicara@bi.go.id</span>
              </a>
              <a
                href="https://wa.me/62811131131"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Bot BI</span>
              </a>
              <Link
                href="/layanan"
                className="px-4 py-2 rounded-xl bg-bi-gold-500 hover:bg-bi-gold-400 text-bi-blue-950 font-bold transition-colors shadow-sm"
              >
                <span>Pengaduan Konsumen</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Institutional Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <LogoBI variant="light" size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Bank Indonesia adalah bank sentral Republik Indonesia yang memiliki satu tujuan tunggal, yaitu mencapai dan memelihara kestabilan nilai Rupiah untuk mendukung pertumbuhan ekonomi yang berkelanjutan.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bi-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Kantor Pusat:</strong> Jl. M.H. Thamrin No. 2, Gambir, Jakarta Pusat 10350, Indonesia
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-bi-gold-400 flex-shrink-0" />
                <span>(021) 131 / (021) 2981 0000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-bi-gold-400 flex-shrink-0" />
                <span>Senin - Jumat: 08.00 - 16.00 WIB</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigasi Cepat (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-400 pb-1 border-b border-white/10">
              Fungsi & Mandat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/moneter" className="hover:text-white hover:underline transition-colors block">
                  Kebijakan Moneter
                </Link>
              </li>
              <li>
                <Link href="/moneter#makroprudensial" className="hover:text-white hover:underline transition-colors block">
                  Makroprudensial
                </Link>
              </li>
              <li>
                <Link href="/sistem-pembayaran" className="hover:text-white hover:underline transition-colors block">
                  Sistem Pembayaran
                </Link>
              </li>
              <li>
                <Link href="/rupiah" className="hover:text-white hover:underline transition-colors block">
                  Pengelolaan Uang Rupiah
                </Link>
              </li>
              <li>
                <Link href="/moneter#inflasi" className="hover:text-white hover:underline transition-colors block">
                  Pengendalian Inflasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Data & Publikasi (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-400 pb-1 border-b border-white/10">
              Statistik & Regulasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/kurs" className="hover:text-white hover:underline transition-colors block">
                  Kurs JISDOR & Transaksi Valas
                </Link>
              </li>
              <li>
                <Link href="/kurs#seki" className="hover:text-white hover:underline transition-colors block">
                  Statistik Ekonomi (SEKI)
                </Link>
              </li>
              <li>
                <Link href="/regulasi" className="hover:text-white hover:underline transition-colors block">
                  Peraturan Bank Indonesia (PBI)
                </Link>
              </li>
              <li>
                <Link href="/regulasi?type=PADG" className="hover:text-white hover:underline transition-colors block">
                  Peraturan Dewan Gubernur (PADG)
                </Link>
              </li>
              <li>
                <Link href="/publikasi" className="hover:text-white hover:underline transition-colors block">
                  Siaran Pers & Laporan Tahunan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Sinergi KSSK & Lembaga (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-bi-gold-400 pb-1 border-b border-white/10">
              Sinergi Lembaga Terkait
            </h4>
            <p className="text-[11px] text-slate-400">
              Komite Stabilitas Sistem Keuangan (KSSK):
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-200">
              <a
                href="https://www.kemenkeu.go.id"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between"
              >
                <span>Kemenkeu RI</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="https://www.ojk.go.id"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between"
              >
                <span>OJK</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="https://www.lps.go.id"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between"
              >
                <span>LPS</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="https://www.bi.go.id"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between"
              >
                <span>Museum BI</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[10px] text-slate-400 block mb-1 uppercase font-bold">
                Keterbukaan Informasi:
              </span>
              <Link
                href="/layanan#ppid"
                className="text-xs font-semibold text-bi-gold-300 hover:text-white inline-flex items-center gap-1"
              >
                <span>Portal PPID Bank Indonesia</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Accessibility Disclaimers */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Bank Indonesia. Hak Cipta Dilindungi Undang-Undang Republik Indonesia.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link href="/layanan" className="hover:text-white">Syarat & Ketentuan</Link>
            <Link href="/layanan" className="hover:text-white">Kebijakan Privasi</Link>
            <Link href="/layanan" className="hover:text-white">Peta Situs</Link>
            <Link href="/layanan" className="hover:text-white">Aksesibilitas</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
