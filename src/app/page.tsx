"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import KPISection from "@/components/sections/KPISection";
import TimelineSection from "@/components/sections/TimelineSection";
import DivisionsSection from "@/components/sections/DivisionsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import WarehouseSection from "@/components/sections/WarehouseSection";
import ChairmanSection from "@/components/sections/ChairmanSection";
import QualitySection from "@/components/sections/QualitySection";
import NewsSection from "@/components/sections/NewsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <KPISection />
        <TimelineSection />
        <DivisionsSection />
        <PartnersSection />
        <WarehouseSection />
        <ChairmanSection />
        <QualitySection />
        <NewsSection />
        {/*<CTABanner />*/}
      </main>
      <Footer />
    </div>
  );
}