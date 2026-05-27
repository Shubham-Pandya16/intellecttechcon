import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import RevealSection from '../components/RevealSection'
import Seo from '../components/Seo'
import { contactDetails } from '../data/siteContent'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    organisation: '',
    country: '',
    email: '',
    message: '',
    phoneNumber: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    console.log('Contact request submitted', form)
  }

  const fields = [
    { label: 'First Name', key: 'firstName', type: 'text', placeholder: 'First Name' },
    { label: 'Last Name', key: 'lastName', type: 'text', placeholder: 'Last Name' },
    { label: 'Organisation (optional)', key: 'organisation', type: 'text', placeholder: 'Organisation (optional)' },
    { label: 'Country', key: 'country', type: 'text', placeholder: 'Country' },
    { label: 'Email', key: 'email', type: 'email', placeholder: 'Email' },
    { label: 'Phone Number (with country code)', key: 'phoneNumber', type: 'text', placeholder: '+971 00 0000000' },
  ]

  return (
    <div className="pt-[112px]">
      <Seo
        title="Contact"
        description="Contact Intellect Techcon Solutions for technology and content services, product enquiries, demos, and partnerships."
      />

      <PageHero
        label="Contact"
        title="Get in Touch"
        description="Reach out to discuss technology and content solutions, product enquiries, demos, or partnerships for your organisation."
        variant="soft"
      />

      <RevealSection className="section-space bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal as="div" variant="card" className="space-y-8 rounded-[32px] border border-border bg-surface p-10">
              <div>
                <p className="section-label">Contact Details</p>
                <p className="body-copy mt-4">
                  We would love to hear about your requirements and help identify the right technology and content combination for your organisation.
                </p>
              </div>
              <div className="space-y-5">
                <p className="flex items-center gap-3 text-base font-semibold text-text">
                  <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  {contactDetails.email}
                </p>
                <p className="flex items-center gap-3 text-base font-semibold text-text">
                  <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  {contactDetails.phone}
                </p>
                <p className="flex items-start gap-3 text-base font-semibold text-text">
                  <MapPin className="mt-0.5 h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span>{contactDetails.address}</span>
                </p>
              </div>
            </Reveal>

            <Reveal as="div" variant="card" delay={80} className="rounded-[32px] border border-border bg-surface p-10">
              <div className="grid gap-6 md:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.key} className={field.key === 'organisation' || field.key === 'email' || field.key === 'phoneNumber' ? 'md:col-span-2' : ''}>
                    <label className="text-sm font-semibold text-text">{field.label}</label>
                    <input
                      type={field.type}
                      value={form[field.key]}
                      onChange={handleChange(field.key)}
                      className="form-input mt-3 w-full rounded-3xl px-5 py-3.5"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-text">Message</label>
                  <textarea
                    value={form.message}
                    onChange={handleChange('message')}
                    className="form-input mt-3 h-40 w-full resize-none rounded-3xl px-5 py-3.5"
                    placeholder="Message"
                  />
                </div>
                <div className="md:col-span-2">
                  <button type="button" onClick={handleSubmit} className="btn-primary w-full justify-center">
                    Submit Request
                  </button>
                </div>
                {submitted && (
                  <p className="md:col-span-2 rounded-3xl bg-primary/10 px-5 py-4 text-sm text-primary">
                    Thanks for reaching out. We will get back to you shortly.
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </RevealSection>
    </div>
  )
}
