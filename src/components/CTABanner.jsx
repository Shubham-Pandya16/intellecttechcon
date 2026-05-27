import { Link } from 'react-router-dom'

export default function CTABanner({ title, description, buttonText, buttonHref }) {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-4 text-center text-white md:px-8">
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80">{description}</p>
        <Link
          to={buttonHref}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
