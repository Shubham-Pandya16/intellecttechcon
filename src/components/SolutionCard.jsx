import { Link } from 'react-router-dom'

import Reveal from './Reveal'

export default function SolutionCard({ solution, index = 0 }) {
  const Icon = solution.icon

  return (
    <Reveal as="div" variant="card" delay={index * 80}>
      <Link to={`/solutions/${solution.slug}`} className="solution-card group block rounded-[28px] border border-border bg-white p-7">
        <div className="solution-card-bar h-1.5 w-20 rounded-full bg-primary transition-colors duration-200 group-hover:bg-accent" />
        <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-[20px] bg-primary/10 text-primary">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <h3 className="card-title mt-6 text-text">{solution.name}</h3>
        <p className="body-copy mt-3">{solution.shortDescription}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.02em] text-accent">
          Learn more
          <span aria-hidden="true">{'->'}</span>
        </span>
      </Link>
    </Reveal>
  )
}
