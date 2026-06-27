export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-10 pt-32 pb-12 max-w-[1400px] mx-auto"
    >
      {/* Top label */}
      <div className="flex items-center gap-3 reveal">
        <span className="w-2 h-2 rounded-full bg-ae-white inline-block" />
        <span className="text-xs text-ae-secondary uppercase tracking-[0.2em] font-body">
          South Africa — est. 2024
        </span>
      </div>

      {/* Main headline */}
      <div className="flex-1 flex flex-col justify-center py-12 md:py-0">
        <h1 className="display-text text-[clamp(52px,9vw,140px)] text-ae-white leading-[0.95] tracking-[-0.04em] reveal">
          Brand identities
          <br />
          <span className="text-ae-secondary">&amp; graphic design</span>
          <br />
          from South Africa.
        </h1>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-end gap-8 reveal reveal-delay-2">
          <p className="text-ae-secondary font-body text-base md:text-lg max-w-sm leading-relaxed">
            ae.creates crafts brands that are clear,
            <br />
            memorable, and built to last.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-ae-white border border-ae-white px-7 py-4 hover:bg-ae-white hover:text-ae-black transition-all duration-200 font-body text-sm tracking-wide whitespace-nowrap"
          >
            Start a Project
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between reveal reveal-delay-3">
        <p className="text-ae-muted text-xs font-body tracking-widest uppercase">
          "creative. design."
        </p>
        <div className="flex items-center gap-2 animate-bounce">
          <span className="text-ae-muted text-xs font-body">scroll</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-ae-muted"
          >
            <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      </div>

      {/* Vertical label — desktop only */}
      <div
        className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="text-ae-muted text-[11px] tracking-[0.3em] uppercase font-body">
          aecreates.xyz
        </span>
      </div>
    </section>
  )
}
