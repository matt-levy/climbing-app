import Form from "next/form";

export default function Search() {
  return (
    <Form
      action="/search"
      role="search"
      className="ml-auto hidden w-full max-w-xs sm:block"
    >
      <label htmlFor="climb-search" className="sr-only">
        Search climbs, people, or gyms
      </label>
      <div className="flex h-10 items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3 text-stone-400 transition focus-within:border-orange-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-4 shrink-0"
          aria-hidden="true"
        >
          <circle
            cx="10.8"
            cy="10.8"
            r="6.3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m15.5 15.5 4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <input
          id="climb-search"
          name="q"
          placeholder="Search climbs, people, gyms"
          className="min-w-0 flex-1 bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400"
        />
        <kbd className="hidden rounded border border-stone-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-stone-400 lg:inline">
          Ctrl K
        </kbd>
      </div>
    </Form>
  );
}
