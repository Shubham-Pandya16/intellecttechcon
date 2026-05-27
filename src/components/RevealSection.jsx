import Reveal from './Reveal'

export default function RevealSection({ children, className = '' }) {
  return (
    <Reveal as="section" variant="section" className={className}>
      {children}
    </Reveal>
  )
}
