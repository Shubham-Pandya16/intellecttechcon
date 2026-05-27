import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SolutionCard from '../components/SolutionCard'
import RevealSection from '../components/RevealSection'
import { solutions } from '../data/solutions'

export default function Solutions() {
  return (
    <div className="pt-[88px]">
      <PageHero
        label="OUR SOLUTIONS"
        title="Our Solutions"
        description="A comprehensive suite of products designed for academic, government, and corporate knowledge ecosystems."
        variant="soft"
      />

      <RevealSection className="bg-bg py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 xl:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
        </div>
      </RevealSection>
    </div>
  )
}
