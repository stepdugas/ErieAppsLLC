import { useEffect } from 'react'
import LegalNav from '../components/LegalNav'
import LegalFooter from '../components/LegalFooter'

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-12">
            Effective Date: January 1, 2025 — Last Updated: May 11, 2026
          </p>

          <div className="space-y-10 font-body text-text-secondary font-light leading-relaxed">
            {/* 1 */}
            <Section title="1. Agreement to Terms">
              <p>
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you ("you" or "User") and Erie Apps LLC ("we,"
                "us," or "our"), a limited liability company registered in the
                Commonwealth of Pennsylvania, with its principal place of business
                in Erie, Pennsylvania.
              </p>
              <p>
                These Terms govern your access to and use of our products and
                services, including InspectIQ, ReplyIQ, Stacked, The Secret Place,
                Dealership SaaS, and HabitLink (collectively, the "Services").
                By accessing or using any of our Services, you agree to be bound by
                these Terms. If you do not agree, do not use our Services.
              </p>
            </Section>

            {/* 2 */}
            <Section title="2. Eligibility">
              <p>
                You must be at least 13 years old to use our Services. If you are
                under 18, you represent that your parent or legal guardian has
                reviewed and agreed to these Terms on your behalf. By using our
                Services, you represent and warrant that you meet these eligibility
                requirements.
              </p>
            </Section>

            {/* 3 */}
            <Section title="3. Account Registration">
              <p>
                Some Services require you to create an account. You agree to provide
                accurate and complete information, keep your credentials confidential,
                and notify us immediately of any unauthorized use. You are responsible
                for all activity under your account.
              </p>
            </Section>

            {/* 4 */}
            <Section title="4. Services Description">
              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">InspectIQ</h4>
              <p>
                An AI-powered report writing tool for home inspectors. InspectIQ
                uses the Anthropic Claude API to assist in generating professional
                inspection reports. Reports are generated based on user-provided
                data and are intended as a drafting aid. Users are solely responsible
                for reviewing, verifying, and finalizing all reports before delivery
                to clients.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">ReplyIQ</h4>
              <p>
                An automated Google review response tool for businesses. ReplyIQ
                connects to your Google Business Profile via the Google Business
                Profile API (with your explicit authorization) and generates
                AI-powered responses using the Anthropic Claude API. You retain
                full control over which responses are published.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">Dealership SaaS</h4>
              <p>
                A website builder designed for independent car dealerships. Includes
                inventory management, lead capture, and optional Google Business
                Profile integration via the Google Business Profile API. You are
                responsible for the accuracy of all content published on your
                dealership website.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">Stacked</h4>
              <p>
                An iOS application that uses AI (Anthropic Claude API) to generate
                flashcards from user-provided notes and study materials. Available
                via the Apple App Store. In-app purchases are governed additionally
                by Apple's terms.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">The Secret Place</h4>
              <p>
                A Christian meditation iOS application offering guided meditation
                sessions, scripture reflection, and spiritual growth tools. Available
                via the Apple App Store.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">HabitLink</h4>
              <p>
                An iOS application available via the Apple App Store. In-app
                purchases and subscriptions are governed additionally by Apple's
                terms.
              </p>
            </Section>

            {/* 5 */}
            <Section title="5. Payments and Subscriptions">
              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                5.1 Web-Based Services (InspectIQ, ReplyIQ, Dealership SaaS, HabitLink)
              </h4>
              <p>
                Payments are processed securely through Stripe. By subscribing, you
                authorize us to charge your payment method on a recurring basis until
                you cancel. Subscription fees are billed in advance on a monthly or
                annual basis depending on your selected plan.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                5.2 iOS Apps (Stacked, The Secret Place, HabitLink)
              </h4>
              <p>
                In-app purchases and subscriptions for iOS apps are processed by
                Apple through the App Store. Refunds for App Store purchases must be
                requested through Apple. These transactions are subject to Apple's
                terms and conditions.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                5.3 Cancellation and Refunds
              </h4>
              <p>
                You may cancel your subscription at any time. Cancellation takes
                effect at the end of the current billing period. We do not offer
                prorated refunds for partial billing periods. For web-based services,
                refund requests may be submitted to{' '}
                <a href="mailto:stephanie@erie-apps.com" className="text-accent-green hover:underline">
                  stephanie@erie-apps.com
                </a>{' '}
                within 14 days of purchase and will be reviewed on a case-by-case basis.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                5.4 Price Changes
              </h4>
              <p>
                We reserve the right to modify pricing with 30 days' prior notice
                via email (delivered through SendGrid). Continued use after a price
                change constitutes acceptance of the new pricing.
              </p>
            </Section>

            {/* 6 */}
            <Section title="6. User Content">
              <p>
                "User Content" means any data, text, images, or materials you submit
                to our Services (including inspection data, reviews, flashcard
                content, vehicle inventory, and business information).
              </p>
              <ul className="list-disc list-inside space-y-1.5 ml-2 mt-2">
                <li>You retain all ownership rights to your User Content</li>
                <li>You grant us a limited, non-exclusive license to use, process, and store your User Content solely to provide and improve the Services</li>
                <li>You represent that you have the right to submit all User Content and that it does not violate any third-party rights</li>
                <li>User Content processed through the Anthropic Claude API is subject to Anthropic's usage policies</li>
              </ul>
            </Section>

            {/* 7 */}
            <Section title="7. Third-Party Integrations">
              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                7.1 Google Business Profile API
              </h4>
              <p>
                ReplyIQ and Dealership SaaS access your Google Business Profile with
                your explicit OAuth 2.0 authorization. You may revoke access at any
                time through your Google Account settings. Our use complies with the
                Google API Services User Data Policy, including the Limited Use
                requirements.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                7.2 Anthropic Claude API
              </h4>
              <p>
                AI-generated content (reports, responses, flashcards) is provided as
                a drafting aid and may contain errors. You are solely responsible for
                reviewing, editing, and verifying all AI-generated output before use.
                Erie Apps LLC is not liable for inaccuracies in AI-generated content.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                7.3 Stripe
              </h4>
              <p>
                Payment processing is provided by Stripe and is subject to the{' '}
                <a href="https://stripe.com/legal" target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline">
                  Stripe Services Agreement
                </a>.
              </p>

              <h4 className="font-headline text-sm text-text-primary mt-4 mb-2">
                7.4 SendGrid
              </h4>
              <p>
                Email delivery is provided by SendGrid (Twilio). Transactional
                emails including account notifications, receipts, and service updates
                are delivered through SendGrid's infrastructure.
              </p>
            </Section>

            {/* 8 */}
            <Section title="8. Prohibited Uses">
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-1.5 ml-2 mt-2">
                <li>Use our Services for any unlawful purpose</li>
                <li>Attempt to reverse engineer, decompile, or disassemble any Service</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Access another user's account without authorization</li>
                <li>Use automated systems (bots, scrapers) to access our Services without permission</li>
                <li>Submit false, misleading, or fraudulent content</li>
                <li>Use AI-generated content to deceive or mislead consumers</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
              </ul>
            </Section>

            {/* 9 */}
            <Section title="9. Intellectual Property">
              <p>
                All intellectual property rights in our Services (including software,
                designs, trademarks, and content) are owned by Erie Apps LLC. These
                Terms do not grant you any rights to our intellectual property except
                the limited right to use the Services as permitted by these Terms.
              </p>
              <p>
                The names InspectIQ, ReplyIQ, Stacked, The Secret Place, Dealership
                SaaS, HabitLink, and Erie Apps are trademarks of Erie Apps LLC.
              </p>
            </Section>

            {/* 10 */}
            <Section title="10. Disclaimer of Warranties">
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT AI-GENERATED CONTENT WILL BE ACCURATE,
                COMPLETE, OR ERROR-FREE. YOU ARE SOLELY RESPONSIBLE FOR REVIEWING
                AND VERIFYING ALL AI-GENERATED OUTPUT.
              </p>
            </Section>

            {/* 11 */}
            <Section title="11. Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ERIE APPS LLC SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA,
                USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OUR
                SERVICES.
              </p>
              <p>
                OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIMS ARISING FROM YOUR USE
                OF THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE
                TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </Section>

            {/* 12 */}
            <Section title="12. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless Erie Apps LLC, its
                officers, and agents from and against any claims, liabilities,
                damages, losses, and expenses arising from your use of the Services,
                violation of these Terms, or infringement of any third-party rights.
              </p>
            </Section>

            {/* 13 */}
            <Section title="13. Termination">
              <p>
                We may suspend or terminate your access to any Service at any time,
                with or without cause, with or without notice. Upon termination, your
                right to use the Services ceases immediately. You may request export
                of your data within 30 days of termination by contacting us.
              </p>
            </Section>

            {/* 14 */}
            <Section title="14. Governing Law and Disputes">
              <p>
                These Terms shall be governed by and construed in accordance with the
                laws of the Commonwealth of Pennsylvania, without regard to conflict
                of law principles. Any dispute arising under these Terms shall be
                resolved exclusively in the state or federal courts located in Erie
                County, Pennsylvania.
              </p>
            </Section>

            {/* 15 */}
            <Section title="15. Modifications to Terms">
              <p>
                We reserve the right to modify these Terms at any time. Material
                changes will be communicated via email (through SendGrid) or by
                posting a notice on our website at least 30 days before taking
                effect. Continued use of our Services after changes constitutes
                acceptance of the modified Terms.
              </p>
            </Section>

            {/* 16 */}
            <Section title="16. Severability">
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the minimum
                extent necessary, and the remaining provisions shall remain in full
                force and effect.
              </p>
            </Section>

            {/* 17 */}
            <Section title="17. Entire Agreement">
              <p>
                These Terms, together with our Privacy Policy, constitute the entire
                agreement between you and Erie Apps LLC regarding the use of our
                Services, superseding any prior agreements.
              </p>
            </Section>

            {/* 18 */}
            <Section title="18. Contact Us">
              <p>
                If you have questions about these Terms of Service, please contact us:
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
