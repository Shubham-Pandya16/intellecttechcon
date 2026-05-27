import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import RevealSection from '../components/RevealSection'
import Seo from '../components/Seo'
import SolutionCard from '../components/SolutionCard'
import { companyOverview } from '../data/siteContent'
import { solutions } from '../data/solutions'

export default function Solutions() {
  return (
    <div className="pt-[112px]">
      <Seo title="Solutions" description={companyOverview.metaDescription} />

      <PageHero
        label="Our Solutions"
        title="Technology and Content Solutions"
        description="Explore the full Intellect Techcon Solutions portfolio serving academic, government, and corporate organisations worldwide."
        variant="soft"
      />

      <RevealSection className="section-space bg-bg">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal as="p" variant="label" className="section-label">
            Solutions Overview
          </Reveal>
          <Reveal as="h2" variant="heading" className="section-title mt-4 max-w-3xl text-text">
            A comprehensive suite of scalable, secure, and affordable offerings.
          </Reveal>
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.slug} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </RevealSection>
    </div>
  )
}
