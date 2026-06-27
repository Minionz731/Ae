export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-ae-dark">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs text-ae-muted uppercase tracking-[0.2em] font-body mb-6 reveal">
            — Get in Touch
          </p>

          <h2 className="display-text text-[clamp(40px,7vw,100px)] text-ae-white leading-[0.95] mb-12 reveal reveal-delay-1">
            Ready to build
            <br />
            <span className="text-ae-secondary">your brand?</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 reveal reveal-delay-2">
            <a
              href="mailto:hello@aecreates.xyz"
              className="group inline-flex items-center gap-3 bg-ae-white text-ae-black px-8 py-4 hover:bg-ae-light transition-all duration-200 font-body text-sm tracking-wide"
            >
              Email us
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-ae-border text-ae-secondary px-8 py-4 hover:border-ae-white hover:text-ae-white transition-all duration-200 font-body text-sm tracking-wide"
            >
              WhatsApp
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Contact info row */}
          <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t border-ae-border reveal reveal-delay-3">
            <div>
              <p className="text-ae-muted text-xs uppercase tracking-[0.15em] font-body mb-1">
                Email
              </p>
              <a
                href="mailto:hello@aecreates.xyz"
                className="text-ae-light font-body text-sm hover:text-ae-white transition-colors"
              >
                hello@aecreates.xyz
              </a>
            </div>
            <div>
              <p className="text-ae-muted text-xs uppercase tracking-[0.15em] font-body mb-1">
                Website
              </p>
              <a
                href="https://aecreates.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ae-light font-body text-sm hover:text-ae-white transition-colors"
              >
                aecreates.xyz
              </a>
            </div>
            <div>
              <p className="text-ae-muted text-xs uppercase tracking-[0.15em] font-body mb-1">
                Instagram
              </p>
              <a
                href="https://instagram.com/ae.creates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ae-light font-body text-sm hover:text-ae-white transition-colors"
              >
                @ae.creates
              </a>
            </div>
            <div>
              <p className="text-ae-muted text-xs uppercase tracking-[0.15em] font-body mb-1">
                Location
              </p>
              <p className="text-ae-light font-body text-sm">South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
