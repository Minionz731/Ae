'use client'

import { useEffect, useState } from 'react'
import AeLogo from './AeLogo'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur bg-ae-black/80 border-b border-ae-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <AeLogo className="w-7 h-7 transition-opacity group-hover:opacity-70" />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-sm text-ae-white tracking-tight">
              ae.creates
            </span>
            <span className="text-[10px] text-ae-secondary tracking-widest uppercase font-body">
              creative. design.
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ae-secondary hover:text-ae-white transition-colors duration-200 font-body tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-5 py-2 border border-ae-white text-ae-white hover:bg-ae-white hover:text-ae-black transition-all duration-200 font-body tracking-wide"
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-ae-white transition-all duration-200 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ae-white transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ae-white transition-all duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ae-dark border-t border-ae-border px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-ae-secondary hover:text-ae-white transition-colors font-body"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-sm px-5 py-3 border border-ae-white text-ae-white text-center hover:bg-ae-white hover:text-ae-black transition-all duration-200 font-body"
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
