<div align="center">

# Bank Indonesia Portal - Modern Central Bank Web Platform

### *Official Web Portal of Bank Indonesia Reimagined with Next.js 14, TypeScript and Tailwind CSS*

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-2.12-22c55e?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-0.378-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

</div>

## About The Project

Bank Indonesia Portal (bi-portal-next) is an enterprise-grade modernization of the official Bank Indonesia website (bi.go.id). Engineered to deliver high performance, instant page hydration, and seamless user experience while strictly adhering to official Bank Indonesia brand guidelines:
- Primary BI Blue (#003F87)
- Deep Corporate Navy (#002B49 and #001D38)
- Gold Accent (#C5A059 and #D4AF37)
- Authentic Monogram Vector Emblem

---

## Core Features and Modules

### 1. Live Economic Indicators Ticker
- BI-Rate (6.00%): Monetary policy rate status with Lending and Deposit Facility rates.
- Inflation Rate (2.12% YoY): Consumer Price Index (IHK) within target corridor (2.5% +/- 1%).
- Foreign Reserves (USD 150.2 Billion): Equivalent to 6.5 months of imports.
- JISDOR USD/IDR (Rp 15.845,00): Real-time domestic spot rate benchmark.

### 2. Interactive Currency Calculator
- Real-time conversion across 8 major world currencies (USD, EUR, SGD, JPY, CNY, GBP, AUD, SAR) to IDR.
- Supports Middle Rate, Buy Rate, and Sell Rate computation.
- Instant swap mode and formatted Indonesian Rupiah currency output.

### 3. Monetary Market Charts (Recharts)
- Interactive Area Chart for 7-day historical JISDOR USD/IDR fluctuations.
- Multi-series Line Chart comparing BI-Rate monetary decisions vs Inflation trajectories.

### 4. Newsroom and Publication Repository
- Filterable news feeds: Press Releases (Siaran Pers), Official News, Governor Speeches, and CBP Rupiah Education.
- Dedicated document repository for Laporan Perekonomian Indonesia (LPI), Laporan Kebijakan Moneter (LKM), and Laporan Tahunan BI with direct PDF downloads.

### 5. Global Command Palette Search (Ctrl+K)
- Instant accessibility modal searching across regulations, exchange rates, press releases, and publications.

### 6. Institutional Services and BICARA 131
- 24/7 Hotline BICARA 131, WhatsApp Chatbot integration, e-Licensing portal, and PPID transparency center.

---

## Technology Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript (Type-safe financial models)
- Styling: Tailwind CSS with custom BI color tokens and glassmorphism
- Visual Data: Recharts
- Icons: Lucide-React

---

## Getting Started

`ash
# Clone the repository
git clone https://github.com/raphlv/bi-portal-next.git
cd bi-portal-next

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3010
`

---

## Developer and Maintainer

Pangeran Ryan Pahlevi
- Portfolio: https://pangeranryan.vercel.app
- GitHub: https://github.com/raphlv
- Email: pangeranryan080504@gmail.com

---

## License
Released under the MIT License. Official branding belongs to Bank Indonesia.

<!-- Last updated: 2026-09-01 14:35:44 -->
