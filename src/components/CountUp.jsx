import { useEffect, useMemo, useRef, useState } from 'react'

export default function CountUp({ value, suffix = '', fallback = '' }) {
  const [displayValue, setDisplayValue] = useState(value ? 0 : fallback)
  const ref = useRef(null)
  const animated = useRef(false)

  const isNumeric = useMemo(() => typeof value === 'number', [value])

  useEffect(() => {
    const element = ref.current
    if (!element || !isNumeric || animated.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return
        animated.current = true

        const duration = 1200
        const start = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = Math.round(eased * value)
          setDisplayValue(current)

          if (progress < 1) {
            window.requestAnimationFrame(tick)
          }
        }

        window.requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.15 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [isNumeric, value])

  return <span ref={ref}>{isNumeric ? `${displayValue}${suffix}` : fallback}</span>
}
