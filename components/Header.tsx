'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  ShieldCheck,
  CreditCard,
  Banknote,
  BarChart3,
  BookOpen,
  FileSpreadsheet,
  FileCheck,
  Headphones,
  Award,
  Users,
  Compass,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import LogoBI from './LogoBI';
import SearchModal from './SearchModal';

export default function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const megaMenus = [
    {
      id: 'tentang-bi',
      label: 'Tentang BI',
      href: '/tentang-bi',
      sections: [
        {
          title: 'Kelembagaan & Profil',
          items: [
            { name: 'Profil Bank Indonesia', desc: 'Visi, misi, dan nilai strategis bank sentral', href: '/tentang-bi' },
            { name: 'Dewan Gubernur', desc: 'Struktur pimpinan dan profil anggota dewan', href: '/tentang-bi#dewan-gubernur' },
            { name: 'Struktur Organisasi', desc: 'Satuan kerja kantor pusat & regional', href: '/tentang-bi#organisasi' },
          ]
        },
        {
          title: 'Sejarah & Jaringan',
          items: [
            { name: 'Kantor Perwakilan (KPw)', desc: '46 KPw dalam negeri dan 5 kantor luar negeri', href: '/tentang-bi#kpw' },
            { name: 'Museum Bank Indonesia', desc: 'Warisan sejarah perbankan dan numismatik', href: '/layanan#museum' },
            { name: 'Transformasi & Governance', desc: 'Penguatan tata kelola dan reformasi birokrasi', href: '/tentang-bi#transformasi' },
          ]
        }
      ]
    },
    {
      id: 'fungsi-utama',
      label: 'Fungsi Utama',
      href: '/moneter',
      sections: [
        {
          title: 'Stabilitas Moneter & Makroprudensial',
          items: [
            { name: 'Kebijakan Moneter & BI-Rate', desc: 'Penetapan suku bunga dan operasi moneter', href: '/moneter' },
            { name: 'Stabilitas Sistem Keuangan (SSK)', desc: 'Pengawasan makroprudensial dan ketahanan perbankan', href: '/moneter#makroprudensial' },
            { name: 'Pengendalian Inflasi', desc: 'Strategi 4K bersama Tim Pengendalian Inflasi (TPIP/TPID)', href: '/moneter#inflasi' },
          ]
        },
        {
          title: 'Sistem Pembayaran & Rupiah',
          items: [
            { name: 'QRIS & BI-FAST', desc: 'Standardisasi pembayaran digital dan transfer seketika', href: '/sistem-pembayaran' },
            { name: 'Pengelolaan Uang Rupiah', desc: 'Emisi, ciri keaslian, dan edukasi CBP Rupiah', href: '/rupiah' },
            { name: 'Proyek Garuda (Digital Rupiah)', desc: 'Pengembangan Central Bank Digital Currency (CBDC)', href: '/sistem-pembayaran#cbdc' },
          ]
        }
      ]
    },
    {
      id: 'statistik',
      label: 'Statistik & Data',
      href: '/kurs',
      sections: [
        {
          title: 'Pasar Keuangan & Valuta Asing',
          items: [
            { name: 'Kurs JISDOR & Transaksi Valas', desc: 'Nilai tukar referensi resmi USD/IDR dan valas utama', href: '/kurs' },
            { name: 'Kalkulator Konversi Kurs', desc: 'Alat bantu hitung nilai transaksi valuta asing', href: '/kurs#calculator' },
            { name: 'Pasar Uang & SBN/SRBI', desc: 'Data yield, suku bunga pasar uang antaronline', href: '/kurs#pasar-uang' },
          ]
        },
        {
          title: 'Indikator Ekonomi Makro',
          items: [
            { name: 'Statistik Ekonomi dan Keuangan (SEKI)', desc: 'Basis data terpadu ekonomi makro dan perbankan', href: '/kurs#seki' },
            { name: 'Cadangan Devisa & Posisi Investasi', desc: 'Laporan bulanan posisi cadangan devisa internasional', href: '/kurs#cadangan-devisa' },
            { name: 'Utang Luar Negeri (SULNI)', desc: 'Statistik posisi dan rasio utang luar negeri Indonesia', href: '/kurs#sulni' },
          ]
        }
      ]
    },
    {
      id: 'publikasi',
      label: 'Publikasi & Riset',
      href: '/publikasi',
      sections: [
        {
          title: 'Siaran Resmi & Berita',
          items: [
            { name: 'Siaran Pers Resmi', desc: 'Pernyataan kebijakan dan pengumuman hasil RDG', href: '/publikasi' },
            { name: 'Pidato & Sambutan', desc: 'Arahan pimpinan dewan gubernur pada forum resmi', href: '/publikasi?tab=Pidato' },
            { name: 'Berita & Info Terkini', desc: 'Kabar kegiatan dan inisiatif Bank Indonesia terkini', href: '/publikasi?tab=Berita' },
          ]
        },
        {
          title: 'Laporan Utama & Kajian',
          items: [
            { name: 'Laporan Perekonomian Indonesia (LPI)', desc: 'Laporan tahunan komprehensif ekonomi nasional', href: '/publikasi#lpi' },
            { name: 'Laporan Kebijakan Moneter (LKM)', desc: 'Asesmen triwulanan dinamika moneter dan inflasi', href: '/publikasi#lkm' },
            { name: 'Kajian Stabilitas Keuangan (KSK)', desc: 'Laporan semesteran ketahanan sistem finansial', href: '/publikasi#ksk' },
          ]
        }
      ]
    },
    {
      id: 'regulasi',
      label: 'Regulasi',
      href: '/regulasi',
      sections: [
        {
          title: 'Ketentuan Hukum Bank Indonesia',
          items: [
            { name: 'Peraturan Bank Indonesia (PBI)', desc: 'Regulasi tertinggi yang diterbitkan Bank Indonesia', href: '/regulasi' },
            { name: 'Peraturan Anggota Dewan Gubernur (PADG)', desc: 'Ketentuan teknis dan petunjuk pelaksanaan PBI', href: '/regulasi?type=PADG' },
            { name: 'Surat Edaran (SE) BI', desc: 'Petunjuk teknis operasional bagi industri perbankan', href: '/regulasi?type=SE' },
          ]
        },
        {
          title: 'Transparansi & Konsultasi',
          items: [
            { name: 'Konsultasi Publik Regulasi', desc: 'Partisipasi publik dalam perumusan kebijakan baru', href: '/regulasi#konsultasi' },
            { name: 'FAQ Ketentuan Hukum', desc: 'Penjelasan umum seputar regulasi sistem pembayaran', href: '/regulasi#faq' },
          ]
        }
      ]
    },
    {
      id: 'layanan',
      label: 'Layanan & BICARA',
      href: '/layanan',
      sections: [
        {
          title: 'Layanan Publik Terpadu',
          items: [
            { name: 'Contact Center BICARA 131', desc: 'Layanan informasi, pengaduan konsumen, & chat', href: '/layanan' },
            { name: 'PINTAR BI (Penukaran Uang)', desc: 'Pemesanan kas keliling dan penukaran uang baru', href: '/rupiah' },
            { name: 'e-Licensing Perizinan', desc: 'Portal pengajuan izin penyelenggara jasa pembayaran', href: '/layanan#elicensing' },
          ]
        },
        {
          title: 'Akses Informasi & Publik',
          items: [
            { name: 'PPID (Keterbukaan Informasi)', desc: 'Permohonan informasi publik sesuai UU KIP', href: '/layanan#ppid' },
            { name: 'Karier & Rekrutmen (PCBI)', desc: 'Pendidikan Calon Asisten Manajer & Pegawai BI', href: '/layanan#karier' },
            { name: 'Perpustakaan & Riset Terbuka', desc: 'Katalog literatur ekonomi dan ruang riset publik', href: '/layanan#perpustakaan' },
          ]
        }
      ]
    }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-bi-md border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Bank Indonesia Logo */}
            <LogoBI variant="dark" size={isScrolled ? 'sm' : 'md'} />

            {/* Desktop Navigation Mega-Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {megaMenus.map((menu) => {
                const isActive = pathname.startsWith(menu.href);
                const isHovered = activeMegaMenu === menu.id;

                return (
                  <div
                    key={menu.id}
                    className="relative"
                    onMouseEnter={() => setActiveMegaMenu(menu.id)}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                  >
                    <Link
                      href={menu.href}
                      className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                        isActive || isHovered
                          ? 'text-bi-blue-700 bg-bi-blue-50'
                          : 'text-slate-700 hover:text-bi-blue-800 hover:bg-slate-50'
                      }`}
                    >
                      <span>{menu.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isHovered ? 'rotate-180 text-bi-blue-700' : 'text-slate-400'
                        }`}
                      />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {isHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-white rounded-2xl shadow-bi-lg border border-slate-200 p-5 z-50 animate-fadeIn select-none">
                        <div className="grid grid-cols-2 gap-6">
                          {menu.sections.map((sec, idx) => (
                            <div key={idx} className="space-y-3">
                              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-bi-gold-700 pb-1.5 border-b border-slate-100 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-bi-gold-500"></span>
                                {sec.title}
                              </h4>
                              <ul className="space-y-2.5">
                                {sec.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      href={item.href}
                                      className="group block rounded-lg p-1.5 -mx-1.5 hover:bg-bi-blue-50/70 transition-colors"
                                      onClick={() => setActiveMegaMenu(null)}
                                    >
                                      <span className="text-xs font-bold text-slate-800 group-hover:text-bi-blue-700 flex items-center justify-between">
                                        {item.name}
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-bi-blue-600 transition-all -translate-x-1 group-hover:translate-x-0" />
                                      </span>
                                      <p className="text-[11px] text-slate-500 group-hover:text-slate-600 mt-0.5 line-clamp-1">
                                        {item.desc}
                                      </p>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Dropdown Bottom Banner */}
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/80 -mx-5 -mb-5 px-5 py-3 rounded-b-2xl">
                          <span className="text-[11px] text-slate-500">
                            Portal Resmi Informasi Kebijakan Bank Sentral
                          </span>
                          <Link
                            href={menu.href}
                            onClick={() => setActiveMegaMenu(null)}
                            className="text-[11px] font-bold text-bi-blue-700 hover:text-bi-blue-900 flex items-center gap-1"
                          >
                            Jelajahi {menu.label} <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Header Right Actions: Global Search & Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              {/* Search Button (Triggers SearchModal) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-bi-blue-50 text-slate-600 hover:text-bi-blue-700 border border-slate-200/80 transition-all text-xs font-medium focus:outline-none"
                title="Cari regulasi, kurs, berita (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-bi-blue-700" />
                <span className="hidden sm:inline">Pencarian...</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-bold text-slate-400 bg-white rounded border border-slate-200">
                  ⌘K
                </kbd>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-bi-blue-800 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu navigasi"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto animate-fadeIn">
            {megaMenus.map((menu) => (
              <div key={menu.id} className="border-b border-slate-100 pb-3">
                <Link
                  href={menu.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-bi-blue-800 flex items-center justify-between py-1"
                >
                  <span>{menu.label}</span>
                  <ArrowRight className="w-4 h-4 text-bi-gold-600" />
                </Link>
                <div className="grid grid-cols-1 gap-1.5 mt-2 pl-2 border-l-2 border-bi-blue-100">
                  {menu.sections.flatMap((s) => s.items).slice(0, 4).map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-600 hover:text-bi-blue-700 py-1"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Global Search Modal Component */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
