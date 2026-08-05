"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function ChairmanSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const quoteY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-navy overflow-hidden">
      {/* Subtle molecular pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(214,165,74,0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, rgba(214,165,74,0.2) 1px, transparent 1px)`,
          backgroundSize: "100px 100px, 150px 150px, 80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left - Portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Floating portrait card */}
              <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0">
                {/* Portrait placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c] to-[#0B2341]">
                  {/* Elegant silhouette style */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D6A54A]/20 to-[#D6A54A]/5 border-2 border-[#D6A54A]/20 mx-auto mb-6 flex items-center justify-center">
                        <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#D6A54A]/40">W</span>
                      </div>
                      <div className="w-16 h-[1px] bg-[#D6A54A]/30 mx-auto" />
                    </div>
                  </div>
                </div>
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/60 to-transparent" />
              </div>

              {/* Floating accent card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 lg:-right-8 rounded-[16px] px-6 py-4 glass-card-dark"
              >
                <span className="text-[#D6A54A] text-sm font-semibold">58+ Years</span>
                <p className="text-white/50 text-xs">of Healthcare Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Oversized quotation mark */}
            <motion.span
              style={{ y: quoteY }}
              className="font-[family-name:var(--font-playfair)] text-8xl md:text-9xl text-[#D6A54A]/20 leading-none block -mb-8"
            >
              &ldquo;
            </motion.span>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Since our founding in 1966, Wael Pharmacy has been driven by a singular mission: to ensure that every patient in Bahrain has access to the world&apos;s finest healthcare products. Our partnerships with global pharmaceutical leaders, combined with our unwavering commitment to quality and innovation, have positioned us as the Kingdom&apos;s most trusted healthcare distribution partner.
            </p>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              As we look to the future, we remain committed to investing in cutting-edge technology, expanding our capabilities, and deepening the partnerships that have been the cornerstone of our success for over five decades.
            </p>

            {/* Signature */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1px] bg-[#D6A54A]" />
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                  Chairman
                </p>
                <p className="text-[#D6A54A] text-sm mt-1">Wael Pharmacy Co. W.L.L.</p>
                {/* Signature style text */}
                <p className="font-[family-name:var(--font-playfair)] text-2xl italic text-[#D6A54A]/40 mt-2">
                  Wael Group
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}