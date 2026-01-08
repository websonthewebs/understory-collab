import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
