import { BookOpen, Layout, ShieldCheck, Award, Sparkles, Accessibility } from 'lucide-react'
import PageHero from '../components/PageHero'
import RevealSection from '../components/RevealSection'

const values = [
  { icon: ShieldCheck, title: 'Trust', description: 'We build technology that institutions can rely on every day.' },
  { icon: BookOpen, title: 'Expertise', description: 'Deep domain experience in education, government and enterprise solutions.' },
  { icon: Accessibility, title: 'Inclusion', description: 'Designing platforms that are accessible, compliant and inclusive.' },
  { icon: Layout, title: 'Clarity', description: 'Simple, elegant experiences for complex workflows.' },
  { icon: Sparkles, title: 'Innovation', description: 'Modern tools that keep institutions ahead of change.' },
  { icon: Award, title: 'Excellence', description: 'Premium service delivered with discipline and attention to detail.' },
]

const sectors = [
  { title: 'Academic Institutions', description: 'Solutions for campuses, research centres and academic libraries.' },
  { title: 'Government Bodies', description: 'Secure systems for public programmes, certification and compliance.' },
  { title: 'Corporate Organisations', description: 'Technology for training, knowledge management and governance.' },
]

export default function About() {
  return (
    <div className="pt-[88px]">
      <PageHero
        label="ABOUT"
        title="About Intellect Techcon Solutions"
        description="We partner with institutions to deliver elegant, secure and scalable technology for learning, governance and content management."
        variant="soft"
      />

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-lg font-semibold text-text">We help organisations modernise their knowledge infrastructure.</p>
            <div className="mt-6 space-y-6 text-sm leading-8 text-muted">
              <p>
                With experience across academic, government and corporate sectors, we design solutions that blend security, usability and operational clarity.
              </p>
              <p>
                Our client-centric approach means every deployment is carefully aligned with institutional goals, compliance expectations and long-term value.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-[40px] bg-surface p-10 shadow-soft lg:mt-0">
            <div className="h-72 rounded-[32px] bg-primary/5 p-6">
              <div className="relative h-full w-full">
                <div className="absolute left-0 top-0 h-16 w-16 rounded-full bg-primary/15" />
                <div className="absolute -right-10 top-24 h-20 w-20 rounded-full bg-accent/15" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-white/80 shadow-soft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[32px] border border-border bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Vision</p>
                <p className="mt-4 text-sm leading-8 text-muted">To make technology the trusted backbone of every knowledge-driven institution in United Arab Emirates and beyond.</p>
            </div>
            <div className="rounded-[32px] border border-border bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Mission</p>
              <p className="mt-4 text-sm leading-8 text-muted">To deliver refined digital systems that support assessment, content and data journeys with excellence and security.</p>
            </div>
            <div className="rounded-[32px] border border-border bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Goal</p>
              <p className="mt-4 text-sm leading-8 text-muted">To build long-term partnerships by providing high-quality solutions for academic, government and corporate clients.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Sectors</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {sectors.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white/5 p-8">
                <p className="text-xl font-semibold text-white">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => {
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
    </div>
  )
}
