import { Link } from 'react-router-dom'
import './Implementation.css'

function Implementation() {
  const expertiseAreas = [
    { name: 'Accessibility', description: 'WCAG compliance, inclusive design, assistive technology support' },
    { name: 'EdTech', description: 'Learning management systems, educational platforms, assessment tools' },
    { name: 'Transportation', description: 'Logistics systems, fleet management, routing optimization' },
    { name: 'Retail', description: 'E-commerce platforms, inventory systems, point-of-sale solutions' },
    { name: 'Legal Services', description: 'Case management, document automation, compliance systems' },
    { name: 'Medical Records', description: 'EHR integration, healthcare data systems, HIPAA compliance' },
  ]

  const capabilities = [
    { name: 'DevOps', description: 'CI/CD pipelines, infrastructure as code, monitoring and observability' },
    { name: 'Design', description: 'User research, UX design, visual design, design systems' },
    { name: 'Front End', description: 'React, Vue, Angular, responsive design, performance optimization' },
    { name: 'Back End', description: 'APIs, microservices, databases, system architecture' },
    { name: 'Business Process Outsourcing', description: 'Process automation, workflow optimization, operational efficiency' },
    { name: 'IT Outsourcing', description: 'Staff augmentation, managed services, technical leadership' },
  ]

  return (
    <div className="implementation">
      <section className="page-hero" aria-labelledby="implementation-heading">
        <div className="page-hero-content">
          <h1 id="implementation-heading">Implementation Services</h1>
          <p className="page-hero-description">
            From concept to deployment, we build software that works for people.
            Our implementation practice combines technical excellence with a deep
            commitment to user-centered design.
          </p>
        </div>
      </section>

      <section className="implementation-intro" aria-labelledby="philosophy-heading">
        <div className="section-container">
          <h2 id="philosophy-heading">Our Philosophy</h2>
          <p>
            Great software isn't just about clean code—it's about solving real problems
            for real people. We bring technical rigor and human empathy to every project,
            building solutions that are accessible, maintainable, and genuinely useful.
          </p>
        </div>
      </section>

      <section className="expertise-section" aria-labelledby="expertise-heading">
        <div className="section-container">
          <h2 id="expertise-heading">Industry Expertise</h2>
          <p className="section-intro">
            We've delivered solutions across diverse industries, bringing domain
            knowledge that accelerates delivery and reduces risk.
          </p>
          <ul className="expertise-grid" role="list">
            {expertiseAreas.map((area) => (
              <li key={area.name} className="expertise-card">
                <h3>{area.name}</h3>
                <p>{area.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-heading">
        <div className="section-container">
          <h2 id="capabilities-heading">Technical Capabilities</h2>
          <p className="section-intro">
            Our team covers the full stack—from infrastructure to interface—with
            specialized expertise in modern development practices.
          </p>
          <ul className="capabilities-grid" role="list">
            {capabilities.map((cap) => (
              <li key={cap.name} className="capability-card">
                <h3>{cap.name}</h3>
                <p>{cap.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="how-we-work" aria-labelledby="how-heading">
        <div className="section-container">
          <h2 id="how-heading">How We Deliver</h2>
          <div className="delivery-content">
            <div className="delivery-text">
              <p>
                We work collaboratively with your team, not as outside contractors
                but as partners invested in your success. Our process is iterative
                and transparent—you'll always know where we are and where we're headed.
              </p>
              <p>
                Whether you need a full team to build from scratch, specialists to
                augment your existing capabilities, or technical leadership to guide
                your roadmap, we adapt to fit your needs.
              </p>
            </div>
            <ul className="delivery-features" role="list">
              <li>
                <strong>Iterative Development</strong>
                <span>Regular releases, continuous feedback, constant improvement</span>
              </li>
              <li>
                <strong>Transparent Communication</strong>
                <span>Clear updates, honest assessments, no surprises</span>
              </li>
              <li>
                <strong>Knowledge Transfer</strong>
                <span>Your team grows alongside the solution</span>
              </li>
              <li>
                <strong>Quality Built In</strong>
                <span>Testing, documentation, and maintainability from day one</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="section-container">
          <h2 id="cta-heading">Ready to build something great?</h2>
          <p>Tell us about your project. We'll help you figure out the best path forward.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Start a Project</Link>
        </div>
      </section>
    </div>
  )
}

export default Implementation
