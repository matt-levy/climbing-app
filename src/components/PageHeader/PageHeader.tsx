import Link from "next/link";
import Avatar from "../Avatar/Avatar";
import Search from "../Search/Search";

const navigation = [
  { label: "Explore", href: "/explore" },
  { label: "Community", href: "/community" },
  { label: "Gyms", href: "/gyms" },
];

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Crux home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-orange-600 text-white shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
              <path d="m5 19 6.2-13L14 12l2.2-4L21 19H5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="m10 19 2.7-5.7L16 19" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-xl font-bold tracking-tight text-stone-900">crux<span className="text-orange-600">.</span></span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Search />

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/climbs/new" className="inline-flex h-10 items-center gap-2 rounded-xl bg-orange-600 px-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="hidden sm:inline">Share a climb</span>
            <span className="sm:hidden">Share</span>
          </Link>
          <Link href="/profile" aria-label="Your profile" className="rounded-full border-2 border-white ring-1 ring-stone-200 transition hover:ring-orange-400">
            <Avatar name="Morgan Levy" size={36} fallbackClassName="bg-stone-200 text-stone-700" />
          </Link>
        </div>
      </div>
    </header>
  );
}
