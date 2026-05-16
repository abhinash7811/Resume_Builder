import React from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import AnimatedMain from '../components/AnimatedMain'

const copy = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'This policy explains how Resume Builder handles account, resume, and usage data in a production SaaS environment.',
    sections: ['We collect the information required to create accounts, save resumes, and support product workflows.', 'Resume content remains tied to the authenticated account and is used to provide editing, preview, export, and AI-assisted features.', 'Users can request data access, correction, or deletion through the support channel.', 'Production integrations should configure secure storage, transport encryption, and least-privilege backend access.'],
  },
  terms: {
    title: 'Terms of Service',
    intro: 'These terms define responsible use of Resume Builder and the expectations for accounts, content, and subscriptions.',
    sections: ['Users are responsible for the accuracy of resume content and any materials uploaded to the platform.', 'The product may include AI-assisted suggestions that should be reviewed before use.', 'Subscriptions, billing, and cancellation flows should be handled through the configured payment provider.', 'Misuse, scraping, or attempts to disrupt service availability are prohibited.'],
  },
}

const LegalPage = ({ type }) => {
  const content = copy[type]
  useDocumentTitle(content.title)

  return (
    <AnimatedMain className="px-6 md:px-16 lg:px-24 xl:px-40 py-20">
      <article className="max-w-4xl">
        <p className="text-sm font-semibold text-green-600">Legal</p>
        <h1 className="text-4xl md:text-5xl font-semibold mt-3">{content.title}</h1>
        <p className="text-slate-600 mt-5 leading-7">{content.intro}</p>
        <div className="mt-10 space-y-6">
          {content.sections.map((section, index) => (
            <section key={section} className="rounded-lg border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900">Section {index + 1}</h2>
              <p className="text-slate-600 mt-2 leading-7">{section}</p>
            </section>
          ))}
        </div>
      </article>
    </AnimatedMain>
  )
}

export default LegalPage
