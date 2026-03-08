import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <button
        className="skip-link"
        onClick={() => {
          const main = document.getElementById('main-content')
          if (main) {
            main.focus()
            main.scrollIntoView()
          }
        }}
      >
        Skip to main content
      </button>
      <Navigation />
      <main id="main-content" className="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
