import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

import logo from '../../assets/intellecttechcon_logo.gif'
import { companyOverview, contactDetails } from '../data/siteContent'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 md:px-8">
        <Reveal as="div" variant="card">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Intellect Techcon Solutions logo" className="h-20 w-auto rounded-xl border border-slate-700 bg-white" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Trusted technology and content solutions for academic, government and corporate organisations globally.
          </p>
        </Reveal>
        <Reveal as="div" variant="card" delay={80}>
          <p className="section-label">Quick Links</p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <Link to="/" className="footer-link block">Home</Link>
            <Link to="/solutions" className="footer-link block">Solutions</Link>
            <Link to="/about" className="footer-link block">About</Link>
            <Link to="/contact" className="footer-link block">Contact</Link>
          </div>
        </Reveal>
        <Reveal as="div" variant="card" delay={160}>
          <p className="section-label">Contact</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
              {contactDetails.email}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} />
              {contactDetails.phone}
            </p>
            <p>{contactDetails.address}</p>
          </div>
        </Reveal>
      </div>
      <div className="border-t border-slate-700 px-4 py-5 text-center text-sm text-slate-400 md:px-8">
        &copy; 2026, {companyOverview.name} &mdash; {companyOverview.tagline}
      </div>
    </footer>
  )
}
