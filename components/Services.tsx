const services = [
  {
    number: '01',
    title: 'Brand Identity',
    description:
      'Full logo systems, colour palettes, typography, brand guidelines, and stationery. Everything you need to show up consistently.',
    tags: ['Logo Design', 'Brand Guidelines', 'Stationery', 'Logo Animation'],
  },
  {
    number: '02',
    title: 'Flyers & Posters',
    description:
      'Eye-catching event posters, promotional flyers, and print-ready artwork. Designed to stop the scroll and fill the room.',
    tags: ['Event Posters', 'Promo Flyers', 'Print Files', 'Digital Artwork'],
  },
  {
    number: '03',
    title: 'Social Media',
    description:
      'Custom post designs, template kits, and highlight covers. Build a feed that actually looks like a brand.',
    tags: ['Post Design', 'Templates', 'Highlight Covers', 'Content Kits'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mb-16 border-b border-ae-border pb-6">
        <p className="text-xs text-ae-muted uppercase tracking-[0.2em] font-body reveal">
          — Services
        </p>
        <a
          href="#pricing"
          className="text-xs text-ae-secondary hover:text-ae-white transition-colors font-body tracking-wide reveal"
        >
          View Pricing →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ae-border">
        {services.map((s, i) => (
          <div
            key={s.number}
            className={`bg-ae-black p-8 md:p-10 flex flex-col gap-6 group reveal reveal-delay-${i + 1}`}
          >
            <div className="flex items-start justify-between">
              <span className="text-ae-muted font-body text-xs tracking-widest">{s.number}</span>
              <span className="w-8 h-px bg-ae-border group-hover:bg-ae-white transition-all duration-300 mt-2" />
            </div>

            <h3 className="font-display font-bold text-2xl md:text-3xl text-ae-white leading-tight">
              {s.title}
            </h3>

            <p className="text-ae-secondary font-body text-sm leading-relaxed flex-1">
              {s.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-body text-ae-muted border border-ae-border px-2.5 py-1 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
