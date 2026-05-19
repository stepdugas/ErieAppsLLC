import { useState } from 'react'
import { products } from '../data/products'

export default function SupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const subject = encodeURIComponent(
      `Support Request: ${formData.product || 'General'} — ${formData.name}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProduct: ${formData.product || 'General'}\n\n${formData.message}`
    )

    window.location.href = `mailto:stephanie@erie-apps.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setStatus('sent')
    }, 500)
  }

  const inputClasses =
    'w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-muted focus:ring-1 focus:ring-text-muted/20 transition-all duration-200'

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-sans text-lg font-600 mb-2">Message ready!</h3>
        <p className="text-sm text-text-secondary">
          Your email client should have opened with the message pre-filled. Just hit send!
        </p>
        <button
          onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', product: '', message: '' }) }}
          className="mt-6 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="support-name" className="block font-mono text-[11px] text-text-muted uppercase tracking-widest mb-2">
            Name
          </label>
          <input
            id="support-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="support-email" className="block font-mono text-[11px] text-text-muted uppercase tracking-widest mb-2">
            Email
          </label>
          <input
            id="support-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="support-product" className="block font-mono text-[11px] text-text-muted uppercase tracking-widest mb-2">
          Product
        </label>
        <select
          id="support-product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select a product (optional)</option>
          {products.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="support-message" className="block font-mono text-[11px] text-text-muted uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          id="support-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help?"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="text-sm font-500 px-8 py-3.5 bg-accent text-white rounded-full transition-all duration-200 hover:bg-accent-hover hover:shadow-lg disabled:opacity-50"
      >
        {status === 'sending' ? 'Opening...' : 'Send Message'}
      </button>
    </form>
  )
}
