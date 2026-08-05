"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { WAREHOUSE_FEATURES } from "@/data/siteData";
import { CheckCircle2 } from "lucide-react";

export default function WarehouseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image with parallax */}
          <motion.div
            ref={imageRef}
            style={{ scale, y }}
            className="relative rounded-[24px] overflow-hidden aspect-[4/3]"
          >
            {/* Warehouse visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2341] to-[#1a3a5c]">
              {/* Warehouse illustration using CSS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Shelves */}
                  {[...Array(4)].map((_, row) => (
                    <div key={row} className="absolute flex gap-2" style={{ top: `${15 + row * 22}%`, left: "10%", right: "10%" }}>
                      {[...Array(6)].map((_, col) => (
                        <div
                          key={col}
                          className="flex-1 h-12 rounded-[4px] bg-white/10 border border-white/5"
                          style={{
                            background: `linear-gradient(135deg, rgba(214,165,74,${0.05 + col * 0.03}), rgba(255,255,255,${0.05 + row * 0.02}))`,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                  {/* Temperature indicator */}
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-[12px] bg-white/10 backdrop-blur-sm border border-white/10">
                    <span className="text-[#D6A54A] text-sm font-mono font-bold">2-8°C</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/40 to-transparent" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#D6A54A] text-sm font-medium tracking-[0.2em] uppercase">Infrastructure</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#0B2341] mt-4 mb-6">
              Warehouse & Distribution Excellence
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our state-of-the-art GDP-compliant warehousing facility combines advanced technology with rigorous quality processes, ensuring every product reaches its destination in perfect condition.
            </p>

            {/* Checklist */}
            <div className="space-y-5">
              {WAREHOUSE_FEATURES.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D6A54A] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-[#0B2341] font-medium text-sm leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}