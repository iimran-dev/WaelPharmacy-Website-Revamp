export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Divisions", href: "#divisions" },
  { label: "Partners", href: "#partners" },
  { label: "Quality", href: "#quality" },
  { label: "CSR", href: "#csr" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
] as const;

export const KPI_STATS = [
  { value: 58, suffix: "+", label: "Years of Excellence", description: "Serving Bahrain's healthcare since 1966" },
  { value: 220, suffix: "+", label: "Professionals", description: "Dedicated healthcare experts" },
  { value: 40, suffix: "+", label: "Global Brands", description: "World-class pharmaceutical partnerships" },
  { value: 1500, suffix: "+", label: "Products", description: "Comprehensive healthcare portfolio" },
  { value: 100, suffix: "+", label: "Hospital Clients", description: "Trusted by leading institutions" },
  { value: 24, suffix: "/7", label: "Support", description: "Round-the-clock service" },
] as const;

export const TIMELINE_MILESTONES = [
  { year: "1966", title: "Foundation", description: "Wael Pharmacy established in Manama, Bahrain, beginning a legacy of healthcare excellence." },
  { year: "1975", title: "First Major Partnership", description: "Secured exclusive distribution agreements with leading international pharmaceutical brands." },
  { year: "1985", title: "Expansion", description: "Expanded operations to cover all governorates of Bahrain with nationwide distribution." },
  { year: "1995", title: "Medical Devices Division", description: "Launched dedicated medical devices and equipment division for hospitals and clinics." },
  { year: "2005", title: "Laboratory Solutions", description: "Introduced comprehensive laboratory solutions and diagnostic equipment portfolio." },
  { year: "2012", title: "GDP Certification", description: "Achieved Good Distribution Practice certification, reinforcing quality commitment." },
  { year: "2018", title: "Engineering Services", description: "Expanded into healthcare engineering services, providing turnkey solutions." },
  { year: "2024", title: "Digital Transformation", description: "Launched digital inventory management and automated logistics systems." },
] as const;

export const WHY_FEATURES = [
  {
    title: "GDP Certified",
    description: "Full Good Distribution Practice certification ensuring the highest standards of pharmaceutical handling, storage, and distribution across our entire supply chain.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Cold Chain Logistics",
    description: "State-of-the-art temperature-controlled storage and transportation systems maintaining product integrity from warehouse to point of delivery.",
    icon: "Thermometer" as const,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous multi-layer quality control processes at every stage, from procurement to final delivery, ensuring pharmaceutical excellence.",
    icon: "Award" as const,
  },
  {
    title: "Regulatory Compliance",
    description: "Full compliance with Bahrain's National Health Regulatory Authority and international pharmaceutical regulations and standards.",
    icon: "FileCheck" as const,
  },
  {
    title: "Engineering Support",
    description: "Dedicated healthcare engineering team providing installation, maintenance, and technical support for medical equipment.",
    icon: "Wrench" as const,
  },
  {
    title: "Nationwide Distribution",
    description: "Comprehensive distribution network covering every healthcare facility across the Kingdom of Bahrain with reliable, timely delivery.",
    icon: "Truck" as const,
  },
] as const;

export const DIVISIONS = [
  {
    title: "Pharmaceuticals",
    description: "Comprehensive pharmaceutical distribution spanning branded generics, specialty medications, and innovative therapies from world-leading manufacturers.",
    icon: "Pill" as const,
    gradient: "from-[#0B2341] to-[#1a3a5c]",
  },
  {
    title: "Medical Devices",
    description: "Advanced medical equipment and devices for diagnostics, surgery, and patient care, supported by expert technical installation and training.",
    icon: "HeartPulse" as const,
    gradient: "from-[#0f2a4a] to-[#1e4060]",
  },
  {
    title: "Laboratory Solutions",
    description: "Complete laboratory equipment, reagents, and diagnostic solutions for clinical, research, and industrial laboratories across Bahrain.",
    icon: "Microscope" as const,
    gradient: "from-[#0d263f] to-[#1b3d5e]",
  },
  {
    title: "Consumer Healthcare",
    description: "Premium over-the-counter products, vitamins, supplements, and personal care items from trusted global brands for everyday health.",
    icon: "ShoppingBag" as const,
    gradient: "from-[#0e2844] to-[#1c3f62]",
  },
  {
    title: "Engineering Services",
    description: "Turnkey healthcare engineering solutions including equipment installation, validation, maintenance, and technical training programs.",
    icon: "Settings" as const,
    gradient: "from-[#0b2341] to-[#193a5a]",
  },
  {
    title: "Distribution & Logistics",
    description: "End-to-end supply chain management with GDP-compliant warehousing, cold chain logistics, and nationwide delivery capabilities.",
    icon: "Warehouse" as const,
    gradient: "from-[#0c2542] to-[#1a3b5d]",
  },
] as const;

export const PARTNERS = [
  { name: "Abbott", country: "USA", duration: "25+ Years" },
  { name: "Roche", country: "Switzerland", duration: "20+ Years" },
  { name: "Siemens Healthineers", country: "Germany", duration: "15+ Years" },
  { name: "Pfizer", country: "USA", duration: "30+ Years" },
  { name: "BD", country: "USA", duration: "18+ Years" },
  { name: "3M Health Care", country: "USA", duration: "20+ Years" },
  { name: "Johnson & Johnson", country: "USA", duration: "22+ Years" },
  { name: "Novartis", country: "Switzerland", duration: "15+ Years" },
  { name: "AstraZeneca", country: "UK", duration: "18+ Years" },
  { name: "Sanofi", country: "France", duration: "20+ Years" },
  { name: "Medtronic", country: "Ireland", duration: "12+ Years" },
  { name: "Philips Healthcare", country: "Netherlands", duration: "16+ Years" },
] as const;

export const WAREHOUSE_FEATURES = [
  "State-of-the-art GDP-compliant warehousing facility",
  "Temperature-controlled cold chain infrastructure (2-8°C)",
  "Automated inventory management system",
  "Real-time temperature monitoring and alerts",
  "Nationwide distribution network with GPS tracking",
  "Dedicated fleet for pharmaceutical logistics",
] as const;

export const INNOVATION_ITEMS = [
  {
    title: "Digital Inventory",
    description: "AI-powered inventory management providing real-time stock visibility, demand forecasting, and automated reorder optimization.",
    icon: "Database" as const,
  },
  {
    title: "Quality Management",
    description: "Integrated digital quality management system ensuring compliance, traceability, and automated documentation at every touchpoint.",
    icon: "ClipboardCheck" as const,
  },
  {
    title: "Logistics Automation",
    description: "Smart logistics with route optimization, fleet management, and real-time delivery tracking for maximum efficiency.",
    icon: "Route" as const,
  },
  {
    title: "Engineering Excellence",
    description: "Digital workflow management for equipment installation, preventive maintenance scheduling, and remote diagnostics.",
    icon: "Cpu" as const,
  },
] as const;

export const CORPORATE_VALUES = [
  { title: "Integrity", description: "Upholding the highest ethical standards in every business interaction and decision we make.", icon: "Shield" as const },
  { title: "Excellence", description: "Relentless pursuit of quality and continuous improvement across all our operations.", icon: "Star" as const },
  { title: "Innovation", description: "Embracing technology and creative solutions to advance healthcare delivery in Bahrain.", icon: "Lightbulb" as const },
  { title: "Care", description: "Genuine concern for patient outcomes and community wellbeing at the heart of everything we do.", icon: "Heart" as const },
  { title: "Trust", description: "Building lasting relationships through transparency, reliability, and consistent delivery on our promises.", icon: "Handshake" as const },
] as const;

export const CERTIFICATIONS = [
  {
    title: "GDP Certified",
    description: "Good Distribution Practice certification ensuring pharmaceutical quality throughout the supply chain.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "ISO 9001:2015",
    description: "International quality management system standard demonstrating our commitment to consistent quality.",
    icon: "BadgeCheck" as const,
  },
  {
    title: "Regulatory Compliance",
    description: "Full compliance with Bahrain NHRA regulations and international pharmaceutical standards.",
    icon: "FileCheck" as const,
  },
  {
    title: "Cold Chain Standards",
    description: "Validated cold chain logistics meeting WHO and international temperature control standards.",
    icon: "Thermometer" as const,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What pharmaceutical products does Wael Pharmacy distribute?",
    answer: "We distribute a comprehensive portfolio of over 1,500 products including prescription medications, medical devices, laboratory equipment, consumer healthcare products, and diagnostic solutions from 40+ global pharmaceutical brands.",
  },
  {
    question: "What is your distribution coverage across Bahrain?",
    answer: "We provide nationwide distribution coverage across all five governorates of Bahrain, serving over 100 hospital clients, clinics, pharmacies, and healthcare facilities with our dedicated logistics fleet and 24/7 support.",
  },
  {
    question: "How can my company become a distribution partner?",
    answer: "We welcome partnership enquiries from pharmaceutical manufacturers and healthcare brands. Please contact our business development team through the partnership enquiry form or email us at partnerships@waelpharmacy.com for a detailed discussion.",
  },
  {
    question: "What quality certifications does Wael Pharmacy hold?",
    answer: "We hold GDP (Good Distribution Practice) certification, ISO 9001:2015 quality management certification, and maintain full regulatory compliance with Bahrain's National Health Regulatory Authority (NHRA) and international pharmaceutical standards.",
  },
  {
    question: "Do you provide cold chain logistics for temperature-sensitive products?",
    answer: "Yes, we operate state-of-the-art cold chain infrastructure with temperature-controlled warehousing (2-8°C), validated transport containers, and real-time temperature monitoring systems ensuring product integrity throughout the supply chain.",
  },
  {
    question: "What is your customer support availability?",
    answer: "We provide 24/7 customer support with a dedicated team of professionals. Our support includes order management, technical assistance for medical equipment, regulatory guidance, and emergency supply services.",
  },
] as const;

export const NEWS_ARTICLES = [
  {
    title: "Wael Pharmacy Expands Cold Chain Infrastructure with New Facility",
    category: "Infrastructure",
    date: "2024-12-15",
    readTime: "4 min read",
    excerpt: "A new state-of-the-art cold chain facility has been commissioned, doubling our capacity for temperature-sensitive pharmaceutical storage and distribution across Bahrain.",
    image: "/images/news-1.jpg",
  },
  {
    title: "Digital Transformation Initiative Launches Across Operations",
    category: "Innovation",
    date: "2024-11-28",
    readTime: "3 min read",
    excerpt: "Our comprehensive digital transformation program introduces AI-powered inventory management, automated logistics, and real-time tracking systems across all divisions.",
    image: "/images/news-2.jpg",
  },
  {
    title: "Wael Pharmacy Receives GDP Excellence Award for Third Consecutive Year",
    category: "Awards",
    date: "2024-10-10",
    readTime: "2 min read",
    excerpt: "Recognition of our unwavering commitment to Good Distribution Practice standards and pharmaceutical supply chain excellence in the Kingdom of Bahrain.",
    image: "/images/news-3.jpg",
  },
] as const;
