"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, BarChart2, Mail, Hammer, Briefcase, TrendingUp } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import Navbar from "./Navbar";

const HERO_BG = `
  radial-gradient(ellipse 90% 70% at 15% 0%, rgba(124,58,237,0.18) 0%, transparent 55%),
  radial-gradient(ellipse 70% 50% at 85% 10%, rgba(217,70,239,0.14) 0%, transparent 50%),
  radial-gradient(ellipse 60% 60% at 60% 110%, rgba(251,146,60,0.12) 0%, transparent 55%),
  #ffffff
`;

const STAT_COLORS = [
  "linear-gradient(135deg, #7C3AED, #D946EF)",
  "linear-gradient(135deg, #D946EF, #FB923C)",
  "linear-gradient(135deg, #06B6D4, #7C3AED)",
  "linear-gradient(135deg, #10B981, #06B6D4)",
];

const CTA_BG = "linear-gradient(135deg, #F97316 0%, #D946EF 50%, #7C3AED 100%)";

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
    accent: "linear-gradient(135deg, #7C3AED, #D946EF)",
  },
  {
    Icon: Smartphone,
    title: "Web & Mobile Apps",
    description: "Build user-friendly applications that help organizations scale their impact and reach more people.",
    accent: "linear-gradient(135deg, #D946EF, #FB923C)",
  },
  {
    Icon: BarChart2,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive better decision-making and outcomes.",
    accent: "linear-gradient(135deg, #06B6D4, #7C3AED)",
  },
];

const TRACKS = [
  {
    Icon: Hammer,
    title: "Building",
    sub: "Engineering, Product & Community Impact",
    description: "Software and hardware tools that solve real problems, deployed to real users at nonprofits, hospitals, and research orgs.",
    accent: "linear-gradient(135deg, #7C3AED, #D946EF)",
  },
  {
    Icon: Briefcase,
    title: "Consulting",
    sub: "Client Work & Social Impact",
    description: "Live work with nonprofits and research labs. AI-first strategy, real deliverables, and strategic reps before you graduate.",
    accent: "linear-gradient(135deg, #D946EF, #FB923C)",
  },
  {
    Icon: TrendingUp,
    title: "Growing",
    sub: "Career & Network",
    description: "Apply AI to your major and career. Access YC founders, operators, and speakers doing work that matters.",
    accent: "linear-gradient(135deg, #06B6D4, #7C3AED)",
  },
];

export default function TTSSite() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {/* Announcement banner */}
      <div style={{ background: CTA_BG }} className="text-white text-center py-2.5 px-6 text-sm">
        Open to All: No application process required. Everyone is welcome to join and contribute.
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden" style={{ background: HERO_BG }}>
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-6">[ USC TECH FOR GOOD ]</p>
        <h1
          className="font-display font-bold tracking-tight leading-none mb-6"
          style={{
            fontSize: "clamp(52px,9vw,96px)",
            background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 40%, #FB923C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Trojan Technology<br />Solutions
        </h1>
        <p className="text-xl font-bold text-gray-800 mb-5 tracking-tight">Tech for All</p>
        <p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed mb-10">
          USC&apos;s student-run tech org delivering high-impact AI and software solutions for nonprofits, hospitals, and research labs. Completely pro bono.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/work-with-us"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-200 hover:opacity-90"
            style={{ background: CTA_BG }}
          >
            Join Our Team <ArrowRight size={15} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-300 no-underline hover:border-gray-500 transition-all duration-200"
          >
            Learn More
          </Link>
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
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-20" style={{ background: "linear-gradient(160deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">What We Do</h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Our projects span various domains, all focused on creating positive social impact through technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
            {SERVICES.map(({ Icon, title, description, accent }, i) => (
              <div
                key={title}
                className={`bg-white p-8 hover:bg-gray-50 transition-all duration-200 ${i < 2 ? "border-r border-gray-200" : ""}`}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: accent }}>
                  <Icon size={20} color="white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
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
                <span style={{ background: "linear-gradient(135deg, #7C3AED, #D946EF, #FB923C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>for Good</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Trojan Technology Solutions is USC&apos;s student-run tech consulting org. We connect talented students with nonprofits, social enterprises, and community organizations to build real technology solutions, completely pro bono.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                No experience required. No gatekeeping. Just curious people who want to use technology to make a difference.
              </p>
            </div>
            <div className="flex flex-col gap-0 border border-gray-200">
              {TRACKS.map(({ Icon, title, sub, description, accent }) => (
                <div key={title} className="p-5 border-b border-gray-200 last:border-b-0 bg-white hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ background: accent }}>
                      <Icon size={16} color="white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{title}</p>
                      <p className="text-xs text-gray-400 mb-1">{sub}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center" style={{ background: CTA_BG }}>
        <h2
          className="font-display font-bold text-white mb-4 tracking-tight"
          style={{ fontSize: "clamp(28px,4vw,48px)" }}
        >
          Ready to Make an Impact?
        </h2>
        <p className="text-base text-white/85 max-w-md mx-auto leading-relaxed mb-10">
          Join our community of passionate students using technology to create positive change. No experience required.
        </p>
        <Link
          href="/work-with-us"
          className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/70 text-white text-sm font-semibold no-underline hover:bg-white/10 transition-all duration-200"
        >
          Join Our Team <ArrowRight size={16} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="text-base font-black text-gray-900 tracking-tighter font-ui">tts</span>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@usctts.com" className="flex items-center gap-1.5 text-sm text-gray-500 no-underline hover:text-gray-900 transition-colors">
              <Mail size={14} /> hello@usctts.com
            </a>
            <a href="https://instagram.com/trojantechsolutions" className="flex items-center gap-1.5 text-sm text-gray-500 no-underline hover:text-gray-900 transition-colors">
              <InstagramIcon size={14} /> @trojantechsolutions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
