import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import EconomicTicker from '@/components/EconomicTicker';
import QuickActions from '@/components/QuickActions';
import CurrencyCalculator from '@/components/CurrencyCalculator';
import MarketCharts from '@/components/MarketCharts';
import NewsSection from '@/components/NewsSection';
import PublicationsGrid from '@/components/PublicationsGrid';
import EducationSection from '@/components/EducationSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Real-time Economic & Monetary Indicators Ticker */}
      <EconomicTicker />

      {/* 2. Hero Slider with Strategic Policy Decisions */}
      <HeroSlider />

      {/* 3. Quick Action Hub (Kalkulator, PINTAR, QRIS, Kalender) */}
      <QuickActions />

      {/* 4. Interactive Currency Calculator & Live Exchange Rates Table */}
      <CurrencyCalculator />

      {/* 5. Dynamic Market Charts (JISDOR & BI-Rate/Inflation trends) */}
      <MarketCharts />

      {/* 6. Official Newsroom & Press Releases */}
      <NewsSection />

      {/* 7. Official Publications & Research Repository */}
      <PublicationsGrid />

      {/* 8. Education Hub (CBP Rupiah & Upcoming Agendas) */}
      <EducationSection />
    </div>
  );
}
