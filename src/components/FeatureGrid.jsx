import Reveal from './Reveal'

export default function FeatureGrid({ features }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <Reveal key={feature.title} as="div" variant="card" delay={index * 80}>
            <div className="feature-tile rounded-[28px] border border-border bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-primary/10 text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="card-title mt-6 text-text">{feature.title}</h3>
              <p className="body-copy mt-3">{feature.description}</p>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
