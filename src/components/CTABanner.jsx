import { Link } from 'react-router-dom'

import Reveal from './Reveal'

export default function CTABanner({ title, description, buttonText, buttonHref }) {
  return (
    <Reveal as="section" variant="cta" className="section-space bg-primary">
      <div className="mx-auto max-w-7xl px-4 text-center text-white md:px-8">
        <h2 className="section-title text-white">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/82">{description}</p>
        <Link to={buttonHref} className="btn-secondary mt-8 border-white text-white hover:bg-white/10">
          {buttonText}
        </Link>
      </div>
    </Reveal>
  )
}
