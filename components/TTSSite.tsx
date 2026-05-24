"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Smartphone, BarChart2, Mail, ExternalLink, Hammer, Briefcase, TrendingUp } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
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
    description: "Develop machine learning models and AI tools to automate processes and unlock insights for nonprofits.",
    iconColor: "#7C3AED",
    iconBg: "#F3EFFE",
  },
  {
    Icon: Smartphone,
    title: "Web & Mobile Apps",
    description: "Build user-friendly applications that help organizations scale their impact and reach more people.",
    iconColor: "#D946EF",
    iconBg: "#FDF4FF",
  },
  {
    Icon: BarChart2,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive better decision-making and outcomes.",
    iconColor: "#7C3AED",
    iconBg: "#F3EFFE",
  },
];

const TRACKS = [
  {
    Icon: Hammer,
    title: "Building",
    sub: "Engineering, Product & Community Impact",
    description: "Software and hardware tools that solve real problems — deployed to real users at nonprofits, hospitals, and research orgs.",
    color: "#7C3AED",
    bg: "#F3EFFE",
  },
  {
    Icon: Briefcase,
    title: "Consulting",
    sub: "Client Work & Social Impact",
    description: "Live work with nonprofits and research labs. AI-first strategy, real deliverables, and strategic reps before you graduate.",
    color: "#D946EF",
    bg: "#FDF4FF",
    featured: true,
  },
  {
    Icon: TrendingUp,
    title: "Growing",
    sub: "Career & Network",
    description: "Apply AI to your major and career. Access YC founders, operators, and speakers doing work that matters.",
    color: "#7C3AED",
    bg: "#F3EFFE",
  },
];

const FOUNDERS = [
  {
    name: "Tyler Larsen",
    role: "Co-President",
    focus: "Consulting & People",
    headshot: "/img/tyler_shot.jpeg",
    link: "https://www.linkedin.com/in/tyler-larsen-4130a7294/",
  },
  {
    name: "Caleb Newton",
    role: "Co-President",
    focus: "Innovation & Building",
    headshot: "/img/caleb_shot.jpg",
    link: "https://calebnewton.me/",
  },
];

const CABINET: { name: string; role: string; headshot: string | null; link: string | null; initials: string }[] = [
  { name: "Shirley Park", role: "Co-lead of Building", headshot: "/img/shirley_shot.jpeg", link: "https://www.linkedin.com/in/seoyeon-shirley-park/", initials: "SP" },
  { name: "Kaitlyn Lee", role: "Co-lead of Building", headshot: "/img/kaitlyn_shot.jpeg", link: "https://www.linkedin.com/in/kaitlynleee/", initials: "KL" },
  { name: "Malakai Carey", role: "President, Music Team", headshot: "/img/malakai_shot.jpeg", link: "https://www.linkedin.com/in/malakai-carey-11187038a/", initials: "MC" },
  { name: "Austin Chen", role: "Lead of Biotech", headshot: "/img/austin_shot.png", link: "https://www.linkedin.com/in/austin-f-chen/", initials: "AC" },
  { name: "Esrom Dawit", role: "External Affairs", headshot: "/img/esrom_shot.jpeg", link: "https://www.linkedin.com/in/esrom-dawit-4780302b2/", initials: "ED" },
  { name: "Annabelle Forbes", role: "Social Chair", headshot: "/img/annabelle_shot.jpeg", link: "https://www.linkedin.com/in/annabelle-forbes-9b381838b/", initials: "AF" },
  { name: "Jet Jadeja", role: "President, Web3 Team", headshot: "/img/jet_shot.jpeg", link: "https://www.linkedin.com/in/jet-jadeja/", initials: "JJ" },
  { name: "Gabriel Oliveri", role: "Lead of Engineering", headshot: "/img/gabriel_shot.png", link: "https://www.linkedin.com/in/gabriel-oliveri/", initials: "GO" },
  { name: "Omniya Mohamed", role: "Lead of Operations", headshot: "/img/omniya_shot.jpeg", link: "https://www.linkedin.com/in/itsomniya/", initials: "OM" },
  { name: "Jacob Han", role: "Co-lead of Videography", headshot: "/img/jacob_shot.jpeg", link: "https://www.linkedin.com/in/jacobwonhan/", initials: "JH" },
  { name: "Alex Choi", role: "Co-lead of Videography", headshot: "/img/alex_shot.jpeg", link: "https://www.linkedin.com/in/alexchoi27/", initials: "AC" },
  { name: "Mary Zewdie", role: "Lead of Marketing", headshot: "/img/mary_shot.jpeg", link: "https://www.linkedin.com/in/mary-zewdie-826768218/", initials: "MZ" },
];

export default function TTSSite() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {/* Announcement banner */}
      <div style={{ background: GRADIENT }} className="text-white text-center py-2.5 px-6 text-sm font-medium">
        Open to All: No application process required — everyone is welcome to join and contribute!
      </div>

      <Navbar />

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-14">
        <h1
          className="font-black tracking-tight leading-tight mb-6"
          style={{ fontSize: "clamp(48px,8vw,80px)", background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          Trojan Technology<br />Solutions
        </h1>
        <p className="text-2xl font-extrabold text-gray-900 mb-5 tracking-tight">tech for all</p>
        <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          We use cutting-edge technology and artificial intelligence to deliver high-impact consulting projects for social good organizations.
        </p>
      </section>

      {/* Stats */}
      <section className="px-6 pb-16">
        <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-9">[ IMPACT_METRICS ]</p>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="font-black leading-none mb-2" style={{ fontSize: "clamp(36px,5vw,52px)", color: PURPLE, letterSpacing: "-0.04em" }}>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">What We Do</h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Our projects span various domains, all focused on creating positive social impact through technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.map(({ Icon, title, description, iconColor, iconBg }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: iconBg }}>
                  <Icon size={22} color={iconColor} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">[ ABOUT_US ]</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
                Building Tech<br />
                <span style={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>for Good</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Trojan Technology Solutions is USC&apos;s student-run tech consulting org. We connect talented students with nonprofits, social enterprises, and community organizations to build real technology solutions — completely pro bono.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                No experience required. No gatekeeping. Just curious people who want to use technology to make a difference.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {TRACKS.map(({ Icon, title, sub, description, color, bg, featured }) => (
                <div
                  key={title}
                  className="border rounded-2xl p-5 transition-all duration-200"
                  style={{ borderColor: featured ? color : "#E5E7EB", background: featured ? bg : "#fff" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                      <Icon size={18} color={color} />
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

          {/* Co-presidents */}
          <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-6">[ LEADERSHIP ]</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FOUNDERS.map(({ name, role, focus, headshot, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 no-underline"
              >
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image src={headshot} alt={name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{name}</p>
                  <p className="text-sm font-medium mb-0.5" style={{ color: PURPLE }}>{role}</p>
                  <p className="text-xs text-gray-400">{focus}</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-gray-300 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section id="members" className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">[ THE_TEAM ]</p>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Meet Our Team</h2>
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              The people building, consulting, and growing with TTS.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CABINET.map(({ name, role, headshot, link, initials }) => {
              const Card = (
                <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 bg-gray-100">
                    {headshot ? (
                      <Image src={headshot} alt={name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm font-bold text-gray-400">
                        {initials}
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-tight">{role}</p>
                </div>
              );
              return link ? (
                <a key={name} href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
                  {Card}
                </a>
              ) : (
                <div key={name}>{Card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center" style={{ background: GRADIENT }}>
        <h2 className="font-black text-white mb-4 tracking-tight" style={{ fontSize: "clamp(28px,4vw,44px)" }}>
          Ready to Make an Impact?
        </h2>
        <p className="text-base text-white/85 max-w-md mx-auto leading-relaxed mb-9">
          Join our community of passionate students using technology to create positive change. No experience required — just bring your enthusiasm!
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
