"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Palette,
  Users,
  MessageSquare,
  CheckCircle,
  Mail,
  Instagram,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const GRADIENT = "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)";
const PURPLE = "#7C3AED";

const ROLES = [
  {
    Icon: Code2,
    title: "Developers & Engineers",
    description:
      "Build real-world applications using modern tech stacks. Work on full-stack web apps, mobile solutions, and AI/ML projects.",
    tags: ["React", "Python", "Node.js", "Machine Learning"],
  },
  {
    Icon: Palette,
    title: "Designers & Product",
    description:
      "Create intuitive user experiences and beautiful interfaces. Lead product strategy and design thinking workshops.",
    tags: ["UI/UX Design", "Figma", "User Research", "Product Strategy"],
  },
  {
    Icon: Users,
    title: "Project Managers",
    description:
      "Coordinate teams, manage timelines, and ensure successful project delivery. Interface directly with clients.",
    tags: ["Agile", "Communication", "Stakeholder Management", "Planning"],
  },
  {
    Icon: MessageSquare,
    title: "Business & Strategy",
    description:
      "Work on client relationships, marketing, and organizational growth. Help us expand our impact and reach.",
    tags: ["Marketing", "Strategy", "Partnerships", "Communications"],
  },
];

const WHY_JOIN = [
  "Real consulting experience with actual clients",
  "Build your portfolio with meaningful projects",
  "Develop leadership and technical skills",
  "Network with industry professionals and alumni",
  "Flexible commitment that works with your schedule",
  "Make tangible impact in your community",
];

const ORG_TYPES = [
  {
    title: "Nonprofits",
    description:
      "We help mission-driven organizations leverage technology to amplify their social impact.",
  },
  {
    title: "Social Enterprises",
    description:
      "Partner with us to build sustainable tech solutions that support your business model.",
  },
  {
    title: "Community Groups",
    description:
      "We work with local organizations to address community needs through technology.",
  },
];

export default function WorkWithUs() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Page header */}
      <section className="text-center px-6 pt-16 pb-6">
        <h1
          className="font-black tracking-tight leading-tight mb-4"
          style={{
            fontSize: "clamp(40px,7vw,68px)",
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Work With Us
        </h1>
        <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
          Whether you're a student looking to contribute or an organization seeking tech solutions,
          we'd love to connect.
        </p>
      </section>

      {/* For Students */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">
            [ JOIN_THE_TEAM ]
          </p>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              For Students
            </h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Join a community of passionate students making real impact. No application process
              — everyone is welcome regardless of experience level.
            </p>
          </div>

          {/* Role cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ROLES.map(({ Icon, title, description, tags }) => (
              <div
                key={title}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#F3EFFE" }}
                >
                  <Icon size={18} color={PURPLE} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full border"
                      style={{ color: PURPLE, borderColor: "#C4B5FD", background: "#F5F3FF" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: "#F5F3FF" }}
          >
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
              Why Join?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WHY_JOIN.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} color={PURPLE} className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Organizations */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              For Organizations
            </h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Partner with us to access high-quality tech consulting services — completely pro bono.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ORG_TYPES.map(({ title, description }) => (
              <div
                key={title}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-6 pb-16 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our Process
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-5">
            We start with a discovery call to understand your needs, then match you with a
            dedicated student team. Projects typically run 8-12 weeks with regular check-ins and
            deliverables.
          </p>
          <p className="text-sm font-semibold" style={{ color: PURPLE }}>
            100% Pro Bono · Professional Quality · Student-Led
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center" style={{ background: GRADIENT }}>
        <div className="mb-6">
          <Mail size={36} className="mx-auto text-white/70" />
        </div>
        <h2
          className="font-black text-white mb-4 tracking-tight"
          style={{ fontSize: "clamp(28px,4vw,40px)" }}
        >
          Ready to Get Started?
        </h2>
        <p className="text-base text-white/85 max-w-md mx-auto leading-relaxed mb-8">
          Whether you want to join our team or partner with us on a project, we'd love to hear from
          you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <a
            href="mailto:hello@usctts.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold no-underline transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            <Mail size={15} /> Email Us
          </a>
          <a
            href="https://discord.gg/trojantechsolutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold no-underline transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            Join Our Discord <ArrowRight size={15} />
          </a>
        </div>
        <p className="text-xs text-white/60">Response time: Within 48 hours</p>
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
