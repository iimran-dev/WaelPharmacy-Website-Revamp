"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, X, Upload, Video, Building2, Users, Globe, Package, Award, Sparkles } from "lucide-react";
import Image from "next/image";

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
      {/* Background Building Image & Dark Blue Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Right side Building Photo */}
        <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full">
          <Image
            src="/images/hero-building.png"
            alt="Wael Pharmacy Headquarters Building"
            fill
            priority
            className="object-cover object-center lg:object-right opacity-85 sm:opacity-100"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
        </div>

        {/* Dynamic Gradient Mesh Overlays for ultra-modern look & mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041226]/90 via-[#041226]/95 to-[#041226] sm:bg-gradient-to-r sm:from-[#041226] sm:via-[#041226]/95 sm:via-[#041226]/80 sm:to-transparent w-full lg:w-[72%]" />
        
        {/* Glowing mesh light circles */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#D6A54A]/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-[#1a4a7a]/20 blur-[120px] pointer-events-none" />

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white via-white/50 to-transparent" />
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
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full mt-6 sm:mt-10 lg:mt-12 -mb-8 sm:-mb-12 lg:-mb-14 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="w-full bg-white/95 backdrop-blur-xl rounded-[20px] sm:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100/90 p-4 sm:p-6 lg:p-8"
        >
          {/* Balanced Centered Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 items-stretch justify-center">
            {HERO_KPIS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`group bg-slate-50 hover:bg-[#041226]/[0.03] border border-slate-200/70 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#D6A54A]/40 active:scale-95 flex flex-col items-center justify-center ${
                    index === 4 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  {/* Icon badge */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white text-[#041226] group-hover:text-[#D6A54A] flex items-center justify-center mb-2 sm:mb-2.5 shadow-sm border border-slate-100 transition-colors shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 stroke-[2]" />
                  </div>

                  {/* Plus_Jakarta_Sans Extra-Bold Number */}
                  <div className="font-[family-name:var(--font-jakarta)] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#041226] tracking-tight leading-none mb-1 flex items-baseline justify-center gap-0.5">
                    <span>{stat.number}</span>
                    <span className="text-[#D6A54A] font-extrabold">{stat.suffix}</span>
                  </div>

                  {/* Bold Stat Label */}
                  <div className="font-[family-name:var(--font-jakarta)] text-[11px] sm:text-xs lg:text-sm font-bold text-slate-700 tracking-tight leading-tight text-center">
                    {stat.label}
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