const steps = [
  {
    number: '01',
    title: 'Brief',
    description:
      'We kick things off with a deep dive into your brand. Your story, your audience, your goals. This is where the foundation gets built.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      "From the brief, we define your creative direction. References, mood, tone, and brand personality are all mapped out before a single pixel is placed.",
  },
  {
    number: '03',
    title: 'Design',
    description:
      'This is where ideas become reality. We craft, refine, and iterate on your identity until every detail is exactly right. Nothing is accidental.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Your complete brand package, exported and ready. Print-ready, screen-optimised, and fully documented. Ready to launch — properly.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36 bg-ae-dark">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-ae-border pb-6">
          <div>
            <p className="text-xs text-ae-muted uppercase tracking-[0.2em] font-body mb-3 reveal">
              — Process
            </p>
            <h2 className="display-text text-[clamp(32px,4.5vw,60px)] text-ae-white reveal reveal-delay-1">
              How it works.
            </h2>
          </div>
          <p className="hidden md:block text-ae-secondary font-body text-sm max-w-xs text-right reveal">
            A clear, repeatable process that gets you great results every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-ae-border">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`bg-ae-dark p-8 flex flex-col gap-5 reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-display font-bold text-4xl text-ae-border leading-none">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-ae-white">
                {step.title}
              </h3>
              <p className="text-ae-secondary font-body text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
