"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 bg-gradient-navy overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#D6A54A]/5 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#D6A54A]/5 blur-3xl"
      />
      {/* Gradient border container */}
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-[32px] p-1"
          style={{
            background: "linear-gradient(135deg, rgba(214,165,74,0.4), rgba(214,165,74,0.05), rgba(214,165,74,0.4))",
          }}
        >
          <div className="rounded-[30px] px-8 md:px-16 py-16 md:py-20 bg-[#0B2341] text-center relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, rgba(214,165,74,0.15), transparent 60%)",
              }}
            />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Let&apos;s Build Better{" "}
                <span className="text-gradient-gold">Healthcare</span>{" "}
                Together
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-white/60 max-w-xl mx-auto mb-10"
              >
                Partner with Bahrain&apos;s most trusted healthcare distribution company. Together, we can deliver exceptional healthcare outcomes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <MagneticButton className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[24px] bg-gradient-to-r from-[#D6A54A] to-[#b8872e] text-[#0B2341] font-semibold text-base overflow-hidden hover:shadow-[0_0_40px_rgba(214,165,74,0.3)] transition-shadow duration-300">
                  <span className="relative z-10">Partnership Enquiry</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e4be7a] to-[#D6A54A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </MagneticButton>

                <MagneticButton className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[24px] border border-white/20 bg-white/5 text-white font-medium text-base hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                  <span>Contact Sales</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}