export const pageContent = {
  features: {
    eyebrow: 'AI resume platform',
    title: 'Every tool you need to turn experience into interviews.',
    description: 'Create tailored resumes, refine every section with AI guidance, and manage a polished job-search workspace from one product.',
    sections: [
      { title: 'AI writing assistant', text: 'Generate role-specific summaries, project bullets, and skills phrasing with editable suggestions.' },
      { title: 'Template system', text: 'Switch between modern, minimal, image-first, and classic layouts without losing your content.' },
      { title: 'Export workflow', text: 'Prepare resumes for PDF export, sharing, and version tracking with production-ready controls.' },
      { title: 'Resume analytics', text: 'Track resume health, completion, recent updates, and public visibility from the dashboard.' },
    ],
  },
  company: {
    eyebrow: 'Company',
    title: 'Built for ambitious job seekers and teams helping people grow.',
    description: 'Resume Builder is shaped around a simple promise: make professional resume creation faster, clearer, and less intimidating.',
    sections: [
      { title: 'Product-led', text: 'We focus on practical workflows that help users finish stronger resumes in fewer sessions.' },
      { title: 'Privacy-conscious', text: 'Resume data is treated like career data should be: personal, portable, and intentionally handled.' },
      { title: 'Career-first', text: 'Every feature is evaluated against whether it helps someone tell their story more clearly.' },
    ],
  },
  affiliate: {
    eyebrow: 'Affiliate program',
    title: 'Partner with a resume platform people actually use.',
    description: 'Creators, coaches, bootcamps, and career communities can recommend Resume Builder with campaign-ready landing flows.',
    sections: [
      { title: 'Creator links', text: 'Track referrals with partner-ready campaign URLs and conversion reporting placeholders.' },
      { title: 'Co-branded assets', text: 'Use polished banners, email snippets, and social cards aligned to the product identity.' },
      { title: 'Career community fit', text: 'Bring a practical tool to students, candidates, and members preparing for new roles.' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Talk to the Resume Builder team.',
    description: 'Questions about your account, partnerships, billing, or product feedback? Start here and we will route it to the right place.',
    sections: [
      { title: 'General support', text: 'support@resumebuilder.ai' },
      { title: 'Partnerships', text: 'partners@resumebuilder.ai' },
      { title: 'Response time', text: 'Most messages receive a reply within one business day.' },
    ],
  },
}

export const supportCategories = [
  'Account access',
  'Resume exports',
  'AI writing help',
  'Billing questions',
  'Template issues',
]

export const faqs = [
  { question: 'Can I create more than one resume?', answer: 'Yes. The dashboard is designed for multiple role-specific resume versions.' },
  { question: 'Can I upload an existing resume?', answer: 'Yes. PDF upload is already connected to the AI extraction workflow in the dashboard.' },
  { question: 'Will refresh work on Vercel routes?', answer: 'Yes. The included Vercel rewrite sends SPA routes back to the Vite entry point.' },
  { question: 'Can this connect to a production backend?', answer: 'The new API wrapper centralizes token, error, and response handling for backend integration.' },
]

export const pricingPlans = [
  { name: 'Starter', monthly: 0, yearly: 0, description: 'For trying the builder and creating a clean first resume.', features: ['1 active resume', 'Basic templates', 'Manual editing', 'Public preview'] },
  { name: 'Pro', monthly: 12, yearly: 96, description: 'For active job seekers managing tailored applications.', features: ['Unlimited resumes', 'AI writing placeholders', 'Advanced templates', 'Export controls'], popular: true },
  { name: 'Team', monthly: 29, yearly: 240, description: 'For coaches, bootcamps, and career support teams.', features: ['Shared libraries', 'Analytics dashboard', 'Priority support', 'Partner reporting'] },
]

export const blogPosts = [
  { category: 'Resume Strategy', title: 'How to tailor one resume for five roles without rewriting everything', read: '6 min read' },
  { category: 'AI Writing', title: 'Prompting your career story into sharper bullet points', read: '4 min read' },
  { category: 'Career Growth', title: 'What hiring managers scan in the first ten seconds', read: '5 min read' },
  { category: 'Templates', title: 'Choosing the right resume layout for your industry', read: '7 min read' },
]

export const roles = [
  { title: 'Frontend Engineer', location: 'Remote', type: 'Full-time' },
  { title: 'Product Designer', location: 'Remote', type: 'Full-time' },
  { title: 'Career Content Strategist', location: 'Hybrid', type: 'Contract' },
]
