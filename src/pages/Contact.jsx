import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="page-hero-content">
          <h1 id="contact-heading">Contact Us</h1>
          <p className="page-hero-description">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="section-container">
          <div className="contact-body">
            <div className="contact-info">
              <h2>Let's Work Together</h2>
              <p>
                Drop us a line and tell us what you're working on, how you think
                we could collaborate, or any questions you have. We're always happy
                to chat.
              </p>

              <div className="contact-email">
                <a href="mailto:contact@understorycollab.com" className="email-link">
                  contact@understorycollab.com
                </a>
              </div>
            </div>

            <div className="contact-expect">
              <h3>What to Expect</h3>
              <ol>
                <li>We'll review your message and respond within 24 hours</li>
                <li>If it's a fit, we'll schedule a discovery call</li>
                <li>We'll learn about your needs and share how we might help</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
