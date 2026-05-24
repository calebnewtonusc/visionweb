"use client";

import React from "react";
import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import Navbar from "@/components/Navbar";

const GRADIENT = "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)";
const PURPLE = "#7C3AED";

function dicebear(seed: string) {
  return `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(seed)}&baseColor=f9c9b6,ac6651,d2b48c,c8a882&backgroundColor=f3effe,fdf4ff,ede9fe`;
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

const CABINET: { name: string; role: string; seed: string; link: string | null }[] = [
  { name: "Shirley Park", role: "Co-lead of Building", seed: "ShirleyPark", link: "https://www.linkedin.com/in/seoyeon-shirley-park/" },
  { name: "Kaitlyn Lee", role: "Co-lead of Building", seed: "KaitlynLee", link: "https://www.linkedin.com/in/kaitlynleee/" },
  { name: "Malakai Carey", role: "President, Music Team", seed: "MalakaiCarey", link: "https://www.linkedin.com/in/malakai-carey-11187038a/" },
  { name: "Austin Chen", role: "Lead of Biotech", seed: "AustinChen", link: "https://www.linkedin.com/in/austin-f-chen/" },
  { name: "Esrom Dawit", role: "External Affairs", seed: "EsromDawit", link: "https://www.linkedin.com/in/esrom-dawit-4780302b2/" },
  { name: "Annabelle Forbes", role: "Social Chair", seed: "AnnabelleForbes", link: "https://www.linkedin.com/in/annabelle-forbes-9b381838b/" },
  { name: "Jet Jadeja", role: "President, Web3 Team", seed: "JetJadeja", link: "https://www.linkedin.com/in/jet-jadeja/" },
  { name: "Gabriel Oliveri", role: "Lead of Engineering", seed: "GabrielOliveri", link: "https://www.linkedin.com/in/gabriel-oliveri/" },
  { name: "Omniya Mohamed", role: "Lead of Operations", seed: "OmniyaMohamed", link: "https://www.linkedin.com/in/itsomniya/" },
  { name: "Jacob Han", role: "Co-lead of Videography", seed: "JacobHan", link: "https://www.linkedin.com/in/jacobwonhan/" },
  { name: "Alex Choi", role: "Co-lead of Videography", seed: "AlexChoi", link: "https://www.linkedin.com/in/alexchoi27/" },
  { name: "Mary Zewdie", role: "Lead of Marketing", seed: "MaryZewdie", link: "https://www.linkedin.com/in/mary-zewdie-826768218/" },
];

const ALUMNI = [
  { name: "Matthew Kim", detail: "Incoming Analyst at McKinsey", photo: "/img/matthew_shot.jpeg" },
  { name: "Kevin Sangmuah", detail: "Software Engineer at Reddit", photo: "/img/kevin_shot.jpeg" },
  { name: "Sagar Tiwari", detail: "Incoming Stanford MBA", photo: "/img/sagar_shot.jpeg" },
  { name: "Duncan Inganji", detail: "Software Engineer at Google", photo: "/img/duncan_shot.jpeg" },
  { name: "Catherine Newton M.S.", detail: "Pediatrician", photo: "/img/catherine_shot.jpg" },
  { name: "Andrew Laffoon", detail: "Founder & CEO of Mixbook", photo: "/img/andrew_shot.jpeg" },
];

export default function MembersPage() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative text-center px-6 pt-16 pb-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.10) 0%, transparent 70%)" }} />
        <h1
          className="font-black tracking-tight leading-tight mb-4"
          style={{ fontSize: "clamp(40px,7vw,68px)", background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          Our Team
        </h1>
        <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
          Meet the passionate students driving change through technology.
        </p>
      </section>

      {/* Leadership */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Leadership</h2>
            <p className="text-base text-gray-500">Guiding our mission and vision forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FOUNDERS.map(({ name, role, focus, headshot, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-gray-200 rounded p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 no-underline"
              >
                <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-gray-100">
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

      {/* Cabinet */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Our Team</h2>
            <p className="text-base text-gray-500">Leading teams and driving impact across our organization.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CABINET.map(({ name, role, seed, link }) => {
              const Card = (
                <div className="bg-white border border-gray-200 rounded p-4 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="w-16 h-16 rounded overflow-hidden mx-auto mb-3 bg-purple-50">
                    <img
                      src={dicebear(seed)}
                      alt={name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
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
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">[ WHERE_THEY_ARE_NOW ]</p>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Alumni Network</h2>
            <p className="text-base text-gray-500">Our graduates continue to make impact across industries.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ALUMNI.map(({ name, detail, photo }) => (
              <div key={name} className="flex items-center gap-3 border border-gray-200 rounded p-4">
                <div className="relative w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image src={photo} alt={name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
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
