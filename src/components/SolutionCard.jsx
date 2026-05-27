import { Link } from 'react-router-dom'

export default function SolutionCard({ solution }) {
  const Icon = solution.icon

  return (
    <Link
      to={`/solutions/${solution.slug}`}
      className="group rounded-[24px] border border-border bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="h-1.5 w-16 rounded-full bg-primary transition group-hover:bg-accent" />
      <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-text">{solution.name}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{solution.shortDescription}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
        Learn More →
      </span>
    </Link>
  )
}
