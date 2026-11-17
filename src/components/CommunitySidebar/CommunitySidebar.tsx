import Link from "next/link";
import Avatar from "../Avatar/Avatar";

const people = [
  {
    name: "Sam Patel",
    detail: "Bouldering · Brooklyn",
    initials: "SP",
    color: "bg-lime-100 text-lime-800",
  },
  {
    name: "Dexter Morgan",
    detail: "Sport · Queens",
    initials: "AM",
    color: "bg-sky-100 text-sky-800",
  },
  {
    name: "Nina Park",
    detail: "Trad · Manhattan",
    initials: "NP",
    color: "bg-fuchsia-100 text-fuchsia-800",
  },
];

export default function CommunitySidebar() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 space-y-5">
        <section className="rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold">Climbers near you</h2>
            <Link
              href="/community"
              className="text-xs font-semibold text-orange-700 hover:text-orange-800"
            >
              See all
            </Link>
          </div>
          <div className="space-y-4">
            {people.map((person) => (
              <div key={person.name} className="flex items-center gap-2.5">
                <Avatar
                  name={person.name}
                  initials={person.initials}
                  size={36}
                  fallbackClassName={person.color}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold">{person.name}</p>
                  <p className="mt-0.5 truncate text-[10px] text-stone-400">
                    {person.detail}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={`Follow ${person.name}`}
                  className="flex size-7 items-center justify-center rounded-lg border border-stone-200 text-sm font-semibold text-stone-500 hover:border-orange-300 hover:text-orange-700"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
          <div className="relative h-28 overflow-hidden bg-[#4c6457]">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#8da68d,#334c48)]" />
            <svg
              viewBox="0 0 300 120"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="m0 120 70-96 35 47 41-60 46 59 42-46 66 96z"
                fill="#d2b78f"
                opacity=".75"
              />
              <path
                d="m0 120 74-60 40 34 43-48 53 41 43-26 47 35v24z"
                fill="#496451"
              />
              <path
                d="M30 120q20-45 42 0m118 0q28-58 55 0m12 0q25-40 44 0"
                fill="#293f35"
              />
            </svg>
            <span className="absolute left-3 top-3 rounded-full bg-white/20 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur">
              This weekend
            </span>
          </div>
          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-orange-700">
              Community meetup
            </p>
            <h2 className="mt-1 text-sm font-bold">Gunks fall sendfest</h2>
            <p className="mt-1 text-xs leading-5 text-stone-500">
              Saturday · New Paltz, NY
            </p>
            <Link
              href="/events"
              className="mt-3 flex h-9 items-center justify-center rounded-xl bg-stone-900 text-xs font-bold text-white transition hover:bg-stone-700"
            >
              Find your crew <span className="ml-1">→</span>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold">Popular this week</h2>
            <span className="text-xs">↗</span>
          </div>
          <div className="space-y-3">
            <Link href="/explore" className="flex items-start gap-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-xs font-bold text-amber-700">
                01
              </span>
              <span>
                <span className="block text-xs font-bold">The Narrows</span>
                <span className="mt-0.5 block text-[10px] text-stone-400">
                  Gunks · 5.9 · Trad
                </span>
              </span>
            </Link>
            <Link href="/explore" className="flex items-start gap-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-xs font-bold text-amber-700">
                02
              </span>
              <span>
                <span className="block text-xs font-bold">Lost City</span>
                <span className="mt-0.5 block text-[10px] text-stone-400">
                  Central Park · V3 · Boulder
                </span>
              </span>
            </Link>
            <Link href="/explore" className="flex items-start gap-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-xs font-bold text-amber-700">
                03
              </span>
              <span>
                <span className="block text-xs font-bold">
                  Welcome to the Gunks
                </span>
                <span className="mt-0.5 block text-[10px] text-stone-400">
                  Gunks · 5.6 · Trad
                </span>
              </span>
            </Link>
          </div>
        </section>
        <p className="px-2 text-[10px] leading-5 text-stone-400">
          Built for the days you send, the days you don&apos;t, and everyone you
          meet along the way.
        </p>
      </div>
    </aside>
  );
}
