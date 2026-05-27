import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="pt-[120px]">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold text-text">Oops. The page you are looking for does not exist.</h1>
        <p className="mt-5 text-sm leading-7 text-muted">
          Return to the homepage or explore our solutions for academic, government, and corporate needs.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#264880]"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
