import { Link, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

import CTABanner from '../components/CTABanner'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import RevealSection from '../components/RevealSection'
import Seo from '../components/Seo'
import { solutions } from '../data/solutions'

function BulletList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <Reveal key={item} as="li" variant="list" delay={index * 40} className="flex items-start gap-3 text-base leading-7 text-muted">
          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={1.5} />
          <span>{item}</span>
        </Reveal>
      ))}
    </ul>
  )
}

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = solutions.find((item) => item.slug === slug)

  if (!solution) {
    return (
      <div className="pt-[132px] text-center">
        <Seo title="Solution Not Found" description="The requested solution page could not be found." />
        <p className="section-label">Solution not found</p>
        <h1 className="display-title mt-4 text-text">We could not locate that page.</h1>
        <Link to="/solutions" className="btn-primary mt-8">
          Browse Solutions
        </Link>
      </div>
    )
  }

  const Icon = solution.icon

  return (
    <div className="pt-[112px]">
      <Seo title={solution.name} description={solution.metaDescription} />

      <PageHero
        label={solution.category}
        title={solution.name}
        description={solution.heroDescription}
        ctaPrimary={{ label: 'Request a Demo', href: '/contact' }}
        breadcrumb={
          <span className="text-muted">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{' '}
            /{' '}
            <Link to="/solutions" className="hover:text-primary">
              Solutions
            </Link>{' '}
            / <span className="text-accent">{solution.name}</span>
          </span>
        }
        heroGraphic={
          <div className="mx-auto flex h-[220px] w-[220px] items-center justify-center rounded-[40px] bg-[#EEF3FB] shadow-soft">
            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-white">
              <Icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
            </div>
          </div>
        }
      />

      <RevealSection className="section-space bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:grid lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <div>
            <Reveal as="p" variant="label" className="section-label">
              Overview
            </Reveal>
            <Reveal as="h2" variant="heading" className="section-title mt-4 text-text">
              What is {solution.name}?
            </Reveal>
            <div className="mt-6 space-y-5">
              {solution.overview.map((paragraph, index) => (
                <Reveal key={paragraph} as="p" variant="paragraph" delay={index * 100} className="body-copy">
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal as="div" variant="card" delay={120} className="mt-10 rounded-[32px] border border-border bg-surface p-8 lg:mt-0">
            <h3 className="card-title text-text">Key Highlights</h3>
            <div className="mt-6">
              <BulletList items={solution.highlights} />
            </div>
          </Reveal>
        </div>
      </RevealSection>

      <RevealSection className="section-space bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal as="p" variant="label" className="section-label">
            Details
          </Reveal>
          <Reveal as="h2" variant="heading" className="section-title mt-4 text-text">
            {solution.featureSectionTitle}
          </Reveal>
          <div className="mt-10 rounded-[32px] border border-border bg-white p-8">
            <BulletList items={solution.featureItems} />
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-space bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <Reveal as="p" variant="label" className="section-label">
              Why It Matters
            </Reveal>
            <Reveal as="h2" variant="heading" className="section-title mt-4 text-text">
              {solution.secondarySectionTitle}
            </Reveal>
          </div>
          <div className="mt-8 lg:mt-0">
            <BulletList items={solution.secondaryItems} />
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-space bg-dark text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal as="p" variant="label" className="section-label">
            Intended For
          </Reveal>
          <Reveal as="h2" variant="heading" className="section-title mt-4 text-white">
            Organisations and teams this solution supports best.
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solution.audience.map((item, index) => (
              <Reveal key={item} as="div" variant="card" delay={index * 80}>
                <div className="rounded-[28px] bg-white/5 p-8">
                  <h3 className="card-title text-white">{item}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    Tailored to operational, compliance, and access needs in this environment.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </RevealSection>

      <CTABanner
        title={`Interested in ${solution.name}?`}
        description="Our team can help you evaluate fit, deployment, and implementation priorities for your organisation."
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />

      <RevealSection className="section-space bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal as="p" variant="label" className="section-label">
            Related Solutions
          </Reveal>
          <Reveal as="h2" variant="heading" className="section-title mt-4 text-text">
            Explore other solutions
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solution.related.map((relatedSlug, index) => {
              const related = solutions.find((item) => item.slug === relatedSlug)
              if (!related) return null
              return <SolutionRelatedCard key={related.slug} related={related} index={index} />
            })}
          </div>
        </div>
      </RevealSection>
    </div>
  )
}

function SolutionRelatedCard({ related, index }) {
  const Icon = related.icon

  return (
    <Reveal as="div" variant="card" delay={index * 80}>
      <Link to={`/solutions/${related.slug}`} className="solution-card group block rounded-[28px] border border-border bg-surface p-6">
        <div className="solution-card-bar h-1.5 w-16 rounded-full bg-primary transition-colors duration-200 group-hover:bg-accent" />
        <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-[20px] bg-primary/10 text-primary">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <h3 className="card-title mt-6 text-text">{related.name}</h3>
        <p className="body-copy mt-3">{related.shortDescription}</p>
      </Link>
    </Reveal>
  )
}
