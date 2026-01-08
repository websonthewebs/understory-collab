import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <p className="footer-tagline">Quietly growing beneath the canopy.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <ul className="footer-links" role="list">
            <li><Link to="/advisory">Advisory</Link></li>
            <li><Link to="/implementation">Implementation</Link></li>
            <li><Link to="/portfolios">Portfolios</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <a href="mailto:contact@understorycollab.com">contact@understorycollab.com</a>
        </div>

        <div className="footer-bottom">
          <Link to="/accessibility" className="footer-accessibility">
            Accessibility Statement
          </Link>
          <p className="footer-copyright">
            &copy; {currentYear} Understory Collaborative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
