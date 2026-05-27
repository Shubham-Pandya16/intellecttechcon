import { Link } from 'react-router-dom'

export default function PageHero({ label, title, description, ctaPrimary, ctaSecondary, heroGraphic, variant = 'default', breadcrumb }) {
  return (
    <section className={`relative overflow-hidden py-20 ${variant === 'soft' ? 'bg-surface' : 'bg-bg'}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          {label && <p className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.24em] text-accent">{label}</p>}
          {breadcrumb && <p className="mb-4 text-sm text-muted">{breadcrumb}</p>}
          <h1 className="text-4xl font-bold leading-tight text-text md:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-base leading-8 text-muted">{description}</p>}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {ctaPrimary && (
              <Link
                to={ctaPrimary.href}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#264880]"
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                to={ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
        {heroGraphic && <div className="relative w-full max-w-lg">{heroGraphic}</div>}
      </div>
    </section>
  )
}
