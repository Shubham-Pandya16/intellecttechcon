import { Link, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import FeatureGrid from '../components/FeatureGrid'
import CTABanner from '../components/CTABanner'
import RevealSection from '../components/RevealSection'
import { solutions } from '../data/solutions'

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = solutions.find((item) => item.slug === slug)

  if (!solution) {
    return (
      <div className="pt-[120px] text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Solution not found</p>
        <h1 className="mt-4 text-3xl font-semibold text-text">We couldn’t locate that page.</h1>
        <Link to="/solutions" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
          Browse Solutions
        </Link>
      </div>
    )
  }

  const Icon = solution.icon

  return (
    <div className="pt-[88px]">
      <PageHero
        label={solution.category}
        title={solution.name}
        description={solution.description}
        ctaPrimary={{ label: 'Request a Demo', href: '/contact' }}
        breadcrumb={
          <span className="text-muted">
            <Link to="/" className="hover:text-primary">Home</Link> →{' '}
            <Link to="/solutions" className="hover:text-primary">Solutions</Link> →{' '}
            <span className="text-accent">{solution.name}</span>
          </span>
        }
        heroGraphic={
          <div className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center rounded-full bg-surface">
            <div className="absolute inset-0 rounded-full bg-primary/10" />
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-soft">
              <Icon className="h-20 w-20 text-primary" />
            </div>
          </div>
        }
      />

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:grid lg:grid-cols-[1.4fr_0.9fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Overview</p>
            <h2 className="mt-4 text-3xl font-semibold text-text">What is {solution.name}?</h2>
            <div className="mt-6 space-y-5 text-sm leading-8 text-muted">
              {solution.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-10 rounded-[32px] border border-border bg-surface p-8 lg:mt-0">
            <h3 className="text-xl font-semibold text-text">Key highlights</h3>
            <ul className="mt-6 space-y-4">
              {solution.keyHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm leading-7 text-muted">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">FEATURES</p>
          <h2 className="mt-4 text-3xl font-semibold text-text">What&apos;s included</h2>
          <div className="mt-10">
            <FeatureGrid features={solution.features} />
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Benefits</p>
          <h2 className="mt-4 text-3xl font-semibold text-text">Why choose this solution</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {solution.benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-[32px] border border-border bg-surface p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-accent">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-text">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl font-semibold">Designed for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solution.whoItFor.map((item) => (
              <div key={item} className="rounded-[32px] bg-white/5 p-8">
                <p className="text-xl font-semibold text-white">{item}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">Solutions tailored for this audience across operations and compliance.</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <CTABanner
        title={`Interested in ${solution.name}?`}
        description="Our team can help you evaluate fit, deployment and integration for your institution."
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Related</p>
          <h2 className="mt-4 text-3xl font-semibold text-text">Explore other solutions</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solution.related.map((relatedSlug) => {
              const related = solutions.find((item) => item.slug === relatedSlug)
              if (!related) return null
              const Icon = related.icon
              return (
                <Link
                  key={related.slug}
                  to={`/solutions/${related.slug}`}
                  className="rounded-[32px] border border-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-text">{related.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{related.shortDescription}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </RevealSection>
    </div>
  )
}
