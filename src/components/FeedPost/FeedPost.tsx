import Link from "next/link";
import Avatar from "../Avatar/Avatar";

type FeedPostProps = {
  name: string;
  handle: string;
  initials: string;
  avatar: string;
  time: string;
  location: string;
  caption: string;
  climb: string;
  grade: string;
  style: string;
  scene: "sunset" | "gym";
  likes: number;
  comments: number;
};

function ClimbingArt({ scene }: { scene: FeedPostProps["scene"] }) {
  if (scene === "gym") {
    return (
      <div className="relative h-64 overflow-hidden bg-[#35464a] sm:h-80" role="img" aria-label="Illustration of an indoor bouldering wall">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_10%,#f3bb71_0%,transparent_36%),linear-gradient(135deg,#34474a,#1b292d)]" />
        <svg viewBox="0 0 700 320" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M0 0h700v320H0z" fill="#26373a"/><path d="M60 0h540L490 320H0z" fill="#d77d3c"/><path d="M250 0h350L490 320H100z" fill="#e9a45b" opacity=".7"/>
          <path d="M0 260 590 0h110v320H0z" fill="#263b40" opacity=".7"/>
          {[[120,190],[195,150],[270,221],[335,119],[418,180],[487,91],[560,213],[220,70],[380,65],[90,260]].map(([x,y],i)=><path key={i} d={`M${x} ${y}l12 -7 9 8 -4 12 -13 2 -7 -8z`} fill={i%2?"#d7dbb0":"#86aaa0"}/>)}
          <path d="m370 233 20-38 18 6 15-25 19 5 13-26 21 10 8 34-22 16-11 42-26 6-16-23-23 13-24-20z" fill="#24302d"/>
          <circle cx="426" cy="155" r="12" fill="#d99062"/><path d="m409 204-21-26 7-5 27 17 22 14-8 9-25-9-18 31-12-4z" fill="#e8d2b0"/><path d="m461 210 28 15-5 8-35-9-20-20 9-9z" fill="#e8d2b0"/>
          <path d="m395 251-26 29-13-5 20-37 24-19 11 9zM453 241l21 32-9 8-29-30-6-27 13-3z" fill="#d98054"/>
          <text x="30" y="45" fill="white" fontSize="13" fontFamily="sans-serif" letterSpacing="3" opacity=".8">BROOKLYN BOULDERS</text>
        </svg>
        <span className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">Friday night project session</span>
      </div>
    );
  }
  return (
    <div className="relative h-64 overflow-hidden bg-[#d88c62] sm:h-80" role="img" aria-label="Illustration of a climber on a sunlit cliff">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f6c58d_0%,#e89b6d_48%,#7e6d60_100%)]" />
      <svg viewBox="0 0 700 320" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="535" cy="74" r="38" fill="#ffe2a9" opacity=".8"/><path d="M0 210 145 130l110 68 106-109 95 91 113-79 131 96v123H0z" fill="#a17e65" opacity=".46"/><path d="m0 251 150-81 86 54 98-83 82 37 111-69 173 107v104H0z" fill="#6c6358" opacity=".65"/>
        <path d="M296 320 363 52l70-23 65 291z" fill="#b9a382"/><path d="m322 320 55-251 45-17 51 268z" fill="#d4bd98"/><path d="m366 93 28 14-12 21-30-10zm46 57 32-12 16 19-37 17zm-45 63 27-17 16 21-31 21zm68 44 30-17 18 24-38 20z" fill="#817969"/>
        <path d="m390 170 22-32 17 4 6 20-17 16-13 28-19-9 3-19-21-9 4-8z" fill="#293534"/><circle cx="427" cy="130" r="11" fill="#b87558"/><path d="m391 170-20-22 6-5 29 13 13 17-10 8-18-7-18 26-10-5z" fill="#f1dfc1"/><path d="m430 178 27 17-5 8-37-9-17-20 9-8z" fill="#f1dfc1"/><path d="m389 195-20 33-13-4 13-43 19-9 10 10zm44 2 25 30-8 9-32-27-8-20 12-2z" fill="#b9694e"/>
        <path d="m367 148 7-13 10 4-6 13zm57 37 9 5-4 10-11-4zM394 119l7-8 10 6-4 8z" fill="#f4c56c"/>
      </svg>
      <span className="absolute bottom-4 left-4 rounded-full bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">The Gunks · golden hour</span>
    </div>
  );
}

export default function FeedPost({ name, handle, initials, avatar, time, location, caption, climb, grade, style, scene, likes, comments }: FeedPostProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
      <div className="flex items-center gap-3 px-4 py-4 sm:px-5">
        <Link href={`/people/${handle}`} aria-label={`${name}'s profile`} className="rounded-full">
          <Avatar name={name} initials={initials} size={40} fallbackClassName={avatar} />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-1.5 text-sm"><Link href={`/people/${handle}`} className="font-bold text-stone-900 hover:text-orange-700">{name}</Link><span className="text-stone-400">·</span><span className="text-xs text-stone-400">{time}</span></div>
          <Link href="/gyms" className="mt-0.5 flex items-center gap-1 text-xs text-stone-500 hover:text-orange-700"><svg viewBox="0 0 16 16" fill="none" className="size-3" aria-hidden="true"><path d="M8 14s5-4.1 5-8A5 5 0 0 0 3 6c0 3.9 5 8 5 8Z" stroke="currentColor" strokeWidth="1.4"/><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/></svg>{location}</Link>
        </div>
        <button type="button" aria-label="More post options" className="rounded-lg px-2 py-1 text-xl leading-none text-stone-400 hover:bg-stone-100">···</button>
      </div>
      <p className="px-4 pb-4 text-sm leading-6 text-stone-700 sm:px-5">{caption}</p>
      <ClimbingArt scene={scene} />
      <div className="flex items-center gap-3 px-4 py-4 sm:px-5">
        <span className="flex size-10 items-center justify-center rounded-xl bg-orange-50 text-lg">🧗</span>
        <div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-stone-900">{climb}</p><p className="mt-0.5 text-xs text-stone-500">{style} <span className="mx-1 text-stone-300">·</span> <span className="font-bold text-orange-700">{grade}</span></p></div>
        <Link href="/explore" className="rounded-lg border border-stone-200 px-3 py-2 text-xs font-bold text-stone-600 transition hover:border-orange-300 hover:text-orange-700">View climb</Link>
      </div>
      <div className="mx-4 border-t border-stone-100 sm:mx-5" />
      <div className="flex items-center justify-between px-3 py-2 sm:px-4">
        <div className="flex gap-1">
          <button type="button" className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-stone-500 transition hover:bg-rose-50 hover:text-rose-600"><span className="text-base">♡</span> {likes} stoke</button>
          <button type="button" className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-stone-500 transition hover:bg-stone-50"><span className="text-base">☷</span> {comments} comments</button>
        </div>
        <button type="button" aria-label="Share post" className="rounded-lg px-2.5 py-2 text-base text-stone-400 hover:bg-stone-50 hover:text-stone-700">↗</button>
      </div>
    </article>
  );
}
