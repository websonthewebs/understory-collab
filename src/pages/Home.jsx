import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-content">
          <h1 id="hero-heading">Understory Collaborative</h1>
          <p className="hero-tagline">We meet you where you are.</p>
          <p className="hero-description">
            We create the conditions for people and organizations to flourish—through
            accessible, ethical technology and collaborative practice.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/advisory" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>

      <section className="services-preview" aria-labelledby="services-heading">
        <div className="section-container">
          <h2 id="services-heading">What We Do</h2>
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
                Full-stack development, DevOps, and specialized expertise in accessibility,
                education technology, and more.
              </p>
              <Link to="/implementation" className="service-link">
                Learn more<span className="sr-only"> about implementation services</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="about" aria-labelledby="about-heading">
        <div className="section-container">
          <h2 id="about-heading">Who We Are</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Understory Collaborative is a team of seasoned technologists who understand
                that great solutions emerge from deeply understanding both the people they
                serve and the systems they transform.
              </p>
              <p>
                We bring decades of combined experience across diverse industries, from
                education technology to healthcare, transportation to legal services. Our
                strength lies in our ability to bridge the gap between business objectives
                and technical implementation.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight">
                <h3>Human-Centric</h3>
                <p>We put people first, designing solutions that work for real users with real needs.</p>
              </div>
              <div className="highlight">
                <h3>Experienced</h3>
                <p>Decades of professional experience across industries and technologies.</p>
              </div>
              <div className="highlight">
                <h3>Holistic</h3>
                <p>We understand both business drivers and technical constraints.</p>
              </div>
            </div>
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
              <div className="step-number" aria-hidden="true">1</div>
              <div className="step-content">
                <h3>Root</h3>
                <p>
                  We begin by understanding your foundation. Through deep discovery, we
                  uncover the challenges, opportunities, and goals that lie beneath the
                  surface. This grounding ensures everything we build has strong roots.
                </p>
              </div>
            </li>
            <li className="process-step">
              <div className="step-number" aria-hidden="true">2</div>
              <div className="step-content">
                <h3>Rise</h3>
                <p>
                  With a solid foundation, we begin building. Through collaborative
                  development and iterative refinement, your solution takes shape. We
                  work alongside your team, growing together toward your vision.
                </p>
              </div>
            </li>
            <li className="process-step">
              <div className="step-number" aria-hidden="true">3</div>
              <div className="step-content">
                <h3>Flourish</h3>
                <p>
                  We deliver solutions built to thrive. Beyond launch, we ensure your
                  team is empowered to maintain and evolve what we've built together.
                  Your success is our measure of success.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="quiz-cta" aria-labelledby="quiz-cta-heading">
        <div className="section-container">
          <div className="quiz-cta-content">
            <h2 id="quiz-cta-heading">What's On Fire?</h2>
            <p className="quiz-cta-subtitle">A 2-minute technical health self-assessment</p>
            <p className="quiz-cta-description">
              Six honest questions. No vendor pitch. Just a clear-eyed look at the state
              of your engineering organization — and what the signals mean.
            </p>
            <Link to="/quiz" className="btn btn-primary btn-large">Take the Quiz</Link>
          </div>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="section-container">
          <h2 id="cta-heading">Ready to grow together?</h2>
          <p>Let's discuss how we can help transform your ideas into reality.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Start a Conversation</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
