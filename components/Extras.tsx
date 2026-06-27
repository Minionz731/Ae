const categories = [
  {
    title: 'Logo & Identity',
    items: [
      { label: 'Extra Revision', price: '+$10' },
      { label: 'Logo Animation', price: '+$30' },
    ],
  },
  {
    title: 'Social Media',
    items: [
      { label: 'Social Template', price: '$10 /each' },
      { label: 'Extra Social Post', price: '$10 /each' },
    ],
  },
  {
    title: 'Stationery & Print',
    items: [
      { label: 'Email Signature', price: '+$15' },
      { label: 'Business Cards', price: '+$25' },
      { label: 'Print Files', price: '+$30' },
      { label: 'Brand Guidelines', price: '+$25' },
    ],
  },
  {
    title: 'Service Upgrades',
    items: [
      { label: 'Priority Turnaround (1–2d)', price: '+$15' },
      { label: 'Source Files (ai. or psd.)', price: '+$30' },
    ],
  },
]

export default function Extras() {
  return (
    <section id="extras" className="py-28 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="mb-12 border-b border-ae-border pb-6">
        <p className="text-xs text-ae-muted uppercase tracking-[0.2em] font-body mb-3 reveal">
          — Add-Ons
        </p>
        <h2 className="display-text text-[clamp(32px,4.5vw,60px)] text-ae-white reveal reveal-delay-1">
          Extras & upgrades.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className={`border border-ae-border bg-ae-card p-8 reveal reveal-delay-${(i % 2) + 1}`}
          >
            <h3 className="font-display font-bold text-lg text-ae-white mb-6 pb-4 border-b border-ae-border">
              {cat.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {cat.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-ae-light font-body text-sm">
                    · {item.label}
                  </span>
                  <span className="font-display font-bold text-sm text-ae-white">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
