import { Link } from 'react-router-dom'
import './Home.css'

function PlantingSeedsIcon() {
  return (
    <svg className="stage-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 56V34" />
      <path d="M32 34c-4-6-12-6-14-2 2 6 10 8 14 2Z" />
      <path d="M32 34c4-6 12-6 14-2-2 6-10 8-14 2Z" />
      <path d="M14 56h36" />
    </svg>
  )
}

function BrushFireIcon() {
  return (
    <svg className="stage-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M34 8c2 8-6 12-6 20a10 10 0 0 0 18 6c2-4 0-8-2-10 0 4-2 6-4 6 2-8-2-16-6-22Z" />
      <path d="M26 30c-4 4-8 8-8 16a14 14 0 0 0 26 6" />
    </svg>
  )
}

function SmolderIcon() {
  return (
    <svg className="stage-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="22" cy="40" r="8" />
      <circle cx="40" cy="38" r="10" />
      <path d="M22 48v8" />
      <path d="M40 48v8" />
      <path d="M14 56h36" />
      <path d="M20 18c2 2 0 4 2 6" />
      <path d="M30 12c2 3-1 5 1 8" />
      <path d="M42 16c2 2 0 4 2 6" />
    </svg>
  )
}

function CrownFireIcon() {
  return (
    <svg className="stage-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 22c-2-6 2-10 4-10 0 3 2 4 4 4-1-4 2-7 4-8 1 4 4 5 6 4-1 3 1 6 4 7-2 3-1 6 1 8" />
      <circle cx="20" cy="36" r="8" />
      <circle cx="32" cy="34" r="9" />
      <circle cx="44" cy="36" r="8" />
      <path d="M20 44v10" />
      <path d="M32 43v11" />
      <path d="M44 44v10" />
      <path d="M12 56h40" />
    </svg>
  )
}

function FireStormIcon() {
  return (
    <svg className="stage-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 18c1 3-1 5 1 8" />
      <path d="M22 12c1 4-2 6 0 10" />
      <path d="M32 8c1 4-2 6 0 10" />
      <path d="M42 12c1 4-2 6 0 10" />
      <path d="M52 18c1 3-1 5 1 8" />
      <ellipse cx="32" cy="38" rx="6" ry="10" />
      <path d="M20 40c-3 2-4 6-2 10" />
      <path d="M44 40c3 2 4 6 2 10" />
      <path d="M32 48v8" />
      <path d="M14 56h36" />
    </svg>
  )
}

function RootIcon() {
  return (
    <svg className="process-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 20v14" />
      <path d="M28 24c-2-3-6-3-8-1 1 3 5 4 8 1Z" />
      <path d="M14 34h36" />
      <path d="M22 34c-2 6-6 10-8 16" />
      <path d="M32 34v16" />
      <path d="M42 34c2 6 6 10 8 16" />
    </svg>
  )
}

function RiseIcon() {
  return (
    <svg className="process-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 56V20" />
      <path d="M32 28c-5-6-12-4-14 0 3 6 11 6 14 0Z" />
      <path d="M32 36c5-6 12-4 14 0-3 6-11 6-14 0Z" />
      <path d="M14 56h36" />
    </svg>
  )
}

function FlourishIcon() {
  return (
    <svg className="process-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 56V28" />
      <circle cx="32" cy="20" r="8" />
      <circle cx="20" cy="26" r="6" />
      <circle cx="44" cy="26" r="6" />
      <circle cx="24" cy="14" r="5" />
      <circle cx="40" cy="14" r="5" />
      <path d="M14 56h36" />
    </svg>
  )
}

const fireStages = [
  {
    name: 'Planting Seeds?',
    Icon: PlantingSeedsIcon,
    description:
      "Starting from scratch. Building green-field projects. Fire after old growth, seeds that release their seeds only after a forest fire. Planting seeds for something new to happen.",
  },
  {
    name: 'Brush Fire',
    Icon: BrushFireIcon,
    description: "The best time to address tech debt is when you're not in crisis.",
  },
  {
    name: 'Smolder',
    Icon: SmolderIcon,
    description: "The most dangerous tech debt is the kind that doesn't show up in dashboards.",
  },
  {
    name: 'Crown Fire',
    Icon: CrownFireIcon,
    description: 'Leadership knows. Customers know. The question is what to change, without making things worse.',
  },
  {
    name: 'Fire Storm',
    Icon: FireStormIcon,
    description: 'When one problem feeds another, and another, until the whole system is dangerously self-sustaining.',
  },
]

function Home() {
  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="sr-only">Understory Collaborative</h1>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-lede">
              Great software isn't just about clean code, it's about solving real
              problems when it matters most. Whether you're clearing brush to prevent
              sparks, containing a fast-moving fire, or rebuilding in the wake of a
              firestorm, we bring technical rigor and human empathy to every engagement
              by building solutions that are accessible, maintainable, and genuinely
              useful.
            </p>
            <p className="hero-prompt">
              Find out where to start. Take our self-diagnosis quiz to get insight into
              your organization's technical health.
            </p>
          </div>
          <div className="hero-cta">
            <Link to="/quiz" className="btn btn-primary btn-large">Take the quiz</Link>
          </div>
        </div>
      </section>

      <section className="fire-stages" aria-labelledby="fire-stages-heading">
        <div className="section-container">
          <h2 id="fire-stages-heading" className="sr-only">Where you might be</h2>
          <ul className="stages-grid">
            {fireStages.map((stage) => (
              <li key={stage.name} className="stage-card">
                <stage.Icon />
                <h3 className="stage-name">{stage.name}</h3>
                <p className="stage-description">{stage.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services-preview" aria-labelledby="services-heading">
        <div className="section-container">
          <h2 id="services-heading">What We Do</h2>
          <p className="services-intro">
            Whether you're navigating a moment of crisis, need targeted, a la carte
            support, or require technical leadership to steady and guide your roadmap,
            we adapt to meet you exactly where you are.
          </p>
          <div className="services-grid">
            <article className="service-card">
              <h3>Advisory</h3>
              <p>
                Strategic consulting, technology assessment, and digital transformation
                guidance to help you make informed decisions.
              </p>
              <Link to="/advisory" className="service-link">
                Learn more<span className="sr-only"> about advisory services</span>
              </Link>
            </article>
            <article className="service-card">
              <h3>Implementation</h3>
              <p>
                Full-stack development, DevOps, and specialized expertise in
                accessibility, education technology, and more.
              </p>
              <Link to="/implementation" className="service-link">
                Learn more<span className="sr-only"> about implementation services</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="process" aria-labelledby="process-heading">
        <div className="section-container">
          <h2 id="process-heading">How We Work</h2>
          <p className="process-intro">
            Our approach is collaborative, iterative, and focused on delivering lasting value.
          </p>
          <ol className="process-steps">
            <li className="process-step">
              <RootIcon />
              <h3>Root</h3>
              <p>
                We begin by understanding your foundation, your roots. Through deep
                discovery, we uncover the challenges, opportunities, and goals that lie
                beneath the surface.
              </p>
            </li>
            <li className="process-step">
              <RiseIcon />
              <h3>Rise</h3>
              <p>
                We work alongside your team, growing together toward your vision. Your
                solution takes shape through collaborative development and iterative
                refinement.
              </p>
            </li>
            <li className="process-step">
              <FlourishIcon />
              <h3>Flourish</h3>
              <p>
                We work alongside your team, growing together toward your vision. Your
                solution takes shape through collaborative development and iterative
                refinement.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="section-container">
          <div className="cta-card">
            <h2 id="cta-heading">Ready to grow together?</h2>
            <p>Let's discuss how we can help transform your ideas into reality.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
