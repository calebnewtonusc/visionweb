import React from "react";
import { Mail } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2">
          <span className="text-base font-black text-gray-900 tracking-tighter font-ui">tts</span>
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
        </div>
      </div>
    </footer>
  );
}
