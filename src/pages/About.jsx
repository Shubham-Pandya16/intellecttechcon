import { Award, BookOpen, ShieldCheck, Sparkles } from 'lucide-react'

import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import RevealSection from '../components/RevealSection'
import Seo from '../components/Seo'
import { aboutPillars, companyOverview, sectors } from '../data/siteContent'

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    description: 'We provide highly secured technology and content solutions that organisations can rely on with confidence.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge',
    description: 'We empower the knowledge community with solutions that support learning, research, access, and discovery.',
  },
  {
    icon: Sparkles,
    title: 'Customisation',
    description: 'Our client-centric approach and customised services help users achieve their goals more effectively.',
  },
  {
    icon: Award,
    title: 'Experience',
    description: 'Years of experience guide how we deliver scalable, affordable, and reliable services internationally.',
  },
]

export default function About() {
  return (
    <div className="pt-[112px]">
      <Seo
        title="About"
        description="Learn how Intellect Techcon Solutions delivers affordable, scalable, and highly secured technology and content solutions for organisations worldwide."
      />

      <PageHero
        label="About"
        title="About Intellect Techcon Solutions"
        description="A global technology and content provider focused on affordable, scalable, and highly secured solutions for knowledge-driven organisations."
        variant="soft"
      />

      <RevealSection className="section-space bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <Reveal as="p" variant="label" className="section-label">
              Company Overview
            </Reveal>
            <Reveal as="h2" variant="heading" className="section-title mt-4 text-text">
              Technology and content services built around the knowledge community.
            </Reveal>
            <Reveal as="p" variant="paragraph" delay={100} className="body-copy mt-6">
              {companyOverview.homeAbout}
            </Reveal>
            <Reveal as="p" variant="paragraph" delay={180} className="body-copy mt-5">
              We serve academic, government and corporate organisations worldwide with customised services that stay practical, secure, and scalable as needs grow.
            </Reveal>
          </div>
          <Reveal as="div" variant="card" delay={120} className="mt-10 rounded-[40px] bg-surface p-10 shadow-soft lg:mt-0">
            <div className="rounded-[32px] bg-white p-8">
              <p className="section-label">Tagline</p>
              <p className="mt-4 text-2xl font-bold tracking-[-0.02em] text-text">{companyOverview.tagline}</p>
              <p className="body-copy mt-5">
                Affordable solutions, secure systems, and client-centric delivery for organisations across the globe.
              </p>
            </div>
          </Reveal>
        </div>
      </RevealSection>

      <RevealSection className="section-space bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {aboutPillars.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} as="div" variant="card" delay={index * 80}>
                  <div className="rounded-[28px] border border-border bg-white p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <p className="section-label mt-6">{item.title}</p>
                    <p className="body-copy mt-4">{item.description}</p>
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
            Sectors
          </Reveal>
          <Reveal as="h2" variant="heading" className="section-title mt-4 text-white">
            Serving institutions and organisations internationally.
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sectors.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} as="div" variant="card" delay={index * 80}>
                  <div className="rounded-[28px] bg-white/5 p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="card-title mt-6 text-white">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{item.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-space bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal as="p" variant="label" className="section-label">
            Values
          </Reveal>
          <Reveal as="h2" variant="heading" className="section-title mt-4 text-text">
            The way we deliver matters as much as what we deliver.
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} as="div" variant="card" delay={index * 80}>
                  <div className="feature-tile rounded-[28px] border border-border bg-surface p-8">
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
    </div>
  )
}
