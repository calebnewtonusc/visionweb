"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const CTA_BG = "linear-gradient(135deg, #99A6F9 0%, #FE885C 100%)";
const PURPLE = "#99A6F9";

const PHILOSOPHY = [
  {
    title: "Everyone can learn",
    body: "We believe technology education should be accessible to all students, regardless of their background or experience level. Through our comprehensive lecture series and dedicated mentorship program, members can develop skills in software development, data science, AI/ML, product design, and project management.",
  },
  {
    title: "Everyone can build",
    body: "There's no barrier to entry at TTS. Whether you're a first-year student just starting your tech journey or a seasoned developer, all students have the opportunity to gain hands-on experience on real consulting projects. We believe the best way to learn is by doing.",
  },
  {
    title: "Everyone can enjoy",
    body: "Technology should be used to uplift communities and create positive change. We work exclusively with social impact-oriented organizations and individuals to address their most pressing needs. Our pro bono consulting ensures that financial constraints never stand in the way of meaningful innovation.",
    cta: true,
  },
];

const VALUES = [
  {
    title: "Accessibility",
    description: "We believe technology should be accessible to all organizations, regardless of budget. That's why all our work is 100% pro bono.",
    accent: "linear-gradient(135deg, #99A6F9, #FE885C)",
  },
  {
    title: "Excellence",
    description: "We deliver professional-grade solutions with the same quality standards as top consulting firms, ensuring real impact for our partners.",
    accent: "linear-gradient(135deg, #FE885C, #99A6F9)",
  },
  {
    title: "Growth",
    description: "We create opportunities for students to develop technical and leadership skills while making a tangible difference in their community.",
    accent: "linear-gradient(135deg, #99A6F9, #FE885C)",
  },
];

export default function AboutPage() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative text-center px-6 pt-20 pb-16 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 15% 0%, rgba(153,166,249,0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 85% 10%, rgba(254,136,92,0.10) 0%, transparent 50%), #ffffff",
        }}
      >
        <h1
          className="font-bold tracking-tight leading-none mb-4"
          style={{
            fontSize: "clamp(40px,7vw,72px)",
            background: "linear-gradient(135deg, #99A6F9 0%, #FE885C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          About Us
        </h1>
        <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
          A student-run organization at USC dedicated to leveraging technology and AI for social impact.
        </p>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-20 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">[ OUR_PHILOSOPHY ]</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-16 tracking-tight">
            At TTS, Tech is for everyone.
          </h2>
          <div className="flex flex-col gap-0 border border-gray-200">
            {PHILOSOPHY.map(({ title, body, cta }) => (
              <div key={title} className="p-8 border-b border-gray-200 last:border-b-0">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-base text-gray-500 leading-relaxed mb-3">{body}</p>
                {cta && (
                  <Link href="/work-with-us" className="text-sm font-semibold no-underline" style={{ color: PURPLE }}>
                    Partner with us →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20" style={{ background: "linear-gradient(160deg, #eef0fe 0%, #fef0ea 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">What We Stand For</h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Our values guide every project we take on and every relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-gray-200 bg-gray-200">
            {VALUES.map(({ title, description, accent }) => (
              <div key={title} className="bg-white p-6">
                <div className="w-8 h-1.5 mb-4" style={{ background: accent }} />
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-10 text-center">Our Story</h2>
          <div className="flex flex-col gap-6 text-base text-gray-500 leading-relaxed">
            <p>
              Founded by USC students who saw the gap between cutting-edge technology and the organizations that needed it most, Trojan Technology Solutions has grown into a thriving community of changemakers.
            </p>
            <p>
              What started as a small group of students working on a single project has evolved into a comprehensive consulting organization, completing over 15 projects for partner organizations across education, healthcare, environmental sustainability, and social justice.
            </p>
            <p>
              Today, we continue to push the boundaries of what's possible when technology meets purpose, empowering both our student members and our community partners to achieve more together.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
