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
  ArrowRight,
  PhoneCall,
  Calendar,
  RefreshCw,
  PackageCheck,
  HeartHandshake,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import Navbar from "@/components/Navbar";
import TTSBreadcrumb from "@/components/TTSBreadcrumb";

const CTA_BG = "linear-gradient(135deg, #F97316 0%, #D946EF 50%, #7C3AED 100%)";
const PURPLE = "#7C3AED";

const ROLES = [
  {
    Icon: Code2,
    title: "Developers & Engineers",
    description: "Build real-world applications using modern tech stacks. Work on full-stack web apps, mobile solutions, and AI/ML projects.",
    tags: ["React", "Python", "Node.js", "Machine Learning"],
    accent: "linear-gradient(135deg, #7C3AED, #D946EF)",
  },
  {
    Icon: Palette,
    title: "Designers & Product",
    description: "Create intuitive user experiences and beautiful interfaces. Lead product strategy and design thinking workshops.",
    tags: ["UI/UX Design", "Figma", "User Research", "Product Strategy"],
    accent: "linear-gradient(135deg, #D946EF, #FB923C)",
  },
  {
    Icon: Users,
    title: "Project Managers",
    description: "Coordinate teams, manage timelines, and ensure successful project delivery. Interface directly with clients.",
    tags: ["Agile", "Communication", "Stakeholder Management", "Planning"],
    accent: "linear-gradient(135deg, #06B6D4, #7C3AED)",
  },
  {
    Icon: MessageSquare,
    title: "Business & Strategy",
    description: "Work on client relationships, marketing, and organizational growth. Help us expand our impact and reach.",
    tags: ["Marketing", "Strategy", "Partnerships", "Communications"],
    accent: "linear-gradient(135deg, #10B981, #06B6D4)",
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
    description: "We help mission-driven organizations leverage technology to amplify their social impact.",
    accent: "linear-gradient(135deg, #7C3AED, #D946EF)",
  },
  {
    title: "Social Enterprises",
    description: "Partner with us to build sustainable tech solutions that support your business model.",
    accent: "linear-gradient(135deg, #D946EF, #FB923C)",
  },
  {
    title: "Community Groups",
    description: "We work with local organizations to address community needs through technology.",
    accent: "linear-gradient(135deg, #06B6D4, #7C3AED)",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    Icon: PhoneCall,
    title: "Contact Us",
    subtitle: "Tell us about your needs",
    description: "Fill out our intake form with details about your organization, what you're looking for, and your timeline. We'll review your submission and assess whether we're a good fit for your project.",
    accent: "linear-gradient(135deg, #7C3AED, #A855F7)",
    lightAccent: "#F5F3FF",
    borderColor: "#C4B5FD",
    link: "/work-with-us/form",
    linkLabel: "Start Here",
  },
  {
    num: "02",
    Icon: Calendar,
    title: "Consultation Meeting",
    subtitle: "Align on scope and vision",
    description: "We schedule a call to dig deeper into your goals, constraints, and success criteria. Together we define the project scope, deliverables, and a realistic timeline.",
    accent: "linear-gradient(135deg, #A855F7, #D946EF)",
    lightAccent: "#FDF4FF",
    borderColor: "#E879F9",
    link: null,
    linkLabel: null,
  },
  {
    num: "03",
    Icon: RefreshCw,
    title: "Weekly Check-ins",
    subtitle: "Transparent progress updates",
    description: "Your dedicated team holds structured weekly syncs to share progress, gather feedback, and course-correct early. You stay informed at every stage without managing day-to-day execution.",
    accent: "linear-gradient(135deg, #D946EF, #FB923C)",
    lightAccent: "#FFF7ED",
    borderColor: "#FDBA74",
    link: null,
    linkLabel: null,
  },
  {
    num: "04",
    Icon: PackageCheck,
    title: "Solution Delivered",
    subtitle: "Handoff with full documentation",
    description: "We deliver the final product with complete documentation, training materials, and a thorough handoff session. Everything is built to be maintained by your team independently.",
    accent: "linear-gradient(135deg, #FB923C, #F97316)",
    lightAccent: "#FFF7ED",
    borderColor: "#FB923C",
    link: null,
    linkLabel: null,
  },
  {
    num: "05",
    Icon: HeartHandshake,
    title: "Continued Support",
    subtitle: "We stay in your corner",
    description: "Our relationship doesn't end at delivery. We provide a post-launch support period for bug fixes, updates, and questions. Many of our partners continue working with us on follow-on projects.",
    accent: "linear-gradient(135deg, #F97316, #EF4444)",
    lightAccent: "#FEF2F2",
    borderColor: "#FCA5A5",
    link: null,
    linkLabel: null,
  },
];

function ProcessGraphic() {
  return (
    <div className="relative w-full max-w-lg mx-auto" style={{ height: 160 }}>
      <svg
        viewBox="0 0 480 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="pg2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#D946EF" />
          </linearGradient>
          <linearGradient id="pg3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>
          <linearGradient id="pg4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
          <linearGradient id="pg5" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
          <filter id="pshadow" x="-10%" y="-20%" width="120%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Step pills — staggered arc arrangement */}
        {/* Step 1 */}
        <g filter="url(#pshadow)">
          <rect x="4" y="98" width="76" height="28" rx="14" fill="url(#pg1)" />
          <text x="42" y="117" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Contact</text>
        </g>

        {/* Step 2 */}
        <g filter="url(#pshadow)">
          <rect x="96" y="64" width="76" height="28" rx="14" fill="url(#pg2)" />
          <text x="134" y="83" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Consult</text>
        </g>

        {/* Step 3 — peak */}
        <g filter="url(#pshadow)">
          <rect x="192" y="30" width="96" height="30" rx="15" fill="url(#pg3)" />
          <text x="240" y="50" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Check-ins</text>
        </g>

        {/* Step 4 */}
        <g filter="url(#pshadow)">
          <rect x="308" y="64" width="76" height="28" rx="14" fill="url(#pg4)" />
          <text x="346" y="83" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Deliver</text>
        </g>

        {/* Step 5 */}
        <g filter="url(#pshadow)">
          <rect x="400" y="98" width="76" height="28" rx="14" fill="url(#pg5)" />
          <text x="438" y="117" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Support</text>
        </g>

        {/* Connecting dots / line */}
        <path
          d="M80 112 C88 112, 92 78, 96 78"
          stroke="#E5E7EB"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          fill="none"
        />
        <path
          d="M172 78 C180 78, 188 46, 192 46"
          stroke="#E5E7EB"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          fill="none"
        />
        <path
          d="M288 46 C296 46, 304 78, 308 78"
          stroke="#E5E7EB"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          fill="none"
        />
        <path
          d="M384 78 C392 78, 396 112, 400 112"
          stroke="#E5E7EB"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          fill="none"
        />

        {/* Step numbers below pills */}
        <text x="42" y="144" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="Inter,sans-serif">01</text>
        <text x="134" y="110" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="Inter,sans-serif">02</text>
        <text x="240" y="80" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="Inter,sans-serif">03</text>
        <text x="346" y="110" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="Inter,sans-serif">04</text>
        <text x="438" y="144" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="Inter,sans-serif">05</text>
      </svg>
    </div>
  );
}

export default function WorkWithUs() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative text-center px-6 pt-20 pb-16 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 15% 0%, rgba(124,58,237,0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 85% 10%, rgba(251,146,60,0.10) 0%, transparent 50%), #ffffff",
        }}
      >
        <TTSBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Work With Us" }]} />
        <h1
          className="font-bold tracking-tight leading-none mb-4"
          style={{
            fontSize: "clamp(40px,7vw,72px)",
            background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 50%, #FB923C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Work With Us
        </h1>
        <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
          Whether you're a student looking to contribute or an organization seeking tech solutions, we'd love to connect.
        </p>
      </section>

      {/* For Students */}
      <section className="px-6 py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">[ JOIN_THE_TEAM ]</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">For Students</h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Join a community of passionate students making real impact. No application process, everyone is welcome.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-gray-200 bg-gray-200">
            {ROLES.map(({ Icon, title, description, tags, accent }) => (
              <div key={title} className="bg-white p-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="w-10 h-10 flex items-center justify-center mb-4" style={{ background: accent }}>
                  <Icon size={18} color="white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 border"
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
      <section className="px-6 py-16" style={{ background: "linear-gradient(160deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="border border-gray-200 bg-white p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 tracking-tight">Why Join?</h2>
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
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">For Organizations</h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Partner with us to access high-quality tech consulting services, completely pro bono.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-gray-200 bg-gray-200">
            {ORG_TYPES.map(({ title, description, accent }) => (
              <div key={title} className="bg-white p-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="w-8 h-1.5 mb-4" style={{ background: accent }} />
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — 5 Steps */}
      <section className="px-6 py-20" style={{ background: "linear-gradient(160deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">[ HOW_IT_WORKS ]</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">Our Process</h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              From first contact to continued support, here's what working with TTS looks like.
            </p>
          </div>

          {/* Visual arc graphic */}
          <div className="mb-12 px-4">
            <ProcessGraphic />
          </div>

          {/* Step detail cards */}
          <div className="flex flex-col gap-px border border-gray-200 bg-gray-200">
            {PROCESS_STEPS.map(({ num, Icon, title, subtitle, description, accent, lightAccent, borderColor, link, linkLabel }) => (
              <div key={num} className="bg-white p-6 md:p-8 hover:bg-gray-50 transition-colors duration-150">
                <div className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: accent }}
                  >
                    <Icon size={18} color="white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-xs font-bold tracking-widest"
                        style={{ color: "#9CA3AF" }}
                      >
                        STEP {num}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-0.5">{title}</h3>
                    <p className="text-xs font-semibold mb-2" style={{ color: PURPLE }}>{subtitle}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                    {link && linkLabel && (
                      <Link
                        href={link}
                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold no-underline transition-colors duration-150"
                        style={{ color: PURPLE }}
                      >
                        {linkLabel} <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                  <div
                    className="hidden md:flex items-center justify-center w-10 h-10 flex-shrink-0 border text-lg font-black"
                    style={{
                      background: lightAccent,
                      borderColor,
                      color: borderColor,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {num}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-semibold mb-4" style={{ color: PURPLE }}>
              100% Pro Bono · Professional Quality · Student-Led
            </p>
            <Link
              href="/work-with-us/form"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-200 hover:opacity-90"
              style={{ background: CTA_BG }}
            >
              Start a Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center" style={{ background: CTA_BG }}>
        <div className="mb-6">
          <Mail size={36} className="mx-auto text-white/70" />
        </div>
        <h2
          className="font-bold text-white mb-4 tracking-tight"
          style={{ fontSize: "clamp(28px,4vw,40px)" }}
        >
          Ready to Get Started?
        </h2>
        <p className="text-base text-white/85 max-w-md mx-auto leading-relaxed mb-8">
          Whether you want to join our team or partner with us on a project, we'd love to hear from you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <a
            href="mailto:hello@usctts.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold no-underline transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            <Mail size={15} /> Email Us
          </a>
          <a
            href="https://discord.gg/trojantechsolutions"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold no-underline transition-all duration-200"
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
