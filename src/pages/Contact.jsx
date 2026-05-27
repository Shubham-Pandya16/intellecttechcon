import { useState } from 'react'
import PageHero from '../components/PageHero'
import RevealSection from '../components/RevealSection'
import { solutions } from '../data/solutions'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    console.log('Contact request submitted', form)
  }

  return (
    <div className="pt-[88px]">
      <PageHero
        label="CONTACT"
        title="Get in Touch"
        description="Reach out for demos, partnerships, or to discuss how our solutions can support your institution."
        variant="soft"
      />

      <RevealSection className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-8 rounded-[32px] border border-border bg-surface p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Email</p>
                <p className="mt-3 text-lg font-semibold text-text">sales@intellecttechcon.com</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Phone</p>
                <p className="mt-3 text-lg font-semibold text-text">+971 50 6930558</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Location</p>
                <p className="mt-3 text-lg font-semibold text-text">P.O.Box 88878<br/>Dubai, United Arab Emirates</p>
              </div>
              <p className="text-sm leading-7 text-muted">
                We’d love to hear about your requirements and help you identify the right combination of solutions for your institution.
              </p>
            </div>

            <div className="rounded-[32px] border border-border bg-surface p-10">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-text">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    className="mt-3 w-full rounded-3xl px-5 py-3"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-text">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className="mt-3 w-full rounded-3xl px-5 py-3"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-text">Organisation</label>
                  <input
                    type="text"
                    value={form.organisation}
                    onChange={handleChange('organisation')}
                    className="mt-3 w-full rounded-3xl px-5 py-3"
                    placeholder="Your organisation"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-text">Solution of Interest</label>
                  <select
                    value={form.interest}
                    onChange={handleChange('interest')}
                    className="mt-3 w-full rounded-3xl px-5 py-3"
                  >
                    <option value="">Select a solution</option>
                    {solutions.map((solution) => (
                      <option key={solution.slug} value={solution.name}>
                        {solution.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-text">Message</label>
                  <textarea
                    value={form.message}
                    onChange={handleChange('message')}
                    className="mt-3 h-40 w-full rounded-3xl px-5 py-3 resize-none"
                    placeholder="Tell us about your project or requirements"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#264880]"
                  >
                    Submit Request
                  </button>
                </div>
                {submitted && (
                  <p className="rounded-3xl bg-primary/10 px-5 py-4 text-sm text-primary">
                    Thanks for reaching out! We will get back to you shortly.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  )
}
