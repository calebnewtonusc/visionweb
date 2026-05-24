import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t-2 border-gray-300 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <Image src="/img/tts-logo.png" alt="TTS" width={36} height={36} />
          <a
            href="mailto:hello@usctts.com"
            className="flex items-center gap-1.5 text-sm text-gray-500 no-underline hover:text-gray-900 transition-colors w-fit"
          >
            <Mail size={14} /> hello@usctts.com
          </a>
          <a
            href="https://instagram.com/trojantechsolutions"
            className="flex items-center gap-1.5 text-sm text-gray-500 no-underline hover:text-gray-900 transition-colors w-fit"
          >
            <InstagramIcon size={14} /> @trojantechsolutions
          </a>
          <a
            href="https://www.linkedin.com/company/trojan-tech-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 no-underline hover:text-gray-900 transition-colors w-fit"
          >
            <LinkedInIcon size={14} color="#111827" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
