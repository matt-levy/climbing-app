import Avatar from "../components/Avatar/Avatar";
import CommunitySidebar from "../components/CommunitySidebar/CommunitySidebar";
import FeedPost from "../components/FeedPost/FeedPost";
import HomeSidebar from "../components/HomeSidebar/HomeSidebar";

const posts = [
  {
    name: "Maya Chen",
    handle: "mayaclimbs",
    initials: "MC",
    avatar: "bg-rose-100 text-rose-700",
    time: "24 min ago",
    location: "The Gunks, New York",
    caption: "Finally sent High Exposure today! This one has been living rent-free in my head for weeks. The views from the top made every hang worth it. 🧗‍♀️",
    climb: "High Exposure",
    grade: "5.6",
    style: "Trad · 5 pitches",
    scene: "sunset",
    likes: 42,
    comments: 8,
  },
  {
    name: "Jordan Rivera",
    handle: "jordan.sends",
    initials: "JR",
    avatar: "bg-sky-100 text-sky-700",
    time: "2 hours ago",
    location: "Brooklyn Boulders, NY",
    caption: "A little Friday night project session with the crew. That orange V5 is a sneaky one—trust the feet and commit to the move!",
    climb: "Orange Arete",
    grade: "V5",
    style: "Bouldering",
    scene: "gym",
    likes: 27,
    comments: 4,
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f7f4] text-stone-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)_290px] lg:px-8">
        <HomeSidebar />

        <section aria-labelledby="feed-title" className="min-w-0">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-orange-700">Climb together</p>
              <h1 id="feed-title" className="text-3xl font-bold tracking-tight">Your climbing circle</h1>
              <p className="mt-1 text-sm text-stone-500">Good climbs, good people, good days outside.</p>
            </div>
            <button type="button" className="hidden items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm font-semibold text-stone-600 shadow-sm transition hover:border-stone-300 sm:flex">
              <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true"><path d="M3 5h14M5.5 10h9M8 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
              For you
              <span className="text-stone-400">⌄</span>
            </button>
          </div>

          <div className="mb-5 rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Avatar name="Morgan Levy" size={40} />
              <a href="/climbs/new" className="flex h-11 flex-1 items-center rounded-xl bg-stone-50 px-4 text-sm text-stone-400 transition hover:bg-stone-100">Share a climb, beta, or a little stoke...</a>
              <a href="/climbs/new" aria-label="Add a photo" className="hidden size-10 items-center justify-center rounded-xl text-stone-500 transition hover:bg-orange-50 hover:text-orange-700 sm:flex">
                <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><circle cx="8.5" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="m5 17 4.5-4 3 2.5 2.5-2 4 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div className="mt-3 flex gap-2 border-t border-stone-100 pt-3 sm:pl-[52px]">
              <a href="/climbs/new" className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-stone-500 hover:bg-stone-50 hover:text-orange-700"><span className="text-base">📍</span> Check in</a>
              <a href="/climbs/new" className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-stone-500 hover:bg-stone-50 hover:text-orange-700"><span className="text-base">🧗</span> Log a send</a>
              <a href="/climbs/new" className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-stone-500 hover:bg-stone-50 hover:text-orange-700"><span className="text-base">📷</span> Photo</a>
            </div>
          </div>

          <div className="space-y-5">
            {posts.map((post) => <FeedPost key={post.handle} {...post} />)}
          </div>
          <div className="py-8 text-center text-sm text-stone-400">You&apos;re all caught up. Go find your next hold. ✨</div>
        </section>

        <CommunitySidebar />
      </div>
    </main>
  );
}
