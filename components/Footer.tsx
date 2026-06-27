import AeLogo from './AeLogo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/ae.creates' },
  { label: 'Behance', href: 'https://behance.net/ae-creates' },
  { label: 'X / Twitter', href: 'https://x.com/ae_creates' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ae-border bg-ae-black py-14 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3">
              <AeLogo className="w-6 h-6" />
              <div>
                <p className="font-display font-bold text-sm text-ae-white tracking-tight">
                  ae.creates
                </p>
                <p className="text-[10px] text-ae-muted tracking-widest uppercase font-body">
                  creative. design.
                </p>
              </div>
            </a>
            <p className="text-ae-muted font-body text-xs leading-relaxed max-w-xs">
              Brand identities & graphic design from South Africa. Built for brands that want to mean something.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-ae-muted uppercase tracking-[0.2em] font-body mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-ae-secondary text-sm font-body hover:text-ae-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-ae-muted uppercase tracking-[0.2em] font-body mb-5">
              Social
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ae-secondary text-sm font-body hover:text-ae-white transition-colors"
                  >
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ae-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-ae-muted text-xs font-body">
            © {new Date().getFullYear()} ae.creates. All rights reserved.
          </p>
          <p className="text-ae-muted text-xs font-body">
            South Africa · aecreates.xyz
          </p>
        </div>
      </div>
    </footer>
  )
}
