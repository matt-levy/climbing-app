import Link from "next/link";

const items = [
  { label: "Your feed", icon: "⌂", href: "/", active: true },
  { label: "Explore climbs", icon: "⌕", href: "/explore" },
  { label: "Find a partner", icon: "♧", href: "/community" },
  { label: "Gyms & crags", icon: "◇", href: "/gyms" },
  { label: "Saved routes", icon: "♡", href: "/saved" },
];

export default function HomeSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-7">
        <nav aria-label="Your climbing menu" className="space-y-1">
          {items.map((item) => (
            <Link key={item.label} href={item.href} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${item.active ? "bg-orange-100/80 text-orange-800" : "text-stone-600 hover:bg-white hover:text-stone-950"}`}>
              <span className="flex size-7 items-center justify-center rounded-lg text-xl leading-none">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div>
          <div className="mb-3 flex items-center justify-between px-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400">Your circles</h2>
            <button type="button" aria-label="Add circle" className="text-lg leading-none text-stone-400 hover:text-orange-700">+</button>
          </div>
          <div className="space-y-1">
            <Link href="/circles/brooklyn" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-stone-600 hover:bg-white">
              <span className="flex size-8 items-center justify-center rounded-lg bg-violet-100 text-sm">🗽</span> NYC Climbers
            </Link>
            <Link href="/circles/outside" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-stone-600 hover:bg-white">
              <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-100 text-sm">🌲</span> Weekend Warriors
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-[#252a24] p-4 text-white">
          <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-white/10 text-lg">✦</div>
          <p className="text-sm font-bold">Every send has a story.</p>
          <p className="mt-1 text-xs leading-5 text-white/60">Keep your climbing memories, beta, and crew in one place.</p>
          <Link href="/climbs/new" className="mt-4 inline-flex text-xs font-bold text-orange-300 hover:text-orange-200">Share your first climb <span className="ml-1">→</span></Link>
        </div>

        <footer className="px-2 text-[11px] leading-5 text-stone-400">About · Guidelines · Privacy<br />© 2026 Crux Community</footer>
      </div>
    </aside>
  );
}
