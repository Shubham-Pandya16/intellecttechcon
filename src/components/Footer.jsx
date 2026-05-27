import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Intellect Techcon Solutions</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            Trusted technology and content solutions for academic, government and corporate sectors across United Arab Emirates.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Quick Links</p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <Link to="/" className="block hover:text-accent">Home</Link>
            <Link to="/solutions" className="block hover:text-accent">Solutions</Link>
            <Link to="/about" className="block hover:text-accent">About</Link>
            <Link to="/contact" className="block hover:text-accent">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
          <div className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
            <p>Email: sales@intellecttechcon.com</p>
            <p>Phone: +971 50 6930558</p>
            <p>Location: P.O.Box 88878, Dubai, United Arab Emirates</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 px-4 py-5 text-center text-sm text-slate-500 md:px-8">
        © {new Date().getFullYear()} Intellect Techcon Solutions. All rights reserved.
      </div>
    </footer>
  )
}
