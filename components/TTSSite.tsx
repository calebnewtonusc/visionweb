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

export default function TTSSite() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
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
          <p className="text-xs font-semibold text-gray-600 tracking-widest uppercase mb-6">[ USC TECH FOR GOOD ]</p>
          <h1
            className="font-black text-gray-900 leading-none mb-6 mx-auto"
            style={{ fontSize: "clamp(80px,16vw,160px)", letterSpacing: "0.02em" }}
          >
            TTS
          </h1>
          <p className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Trojan Technology Solutions</p>
          <p className="text-base text-gray-900 max-w-lg mx-auto leading-relaxed mb-10">
            USC&apos;s student-run tech org delivering high-impact AI and software solutions for nonprofits, hospitals, and research labs. Completely pro bono.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-200 hover:opacity-90"
              style={{ background: GRADIENT }}
            >
              Join Our Team <ArrowRight size={15} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-900 border border-gray-400 no-underline hover:bg-gray-100 transition-all duration-200"
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
      <section className="px-6 py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">What We Do</h2>
            <p className="text-base text-gray-900 max-w-md mx-auto leading-relaxed">
              Our projects span various domains, all focused on creating positive social impact through technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-gray-300">
            {SERVICES.map(({ Icon, title, description, accent }, i) => (
              <div
                key={title}
                className={`bg-white p-8 hover:bg-gray-100 transition-all duration-200 ${i < 2 ? "border-r-2 border-gray-300" : ""}`}
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
            <div className="flex flex-col gap-0 border-2 border-gray-300">
              {TRACKS.map(({ Icon, title, sub, description, accent }) => (
                <div key={title} className="p-5 border-b-2 border-gray-300 last:border-b-0 bg-white hover:bg-gray-100 transition-colors duration-150">
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
