"use client";

import React from "react";
import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import Navbar from "@/components/Navbar";

const CTA_BG = "linear-gradient(135deg, #F97316 0%, #D946EF 50%, #7C3AED 100%)";
const PURPLE = "#7C3AED";

function avatar(params: string) {
  return `https://api.dicebear.com/9.x/micah/svg?${params}`;
}

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
  avatarSrc: string;
  usePhoto?: boolean;
  photoSrc?: string;
}[] = [
  {
    name: "Shirley Park",
    role: "Co-lead of Building",
    link: "https://www.linkedin.com/in/seoyeon-shirley-park/",
    avatarSrc: avatar("seed=shirley-park-24&baseColor[]=f9c9b6&hair[]=wavy&hairColor[]=2c1b18&glassesProbability=0&earringsProbability=0&facialHairProbability=0"),
  },
  {
    name: "Kaitlyn Lee",
    role: "Co-lead of Building",
    link: "https://www.linkedin.com/in/kaitlynleee/",
    avatarSrc: avatar("seed=kaitlyn-lee-24&baseColor[]=f9c9b6&hair[]=wavy&hairColor[]=0e0e0e&glassesProbability=0&earringsProbability=0&facialHairProbability=0"),
  },
  {
    name: "Malakai Carey",
    role: "President, Music Team",
    link: "https://www.linkedin.com/in/malakai-carey-11187038a/",
    avatarSrc: avatar("seed=malakai-carey-24&baseColor[]=f9c9b6&hair[]=full&hairColor[]=daa849&glassesProbability=0&facialHairProbability=0"),
  },
  {
    name: "Austin Chen",
    role: "Lead of Biotech",
    link: "https://www.linkedin.com/in/austin-f-chen/",
    avatarSrc: avatar("seed=austin-chen-24&baseColor[]=f9c9b6&hair[]=plain&hairColor[]=0e0e0e&glassesProbability=0&facialHairProbability=0"),
  },
  {
    name: "Esrom Dawit",
    role: "External Affairs",
    link: "https://www.linkedin.com/in/esrom-dawit-4780302b2/",
    avatarSrc: avatar("seed=esrom-dawit-24&baseColor[]=614335&hair[]=plain&hairColor[]=0e0e0e&glassesProbability=0&facialHairProbability=0"),
  },
  {
    name: "Annabelle Forbes",
    role: "Social Chair",
    link: "https://www.linkedin.com/in/annabelle-forbes-9b381838b/",
    avatarSrc: avatar("seed=annabelle-forbes-24&baseColor[]=8d5524&hair[]=wavy&hairColor[]=2c1b18&glassesProbability=100&glasses[]=square&facialHairProbability=0"),
  },
  {
    name: "Jet Jadeja",
    role: "President, Web3 Team",
    link: "https://www.linkedin.com/in/jet-jadeja/",
    avatarSrc: avatar("seed=jet-jadeja-24&baseColor[]=c8a882&hair[]=full&hairColor[]=0e0e0e&glassesProbability=0&facialHairProbability=0"),
  },
  {
    name: "Gabriel Oliveri",
    role: "Lead of Engineering",
    link: "https://www.linkedin.com/in/gabriel-oliveri/",
    avatarSrc: avatar("seed=gabriel-oliveri-24&baseColor[]=f9c9b6&hair[]=wavy&hairColor[]=4a312c&glassesProbability=0&facialHairProbability=0"),
  },
  {
    name: "Omniya Mohamed",
    role: "Lead of Operations",
    link: "https://www.linkedin.com/in/itsomniya/",
    avatarSrc: "",
    usePhoto: true,
    photoSrc: "/img/omniya_shot.jpeg",
  },
  {
    name: "Jacob Han",
    role: "Co-lead of Videography",
    link: "https://www.linkedin.com/in/jacobwonhan/",
    avatarSrc: avatar("seed=jacob-han-24&baseColor[]=f9c9b6&hair[]=plain&hairColor[]=0e0e0e&glassesProbability=0&facialHairProbability=0"),
  },
  {
    name: "Alex Choi",
    role: "Co-lead of Videography",
    link: "https://www.linkedin.com/in/alexchoi27/",
    avatarSrc: avatar("seed=alex-choi-24&baseColor[]=f9c9b6&hair[]=plain&hairColor[]=0e0e0e&glassesProbability=0&earringsProbability=100&earrings[]=stud&facialHairProbability=0"),
  },
  {
    name: "Mary Zewdie",
    role: "Lead of Marketing",
    link: "https://www.linkedin.com/in/mary-zewdie-826768218/",
    avatarSrc: avatar("seed=mary-zewdie-24&baseColor[]=614335&hair[]=wavy&hairColor[]=2c1b18&glassesProbability=0&facialHairProbability=0"),
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
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative text-center px-6 pt-20 pb-16 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 15% 0%, rgba(124,58,237,0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 85% 10%, rgba(251,146,60,0.10) 0%, transparent 50%), #ffffff",
        }}
      >
        <h1
          className="font-display font-bold tracking-tight leading-none mb-4"
          style={{
            fontSize: "clamp(40px,7vw,72px)",
            background: "linear-gradient(135deg, #7C3AED 0%, #D946EF 50%, #FB923C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our Team
        </h1>
        <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
          Meet the passionate students driving change through technology.
        </p>
      </section>

      {/* Leadership */}
      <section className="px-6 py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">[ LEADERSHIP ]</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Co-Presidents</h2>
            <p className="text-base text-gray-500">Guiding our mission and vision forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-gray-200 bg-gray-200">
            {FOUNDERS.map(({ name, role, focus, headshot, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white p-6 hover:bg-gray-50 transition-colors duration-150 no-underline"
              >
                <div className="relative w-16 h-16 overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image src={headshot} alt={name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{name}</p>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: PURPLE }}>{role}</p>
                  <p className="text-xs text-gray-400">{focus}</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-gray-300 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet */}
      <section className="px-6 py-16" style={{ background: "linear-gradient(160deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">[ THE_TEAM ]</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Cabinet</h2>
            <p className="text-base text-gray-500">Leading teams and driving impact across our organization.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px border border-gray-200 bg-gray-200">
            {CABINET.map(({ name, role, link, avatarSrc, usePhoto, photoSrc }) => {
              const Card = (
                <div className="bg-white p-5 text-center hover:bg-gray-50 transition-colors duration-150">
                  <div className="w-16 h-16 overflow-hidden mx-auto mb-3 bg-purple-50">
                    {usePhoto && photoSrc ? (
                      <Image src={photoSrc} alt={name} width={64} height={64} className="w-full h-full object-cover" />
                    ) : (
                      <img src={avatarSrc} alt={name} width={64} height={64} className="w-full h-full object-cover" />
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

      {/* Alumni */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">[ WHERE_THEY_ARE_NOW ]</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Alumni Network</h2>
            <p className="text-base text-gray-500">Our graduates continue to make impact across industries.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px border border-gray-200 bg-gray-200">
            {ALUMNI.map(({ name, detail, photo, logo }) => (
              <div key={name} className="bg-white p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image src={photo} alt={name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">{name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
                  </div>
                </div>
                {logo && (
                  <div className="relative h-5 w-20">
                    <Image src={logo} alt="" fill className="object-contain object-left" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
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
