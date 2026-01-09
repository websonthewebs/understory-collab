/* eslint-env node */
// Vercel Serverless Function for contact form
// Sends email via Mailgun API
//
// Required environment variables (set in Vercel dashboard):
// - MAILGUN_API_KEY: Your Mailgun API key
// - MAILGUN_DOMAIN: Your verified domain (e.g., understorycollab.com)

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    console.error('Missing Mailgun configuration')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  // Prepare email data
  const formData = new URLSearchParams()
  formData.append('from', `${name} <noreply@${MAILGUN_DOMAIN}>`)
  formData.append('to', 'contact@understorycollab.com')
  formData.append('reply-to', email)
  formData.append('subject', `Contact form: ${name}`)
  formData.append('text', `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
  formData.append('html', `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <h3>Message:</h3>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `)

  try {
    const response = await fetch(
      `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }
    )

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Mailgun error:', errorData)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}
