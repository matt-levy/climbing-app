import Link from "next/link";

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = Array.isArray(params.q) ? params.q[0] : params.q;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f7f4] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-orange-700 hover:text-orange-800">← Back to your feed</Link>
        <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">Crux search</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">{query ? `Results for “${query}”` : "Find your next climb"}</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500">
            {query ? "Search is ready to connect to climbers, routes, and gyms. Add your data source here when you’re ready." : "Search for a route, a climbing partner, or a gym to get started."}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { title: "Climbs", note: "Routes and projects", icon: "↗" },
              { title: "People", note: "Find your crew", icon: "♧" },
              { title: "Gyms & crags", note: "Places to climb", icon: "◇" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-stone-50 p-4">
                <span className="flex size-9 items-center justify-center rounded-xl bg-orange-100 text-lg text-orange-800">{item.icon}</span>
                <h2 className="mt-4 text-sm font-bold">{item.title}</h2>
                <p className="mt-1 text-xs text-stone-500">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
