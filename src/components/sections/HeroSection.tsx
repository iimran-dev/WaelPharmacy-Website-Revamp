"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Play, X, Upload, Video, Building2, Users, Globe, Package, Award, Sparkles } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/utils/basePath";

function AnimatedCounter({ value, duration = 2.2 }: { value: string; duration?: number }) {
  const numericValue = parseInt(value.replace(/,/g, ""), 10);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView || isNaN(numericValue)) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * numericValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, numericValue, duration]);

  return <span ref={ref}>{isInView ? count.toLocaleString() : "0"}</span>;
}

const HERO_KPIS = [
  {
    icon: Award,
    number: "58",
    suffix: "+",
    label: "Years of Legacy",
  },
  {
    icon: Users,
    number: "220",
    suffix: "+",
    label: "Professionals",
  },
  {
    icon: Globe,
    number: "40",
    suffix: "+",
    label: "Global Partners",
  },
  {
    icon: Package,
    number: "1500",
    suffix: "+",
    label: "Products",
  },
  {
    icon: Building2,
    number: "100",
    suffix: "+",
    label: "Hospital Clients",
  },
];

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [customVideoName, setCustomVideoName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setCustomVideoName(file.name);
      setIsVideoOpen(true);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen bg-[#041226] overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 flex flex-col justify-between">
      {/* Background Building Image & Mild Left Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#041226]">
        {/* Full-bleed max resolution high-quality background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={assetPath("/images/Hero-image.png")}
            alt="Wael Pharmacy Headquarters Building"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center lg:object-right opacity-95 sm:opacity-100"
            sizes="100vw"
          />
        </div>

        {/* Mild Navy Gradient Overlay on the Left Side Only for text legibility */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-gradient-to-r from-[#041226] via-[#041226]/85 sm:via-[#041226]/60 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#041226]/60 to-transparent z-10" />

        {/* Ambient glow accent */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#D6A54A]/10 blur-[100px] pointer-events-none z-10" />

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white via-white/40 to-transparent z-10" />
      </div>

      {/* Hidden File Input for Video Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleVideoUpload}
        accept="video/*"
        className="hidden"
      />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Top Badge: SINCE 1966 */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D6A54A]/10 border border-[#D6A54A]/25 text-[#D6A54A] text-xs font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54A] animate-pulse" />
                <span>SINCE 1966</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.18] mb-4 sm:mb-6 tracking-tight">
                Delivering
                <br />
                Healthcare <span className="text-[#D6A54A] font-serif italic font-normal">Excellence</span>
                <br />
                Across Bahrain
              </h1>

              {/* Subheadline Paragraph */}
              <p className="text-white/85 text-sm sm:text-base lg:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed font-medium">
                For over 58 years, Wael Pharmacy has been a trusted partner in health - distributing quality pharmaceutical, medical, and laboratory products with integrity and care.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center">
                <a
                  href="#divisions"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#D6A54A] hover:bg-[#c59439] text-[#041226] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#D6A54A]/20 hover:scale-[1.02] text-center"
                >
                  <span>Our Divisions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl border border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:border-white/50 text-center"
                >
                  <span>Become Our Partner</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Watch Our Story Video Trigger */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end my-4 sm:my-6 lg:my-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative flex items-center gap-4 group bg-black/25 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-white/10 sm:border-0 backdrop-blur-sm sm:backdrop-blur-none"
            >
              {/* Play Button Circle */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="relative flex items-center justify-center w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full border-2 border-white/80 bg-black/40 backdrop-blur-md text-white transition-all duration-300 group-hover:scale-110 group-hover:border-[#D6A54A] group-hover:bg-[#041226]/70 shadow-2xl shrink-0"
                aria-label="Play Video"
              >
                <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-white text-white ml-1 group-hover:text-[#D6A54A] group-hover:fill-[#D6A54A] transition-colors" />

                {/* Outer pulse animation */}
                <span className="absolute -inset-2 rounded-full border border-white/30 animate-ping opacity-40 pointer-events-none" />
              </button>

              {/* Text label beside play button */}
              <div className="flex flex-col text-left">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="text-white font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wide drop-shadow-md hover:text-[#D6A54A] transition-colors"
                >
                  Watch Our Story
                </button>

                {/* Upload custom video option */}
                <button
                  onClick={triggerUpload}
                  className="inline-flex items-center gap-1.5 text-xs text-[#D6A54A] font-semibold hover:text-white mt-1 transition-colors"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{customVideoName ? `Video: ${customVideoName.slice(0, 15)}...` : "Upload Custom Video"}</span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating KPI Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-10 lg:mt-12 -mb-10 sm:-mb-14 lg:-mb-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-slate-100 p-4 sm:p-6 lg:py-7 lg:px-8"
        >
          {/* 5-Column Responsive Horizontal Card Grid matching reference image */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 lg:gap-6 items-center">
            {HERO_KPIS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 sm:gap-3.5 lg:gap-4 p-2 sm:p-2.5 rounded-2xl transition-all duration-300 hover:bg-slate-50/80 ${index === 4 ? "col-span-2 sm:col-span-1 justify-center sm:justify-start" : ""
                    }`}
                >
                  {/* Soft Light Blue Icon Box matching reference image */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#EEF4F9] text-[#0B2545] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>

                  {/* Text Container: Bold Dark Number & Gray Label */}
                  <div className="flex flex-col text-left justify-center min-w-0">
                    <div className="font-[family-name:var(--font-jakarta)] text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-none mb-1 flex items-baseline">
                      <span>
                        <AnimatedCounter value={stat.number} />
                      </span>
                      <span>{stat.suffix}</span>
                    </div>

                    <div className="text-xs sm:text-sm font-medium text-slate-500 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl bg-[#041226] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#041226]">
                <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                  <Video className="w-4 h-4 sm:w-5 sm:h-5 text-[#D6A54A]" />
                  <span>Wael Pharmacy Corporate Video</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={triggerUpload}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#D6A54A]" />
                    <span className="hidden sm:inline">Upload New Video</span>
                    <span className="sm:hidden">Upload</span>
                  </button>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                {videoUrl ? (
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center p-6 sm:p-8">
                    <Video className="w-12 h-12 sm:w-16 sm:h-16 text-[#D6A54A]/60 mx-auto mb-3 sm:mb-4 animate-pulse" />
                    <h3 className="text-white text-base sm:text-lg font-bold mb-2">Corporate Video Holder</h3>
                    <p className="text-white/60 text-xs sm:text-sm max-w-md mx-auto mb-5 sm:mb-6">
                      Upload your corporate video file (.mp4, .webm) to showcase Wael Pharmacy&apos;s story.
                    </p>
                    <button
                      onClick={triggerUpload}
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-[#D6A54A] hover:bg-[#c59439] text-[#041226] font-extrabold text-xs sm:text-sm transition-all shadow-md"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Select Video File</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}