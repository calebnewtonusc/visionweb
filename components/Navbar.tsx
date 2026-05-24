"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Members", href: "/members" },
  { label: "Work With Us", href: "/work-with-us" },
];

function TTSLogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#logoGrad)" />
      <text x="20" y="25.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="800" fontSize="11" fill="white" textAnchor="middle" letterSpacing="-0.5">TTS</text>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <TTSLogoMark />
          <span className="text-sm font-semibold text-gray-900">Trojan Technology Solutions</span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={label}
                href={href}
                className={`text-sm transition-colors duration-150 ${
                  isActive
                    ? "font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5"
                    : "font-normal text-gray-600 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
