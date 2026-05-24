"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <span className="text-lg font-black text-gray-900 tracking-tighter">TTS</span>
          <span className="text-sm font-medium text-gray-700">Trojan Tech Solutions</span>
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
