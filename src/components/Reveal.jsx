import { useEffect, useRef, useState } from 'react'

const variants = {
  section: 'translate-y-6',
  label: 'translate-y-4',
  heading: 'translate-y-6',
  paragraph: 'translate-y-0',
  card: 'translate-y-5',
  list: '-translate-x-3',
  cta: 'scale-[0.97]',
}

export default function Reveal({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  variant = 'section',
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const hiddenVariant = variants[variant] ?? variants.section
  const durationClass = variant === 'heading' || variant === 'cta' ? 'duration-700' : 'duration-500'

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all ${durationClass} ease-out ${visible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `opacity-0 ${hiddenVariant}`} ${className}`}
    >
      {children}
    </Component>
  )
}
