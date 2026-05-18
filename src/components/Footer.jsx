import { Link } from 'react-router-dom'
import SubscribeForm from './SubscribeForm'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-subscribe">
          <SubscribeForm variant="footer" heading="Stay Connected" />
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <ul className="footer-links" role="list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolios">Our Work</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
