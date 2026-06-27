const projects = [
  {
    title: 'Volta Energy',
    category: 'Brand Identity',
    year: '2025',
    gradient: 'from-[#2a2a2a] to-[#1a1a1a]',
  },
  {
    title: 'The Collective',
    category: 'Logo + Stationery',
    year: '2025',
    gradient: 'from-[#333] to-[#1c1c1c]',
  },
  {
    title: 'Studio Flux',
    category: 'Brand Guidelines',
    year: '2024',
    gradient: 'from-[#282828] to-[#181818]',
  },
  {
    title: 'Nightfall Events',
    category: 'Poster Series',
    year: '2025',
    gradient: 'from-[#222] to-[#111]',
  },
  {
    title: 'Mabula Foods',
    category: 'Brand Identity',
    year: '2024',
    gradient: 'from-[#2e2e2e] to-[#1a1a1a]',
  },
  {
    title: 'Urban Roots',
    category: 'Social Media Kit',
    year: '2025',
    gradient: 'from-[#303030] to-[#1c1c1c]',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="flex items-end justify-between mb-16 border-b border-ae-border pb-6">
        <div>
          <p className="text-xs text-ae-muted uppercase tracking-[0.2em] font-body mb-3 reveal">
            — Selected Work
          </p>
          <h2 className="display-text text-[clamp(32px,4.5vw,60px)] text-ae-white reveal reveal-delay-1">
            Recent projects.
          </h2>
        </div>
        <a
          href="https://www.behance.net/ae-creates"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-xs text-ae-secondary hover:text-ae-white transition-colors font-body tracking-wide reveal"
        >
          View All on Behance →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`group relative aspect-[4/3] bg-gradient-to-br ${p.gradient} border border-ae-border overflow-hidden cursor-pointer reveal reveal-delay-${(i % 3) + 1}`}
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-ae-black/0 group-hover:bg-ae-black/60 transition-all duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
              <span className="text-xs text-ae-secondary font-body uppercase tracking-widest mb-1">
                {p.category} — {p.year}
              </span>
              <span className="font-display font-bold text-xl text-ae-white">
                {p.title}
              </span>
            </div>

            {/* Always-visible bottom label on mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:hidden">
              <span className="text-xs text-ae-secondary font-body uppercase tracking-widest">
                {p.category}
              </span>
              <p className="font-display font-bold text-base text-ae-white mt-0.5">
                {p.title}
              </p>
            </div>

            {/* Subtle grid pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id={`grid-${i}`}
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
            </svg>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden reveal">
        <a
          href="https://www.behance.net/ae-creates"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-ae-secondary hover:text-ae-white transition-colors font-body tracking-wide"
        >
          View All on Behance →
        </a>
      </div>
    </section>
  )
}
