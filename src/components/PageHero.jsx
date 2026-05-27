import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function PageHero({
  label,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  heroGraphic,
  variant = 'default',
  breadcrumb,
  animateOnLoad = false,
}) {
  const [ready, setReady] = useState(!animateOnLoad)

  useEffect(() => {
    if (!animateOnLoad) return
    const id = window.setTimeout(() => setReady(true), 40)
    return () => window.clearTimeout(id)
  }, [animateOnLoad])

  return (
    <section className={`relative overflow-hidden section-space ${variant === 'soft' ? 'bg-surface' : 'bg-bg'}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          {label && (
            <p
              style={{ transitionDelay: animateOnLoad ? '200ms' : '0ms' }}
              className={`section-label transition-all duration-500 ease-out ${ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              {label}
            </p>
          )}
          {breadcrumb && <p className="mt-4 text-sm text-muted">{breadcrumb}</p>}
          <h1
            style={{ transitionDelay: animateOnLoad ? '350ms' : '0ms' }}
            className={`display-title mt-5 transition-all duration-700 ease-out ${ready ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{ transitionDelay: animateOnLoad ? '500ms' : '100ms' }}
              className={`body-copy mt-6 max-w-2xl transition-all duration-500 ease-out ${ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              {description}
            </p>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div
              style={{ transitionDelay: animateOnLoad ? '650ms' : '180ms' }}
              className={`mt-10 flex flex-col gap-4 transition-all duration-500 ease-out sm:flex-row ${ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              {ctaPrimary && (
                <Link to={ctaPrimary.href} className="btn-primary">
                  {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link to={ctaSecondary.href} className="btn-secondary">
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
        {heroGraphic && (
          <div
            style={{ transitionDelay: animateOnLoad ? '400ms' : '120ms' }}
            className={`relative w-full max-w-lg transition-opacity duration-700 ease-out ${ready ? 'opacity-100' : 'opacity-0'}`}
          >
            {heroGraphic}
          </div>
        )}
      </div>
    </section>
  )
}
