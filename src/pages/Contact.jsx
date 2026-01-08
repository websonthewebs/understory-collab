import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      const firstError = document.querySelector('[aria-invalid="true"]')
      if (firstError) firstError.focus()
      return
    }

    setIsSubmitting(true)

    try {
      const mailtoLink = `mailto:contact@understorycollab.com?subject=${encodeURIComponent(`Contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`

      window.location.href = mailtoLink

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact">
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="page-hero-content">
          <h1 id="contact-heading">Contact Us</h1>
          <p className="page-hero-description">
            Ready to start a conversation? We'd love to hear about your challenges
            and explore how we might help.
          </p>
        </div>
      </section>

      <section className="contact-content" aria-labelledby="form-heading">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 id="info-heading">Get in Touch</h2>
              <p>
                Whether you have a specific project in mind or just want to explore
                possibilities, we're here to listen. Fill out the form and we'll
                get back to you within one business day.
              </p>

              <div className="contact-method">
                <h3>Email</h3>
                <a href="mailto:contact@understorycollab.com">
                  contact@understorycollab.com
                </a>
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

            <div className="contact-form-container">
              <h2 id="form-heading" className="sr-only">Contact Form</h2>

              {submitStatus === 'success' && (
                <div className="form-success" role="alert">
                  <p>
                    <strong>Your email client should have opened.</strong> If it didn't,
                    please email us directly at{' '}
                    <a href="mailto:contact@understorycollab.com">
                      contact@understorycollab.com
                    </a>
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error" role="alert">
                  <p>
                    Something went wrong. Please email us directly at{' '}
                    <a href="mailto:contact@understorycollab.com">
                      contact@understorycollab.com
                    </a>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">
                    Name <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p id="name-error" className="field-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id="email-error" className="field-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    How can we help? <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="field-error" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
