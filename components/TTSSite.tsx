"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, BarChart2, Hammer, Briefcase, TrendingUp } from "lucide-react";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

const GRADIENT = "linear-gradient(135deg, #99A6F9 0%, #F07860 100%)";
const PERIWINKLE = "#99A6F9";
const CORAL = "#F07860";

const STAT_COLORS = [
  GRADIENT,
  CORAL,
  PERIWINKLE,
  "linear-gradient(135deg, #F07860, #99A6F9)",
];

const STATS = [
  { value: "50+", label: "Active Members" },
  { value: "15+", label: "Projects Completed" },
  { value: "10+", label: "Partner Organizations" },
  { value: "100%", label: "Pro Bono Work" },
];

const SERVICES = [
  {
    Icon: Code2,
    title: "AI Solutions",
    description: "Develop machine learning models and AI tools to automate processes and unlock insights for nonprofits.",
    accent: GRADIENT,
  },
  {
    Icon: Smartphone,
    title: "Web & Mobile Apps",
    description: "Build user-friendly applications that help organizations scale their impact and reach more people.",
    accent: `linear-gradient(135deg, ${CORAL}, ${PERIWINKLE})`,
  },
  {
    Icon: BarChart2,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive better decision-making and outcomes.",
    accent: `linear-gradient(135deg, ${PERIWINKLE}, ${CORAL})`,
  },
];

const TRACKS = [
  {
    Icon: Hammer,
    title: "Building",
    sub: "Engineering, Product & Community Impact",
    description: "Software and hardware tools that solve real problems, deployed to real users at nonprofits, hospitals, and research orgs.",
    accent: GRADIENT,
  },
  {
    Icon: Briefcase,
    title: "Consulting",
    sub: "Client Work & Social Impact",
    description: "Live work with nonprofits and research labs. AI-first strategy, real deliverables, and strategic reps before you graduate.",
    accent: `linear-gradient(135deg, ${CORAL}, ${PERIWINKLE})`,
  },
  {
    Icon: TrendingUp,
    title: "Growing",
    sub: "Career & Network",
    description: "Apply AI to your major and career. Access YC founders, operators, and speakers doing work that matters.",
    accent: `linear-gradient(135deg, ${PERIWINKLE}, ${CORAL})`,
  },
];

function GlassTTS() {
  return (
    <div className="w-full max-w-2xl mx-auto mb-6" style={{ overflow: "visible" }}>
      <svg
        viewBox="0 0 540 190"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", width: "100%", height: "auto" }}
        role="img"
        aria-label="TTS"
      >
        <defs>
          <linearGradient id="gGlare" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gEdge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.6)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
          </linearGradient>
          <filter id="gDrop" x="-15%" y="-15%" width="130%" height="145%">
            <feDropShadow dx="0" dy="6" stdDeviation="20" floodColor="#99A6F9" floodOpacity="0.55" />
            <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#ffffff" floodOpacity="0.5" />
          </filter>
          <clipPath id="gTopHalf">
            <rect x="0" y="0" width="540" height="95" />
          </clipPath>
          <clipPath id="gBottomHalf">
            <rect x="0" y="95" width="540" height="95" />
          </clipPath>
        </defs>

        {/* Depth / shadow layer */}
        <g transform="translate(4, 8)">
          <text
            x="270" y="155"
            textAnchor="middle"
            fontSize="180"
            fontWeight="900"
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="-12"
            fill="rgba(153,166,249,0.25)"
          >TTS</text>
        </g>

        {/* Glass body — transparent fill, white stroke so background shows through */}
        <text
          x="270" y="155"
          textAnchor="middle"
          fontSize="180"
          fontWeight="900"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-12"
          fill="rgba(255,255,255,0.14)"
          stroke="url(#gEdge)"
          strokeWidth="3"
          paintOrder="stroke"
          filter="url(#gDrop)"
        >TTS</text>

        {/* Top glare — bright white highlight on upper half */}
        <text
          x="270" y="155"
          textAnchor="middle"
          fontSize="180"
          fontWeight="900"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-12"
          fill="url(#gGlare)"
          clipPath="url(#gTopHalf)"
          opacity="0.7"
        >TTS</text>

        {/* Bottom subtle reflection */}
        <text
          x="270" y="155"
          textAnchor="middle"
          fontSize="180"
          fontWeight="900"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-12"
          fill="rgba(255,255,255,0.08)"
          clipPath="url(#gBottomHalf)"
        >TTS</text>
      </svg>
    </div>
  );
}

export default function TTSSite() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {/* Announcement banner */}
      <div style={{ background: GRADIENT }} className="relative overflow-hidden text-white text-center py-2.5 px-6 text-sm">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
            opacity: 0.08,
            mixBlendMode: "overlay",
          }}
        />
        <span className="relative z-10">Open to All: No application process required. Everyone is welcome to join and contribute.</span>
      </div>

      <Navbar />

      {/* Hero — animated blob gradient with glass TTS */}
      <section
        className="relative text-center px-6 pt-24 pb-20 overflow-hidden bg-white"
      >
        {/* Animated color blobs — always both colors visible */}
        <div aria-hidden="true" className="hero-blob-a" />
        <div aria-hidden="true" className="hero-blob-b" />
        <div aria-hidden="true" className="hero-blob-c" />
        {/* Grain overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 300px",
            opacity: 0.08,
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative z-10">
          <p className="text-xs font-semibold text-white/70 tracking-widest uppercase mb-6">[ USC TECH FOR GOOD ]</p>
          <GlassTTS />
          <p className="text-xl font-bold text-white mb-3 tracking-tight">Trojan Technology Solutions</p>
          <p className="text-base text-white/80 max-w-lg mx-auto leading-relaxed mb-10">
            USC&apos;s student-run tech org delivering high-impact AI and software solutions for nonprofits, hospitals, and research labs. Completely pro bono.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-white no-underline transition-all duration-200 hover:opacity-90"
              style={{ color: CORAL }}
            >
              Join Our Team <ArrowRight size={15} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/50 no-underline hover:bg-white/10 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20 bg-white">
        <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-12">[ IMPACT_METRICS ]</p>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }, i) => (
            <div key={label}>
              <p
                className="font-black leading-none mb-2"
                style={{
                  fontSize: "clamp(36px,5vw,56px)",
                  letterSpacing: "-0.04em",
                  background: STAT_COLORS[i],
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </p>
              <p className="text-sm text-gray-700">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">What We Do</h2>
            <p className="text-base text-gray-900 max-w-md mx-auto leading-relaxed">
              Our projects span various domains, all focused on creating positive social impact through technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-gray-200">
            {SERVICES.map(({ Icon, title, description, accent }, i) => (
              <div
                key={title}
                className={`bg-white p-8 hover:bg-gray-50 transition-all duration-200 ${i < 2 ? "border-r-2 border-gray-200" : ""}`}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: accent }}>
                  <Icon size={20} color="white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-900 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Tracks */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">[ ABOUT_US ]</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">
                Building Tech<br />
                <span style={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>for Good</span>
              </h2>
              <p className="text-base text-gray-900 leading-relaxed mb-4">
                Trojan Technology Solutions is USC&apos;s student-run tech consulting org. We connect talented students with nonprofits, social enterprises, and community organizations to build real technology solutions, completely pro bono.
              </p>
              <p className="text-base text-gray-900 leading-relaxed">
                No experience required. No gatekeeping. Just curious people who want to use technology to make a difference.
              </p>
            </div>
            <div className="flex flex-col gap-0 border-2 border-gray-200">
              {TRACKS.map(({ Icon, title, sub, description, accent }) => (
                <div key={title} className="p-5 border-b-2 border-gray-200 last:border-b-0 bg-white hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ background: accent }}>
                      <Icon size={16} color="white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{title}</p>
                      <p className="text-xs text-gray-400 mb-1">{sub}</p>
                      <p className="text-sm text-gray-900 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
