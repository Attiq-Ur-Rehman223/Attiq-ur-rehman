import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, CheckCircle, Clock, MessageSquare, Phone } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const services = [
  'Shopify Store Development',
  'WordPress Website Design',
  'WooCommerce Development',
  'SEO Optimization',
  'eCommerce Strategy / CRO',
  'Performance Optimization',
  'Maintenance & Support',
  'Other / Not Sure',
]

const budgets = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,500',
  '$7,500 – $15,000',
  '$15,000+',
  'Monthly Retainer',
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@alexmorgan.dev' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
  { icon: MessageSquare, label: 'Preferred Contact', value: 'Email or form below' },
]

export default function ContactPage() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto p-10 rounded-3xl glass-card border border-border">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'oklch(0.70 0.18 162 / 0.2)' }}>
            <CheckCircle size={32} style={{ color: 'oklch(0.70 0.18 162)' }} />
          </div>
          <h2 className="text-3xl font-black mb-3">Message Sent!</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Thanks for reaching out! I'll review your project details and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white btn-gradient"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Contact</p>
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            Let's <span className="gradient-text">Start a Project</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Fill in the details below and I'll get back to you within 24 hours with a tailored response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl glass-card border border-border">
              <h3 className="font-bold text-lg mb-5">Contact Details</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'oklch(0.65 0.25 290 / 0.15)' }}>
                        <Icon size={16} style={{ color: 'oklch(0.65 0.25 290)' }} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-border"
              style={{ background: 'linear-gradient(135deg, oklch(0.55 0.28 290 / 0.12), oklch(0.72 0.17 200 / 0.08))' }}>
              <h3 className="font-bold mb-3">Free Consultation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Not sure what you need? Book a free 30-minute discovery call and let's figure it out together.
              </p>
              <div className="space-y-2 text-sm">
                {['No obligation', 'No sales pitch', 'Honest advice'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle size={13} style={{ color: 'oklch(0.70 0.18 162)' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl glass-card border border-border space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Full Name <span style={{ color: 'oklch(0.65 0.25 290)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm transition-colors outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
                    style={{ background: 'oklch(0.10 0.004 285.823)' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email Address <span style={{ color: 'oklch(0.65 0.25 290)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm transition-colors outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
                    style={{ background: 'oklch(0.10 0.004 285.823)' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                  Company / Website (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={fields.company}
                  onChange={handleChange}
                  placeholder="Your company or current website URL"
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm transition-colors outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
                  style={{ background: 'oklch(0.10 0.004 285.823)' }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1.5">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={fields.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm transition-colors outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
                    style={{ background: 'oklch(0.10 0.004 285.823)' }}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-1.5">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={fields.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm transition-colors outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
                    style={{ background: 'oklch(0.10 0.004 285.823)' }}
                  >
                    <option value="">Select a budget</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Project Details <span style={{ color: 'oklch(0.65 0.25 290)' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project: what are you building, what's your goal, do you have a timeline in mind?"
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm transition-colors outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 resize-none"
                  style={{ background: 'oklch(0.10 0.004 285.823)' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white btn-gradient disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <>Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                I respond within 24 hours on business days. Your information is kept private.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
