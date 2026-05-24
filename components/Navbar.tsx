"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TTSAsterisk } from "./TTSAsterisk";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Members", href: "/members" },
  { label: "Work With Us", href: "/work-with-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <TTSAsterisk size={32} gradId="navAstGrad" />
          <span className="text-sm font-semibold text-gray-900">Trojan Technology Solutions</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0">
          {LINKS.map(({ label, href }, i) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <React.Fragment key={label}>
                {i > 0 && (
                  <span className="text-gray-300 text-xs mx-2 select-none">/</span>
                )}
                <Link
                  href={href}
                  className={`text-sm no-underline transition-colors duration-150 ${
                    isActive
                      ? "text-gray-900 font-semibold"
                      : "text-gray-400 hover:text-gray-700 font-normal"
                  }`}
                >
                  {label}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </nav>
  );
}
