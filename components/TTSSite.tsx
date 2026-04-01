"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Script from "next/script";
import {
  Eye,
  Zap,
  Users,
  ChevronDown,
  ArrowRight,
  Code2,
  Briefcase,
  Globe,
} from "lucide-react";
import { toast } from "sonner";

// ── WebGazer type ──────────────────────────────────────────────────────────
interface WebGazer {
  setGazeListener: (fn: (data: { x: number; y: number } | null) => void) => {
    begin: () => Promise<void>;
  };
  showVideo: (v: boolean) => void;
  showFaceOverlay: (v: boolean) => void;
  showFaceFeedbackBox: (v: boolean) => void;
  showPredictionPoints: (v: boolean) => void;
}

// ── Gaze nav engine (module-level to avoid closure issues) ─────────────────
const DWELL_MS = 1000;
let _navTarget: string | null = null;
let _navStart = 0;

function gazeNavUpdate(
  x: number,
  y: number,
  now: number,
): { target: string | null; progress: number } {
  const els = Array.from(
    document.querySelectorAll<HTMLElement>("[data-gaze-nav]"),
  );
  let hit: string | null = null;
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (
      x >= r.left - 24 &&
      x <= r.right + 24 &&
      y >= r.top - 24 &&
      y <= r.bottom + 24
    ) {
      hit = el.dataset.gazeNav ?? null;
      break;
    }
  }
  if (hit !== _navTarget) {
    _navTarget = hit;
    _navStart = now;
  }
  const progress = _navTarget ? Math.min((now - _navStart) / DWELL_MS, 1) : 0;
  return { target: _navTarget, progress };
}

// ── Color config (explicit static classes — no template literals) ──────────
const TRACK_COLORS = {
  indigo: {
    num: "text-indigo-500/20",
    eyebrow: "text-indigo-400",
    dot: "bg-indigo-500",
  },
  violet: {
    num: "text-violet-500/20",
    eyebrow: "text-violet-400",
    dot: "bg-violet-500",
  },
  blue: {
    num: "text-blue-500/20",
    eyebrow: "text-blue-400",
    dot: "bg-blue-500",
  },
} as const;

const FOUNDER_COLORS = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-400",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
  },
} as const;

const CADENCE_COLORS = {
  indigo: "text-indigo-400",
  violet: "text-violet-400",
  blue: "text-blue-400",
} as const;

const circumference = 2 * Math.PI * 10;

// ── Main component ─────────────────────────────────────────────────────────
export default function TTSSite() {
  const [gazeActive, setGazeActive] = useState(false);
  const [gazeNavState, setGazeNavState] = useState<{
    target: string | null;
    progress: number;
  }>({ target: null, progress: 0 });

  const webgazerReadyRef = useRef(false);
  const gazeStartedRef = useRef(false);
  const dwellFiredRef = useRef(false);
  const gazeCursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  // Custom cursor (nalana-style)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + "px";
        cursorDotRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      ringPosRef.current.x +=
        (mousePosRef.current.x - ringPosRef.current.x) * 0.14;
      ringPosRef.current.y +=
        (mousePosRef.current.y - ringPosRef.current.y) * 0.14;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = ringPosRef.current.x + "px";
        cursorRingRef.current.style.top = ringPosRef.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("tts-visible");
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".tts-fade").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const startGaze = useCallback(async () => {
    if (gazeStartedRef.current) return;

    let waited = 0;
    while (!webgazerReadyRef.current && waited < 5000) {
      await new Promise((r) => setTimeout(r, 100));
      waited += 100;
      if ((window as Window & { webgazer?: WebGazer }).webgazer)
        webgazerReadyRef.current = true;
    }

    const wg = (window as Window & { webgazer?: WebGazer }).webgazer;
    if (!wg) {
      toast.error("Eye tracking unavailable. Check your connection.");
      return;
    }

    try {
      gazeStartedRef.current = true;
      toast.loading("Starting eye tracking…", { id: "gaze", duration: 8000 });

      await wg
        .setGazeListener((data) => {
          if (!data) return;
          const now = performance.now();

          // Update gaze cursor position directly (avoids React re-render)
          if (gazeCursorRef.current) {
            gazeCursorRef.current.style.left = data.x - 12 + "px";
            gazeCursorRef.current.style.top = data.y - 12 + "px";
            gazeCursorRef.current.style.opacity = "1";
          }

          const nav = gazeNavUpdate(data.x, data.y, now);
          setGazeNavState(nav);

          if (nav.progress >= 1 && nav.target && !dwellFiredRef.current) {
            dwellFiredRef.current = true;
            scrollTo(nav.target);
            _navTarget = null;
            _navStart = 0;
            setTimeout(() => {
              dwellFiredRef.current = false;
            }, 1200);
          } else if (nav.progress < 0.8) {
            dwellFiredRef.current = false;
          }
        })
        .begin();

      wg.showVideo(false);
      wg.showFaceOverlay(false);
      wg.showFaceFeedbackBox(false);
      wg.showPredictionPoints(false);
      setGazeActive(true);
      toast.success("Eye tracking active — look at nav links to navigate", {
        id: "gaze",
        duration: 4000,
      });
    } catch {
      gazeStartedRef.current = false;
      toast.error("Eye tracking failed to start.", { id: "gaze" });
    }
  }, [scrollTo]);

  return (
    <>
      <Script
        src="https://webgazer.cs.brown.edu/webgazer.js"
        strategy="afterInteractive"
        onReady={() => {
          webgazerReadyRef.current = true;
        }}
      />

      {/* Custom cursor */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          background: "rgba(99,102,241,0.95)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%,-50%)",
        }}
      />
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          width: 32,
          height: 32,
          border: "1.5px solid rgba(99,102,241,0.35)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* Gaze cursor */}
      <div
        ref={gazeCursorRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          width: 24,
          height: 24,
          borderRadius: "50%",
          border: "2px solid rgba(99,102,241,0.5)",
          background: "rgba(99,102,241,0.06)",
          pointerEvents: "none",
          zIndex: 9001,
          opacity: 0,
          transition: "opacity 0.2s",
        }}
      />

      <div style={{ cursor: "none" }}>
        {/* ── NAV ─────────────────────────────────────────────────────── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07]"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            background: "rgba(9,9,11,0.85)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                <Zap size={13} className="text-indigo-400" />
              </div>
              <span className="font-bold text-white text-sm tracking-tight">
                TTS
              </span>
            </button>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-1">
              {(
                [
                  { label: "About", id: "about" },
                  { label: "Tracks", id: "tracks" },
                  { label: "How It Works", id: "how-it-works" },
                  { label: "Leadership", id: "leadership" },
                ] as const
              ).map(({ label, id }) => {
                const isTarget = gazeNavState.target === id;
                const progress = isTarget ? gazeNavState.progress : 0;
                return (
                  <button
                    key={id}
                    data-gaze-nav={id}
                    onClick={() => scrollTo(id)}
                    className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-zinc-400 hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    {gazeActive && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className="-rotate-90 flex-shrink-0"
                        style={{
                          opacity: isTarget ? 1 : 0,
                          transition: "opacity 0.2s",
                        }}
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="rgba(99,102,241,0.2)"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="rgba(99,102,241,0.9)"
                          strokeWidth="2"
                          strokeDasharray={`${progress * circumference} ${circumference}`}
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {label}
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              {!gazeActive && (
                <button
                  onClick={startGaze}
                  className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium hover:bg-indigo-500/15 transition-all cursor-pointer"
                >
                  <Eye size={12} /> Eye Nav
                </button>
              )}
              <button
                onClick={() => scrollTo("join")}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm font-semibold transition-all duration-150 cursor-pointer shadow-lg shadow-indigo-500/25"
              >
                Apply
              </button>
            </div>
          </div>
        </nav>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
          style={{
            background: "#09090b",
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.18), transparent)," +
              "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 32px 32px",
          }}
        >
          <div className="text-center max-w-5xl mx-auto px-6">
            <div className="tts-fade inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-10">
              USC Builder Club · Spring 2026
            </div>

            <h1 className="tts-fade text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-8">
              <span className="text-white">Trojan</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #a5b4fc 0%, #818cf8 40%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technology
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>

            <p className="tts-fade text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              USC&apos;s builder club for people who want to ship real products,
              solve real client problems, and learn AI by actually using it.
            </p>

            <div className="tts-fade flex items-center justify-center gap-4 flex-wrap">
              <button
                onClick={() => scrollTo("join")}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-base transition-all duration-150 cursor-pointer shadow-xl shadow-indigo-500/30"
              >
                Apply Now <ArrowRight size={17} />
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.09] text-zinc-300 font-medium text-base transition-all duration-150 cursor-pointer"
              >
                Learn More <ChevronDown size={17} />
              </button>
            </div>

            {/* Stats bar */}
            <div className="tts-fade mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                ["40–60", "Members this semester"],
                ["30+", "Shipped products"],
                ["3+", "Real clients"],
              ].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-white mb-1">
                    {num}
                  </div>
                  <div className="text-xs text-zinc-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
            <ChevronDown size={18} className="animate-bounce" />
          </div>
        </section>

        {/* ── WHAT WE ARE ──────────────────────────────────────────────── */}
        <section
          id="about"
          className="py-32 px-6"
          style={{ background: "#09090b" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="tts-fade text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                What We Are
              </p>
              <h2 className="tts-fade text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                Built different, on purpose
              </h2>
              <p className="tts-fade text-zinc-500 text-lg max-w-xl mx-auto">
                Less talk. More shipping. Less theory. More client work. Less
                clout-chasing. More skill-building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {(
                [
                  {
                    Icon: Code2,
                    iconBg: "bg-indigo-500/10",
                    iconColor: "text-indigo-400",
                    title: "Startup Studio",
                    body: "Ship real products with real users. Not demo projects or class assignments — live products with actual traction built this semester.",
                  },
                  {
                    Icon: Briefcase,
                    iconBg: "bg-violet-500/10",
                    iconColor: "text-violet-400",
                    title: "Consulting Arm",
                    body: "Solve real problems for real clients using AI-first workflows. Get strategic reps before you graduate. Real scope, real deliverables.",
                  },
                  {
                    Icon: Users,
                    iconBg: "bg-blue-500/10",
                    iconColor: "text-blue-400",
                    title: "Builder Community",
                    body: "High-energy, meets consistently, works in public. Treats health, ambition, and creativity as part of the system — not afterthoughts.",
                  },
                ] as const
              ).map(({ Icon, iconBg, iconColor, title, body }) => (
                <div
                  key={title}
                  className="tts-fade rounded-2xl p-8 border border-white/[0.07]"
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-6`}
                  >
                    <Icon size={22} className={iconColor} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRACKS ───────────────────────────────────────────────────── */}
        <section
          id="tracks"
          className="py-32 px-6"
          style={{ background: "rgba(99,102,241,0.035)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="tts-fade text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                Pick Your Path
              </p>
              <h2 className="tts-fade text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                Three tracks. One community.
              </h2>
              <p className="tts-fade text-zinc-500 text-lg">
                You can switch. Most people end up doing two.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {(
                [
                  {
                    num: "01",
                    colorKey: "indigo" as const,
                    subtitle: "Product & Startups",
                    title: "Vibe Coding",
                    items: [
                      "Build apps and tools with AI",
                      "Deploy live products this semester",
                      "Find real users and iterate",
                      "6-week arc to a shipped product",
                    ],
                  },
                  {
                    num: "02",
                    colorKey: "violet" as const,
                    subtitle: "Client Work & Strategy",
                    title: "Consulting",
                    items: [
                      "Solve real problems for real clients",
                      "AI-first research and analysis",
                      "Build and present deliverables",
                      "Get strategic reps before you graduate",
                    ],
                  },
                  {
                    num: "03",
                    colorKey: "blue" as const,
                    subtitle: "Career Acceleration",
                    title: "Community",
                    items: [
                      "Apply AI directly to your major",
                      "Build your network intentionally",
                      "Speaker series with real operators",
                      "Career positioning that actually works",
                    ],
                  },
                ] as const
              ).map(({ num, colorKey, subtitle, title, items }) => {
                const c = TRACK_COLORS[colorKey];
                return (
                  <div
                    key={num}
                    className="tts-fade rounded-2xl p-8 border border-white/[0.07] flex flex-col"
                    style={{
                      background: "rgba(255,255,255,0.035)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className={`text-6xl font-black ${c.num} mb-4`}>
                      {num}
                    </div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-widest ${c.eyebrow} mb-2`}
                    >
                      {subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-7">
                      {title}
                    </h3>
                    <ul className="space-y-3 mt-auto">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-zinc-400"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0 mt-1.5`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section
          id="how-it-works"
          className="py-32 px-6"
          style={{ background: "#09090b" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="tts-fade text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                Weekly Cadence
              </p>
              <h2 className="tts-fade text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                How TTS actually runs
              </h2>
              <p className="tts-fade text-zinc-500 text-lg max-w-lg mx-auto">
                Consistent rhythm. Real output. No fluff meetings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              {(
                [
                  {
                    colorKey: "indigo" as const,
                    day: "Monday",
                    label: "General Meeting",
                    desc: "Full club. Core lesson or live demo, track breakouts, accountability check-in, and next week's goals. Tyler and Caleb both run it.",
                  },
                  {
                    colorKey: "violet" as const,
                    day: "Tue – Fri",
                    label: "Workspace Sessions",
                    desc: "Open co-working. Build your product, work on a client project, get mentorship, or help onboard someone. Always staffed by e-board.",
                  },
                  {
                    colorKey: "blue" as const,
                    day: "Sunday",
                    label: "E-board Sync",
                    desc: "Leadership only. Review wins and problems, plan Monday, check the pipeline, assign the week's owners, protect founder health.",
                  },
                ] as const
              ).map(({ colorKey, day, label, desc }) => (
                <div
                  key={day}
                  className="tts-fade rounded-2xl p-8 border border-white/[0.07]"
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest ${CADENCE_COLORS[colorKey]} mb-3`}
                  >
                    {day}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-4">{label}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* First meeting preview */}
            <div
              className="tts-fade rounded-2xl border border-indigo-500/20 p-8 md:p-12"
              style={{
                background: "rgba(99,102,241,0.07)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                First Monday Meeting
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                What happens Week 1
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "What TTS actually is and who it's for",
                  "Why AI changes everything before you graduate",
                  "Pick your track (you can switch anytime)",
                  "Live vibe coding demo — ship something in 20 min",
                  "Join Discord, meet your cohort",
                  "Leave with a clear next action",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-indigo-400 text-xs font-bold mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP ───────────────────────────────────────────────── */}
        <section
          id="leadership"
          className="py-32 px-6"
          style={{ background: "rgba(99,102,241,0.03)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="tts-fade text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                Founders
              </p>
              <h2 className="tts-fade text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                Built by builders
              </h2>
              <p className="tts-fade text-zinc-500 text-lg max-w-lg mx-auto">
                Caleb owns product and tech. Tyler owns consulting and people.
                Both own the vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
              {(
                [
                  {
                    colorKey: "indigo" as const,
                    initials: "CN",
                    name: "Caleb Newton",
                    role: "Entrepreneurship Lead",
                    owns: [
                      "Product curriculum and technical systems",
                      "Website, GitHub, and tooling",
                      "Startup-facing relationships",
                      "Builder culture and live demos",
                    ],
                  },
                  {
                    colorKey: "violet" as const,
                    initials: "TL",
                    name: "Tyler Larsen",
                    role: "Consulting Lead",
                    owns: [
                      "Consulting curriculum and client pipeline",
                      "E-board building and people ops",
                      "Partnerships and cross-club ecosystem",
                      "Community culture and recruiting flow",
                    ],
                  },
                ] as const
              ).map(({ colorKey, initials, name, role, owns }) => {
                const c = FOUNDER_COLORS[colorKey];
                return (
                  <div
                    key={name}
                    className="tts-fade rounded-2xl p-8 border border-white/[0.07]"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-6`}
                    >
                      <span className={`text-xl font-black ${c.text}`}>
                        {initials}
                      </span>
                    </div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-widest ${c.text} mb-2`}
                    >
                      {role}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {name}
                    </h3>
                    <ul className="space-y-2.5">
                      {owns.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-zinc-400"
                        >
                          <div className="w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Shared values */}
            <div
              className="tts-fade rounded-2xl p-8 border border-white/[0.07] max-w-3xl mx-auto"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-5">
                What We Both Own
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Overall vision",
                  "Monday meeting design",
                  "Major strategic decisions",
                  "Club culture",
                  "External representation",
                  "Demo Day",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-300 border border-white/[0.08] bg-white/[0.04]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── JOIN ─────────────────────────────────────────────────────── */}
        <section
          id="join"
          className="py-32 px-6"
          style={{ background: "#09090b" }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <p className="tts-fade text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Spring 2026
            </p>
            <h2 className="tts-fade text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Ready to actually{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #a5b4fc 0%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                build?
              </span>
            </h2>
            <p className="tts-fade text-zinc-500 text-lg mb-12 leading-relaxed">
              Show up. Try things before you feel ready. Help each other. No
              ego. If you&apos;re stuck, ask. If you learn something, share it.
            </p>

            <div
              className="tts-fade rounded-2xl p-8 border border-white/[0.08]"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="space-y-4">
                <button
                  onClick={() =>
                    window.open("https://discord.gg/tts", "_blank")
                  }
                  className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-base transition-all duration-150 cursor-pointer shadow-lg shadow-indigo-500/25"
                >
                  <Globe size={17} /> Join Discord
                </button>
                <div className="grid grid-cols-3 gap-3 text-center pt-2">
                  {[
                    ["40–60", "Target members"],
                    ["3 tracks", "To choose from"],
                    ["Week 3", "First meeting"],
                  ].map(([val, label]) => (
                    <div key={label}>
                      <div className="text-sm font-bold text-white">{val}</div>
                      <div className="text-xs text-zinc-600 mt-0.5">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer
          className="border-t border-white/[0.06] py-10 px-6"
          style={{ background: "#09090b" }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2.5 text-zinc-500 text-sm">
              <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                <Zap size={11} className="text-indigo-400" />
              </div>
              Trojan Technology Solutions · USC
            </div>
            <div className="text-zinc-700 text-xs tracking-widest uppercase">
              Build. Solve. Ship.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
