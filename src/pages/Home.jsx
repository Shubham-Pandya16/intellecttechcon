import { Link } from 'react-router-dom'
import { BookOpen, Cpu, ShieldCheck, Sparkles, Layout, Award } from 'lucide-react'
import PageHero from '../components/PageHero'
import SolutionCard from '../components/SolutionCard'
import CTABanner from '../components/CTABanner'
import RevealSection from '../components/RevealSection'
import { solutions } from '../data/solutions'

const stats = [
  { label: '10+ Solutions', value: '10+' },
  { label: '3 Sectors Served', value: '3' },
  { label: 'AI-Powered Platform', value: 'AI' },
  { label: 'Trusted Across United Arab Emirates', value: 'Trusted' },
]

const features = [
  { icon: Cpu, title: 'AI-Powered Intelligence', description: 'Smart workflows and analytics built for fast decision-making.' },
  { icon: Award, title: 'Affordable Pricing', description: 'Premium technology that aligns with public and private budgets.' },
  { icon: ShieldCheck, title: 'Highly Secure & Scalable', description: 'Enterprise-grade protection and architecture for large deployments.' },
  { icon: Sparkles, title: 'Client-Centric Approach', description: 'Solutions designed around your workflows and stakeholder priorities.' },
  { icon: BookOpen, title: 'Academic & Government Ready', description: 'Configured for institutional standards, compliance and accessibility.' },
  { icon: Layout, title: 'Fully Customisable', description: 'Modular tools that adapt to your process, ecosystem and branding.' },
]

const sectors = [
  { label: 'Academic Institutions', description: 'Solutions that support teaching, assessments, libraries and research.', icon: BookOpen },
  { label: 'Government Bodies', description: 'Secure platforms for exams, documentation, and citizen-facing services.', icon: ShieldCheck },
  { label: 'Corporate Organisations', description: 'Technology for training, compliance, and knowledge management.', icon: Layout },
]

export default function Home() {
  return (
    <div className="pt-[88px]">
      <PageHero
        label="TECHNOLOGY & CONTENT SOLUTIONS"
        title={<>Empowering Knowledge Communities with <span className="text-primary">Intelligent</span> Technology</>}
        description="Scalable, secure and affordable solutions for academic, government and corporate institutions across United Arab Emirates."
        ctaPrimary={{ label: 'Explore Solutions', href: '/solutions' }}
        ctaSecondary={{ label: 'Contact Us', href: '/contact' }}
        heroGraphic={
          <div className="relative mx-auto h-[460px] max-w-lg overflow-hidden rounded-[40px] bg-slate-50 p-10 shadow-soft">
            <div className="absolute inset-0 bg-hero-dots opacity-70" />
            <svg viewBox="0 0 520 420" fill="none" className="relative h-full w-full">
              <circle cx="120" cy="80" r="16" fill="#325BAA" opacity="0.96" />
              <circle cx="380" cy="90" r="14" fill="#EA6624" opacity="0.92" />
              <circle cx="260" cy="320" r="18" fill="#325BAA" opacity="0.9" />
              <path d="M120 80L180 120L230 80L310 140L360 100" stroke="#325BAA" strokeWidth="3" />
              <path d="M380 90L330 170L280 140L230 190" stroke="#EA6624" strokeWidth="3" />
              <path d="M260 320L320 260L390 280" stroke="#6B7280" strokeWidth="2" strokeDasharray="6 8" />
              <circle cx="180" cy="120" r="8" fill="#325BAA" />
              <circle cx="310" cy="140" r="10" fill="#EA6624" />
              <circle cx="320" cy="260" r="12" fill="#325BAA" opacity="0.84" />
            </svg>
          </div>
        }
      />

      <RevealSection className="mt-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[32px] bg-dark text-white">
            <div className="grid grid-cols-1 gap-px md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="space-y-2 bg-dark px-6 py-8 text-center">
                  <p className="text-3xl font-semibold text-accent">{item.value}</p>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mt-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">OUR SOLUTIONS</p>
            <h2 className="mt-4 text-4xl font-semibold text-text">Everything your institution needs, under one roof.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {solutions.slice(0, 6).map((item) => (
              <SolutionCard key={item.slug} solution={item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
            >
              View All Solutions →
            </Link>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mt-20 bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-4xl font-semibold text-text">Why institutions choose us</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[32px] border border-border bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mt-20 bg-dark py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {sectors.map((sector) => {
              const Icon = sector.icon
              return (
                <div key={sector.label} className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{sector.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{sector.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </RevealSection>

      <CTABanner
        title="Ready to transform your institution?"
        description="Partner with us for people-first technology and content solutions built to deliver measurable outcomes."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  )
}
