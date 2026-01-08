import { Link } from 'react-router-dom'
import './Portfolios.css'

function Portfolios() {
  return (
    <div className="portfolios">
      <section className="page-hero" aria-labelledby="portfolios-heading">
        <div className="page-hero-content">
          <h1 id="portfolios-heading">Our Work</h1>
          <p className="page-hero-description">
            We've partnered with organizations across industries to deliver
            meaningful technology solutions. Here's a glimpse of our impact.
          </p>
        </div>
      </section>

      <section className="portfolios-content" aria-labelledby="coming-soon-heading">
        <div className="section-container">
          <div className="coming-soon-card">
            <div className="coming-soon-icon" aria-hidden="true">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4"></path>
                <path d="M12 18v4"></path>
                <path d="m4.93 4.93 2.83 2.83"></path>
                <path d="m16.24 16.24 2.83 2.83"></path>
                <path d="M2 12h4"></path>
                <path d="M18 12h4"></path>
                <path d="m4.93 19.07 2.83-2.83"></path>
                <path d="m16.24 7.76 2.83-2.83"></path>
              </svg>
            </div>
            <h2 id="coming-soon-heading">Case Studies Coming Soon</h2>
            <p>
              We're currently preparing detailed case studies that showcase our
              collaborative approach and the results we've achieved with our partners.
            </p>
            <p>
              In the meantime, we'd love to tell you more about our experience
              in a conversation. Our work spans accessibility, education technology,
              transportation, retail, legal services, and healthcare.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Let's Talk About Your Project
            </Link>
          </div>
        </div>
      </section>

      <section className="industries-preview" aria-labelledby="industries-heading">
        <div className="section-container">
          <h2 id="industries-heading">Industries We've Served</h2>
          <ul className="industries-list" role="list">
            <li>
              <span className="industry-name">Education Technology</span>
              <span className="industry-desc">Learning platforms and assessment tools</span>
            </li>
            <li>
              <span className="industry-name">Healthcare</span>
              <span className="industry-desc">Medical records and compliance systems</span>
            </li>
            <li>
              <span className="industry-name">Transportation</span>
              <span className="industry-desc">Logistics and fleet management</span>
            </li>
            <li>
              <span className="industry-name">Retail</span>
              <span className="industry-desc">E-commerce and inventory systems</span>
            </li>
            <li>
              <span className="industry-name">Legal Services</span>
              <span className="industry-desc">Case management and document automation</span>
            </li>
            <li>
              <span className="industry-name">Accessibility</span>
              <span className="industry-desc">Inclusive design and WCAG compliance</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Portfolios
