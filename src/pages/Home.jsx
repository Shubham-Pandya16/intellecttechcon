import { Link } from 'react-router-dom'

import { companyOverview, homeFeatures, homeStats, sectors } from '../data/siteContent'
import { solutions } from '../data/solutions'
import CountUp from '../components/CountUp'
import CTABanner from '../components/CTABanner'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import RevealSection from '../components/RevealSection'
import Seo from '../components/Seo'
import SolutionCard from '../components/SolutionCard'

export default function Home() {
  return (
    <div className="pt-[112px]">
      <Seo description={companyOverview.metaDescription} />

      <PageHero
        label="Technology & Content Solutions"
        title={
          <>
            Empowering Knowledge Communities with <span className="text-primary">Intelligent</span> Technology
          </>
        }
        description={companyOverview.heroSubtext}
        ctaPrimary={{ label: 'Explore Solutions', href: '/solutions' }}
        ctaSecondary={{ label: 'Contact Us', href: '/contact' }}
        animateOnLoad
        heroGraphic={
          <div className="relative mx-auto max-w-lg overflow-hidden rounded-[40px] bg-slate-50 p-10 shadow-soft">
            <div className="absolute inset-0 bg-hero-dots opacity-80" />
            <div className="relative space-y-6">
              <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
                <p className="section-label">Trusted Globally</p>
                <p className="mt-3 text-lg font-semibold text-text">
                  Affordable, scalable, and highly secured solutions for organisations worldwide.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {solutions.slice(0, 4).map((solution) => {
                  const Icon = solution.icon
                  return (
                    <div key={solution.slug} className="rounded-[24px] border border-white/60 bg-white/72 p-5 shadow-sm backdrop-blur">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      <p className="mt-4 text-sm font-semibold text-text">{solution.name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        }
      />

      <RevealSection className="px-4 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-dark text-white">
          <div className="grid grid-cols-1 gap-px md:grid-cols-4">
            {homeStats.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal
                  key={item.label}
                  as="div"
                  variant="card"
                  delay={index * 80}
                  className="space-y-3 bg-dark px-6 py-8 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/6 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <p className="text-3xl font-extrabold tracking-[-0.03em] text-white">
                    <CountUp value={item.value} suffix={item.suffix} fallback={item.display} />
                  </p>
                  <p className="text-sm uppercase tracking-[0.15em] text-slate-300">{item.label}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-space">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal as="div" variant="label" className="max-w-3xl">
            <p className="section-label">Our Solutions</p>
          </Reveal>
          <Reveal as="h2" variant="heading" className="section-title mt-4 max-w-4xl text-text">
            Real technology and content solutions for the knowledge community.
          </Reveal>
          <Reveal as="p" variant="paragraph" delay={100} className="body-copy mt-5 max-w-3xl">
            {companyOverview.homeAbout}
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutions.slice(0, 6).map((solution, index) => (
              <SolutionCard key={solution.slug} solution={solution} index={index} />
            ))}
          </div>
          <Reveal as="div" variant="paragraph" delay={120} className="mt-10 text-center">
            <Link to="/solutions" className="btn-secondary">
              View All Solutions
            </Link>
          </Reveal>
        </div>
      </RevealSection>

      <RevealSection className="section-space bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal as="p" variant="label" className="section-label">
            Why Us
          </Reveal>
          <Reveal as="h2" variant="heading" className="section-title mt-4 max-w-3xl text-text">
            Solutions designed around trust, scale, security, and client outcomes.
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {homeFeatures.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} as="div" variant="card" delay={index * 80}>
                  <div className="feature-tile rounded-[28px] border border-border bg-white p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="card-title mt-6 text-text">{item.title}</h3>
                    <p className="body-copy mt-3">{item.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-space bg-dark text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal as="p" variant="label" className="section-label">
            Sectors We Serve
          </Reveal>
          <Reveal as="h2" variant="heading" className="section-title mt-4 max-w-3xl text-white">
            Reliable support for academic, government, and corporate organisations globally.
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <Reveal key={sector.title} as="div" variant="card" delay={index * 80}>
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="card-title mt-6 text-white">{sector.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{sector.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </RevealSection>

      <CTABanner
        title="Ready to transform your organisation?"
        description="Partner with Intellect Techcon Solutions for client-centric technology and content services built for knowledge communities worldwide."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  )
}
