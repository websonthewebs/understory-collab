import { Link } from 'react-router-dom'
import './Advisory.css'

function Advisory() {
  return (
    <div className="advisory">
      <section className="page-hero" aria-labelledby="advisory-heading">
        <div className="page-hero-content">
          <h1 id="advisory-heading">Advisory Services</h1>
          <p className="page-hero-description">
            Strategic guidance from experienced technologists who understand both
            business imperatives and technical realities.
          </p>
        </div>
      </section>

      <section className="advisory-intro" aria-labelledby="approach-heading">
        <div className="section-container">
          <h2 id="approach-heading">Our Approach</h2>
          <p>
            We don't believe in one-size-fits-all solutions. Every organization has unique
            challenges, constraints, and opportunities. Our advisory practice is built on
            deep listening, thorough analysis, and actionable recommendations that respect
            your context and capabilities.
          </p>
        </div>
      </section>

      <section className="services-detail" aria-labelledby="services-heading">
        <div className="section-container">
          <h2 id="services-heading" className="sr-only">Our Advisory Services</h2>

          <article className="service-detail-card">
            <div className="service-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div className="service-detail-content">
              <h3>Strategy Consulting</h3>
              <p>
                Navigate complex decisions with confidence. We help you define technology
                roadmaps, evaluate build-vs-buy decisions, and align technical investments
                with business objectives.
              </p>
              <ul className="service-features">
                <li>Technology roadmap development</li>
                <li>Build vs. buy analysis</li>
                <li>Vendor selection and evaluation</li>
                <li>Technical due diligence</li>
                <li>Innovation strategy</li>
              </ul>
            </div>
          </article>

          <article className="service-detail-card">
            <div className="service-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <div className="service-detail-content">
              <h3>Technology Assessment</h3>
              <p>
                Understand where you are to chart where you're going. Our assessments provide
                clear-eyed evaluation of your current technology landscape, identifying
                strengths, gaps, and opportunities for improvement.
              </p>
              <ul className="service-features">
                <li>Architecture review and analysis</li>
                <li>Security and compliance assessment</li>
                <li>Performance and scalability evaluation</li>
                <li>Technical debt inventory</li>
                <li>Team capability assessment</li>
              </ul>
            </div>
          </article>

          <article className="service-detail-card">
            <div className="service-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className="service-detail-content">
              <h3>Digital Transformation</h3>
              <p>
                Transform how your organization operates with technology. We guide you through
                the complexities of modernization, ensuring that change delivers real value
                while managing risk and maintaining continuity.
              </p>
              <ul className="service-features">
                <li>Modernization strategy and planning</li>
                <li>Process optimization and automation</li>
                <li>Change management support</li>
                <li>Legacy system transition planning</li>
                <li>Digital capability building</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="section-container">
          <h2 id="cta-heading">Let's explore what's possible</h2>
          <p>Start with a conversation. We'll listen first, then help you chart the path forward.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Schedule a Discussion</Link>
        </div>
      </section>
    </div>
  )
}

export default Advisory
