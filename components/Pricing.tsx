'use client'

import { useState } from 'react'

const brandingPlans = [
  {
    name: 'Starter',
    price: '$50',
    note: 'once-off',
    featured: false,
    features: [
      { text: '1x Custom Logo', sub: '3 variations' },
      { text: '2 Revisions' },
      { text: 'Colour Palette' },
      { text: 'Typography Selection' },
      { text: '3 Social Media Posts' },
    ],
  },
  {
    name: 'Professional',
    price: '$120',
    note: 'most popular',
    featured: true,
    features: [
      { text: 'Custom Logo Design', sub: '5 variations' },
      { text: 'Colour Palette' },
      { text: '5 Revisions' },
      { text: 'Typography Selection' },
      { text: 'Business Card Design' },
      { text: 'Letterhead Design' },
      { text: '6 Social Media Posts' },
      { text: 'Basic Brand Guidelines' },
    ],
  },
  {
    name: 'Complete',
    price: '$220',
    note: 'full brand',
    featured: false,
    features: [
      { text: 'Full Logo Suite', sub: 'primary, secondary, icon, submark' },
      { text: 'Logo Animation' },
      { text: 'Colour Palette' },
      { text: 'Infinite Revisions' },
      { text: 'Typography Selection' },
      { text: 'Stationery Kit', sub: 'business card, t-shirt, letterhead & envelope' },
      { text: 'Social Media Kit', sub: '5 templates + highlights' },
      { text: 'Brand Guidelines' },
      { text: 'Presentation Mockups' },
      { text: 'Export Files (print & digital)' },
    ],
  },
]

const flyerPlans = [
  {
    name: 'Once-Off',
    price: 'ZAR 350',
    priceUSD: '$20',
    note: 'single poster',
    featured: false,
    features: [
      { text: '1 Custom Poster' },
      { text: '2 Revision Rounds' },
      { text: '3–4 Day Turnaround' },
    ],
  },
  {
    name: 'Starter',
    price: 'ZAR 650',
    priceUSD: '$40 /mo',
    note: 'per month',
    featured: false,
    features: [
      { text: '2 Custom Posters /PM' },
      { text: '2 Revision Rounds per Design' },
      { text: '3–4 Day Turnaround' },
    ],
  },
  {
    name: 'Basic',
    price: 'ZAR 1300',
    priceUSD: '$80 /mo',
    note: 'most popular',
    featured: true,
    features: [
      { text: '4 Custom Posters /PM' },
      { text: '3 Revision Rounds per Design' },
      { text: '2–3 Day Turnaround' },
    ],
  },
  {
    name: 'Growth',
    price: 'ZAR 2600',
    priceUSD: '$160 /mo',
    note: 'best value',
    featured: false,
    features: [
      { text: '8 Custom Posters /PM' },
      { text: 'Unlimited Revisions' },
      { text: '1–2 Day Turnaround' },
    ],
  },
]

type Tab = 'branding' | 'flyers'

export default function Pricing() {
  const [tab, setTab] = useState<Tab>('branding')

  return (
    <section id="pricing" className="py-28 md:py-36 bg-ae-dark">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12 border-b border-ae-border pb-6">
          <p className="text-xs text-ae-muted uppercase tracking-[0.2em] font-body mb-3 reveal">
            — Pricing
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="display-text text-[clamp(32px,4.5vw,60px)] text-ae-white reveal reveal-delay-1">
              Transparent pricing.
            </h2>
            <p className="text-ae-secondary font-body text-sm max-w-xs reveal reveal-delay-2">
              No hidden fees. No surprises. Just great design.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mb-12 border border-ae-border w-fit reveal">
          {(['branding', 'flyers'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-7 py-3 text-sm font-body tracking-wide transition-all duration-200 capitalize ${
                tab === t
                  ? 'bg-ae-white text-ae-black'
                  : 'text-ae-secondary hover:text-ae-white'
              }`}
            >
              {t === 'branding' ? 'Branding' : 'Flyers & Posters'}
            </button>
          ))}
        </div>

        {/* Branding plans */}
        {tab === 'branding' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {brandingPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`flex flex-col p-8 border reveal reveal-delay-${i + 1} ${
                  plan.featured
                    ? 'border-ae-white bg-ae-white text-ae-black'
                    : 'border-ae-border bg-ae-card text-ae-white'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p
                      className={`text-xs uppercase tracking-[0.2em] font-body mb-1 ${
                        plan.featured ? 'text-ae-muted' : 'text-ae-muted'
                      }`}
                    >
                      {plan.note}
                    </p>
                    <h3
                      className={`font-display font-bold text-2xl ${
                        plan.featured ? 'text-ae-black' : 'text-ae-white'
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-display font-bold text-3xl ${
                        plan.featured ? 'text-ae-black' : 'text-ae-white'
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex flex-col gap-0.5">
                      <span
                        className={`text-sm font-body ${
                          plan.featured ? 'text-ae-black' : 'text-ae-light'
                        }`}
                      >
                        · {f.text}
                      </span>
                      {f.sub && (
                        <span
                          className={`text-xs font-body pl-3 ${
                            plan.featured ? 'text-[#666]' : 'text-ae-muted'
                          }`}
                        >
                          {f.sub}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`text-sm text-center py-3.5 border transition-all duration-200 font-body tracking-wide ${
                    plan.featured
                      ? 'border-ae-black text-ae-black hover:bg-ae-black hover:text-ae-white'
                      : 'border-ae-border text-ae-white hover:border-ae-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Flyer plans */}
        {tab === 'flyers' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flyerPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`flex flex-col p-7 border reveal reveal-delay-${i + 1} ${
                  plan.featured
                    ? 'border-ae-white bg-ae-white text-ae-black'
                    : 'border-ae-border bg-ae-card text-ae-white'
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.2em] font-body mb-1 ${
                    plan.featured ? 'text-[#777]' : 'text-ae-muted'
                  }`}
                >
                  {plan.note}
                </p>
                <h3
                  className={`font-display font-bold text-xl mb-3 ${
                    plan.featured ? 'text-ae-black' : 'text-ae-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-1">
                  <span
                    className={`font-display font-bold text-2xl ${
                      plan.featured ? 'text-ae-black' : 'text-ae-white'
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <span
                  className={`text-xs font-body mb-6 ${
                    plan.featured ? 'text-[#666]' : 'text-ae-muted'
                  }`}
                >
                  {plan.priceUSD}
                </span>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((f, fi) => (
                    <li
                      key={fi}
                      className={`text-sm font-body ${
                        plan.featured ? 'text-ae-black' : 'text-ae-light'
                      }`}
                    >
                      · {f.text}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`text-sm text-center py-3 border transition-all duration-200 font-body tracking-wide ${
                    plan.featured
                      ? 'border-ae-black text-ae-black hover:bg-ae-black hover:text-ae-white'
                      : 'border-ae-border text-ae-white hover:border-ae-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        )}

        <p className="text-ae-muted text-xs font-body mt-8 reveal">
          * All prices in USD. ZAR pricing available. Contact for custom quotes.
        </p>
      </div>
    </section>
  )
}
