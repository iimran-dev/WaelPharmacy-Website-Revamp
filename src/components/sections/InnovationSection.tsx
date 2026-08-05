"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { INNOVATION_ITEMS } from "@/data/siteData";
import { Database, ClipboardCheck, Route, Cpu, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Database,
  ClipboardCheck,
  Route,
  Cpu,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function InnovationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">Technology</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#0B2341] mt-4 mb-4">
            Innovation & Technology
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technology to transform healthcare distribution, quality management, and operational excellence.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {INNOVATION_ITEMS.map((item) => {
            const IconComp = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative rounded-[24px] p-8 md:p-10 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-[24px] border border-transparent group-hover:border-[#D6A54A]/30 transition-colors duration-500" />

                {/* Corner glow on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#D6A54A]/0 group-hover:bg-[#D6A54A]/10 blur-2xl transition-all duration-700" />

                <div className="relative z-10">
                  {/* Icon with glow */}
                  <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0B2341]/5 to-[#D6A54A]/10 flex items-center justify-center mb-8 group-hover:shadow-[0_0_30px_rgba(214,165,74,0.15)] transition-shadow duration-500">
                    {IconComp && <IconComp className="w-7 h-7 text-[#0B2341] group-hover:text-[#D6A54A] transition-colors duration-300" strokeWidth={1.5} />}
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2341] mb-3 font-[family-name:var(--font-playfair)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}