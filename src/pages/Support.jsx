import { useEffect } from 'react'
import LegalNav from '../components/LegalNav'
import LegalFooter from '../components/LegalFooter'
import SupportForm from '../components/SupportForm'

export default function Support() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <LegalNav />
      <main className="relative pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-3">
            Support
          </p>
          <h1 className="font-sans text-3xl md:text-5xl font-700 tracking-tight mb-4">
            Get Help
          </h1>
          <p className="text-text-secondary leading-relaxed mb-12">
            Having an issue with one of our products? Submit a support request below
            and we'll get back to you within 24 hours.
          </p>

          <SupportForm />

          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-sm text-text-secondary leading-relaxed">
              You can also reach us directly at{' '}
              <a href="mailto:stephanie@erie-apps.com" className="text-text-primary underline hover:no-underline">
                stephanie@erie-apps.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <LegalFooter />
    </>
  )
}
