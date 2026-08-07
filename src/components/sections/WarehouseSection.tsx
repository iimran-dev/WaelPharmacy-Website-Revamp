"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/utils/basePath";
import {
  ShieldCheck,
  Globe,
  Thermometer,
  Award,
  Headphones,
  FileCheck,
  Building2,
  CheckCircle2,
  Users
} from "lucide-react";

const WHY_PARTNER_FEATURES = [
  {
    icon: ShieldCheck,
    title: "GDP Certified",
    description: "Ensuring global standards in every process.",
  },
  {
    icon: Globe,
    title: "Nationwide Network",
    description: "Strong distribution across Bahrain.",
  },
  {
    icon: Thermometer,
    title: "Cold Chain Experts",
    description: "Advanced cold storage and logistics.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality control at every step.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Expert team always ready to help.",
  },
  {
    icon: FileCheck,
    title: "Ethical & Compliant",
    description: "Committed to integrity and compliance.",
  },
];

export default function WarehouseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="why-warehouse" ref={containerRef} className="relative py-20 lg:py-32 bg-[#FAFBFD] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#D6A54A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#06182E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Why Partner With Wael Text & 6 Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6 text-left"
          >
            {/* Tagline */}
            <div className="text-[#D6A54A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              WHY PARTNER WITH WAEL
            </div>

            {/* Headline */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#06182E] leading-[1.18] mb-8 lg:mb-12">
              Built on Quality.
              <br />
              <span className="text-[#06182E]">Driven by Trust.</span>
            </h2>

            {/* 6 Features Grid (2 Columns x 3 Rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {WHY_PARTNER_FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Icon in light rounded box */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100/90 group-hover:bg-[#D6A54A]/10 text-[#06182E] group-hover:text-[#D6A54A] flex items-center justify-center shrink-0 border border-slate-200/60 transition-colors duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
                    </div>

                    <div>
                      <h3 className="text-[#06182E] font-bold text-sm sm:text-base mb-1 group-hover:text-[#D6A54A] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Warehouse Image + Floating Dark Card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[28px] lg:rounded-[36px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[520px] group">
              
              {/* Warehouse High-Res Facility Image */}
              <Image
                src={assetPath("/images/Warehouse-image.png")}
                alt="Wael Pharmacy State of the Art Warehouse Facility"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Subtle gradient shadow over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/50 via-transparent to-transparent pointer-events-none" />

              {/* Temperature Live Status Badge (Top-Left overlay) */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-[#06182E]/85 backdrop-blur-md border border-white/15 text-white shadow-lg">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-white/90">
                  <span className="hidden sm:inline">GDP Certified Facility • </span>2°C to 8°C Monitored
                </span>
              </div>

              {/* Floating Dark Navy Card on Bottom-Right (Scaled for mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-3 right-3 left-3 sm:bottom-6 sm:right-6 sm:left-auto sm:w-[280px] lg:w-[300px] bg-[#06182E]/95 backdrop-blur-xl border border-white/15 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 lg:p-6 text-white shadow-xl sm:shadow-2xl"
              >
                {/* Title */}
                <h4 className="font-[family-name:var(--font-playfair)] text-sm sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 leading-snug">
                  Excellence You Can Rely On
                </h4>

                {/* Team Avatars + Badge */}
                <div className="flex items-center -space-x-2 sm:-space-x-2.5 mb-2 sm:mb-3">
                  {/* Avatar 1 */}
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-600 border-2 border-[#06182E] flex items-center justify-center font-bold text-[10px] sm:text-xs text-white">
                    WP
                  </div>
                  {/* Avatar 2 */}
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-600 border-2 border-[#06182E] flex items-center justify-center font-bold text-[10px] sm:text-xs text-white">
                    DR
                  </div>
                  {/* Avatar 3 */}
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-teal-400 to-emerald-600 border-2 border-[#06182E] flex items-center justify-center font-bold text-[10px] sm:text-xs text-white">
                    MD
                  </div>
                  {/* Avatar 4 */}
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-rose-400 to-pink-600 border-2 border-[#06182E] flex items-center justify-center font-bold text-[10px] sm:text-xs text-white">
                    QA
                  </div>

                  {/* Gold Badge */}
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#D6A54A] text-[#06182E] font-extrabold text-[10px] sm:text-xs flex items-center justify-center border-2 border-[#06182E] shadow-sm">
                    +220
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-[10px] sm:text-xs text-white/70 font-medium leading-normal">
                  Professionals dedicated to your health
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}