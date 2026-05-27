import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { solutions } from '../data/solutions'
import logo from '../../assets/intellecttechcon_logo.gif'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
        scrolled ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-white/70 border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center text-lg font-semibold text-primary">
          <img src={logo} alt="Intellect Techcon Solutions logo" className="h-20 w-auto rounded-xl border border-slate-200 bg-white" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive ? 'text-primary underline decoration-accent underline-offset-4' : 'text-muted hover:text-primary'}`
            }
          >
            Home
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`group inline-flex items-center gap-1 text-sm font-medium transition ${
                isSolutionsActive
                  ? 'text-primary underline decoration-accent underline-offset-4'
                  : 'text-muted hover:text-primary'
              }`}
            >
              Solutions
            </button>
            <div
              className={`absolute left-0 top-full hidden w-[32rem] pt-4 md:block ${
                dropdownOpen ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            >
              <div
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-opacity duration-200"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {solutionLinks.map((solution) => {
                    const Icon = solution.icon
                    return (
                      <Link
                        key={solution.slug}
                        to={`/solutions/${solution.slug}`}
                        className="group flex items-start gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:border-accent hover:bg-white"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-accent/10 group-hover:text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text">{solution.name}</p>
                          <p className="text-sm text-muted">Explore the solution page</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive ? 'text-primary underline decoration-accent underline-offset-4' : 'text-muted hover:text-primary'}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive ? 'text-primary underline decoration-accent underline-offset-4' : 'text-muted hover:text-primary'}`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#264880]"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-primary transition hover:bg-slate-50 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm transform bg-dark px-6 py-8 text-white transition duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="flex items-center text-lg font-semibold text-white">
            <img src={logo} alt="Intellect Techcon Solutions logo" className="h-16 w-auto rounded-xl border border-slate-500 bg-slate-900" />
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        <nav className="space-y-4 text-sm font-medium text-slate-200">
          <Link to="/" className="block hover:text-white" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-accent">Solutions</p>
            <div className="grid gap-3">
              {solutionLinks.map((solution) => {
                const Icon = solution.icon
                return (
                  <Link
                    key={solution.slug}
                    to={`/solutions/${solution.slug}`}
                    className="flex items-center gap-3 rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm transition hover:border-accent hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5 text-accent" />
                    {solution.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <Link to="/about" className="block hover:text-white" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="block hover:text-white" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-accent bg-transparent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
