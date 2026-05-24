"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, BarChart2, Mail, Instagram } from "lucide-react";
import Navbar from "./Navbar";

const GRADIENT = "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)";
const PURPLE = "#7C3AED";

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
    description:
      "Develop machine learning models and AI tools to automate processes and unlock insights for nonprofits.",
    iconColor: "#7C3AED",
    iconBg: "#F3EFFE",
  },
  {
    Icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Build user-friendly applications that help organizations scale their impact and reach more people.",
    iconColor: "#D946EF",
    iconBg: "#FDF4FF",
  },
  {
    Icon: BarChart2,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights that drive better decision-making and outcomes.",
    iconColor: "#7C3AED",
    iconBg: "#F3EFFE",
  },
];

export default function TTSSite() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {/* Announcement banner */}
      <div
        style={{ background: GRADIENT }}
        className="text-white text-center py-2.5 px-6 text-sm font-medium"
      >
        Open to All: No application process required — everyone is welcome to join and contribute!
      </div>

      <Navbar />

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-14">
        <h1
          className="font-black tracking-tight leading-tight mb-6"
          style={{
            fontSize: "clamp(48px,8vw,80px)",
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Trojan Technology
          <br />
          Solutions
        </h1>
        <p className="text-2xl font-extrabold text-gray-900 mb-5 tracking-tight">tech for all</p>
        <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          We use cutting-edge technology and artificial intelligence to deliver high-impact
          consulting projects for social good organizations.
        </p>
      </section>

      {/* Stats */}
      <section className="px-6 pb-16">
        <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-9">
          [ IMPACT_METRICS ]
        </p>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p
                className="font-black leading-none mb-2"
                style={{
                  fontSize: "clamp(36px,5vw,52px)",
                  color: PURPLE,
                  letterSpacing: "-0.04em",
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
      <section className="px-6 pb-20 bg-gray-50">
        <div className="max-w-5xl mx-auto pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              What We Do
            </h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Our projects span various domains, all focused on creating positive social impact
              through technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.map(({ Icon, title, description, iconColor, iconBg }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: iconBg }}
                >
                  <Icon size={22} color={iconColor} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center" style={{ background: GRADIENT }}>
        <h2
          className="font-black text-white mb-4 tracking-tight"
          style={{ fontSize: "clamp(28px,4vw,44px)" }}
        >
          Ready to Make an Impact?
        </h2>
        <p className="text-base text-white/85 max-w-md mx-auto leading-relaxed mb-9">
          Join our community of passionate students using technology to create positive change. No
          experience required — just bring your enthusiasm!
        </p>
        <Link
          href="/work-with-us"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/70 text-white text-sm font-bold no-underline hover:bg-white/10 transition-all duration-200"
        >
          Join Our Team <ArrowRight size={16} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="text-base font-black text-gray-900 tracking-tighter">tts</span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@usctts.com"
              className="flex items-center gap-1.5 text-sm text-gray-500 no-underline hover:text-gray-900 transition-colors"
            >
              <Mail size={14} /> hello@usctts.com
            </a>
            <a
              href="https://instagram.com/trojantechsolutions"
              className="flex items-center gap-1.5 text-sm text-gray-500 no-underline hover:text-gray-900 transition-colors"
            >
              <Instagram size={14} /> @trojantechsolutions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
