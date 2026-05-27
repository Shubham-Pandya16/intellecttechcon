export default function FeatureGrid({ features }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon
        return (
          <div key={feature.title} className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-text">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}
