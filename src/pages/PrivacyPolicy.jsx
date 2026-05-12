import { useEffect } from 'react'
import LegalNav from '../components/LegalNav'
import LegalFooter from '../components/LegalFooter'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <LegalNav />
      <main className="relative z-10 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs text-accent-green uppercase tracking-widest">
            Legal
          </span>
          <h1 className="font-headline text-3xl md:text-5xl mt-4 mb-4">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-12">
            Effective Date: January 1, 2025 — Last Updated: May 11, 2026
          </p>

          <div className="space-y-10 font-body text-text-secondary font-light leading-relaxed">
            {/* 1 */}
            <Section title="1. Introduction">
              <p>
                Erie Apps LLC ("we," "us," or "our") operates the following products
                and services: InspectIQ, ReplyIQ, Stacked, The Secret Place,
                Dealership SaaS, and HabitLink (collectively, the "Services").
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use any of our Services.
              </p>
              <p>
                Erie Apps LLC is a limited liability company registered in the
                Commonwealth of Pennsylvania, with its principal place of business
                in Erie, Pennsylvania.
              </p>
              <p>
                By accessing or using our Services, you agree to this Privacy Policy.
                If you do not agree, please do not use our Services.
              </p>
            </Section>

            {/* 2 */}
            <Section title="2. Information We Collect">
              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                2.1 Information You Provide
              </h4>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Account registration data (name, email address, password)</li>
                <li>Payment and billing information (processed securely via Stripe)</li>
                <li>Content you create, upload, or input into our Services (inspection reports, review responses, flashcards, meditation preferences, vehicle inventory, app data)</li>
                <li>Communications you send to us (support requests, feedback)</li>
                <li>Business information for Dealership SaaS and ReplyIQ (business name, address, Google Business Profile data)</li>
              </ul>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                2.2 Information Collected Automatically
              </h4>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>Log data (IP address, browser type, pages visited, timestamps)</li>
                <li>Usage data (features used, interactions, session duration)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                2.3 Information from Third-Party Services
              </h4>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Google Business Profile data (via the Google Business Profile API) for ReplyIQ and Dealership SaaS</li>
                <li>Apple App Store purchase verification data for Stacked, The Secret Place, and HabitLink</li>
                <li>Payment confirmation data from Stripe</li>
              </ul>
            </Section>

            {/* 3 */}
            <Section title="3. How We Use Your Information">
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside space-y-1.5 ml-2 mt-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information via Stripe and SendGrid</li>
                <li>Send transactional emails (receipts, account notifications, service updates) using SendGrid</li>
                <li>Generate AI-powered content using the Anthropic Claude API (inspection reports for InspectIQ, review responses for ReplyIQ, flashcards for Stacked)</li>
                <li>Manage Google Business Profile integrations for ReplyIQ and Dealership SaaS via the Google Business Profile API</li>
                <li>Respond to customer support requests</li>
                <li>Monitor and analyze usage trends to improve user experience</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Section>

            {/* 4 */}
            <Section title="4. Third-Party Services and APIs">
              <p>
                Our Services integrate with the following third-party services. Each
                third-party service has its own privacy policy governing the use of
                your data:
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                4.1 Anthropic Claude API
              </h4>
              <p>
                We use the Anthropic Claude API to power AI features in InspectIQ
                (report generation), ReplyIQ (automated review responses), and
                Stacked (flashcard generation). Content you provide may be sent to
                Anthropic's servers for processing. We do not use Anthropic's API
                for model training. Please review{' '}
                <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline">
                  Anthropic's Privacy Policy
                </a>{' '}
                for details.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                4.2 Google Business Profile API
              </h4>
              <p>
                ReplyIQ and Dealership SaaS access your Google Business Profile
                data with your explicit authorization via OAuth 2.0. We access
                business reviews, business information, and location data solely to
                provide our Services. We do not store Google credentials. Our use of
                Google APIs adheres to the{' '}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline">
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements. You may revoke access at
                any time through your Google Account settings.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                4.3 Stripe
              </h4>
              <p>
                We use Stripe to process payments for InspectIQ, ReplyIQ, Dealership
                SaaS, and HabitLink. Payment information (credit card numbers,
                billing addresses) is transmitted directly to Stripe and is never
                stored on our servers. Please review{' '}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline">
                  Stripe's Privacy Policy
                </a>.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                4.4 SendGrid
              </h4>
              <p>
                We use SendGrid (by Twilio) to send transactional and service-related
                emails, including account verification, password resets, payment
                receipts, and product updates. Your email address and name may be
                shared with SendGrid solely for email delivery. Please review{' '}
                <a href="https://www.twilio.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline">
                  Twilio's Privacy Policy
                </a>.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                4.5 Apple App Store
              </h4>
              <p>
                Stacked, The Secret Place, and HabitLink are distributed via
                the Apple App Store. In-app purchases and subscriptions are processed
                by Apple. We receive transaction confirmation data but do not have
                access to your Apple ID credentials or payment methods.
              </p>
            </Section>

            {/* 5 */}
            <Section title="5. Product-Specific Disclosures">
              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">InspectIQ</h4>
              <p>
                Inspection data, photos, and notes you input are processed via the
                Anthropic Claude API to generate reports. Reports are stored on our
                servers and can be deleted at your request.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">ReplyIQ</h4>
              <p>
                ReplyIQ accesses your Google Business Profile reviews via the Google
                Business Profile API. AI-generated responses are created using the
                Anthropic Claude API. We store review data and generated responses to
                provide the service.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">Dealership SaaS</h4>
              <p>
                Vehicle inventory, dealership information, and business profile data
                are stored to power your dealership website. Google Business Profile
                integration is optional and requires explicit authorization.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">Stacked</h4>
              <p>
                Notes and study materials you input are processed via the Anthropic
                Claude API to generate flashcards. Study data is stored locally on
                your device and optionally synced to our servers.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">The Secret Place</h4>
              <p>
                Meditation preferences, usage history, and reflection entries are
                stored locally on your device. No personal spiritual content is
                transmitted to external servers.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">HabitLink</h4>
              <p>
                App usage data and preferences are stored locally on your device and
                optionally synced to our servers to enable cross-device access.
              </p>
            </Section>

            {/* 6 */}
            <Section title="6. Data Sharing and Disclosure">
              <p>We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc list-inside space-y-1.5 ml-2 mt-2">
                <li>Service providers (Stripe, SendGrid, Anthropic, Google) as described above, solely to provide our Services</li>
                <li>Law enforcement or government agencies when required by law or to protect our legal rights</li>
                <li>Successors in the event of a merger, acquisition, or sale of assets</li>
              </ul>
            </Section>

            {/* 7 */}
            <Section title="7. Data Retention">
              <p>
                We retain your personal information for as long as your account is
                active or as needed to provide Services. You may request deletion of
                your data at any time by contacting us. Upon account deletion, we
                will remove your personal data within 30 days, except where retention
                is required by law.
              </p>
            </Section>

            {/* 8 */}
            <Section title="8. Data Security">
              <p>
                We implement industry-standard security measures including encryption
                in transit (TLS/SSL), encrypted storage, secure API authentication,
                and regular security reviews. However, no method of electronic
                transmission or storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </Section>

            {/* 9 */}
            <Section title="9. Your Rights">
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-1.5 ml-2 mt-2">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Delete your personal information</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Withdraw consent for data processing</li>
                <li>Revoke third-party access (e.g., Google Business Profile)</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:stephanie@erie-apps.com" className="text-accent-green hover:underline">
                  stephanie@erie-apps.com
                </a>.
              </p>
            </Section>

            {/* 10 */}
            <Section title="10. Children's Privacy">
              <p>
                Our Services are not directed to children under 13. We do not
                knowingly collect personal information from children under 13. If you
                believe a child under 13 has provided us personal information, please
                contact us and we will delete it promptly.
              </p>
            </Section>

            {/* 11 */}
            <Section title="11. California Privacy Rights (CCPA)">
              <p>
                If you are a California resident, you have the right to request
                disclosure of the categories and specific pieces of personal
                information we have collected, request deletion of your information,
                and opt out of the sale of personal information (we do not sell
                personal information). To submit a request, contact us at{' '}
                <a href="mailto:stephanie@erie-apps.com" className="text-accent-green hover:underline">
                  stephanie@erie-apps.com
                </a>.
              </p>
            </Section>

            {/* 12 */}
            <Section title="12. International Users">
              <p>
                Our Services are operated from the United States. If you access our
                Services from outside the United States, your information may be
                transferred to, stored, and processed in the United States. By using
                our Services, you consent to this transfer.
              </p>
            </Section>

            {/* 13 */}
            <Section title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify
                you of material changes by posting the updated policy on our website
                and updating the "Last Updated" date. Your continued use of our
                Services after changes constitutes acceptance of the revised policy.
              </p>
            </Section>

            {/* 14 */}
            <Section title="14. Contact Us">
              <p>
                If you have questions or concerns about this Privacy Policy, please
                contact us:
              </p>
              <div className="mt-3 font-mono text-xs text-text-muted space-y-1">
                <p>Erie Apps LLC</p>
                <p>Erie, Pennsylvania</p>
                <p>
                  Email:{' '}
                  <a href="mailto:stephanie@erie-apps.com" className="text-accent-green hover:underline">
                    stephanie@erie-apps.com
                  </a>
                </p>
                <p>
                  Website:{' '}
                  <a href="https://erie-apps.com" className="text-accent-green hover:underline">
                    erie-apps.com
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </main>
      <LegalFooter />
    </>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-headline text-lg text-text-primary mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
