"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import KPISection from "@/components/sections/KPISection";
import TimelineSection from "@/components/sections/TimelineSection";
import WhySection from "@/components/sections/WhySection";
import DivisionsSection from "@/components/sections/DivisionsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import WarehouseSection from "@/components/sections/WarehouseSection";
import InnovationSection from "@/components/sections/InnovationSection";
import ChairmanSection from "@/components/sections/ChairmanSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CSRSection from "@/components/sections/CSRSection";
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
        <WhySection />
        <DivisionsSection />
        <PartnersSection />
        <WarehouseSection />
        <InnovationSection />
        <ChairmanSection />
        <ValuesSection />
        <CSRSection />
        <QualitySection />
        <NewsSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}