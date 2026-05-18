import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import ucLogo from '../assets/UC_Logo.png'
import './Navigation.css'

function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef(null)
  const location = useLocation()

  const closeServices = () => setServicesOpen(false)

  useEffect(() => {
    function handleClick(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }
    function handleKey(event) {
      if (event.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  const servicesActive =
    location.pathname.startsWith('/advisory') ||
    location.pathname.startsWith('/implementation')

  return (
    <header className="nav-header">
      <nav className="nav-container" aria-label="Main navigation">
        <Link to="/" className="nav-brand" aria-label="Understory Collaborative home">
          <img src={ucLogo} alt="" className="nav-logo" aria-hidden="true" />
          <span className="nav-wordmark">Understory Collaborative</span>
        </Link>

        <ul className="nav-links" role="list">
          <li
            className="nav-item nav-item--has-menu"
            ref={servicesRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setServicesOpen(false)
              }
            }}
          >
            <button
              type="button"
              className={`nav-link nav-link--menu${servicesActive ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <svg
                aria-hidden="true"
                className="nav-caret"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 4.5 6 7.5 9 4.5" />
              </svg>
            </button>
            <ul
              className={`nav-submenu${servicesOpen ? ' open' : ''}`}
              role="menu"
              aria-label="Services"
            >
              <li role="none">
                <NavLink
                  to="/advisory"
                  role="menuitem"
                  onClick={closeServices}
                  className={({ isActive }) =>
                    isActive ? 'nav-sublink active' : 'nav-sublink'
                  }
                >
                  Advisory
                </NavLink>
              </li>
              <li role="none">
                <NavLink
                  to="/implementation"
                  role="menuitem"
                  onClick={closeServices}
                  className={({ isActive }) =>
                    isActive ? 'nav-sublink active' : 'nav-sublink'
                  }
                >
                  Implementation
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolios"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Our Work
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          type="button"
        >
          {theme === 'light' ? (
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
      </nav>
    </header>
  )
}

export default Navigation
