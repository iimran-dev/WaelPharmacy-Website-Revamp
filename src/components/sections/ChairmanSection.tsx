"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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
        {/* 3-Column Grid: Text Left - Founder Photo Center - Text & Signature Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: First Paragraph & Quote Mark */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 text-left order-1"
          >
            {/* Oversized quotation mark */}
            <motion.span
              style={{ y: quoteY }}
              className="font-[family-name:var(--font-playfair)] text-7xl md:text-8xl text-[#D6A54A]/20 leading-none block -mb-6"
            >
              &ldquo;
            </motion.span>

            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              Chairman&apos;s Message
            </h3>

            <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal">
              Since our founding in 1966, Wael Pharmacy has been driven by a singular mission: to ensure that every patient in Bahrain has access to the world&apos;s finest healthcare products. Our partnerships with global pharmaceutical leaders, combined with our unwavering commitment to quality and innovation, have positioned us as the Kingdom&apos;s most trusted healthcare distribution partner.
            </p>
          </motion.div>

          {/* Center Column: Founder Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center order-2 my-4 lg:my-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Portrait Card */}
              <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] w-full shadow-2xl border border-white/10">
                <Image
                  src="/images/founder.png"
                  alt="Abdulrahman Almulumeri - Chairman & MD"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Experience Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-2 sm:-right-4 rounded-2xl px-5 py-3.5 glass-card-dark shadow-xl border border-white/10"
              >
                <span className="block text-[#D6A54A] text-sm font-bold">
                  58+ Years
                </span>
                <p className="text-white/70 text-xs">
                  of Healthcare Excellence
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Second Paragraph & Signature */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 text-left order-3"
          >
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 font-normal">
              As we look to the future, we remain committed to investing in cutting-edge technology, expanding our capabilities, and deepening the partnerships that have been the cornerstone of our success for over five decades.
            </p>

            {/* Signature Block */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <div className="w-12 h-[1px] bg-[#D6A54A] shrink-0" />
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold text-white">
                  Abdulrahman Almulumeri
                </p>
                <p className="text-[#D6A54A] text-xs sm:text-sm font-medium mt-0.5">
                  Chairman & MD, Wael Pharmacy Co. W.L.L.
                </p>
                <p className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl italic text-[#D6A54A]/40 mt-1.5">
                  Abdulrahman Almulumeri
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}