const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Brands Built' },
  { value: '2+', label: 'Years Experience' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left */}
        <div>
          <p className="text-xs text-ae-muted uppercase tracking-[0.2em] font-body mb-6 reveal">
            — About
          </p>
          <h2 className="display-text text-[clamp(36px,5vw,68px)] text-ae-white leading-[1.0] reveal reveal-delay-1">
            Design that
            <br />
            actually means
            <br />
            <span className="text-ae-secondary">something.</span>
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8 md:pt-16">
          <p className="text-ae-light font-body text-base md:text-lg leading-relaxed reveal">
            ae.creates is a South Africa-based graphic design studio
            specialising in brand identity and visual communication. We
            work with startups, businesses, and creatives to develop
            identities that are sharp, memorable, and built to last.
          </p>
          <p className="text-ae-secondary font-body text-base leading-relaxed reveal reveal-delay-1">
            Every project starts with a conversation and ends with a
            brand you're proud to put your name on. No filler. No
            templates. Just real, custom creative design.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-ae-border reveal reveal-delay-2">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-bold text-3xl md:text-4xl text-ae-white">
                  {s.value}
                </p>
                <p className="text-ae-muted text-xs font-body mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
