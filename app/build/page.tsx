import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Code2,
  ExternalLink,
  GitBranch,
  Laptop,
  Rocket,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import {
  BUILD_SESSIONS,
  currentBuildSession,
  type BuildDeliverable,
} from "@/lib/build";

const statusLabel: Record<BuildDeliverable["status"], string> = {
  done: "Complete",
  before: "Before meeting",
  during: "During meeting",
  after: "After meeting",
};

const statusClass: Record<BuildDeliverable["status"], string> = {
  done: "border-white/10 bg-white/[0.03] text-zinc-400",
  before: "border-amber-400/25 bg-amber-400/10 text-amber-200",
  during: "border-red-400/25 bg-red-500/10 text-red-200",
  after: "border-emerald-400/25 bg-emerald-500/10 text-emerald-200",
};

export const metadata = {
  title: "Build Team Hub | Trojan Technology Solutions",
  description:
    "The public home base for TTS Build Team sessions, pre-build setup, meeting slides, and deliverables.",
};

export default function BuildPage() {
  const sessions = [...BUILD_SESSIONS].sort((a, b) => a.number - b.number);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% -10%, rgba(204,0,0,0.28), transparent 62%), radial-gradient(ellipse 45% 35% at 12% 18%, rgba(255,204,0,0.08), transparent 60%)",
        }}
      />

      <header className="relative z-10 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-red-300">
              <Code2 className="h-4 w-4" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-tight">
                TTS Build
              </span>
              <span className="block text-xs text-zinc-500 group-hover:text-zinc-400">
                usctts.com/build
              </span>
            </span>
          </Link>
          <nav aria-label="Build navigation" className="hidden items-center gap-2 sm:flex">
            <a
              href="#pre-build"
              className="rounded-full px-3 py-2 text-sm text-zinc-400 hover:bg-white/[0.05] hover:text-white"
            >
              Pre-build
            </a>
            <a
              href="#deliverables"
              className="rounded-full px-3 py-2 text-sm text-zinc-400 hover:bg-white/[0.05] hover:text-white"
            >
              Deliverables
            </a>
            <a
              href="#sessions"
              className="rounded-full px-3 py-2 text-sm text-zinc-400 hover:bg-white/[0.05] hover:text-white"
            >
              Slides
            </a>
          </nav>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-200">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Build Team Hub
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Everything Build needs, in one place.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Slides, pre-build setup, deliverables, and the next action for the
            TTS Build Team. Meeting 2 is simple: arrive set up, follow along,
            and leave with your first webpage started.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/build/${currentBuildSession.slug}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/30 hover:bg-red-500"
            >
              Open Meeting 2 slides
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="#pre-build"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.08]"
            >
              Start pre-build checklist
            </a>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 sm:p-6 lg:p-7">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Current session
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                {currentBuildSession.shortTitle}: Vibe code your first web page
              </h2>
            </div>
            <span className="rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-200">
              Upcoming
            </span>
          </div>
          <p className="mb-6 text-sm leading-6 text-zinc-400">
            Caleb joins on Zoom to guide resourceful prompting and reference
            hunting. Kaitlyn supports the room in person so people can debug,
            format, and keep building.
          </p>
          <div className="grid gap-3">
            <SummaryRow
              icon={<GitBranch className="h-4 w-4" />}
              title="Before"
              body="GitHub, Vercel, and an AI coding tool set up."
            />
            <SummaryRow
              icon={<TerminalSquare className="h-4 w-4" />}
              title="During"
              body="Follow the shared prompt and build a simple webpage."
            />
            <SummaryRow
              icon={<Rocket className="h-4 w-4" />}
              title="After"
              body="Pick a personal project direction and save your work."
            />
          </div>
        </aside>
      </section>

      <section
        id="pre-build"
        className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionKicker icon={<Laptop className="h-4 w-4" />} label="Pre-build" />
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Do this before the meeting.
            </h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">
              Setup should not eat the build session. If something goes wrong,
              bring the exact error and we will help in person.
            </p>
          </div>
          <div className="grid gap-3">
            {currentBuildSession.preBuild?.map((item, index) => (
              <ChecklistItem key={item.title} item={item} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="deliverables"
        className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionKicker icon={<CheckCircle2 className="h-4 w-4" />} label="Deliverables" />
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What you should leave with.
            </h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">
              The page does not need to be perfect. It needs to exist, run, and
              give you a clear next step for your own build project.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {currentBuildSession.deliverables.map((item) => (
              <DeliverableCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="sessions"
        className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionKicker icon={<Clock3 className="h-4 w-4" />} label="Sessions" />
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Build meeting archive.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              Meeting slides stay here with the deliverables attached, so new
              members can catch up without digging through old links.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {sessions.map((session) => (
            <Link
              key={session.slug}
              href={`/build/${session.slug}`}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 hover:border-white/20 hover:bg-white/[0.06] sm:p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <span
                  className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
                  style={{
                    borderColor: `${session.accent}55`,
                    color: session.accent,
                    background: `${session.accent}14`,
                  }}
                >
                  Build {String(session.number).padStart(2, "0")}
                </span>
                <ArrowRight className="h-4 w-4 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {session.shortTitle}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {session.focus}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {session.deliverables.slice(0, 3).map((item) => (
                  <span
                    key={item.title}
                    className={`rounded-full border px-2.5 py-1 text-xs ${statusClass[item.status]}`}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 pb-20 sm:px-6 lg:px-8">
        <SectionKicker icon={<ExternalLink className="h-4 w-4" />} label="Setup links" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {currentBuildSession.resources?.map((resource) => (
            <a
              key={resource.label}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-white">{resource.label}</h3>
                  <p className="mt-2 text-sm leading-5 text-zinc-500">
                    {resource.description}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-zinc-600 group-hover:text-white" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function SectionKicker({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
      <span className="text-red-300">{icon}</span>
      {label}
    </div>
  );
}

function SummaryRow({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-zinc-950/45 p-4">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-red-300">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-5 text-zinc-500">{body}</p>
      </div>
    </div>
  );
}

function ChecklistItem({ item, index }: { item: BuildDeliverable; index: number }) {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10 text-sm font-semibold text-red-200">
        {index}
      </div>
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-white">{item.title}</h3>
          <span className={`rounded-full border px-2 py-0.5 text-[11px] ${statusClass[item.status]}`}>
            {statusLabel[item.status]}
          </span>
        </div>
        <p className="text-sm leading-6 text-zinc-400">{item.description}</p>
      </div>
    </article>
  );
}

function DeliverableCard({ item }: { item: BuildDeliverable }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <span className={`mb-4 inline-flex rounded-full border px-2.5 py-1 text-xs ${statusClass[item.status]}`}>
        {statusLabel[item.status]}
      </span>
      <h3 className="text-lg font-semibold tracking-tight text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
    </article>
  );
}
