import { useState, useCallback } from 'react'
import RevealOnScroll from './RevealOnScroll'

// ✏️ EDIT ME — update social links with your real profiles
const SOCIALS = [
  { label: 'GitHub', icon: 'GH', href: 'https://github.com/jgutoc23109053' },
  { label: 'LinkedIn', icon: 'in', href: '#' },
  { label: 'Facebook', icon: 'f', href: '#' },
]

const EMAIL = 'jgutoc23109053@student.dmmmsu.edu.ph'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const VALIDATORS = {
  name: (v) => {
    if (!v.trim()) return 'Full name is required'
    if (v.trim().length < 2) return 'Name must be at least 2 characters'
    return ''
  },
  email: (v) => {
    if (!v.trim()) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address'
    return ''
  },
  subject: (v) => {
    if (!v.trim()) return 'Subject is required'
    if (v.trim().length < 3) return 'Subject must be at least 3 characters'
    return ''
  },
  message: (v) => {
    if (!v.trim()) return 'Message is required'
    if (v.trim().length < 10) return 'Message must be at least 10 characters'
    if (v.length > 1000) return 'Message cannot exceed 1000 characters'
    return ''
  },
}

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }
const INITIAL_ERRORS = { name: '', email: '', subject: '', message: '' }
const INITIAL_TOUCHED = { name: false, email: false, subject: false, message: false }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [touched, setTouched] = useState(INITIAL_TOUCHED)
  const [sending, setSending] = useState(false)
  const [msg, setMsg] = useState(null) // { type, text }

  const validateField = useCallback((name, value) => {
    return VALIDATORS[name](value)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const charLen = form.message.length
  const charClass = charLen > 900 ? 'danger' : charLen > 700 ? 'warning' : ''

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate all
    const newErrors = {}
    const newTouched = {}
    let valid = true
    for (const key of Object.keys(VALIDATORS)) {
      newTouched[key] = true
      const err = validateField(key, form[key])
      newErrors[key] = err
      if (err) valid = false
    }
    setTouched(newTouched)
    setErrors(newErrors)
    if (!valid) return

    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === 'YOUR_WEB3FORMS_KEY') {
      setMsg({ type: 'error', text: 'Web3Forms access key not configured. Set VITE_WEB3FORMS_KEY in your .env file.' })
      return
    }

    setSending(true)
    setMsg(null)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Contact — ${form.name}`,
          from_name: 'Portfolio Contact Form',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setMsg({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' })
        setForm(INITIAL_FORM)
        setTouched(INITIAL_TOUCHED)
        setErrors(INITIAL_ERRORS)
      } else {
        setMsg({ type: 'error', text: data.message || 'Something went wrong. Please try again.' })
      }
    } catch {
      setMsg({ type: 'error', text: 'Network error. Please check your connection and try again.' })
    } finally {
      setSending(false)
    }
  }

  const inputClass = (name) =>
    `form-input${errors[name] && touched[name] ? ' input-error' : ''}${!errors[name] && touched[name] && form[name] ? ' input-success' : ''}`

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <p className="section-label">Let's Connect</p>
            <h2 className="section-title">Get In <span className="text-accent">Touch</span></h2>
            <div className="section-line" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3 className="contact-heading">Have a question or want to work together?</h3>
              <p className="contact-text">
                I'm currently seeking an OJT position and am open to collaboration opportunities.
                Whether it's a tech project or a spot on the court, I'd love to hear from you.
                Use the form, email me directly, or reach out through my socials below.
              </p>
              <a className="contact-email" href={`mailto:${EMAIL}`}>
                <span className="email-icon">✉</span> {EMAIL}
              </a>
              <div className="contact-socials">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    className="social-btn"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="contact-features">
                <div className="contact-feature">
                  <span className="feature-icon">⚡</span>
                  <div>
                    <strong>Fast Delivery</strong>
                    <p>Messages sent via Web3Forms API</p>
                  </div>
                </div>
                <div className="contact-feature">
                  <span className="feature-icon">🔒</span>
                  <div>
                    <strong>Secure</strong>
                    <p>End-to-end encrypted transmission</p>
                  </div>
                </div>
                <div className="contact-feature">
                  <span className="feature-icon">⚙</span>
                  <div>
                    <strong>Real-time Validation</strong>
                    <p>Client-side form verification</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {['name', 'email', 'subject', 'message'].map(field => (
                <div className="form-group" key={field}>
                  <label className="form-label" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)} <span className="required">*</span>
                  </label>
                  {field === 'message' ? (
                    <>
                      <textarea
                        id={field}
                        name={field}
                        className={`form-input form-textarea ${inputClass(field)}`}
                        placeholder="Tell me about your project or opportunity..."
                        rows="5"
                        value={form[field]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="textarea-footer">
                        <span className="form-error">{touched[field] && errors[field]}</span>
                        <span className={`char-count ${charClass}`}>{charLen} / 1000</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        className={inputClass(field)}
                        placeholder={field === 'name' ? 'John Doe' : field === 'email' ? 'john@example.com' : 'OJT Inquiry'}
                        value={form[field]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete={field}
                      />
                      <span className="form-error">{touched[field] && errors[field]}</span>
                    </>
                  )}
                </div>
              ))}

              <button type="submit" className="btn btn-primary btn-submit" disabled={sending}>
                {sending ? (
                  <span>
                    <svg className="spinner" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31.4 31.4" strokeLinecap="round"/></svg>
                    {' '}Sending...
                  </span>
                ) : 'Send Message'}
              </button>

              {msg && (
                <div className={`form-message ${msg.type}`}>
                  <div className="form-message-icon">{msg.type === 'success' ? '✅' : '❌'}</div>
                  <div className="form-message-text">{msg.text}</div>
                </div>
              )}
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
