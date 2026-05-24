"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/members" },
  { label: "Work With Us", href: "/work-with-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tts-theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tts-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tts-theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image src="/img/tts-logo.png" alt="TTS" width={28} height={28} />
          <span className="text-sm font-semibold text-gray-900">Trojan Technology Solutions</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0">
          <button
            onClick={() => setDark((d) => !d)}
            className="mr-3 p-1.5 text-gray-400 hover:text-gray-700 transition-colors duration-150 flex items-center cursor-pointer"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
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

        {/* Mobile: dark toggle + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 text-gray-400 hover:text-gray-700 transition-colors duration-150 cursor-pointer"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 text-gray-400 hover:text-gray-700 transition-colors duration-150 cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-2 flex flex-col">
            {LINKS.map(({ label, href }) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm py-3 no-underline transition-colors duration-150 border-b border-gray-100 last:border-b-0 ${
                    isActive
                      ? "text-gray-900 font-semibold"
                      : "text-gray-400 hover:text-gray-700 font-normal"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
