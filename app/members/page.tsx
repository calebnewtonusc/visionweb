"use client";

import React from "react";
import Image from "next/image";
import LinkedInIcon from "@/components/LinkedInIcon";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const PURPLE = "#99A6F9";

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

const CABINET: {
  name: string;
  role: string;
  link: string | null;
  photo: string;
}[] = [
  {
    name: "Shirley Park",
    role: "Co-lead of Building",
    link: "https://www.linkedin.com/in/seoyeon-shirley-park/",
    photo: "/img/shirley_shot.jpeg",
  },
  {
    name: "Kaitlyn Lee",
    role: "Co-lead of Building",
    link: "https://www.linkedin.com/in/kaitlynleee/",
    photo: "/img/kaitlyn_shot.jpeg",
  },
  {
    name: "Malakai Carey",
    role: "President, Music Team",
    link: "https://www.linkedin.com/in/malakai-carey-11187038a/",
    photo: "/img/malakai_shot.jpeg",
  },
  {
    name: "Austin Chen",
    role: "Lead of Biotech",
    link: "https://www.linkedin.com/in/austin-f-chen/",
    photo: "/img/austin_shot.jpeg",
  },
  {
    name: "Esrom Dawit",
    role: "External Affairs",
    link: "https://www.linkedin.com/in/esrom-dawit-4780302b2/",
    photo: "/img/esrom_shot.jpeg",
  },
  {
    name: "Annabelle Forbes",
    role: "Social Chair",
    link: "https://www.linkedin.com/in/annabelle-forbes-9b381838b/",
    photo: "/img/annabelle_shot.jpeg",
  },
  {
    name: "Jet Jadeja",
    role: "President, Web3 Team",
    link: "https://www.linkedin.com/in/jet-jadeja/",
    photo: "/img/jet_shot.jpeg",
  },
  {
    name: "Gabriel Oliveri",
    role: "Lead of Engineering",
    link: "https://www.linkedin.com/in/gabriel-oliveri/",
    photo: "/img/gabriel_shot.jpeg",
  },
  {
    name: "Omniya Mohamed",
    role: "Lead of Operations",
    link: "https://www.linkedin.com/in/itsomniya/",
    photo: "/img/omniya_shot.jpeg",
  },
  {
    name: "Jacob Han",
    role: "Co-lead of Videography",
    link: "https://www.linkedin.com/in/jacobwonhan/",
    photo: "/img/jacob_shot.jpeg",
  },
  {
    name: "Alex Choi",
    role: "Co-lead of Videography",
    link: "https://www.linkedin.com/in/alexchoi27/",
    photo: "/img/alex_shot.jpeg",
  },
  {
    name: "Mary Zewdie",
    role: "Lead of Marketing",
    link: "https://www.linkedin.com/in/mary-zewdie-826768218/",
    photo: "/img/mary_shot.jpeg",
  },
];

const ALUMNI = [
  { name: "Matthew Kim", detail: "Incoming Analyst at McKinsey", photo: "/img/matthew_shot.jpeg", logo: "/img/logos/mckinsey.png" },
  { name: "Kevin Sangmuah", detail: "Software Engineer at Reddit", photo: "/img/kevin_shot.jpeg", logo: "/img/logos/reddit.png" },
  { name: "Sagar Tiwari", detail: "Incoming Stanford MBA", photo: "/img/sagar_shot.jpeg", logo: "/img/logos/stanford.png" },
  { name: "Duncan Inganji", detail: "Software Engineer at Google", photo: "/img/duncan_shot.jpeg", logo: "/img/logos/google.png" },
  { name: "Catherine Newton M.S.", detail: "Pediatrician", photo: "/img/catherine_shot.jpg", logo: null },
  { name: "Andrew Laffoon", detail: "Founder & CEO of Mixbook", photo: "/img/andrew_shot.jpeg", logo: "/img/logos/mixbook.png" },
];

export default function MembersPage() {
  return (
    <div className="tts-inner-page font-sans bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative text-center px-6 pt-20 pb-16 overflow-hidden tts-hero-bg">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 300px",
            opacity: 0.06,
            mixBlendMode: "overlay",
          }}
        />
        <h1
          className="font-bold tracking-tight leading-none mb-4 relative z-10"
          style={{
            fontSize: "clamp(2.5rem,7vw,4.5rem)",
            background: "linear-gradient(180deg, #99A6F9 0%, #F07860 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our Team
        </h1>
        <p className="text-base text-gray-900 max-w-md mx-auto leading-relaxed relative z-10">
          Meet the passionate students driving change through technology.
        </p>
      </section>

      {/* Leadership */}
      <section className="px-6 py-16 border-t-2 border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">[ LEADERSHIP ]</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Co-Presidents</h2>
            <p className="text-base text-gray-900">Guiding our mission and vision forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 border-2 border-gray-300 bg-gray-300">
            {FOUNDERS.map(({ name, role, focus, headshot, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white p-6 hover:bg-gray-100 transition-colors duration-150 no-underline"
              >
                <div className="relative w-16 h-16 overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image src={headshot} alt={name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{name}</p>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: PURPLE }}>{role}</p>
                  <p className="text-xs text-gray-400">{focus}</p>
                </div>
                <LinkedInIcon size={18} className="ml-auto flex-shrink-0 tts-social-icon" color="currentColor" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">[ THE_TEAM ]</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Cabinet</h2>
            <p className="text-base text-gray-900">Leading teams and driving impact across our organization.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0.5 border-2 border-gray-300 bg-gray-300">
            {CABINET.map(({ name, role, link, photo }) => {
              const Card = (
                <div className="bg-white p-5 text-center hover:bg-gray-100 transition-colors duration-150">
                  <div className="relative w-16 h-16 overflow-hidden mx-auto mb-3 bg-gray-100">
                    <Image src={photo} alt={name} fill className="object-cover object-top" />
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

      {/* Alumni */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">[ WHERE_THEY_ARE_NOW ]</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Alumni Network</h2>
            <p className="text-base text-gray-900">Our graduates continue to make impact across industries.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0.5 border-2 border-gray-300 bg-gray-300">
            {ALUMNI.map(({ name, detail, photo }) => (
              <div key={name} className="bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image src={photo} alt={name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">{name}</p>
                    <p className="text-xs text-gray-900 mt-0.5">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="overflow-hidden mt-8">
            <div className="logo-marquee flex items-center gap-16" style={{ width: "max-content" }}>
              {[...ALUMNI.filter((a) => a.logo), ...ALUMNI.filter((a) => a.logo)].map(({ name, logo }, i) => (
                <div key={i} className="flex-shrink-0 relative" style={{ height: "38px", width: "150px" }}>
                  <Image src={logo!} alt={name} fill className="object-contain" />
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
