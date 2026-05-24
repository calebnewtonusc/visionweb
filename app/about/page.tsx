"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import Navbar from "@/components/Navbar";

const GRADIENT = "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)";
const PURPLE = "#7C3AED";

const PHILOSOPHY = [
  {
    title: "Everyone can learn",
    body: "We believe technology education should be accessible to all students, regardless of their background or experience level. Through our comprehensive lecture series and dedicated mentorship program, members can develop skills in software development, data science, AI/ML, product design, and project management. Our experienced mentors provide one-on-one guidance, helping you navigate new technologies and build confidence in your abilities.",
  },
  {
    title: "Everyone can build",
    body: "There's no barrier to entry at TTS. Whether you're a first-year student just starting your tech journey or a seasoned developer, all students have the opportunity to gain hands-on experience on real consulting projects. We believe the best way to learn is by doing — our project teams work directly with clients, building solutions that make a tangible difference while developing professional skills that will serve them throughout their careers.",
  },
  {
    title: "Everyone can enjoy",
    body: "Technology should be used to uplift communities and create positive change. We work exclusively with social impact-oriented organizations and individuals to address their most pressing needs. From nonprofits expanding their reach to community groups seeking digital solutions, we partner with those who are making the world a better place. Our pro bono consulting ensures that financial constraints never stand in the way of meaningful innovation.",
    cta: true,
  },
];

const VALUES = [
  {
    title: "Accessibility",
    description: "We believe technology should be accessible to all organizations, regardless of budget. That's why all our work is 100% pro bono.",
  },
  {
    title: "Excellence",
    description: "We deliver professional-grade solutions with the same quality standards as top consulting firms, ensuring real impact for our partners.",
  },
  {
    title: "Growth",
    description: "We create opportunities for students to develop technical and leadership skills while making a tangible difference in their community.",
  },
];

export default function AboutPage() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="text-center px-6 pt-16 pb-10">
        <h1
          className="font-black tracking-tight leading-tight mb-4"
          style={{ fontSize: "clamp(40px,7vw,68px)", background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          About Us
        </h1>
        <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
          A student-run organization at USC dedicated to leveraging technology and AI for social impact.
        </p>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">[ OUR_PHILOSOPHY ]</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-14 tracking-tight">
            At TTS, Tech is for everyone.
          </h2>
          <div className="flex flex-col gap-12">
            {PHILOSOPHY.map(({ title, body, cta }) => (
              <div key={title}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
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
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">What We Stand For</h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Our values guide every project we take on and every relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VALUES.map(({ title, description }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-base font-bold mb-2" style={{ color: PURPLE }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8 text-center">Our Story</h2>
          <div className="flex flex-col gap-5 text-base text-gray-500 leading-relaxed">
            <p>
              Founded by USC students who saw the gap between cutting-edge technology and the organizations that needed it most, Trojan Tech Solutions has grown into a thriving community of changemakers.
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="text-base font-black text-gray-900 tracking-tighter">tts</span>
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
