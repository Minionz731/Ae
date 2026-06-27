const items = [
  'Brand Identity',
  'Logo Design',
  'Flyers & Posters',
  'Typography',
  'Social Media',
  'Print Design',
  'Brand Guidelines',
  'South Africa',
  'Stationery',
  'Visual Identity',
]

export default function Marquee() {
  const repeated = [...items, ...items]

  return (
    <div className="border-t border-b border-ae-border py-4 overflow-hidden">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-ae-secondary font-display text-sm uppercase tracking-[0.18em] whitespace-nowrap"
          >
            {item}
            <span className="text-ae-border text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
