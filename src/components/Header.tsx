import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/about' as const, label: 'About' },
  { to: '/services' as const, label: 'Services' },
  { to: '/projects' as const, label: 'Portfolio' },
  { to: '/contact' as const, label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouterState()
  const currentPath = router.location.pathname

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{ background: 'oklch(0.08 0.004 285.823 / 0.9)', backdropFilter: 'blur(16px)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg gradient-text">Alex Morgan</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white btn-gradient"
            >
              Hire Me
            </Link>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 px-4 py-4 space-y-1"
          style={{ background: 'oklch(0.10 0.004 285.823)' }}>
          {navLinks.map((link) => {
            const isActive = currentPath === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-3 rounded-lg text-sm font-medium text-white text-center btn-gradient"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  )
}
