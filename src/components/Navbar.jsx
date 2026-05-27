import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import logo from '../../assets/intellecttechcon_logo.gif'
import { solutions } from '../data/solutions'

const navLinkClass = ({ isActive }) =>
  `nav-link relative text-muted transition hover:text-primary ${isActive ? 'is-active text-primary' : ''}`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [ready, setReady] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 100)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  const solutionLinks = useMemo(
    () =>
      solutions.map((item) => ({
        name: item.name,
        slug: item.slug,
        icon: item.icon,
      })),
    []
  )

  const isSolutionsActive = location.pathname.startsWith('/solutions')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 backdrop-blur-xl ${
        ready ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${scrolled ? 'border-slate-200 bg-white/92 shadow-sm' : 'border-transparent bg-white/75'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Intellect Techcon Solutions logo" className="h-20 w-auto rounded-xl border border-slate-200 bg-white" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <Link to="/solutions" className={`nav-link relative inline-flex items-center text-muted transition hover:text-primary ${isSolutionsActive ? 'is-active text-primary' : ''}`}>
              Solutions
            </Link>
            <div
              className={`absolute left-0 top-full hidden w-[34rem] pt-4 md:block ${
                dropdownOpen ? 'visible opacity-100' : 'invisible opacity-0'
              } transition-opacity duration-200`}
            >
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="grid gap-4 sm:grid-cols-2">
                  {solutionLinks.map((solution) => {
                    const Icon = solution.icon
                    return (
                      <Link
                        key={solution.slug}
                        to={`/solutions/${solution.slug}`}
                        className="group flex items-start gap-3 rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:border-accent hover:bg-white"
                      >
                        <div className="mt-0.5 text-primary">
                          <Icon className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text">{solution.name}</p>
                          <p className="mt-1 text-sm text-muted">{solution.shortDescription}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-primary transition hover:bg-slate-50 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm transform bg-dark px-6 py-8 text-white transition duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Intellect Techcon Solutions logo" className="h-16 w-auto rounded-xl border border-slate-500 bg-slate-900" />
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-5 w-5 text-white" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="space-y-4 text-slate-200">
          <Link to="/" className="nav-link-mobile block" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <div>
            <p className="section-label">Solutions</p>
            <div className="mt-3 grid gap-3">
              {solutionLinks.map((solution) => {
                const Icon = solution.icon
                return (
                  <Link
                    key={solution.slug}
                    to={`/solutions/${solution.slug}`}
                    className="flex items-center gap-3 rounded-[22px] border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm transition hover:border-accent hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                    {solution.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <Link to="/about" className="nav-link-mobile block" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="nav-link-mobile block" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
        <div className="mt-8">
          <Link to="/contact" className="btn-secondary w-full justify-center text-white hover:bg-accent/12" onClick={() => setIsOpen(false)}>
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
