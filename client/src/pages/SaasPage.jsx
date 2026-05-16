import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pageContent } from '../data/saasContent'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import AnimatedMain from '../components/AnimatedMain'

const SaasPage = ({ type }) => {
  const content = pageContent[type]
  useDocumentTitle(content.title)

  return (
    <AnimatedMain>
      <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-20 bg-gradient-to-b from-green-50/70 to-white">
        <p className="text-sm font-semibold text-green-600">{content.eyebrow}</p>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-end mt-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-3xl">{content.title}</h1>
            <p className="text-slate-600 mt-5 max-w-2xl leading-7">{content.description}</p>
          </div>
          <Link to="/dashboard" className="justify-self-start lg:justify-self-end inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 text-white hover:bg-green-700 active:scale-95 transition">
            Open dashboard <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-16">
        <div className="grid md:grid-cols-3 gap-5">
          {content.sections.map((section, index) => (
            <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition" style={{ transitionDelay: `${index * 30}ms` }}>
              <CheckCircle2 className="size-5 text-green-600" />
              <h2 className="text-lg font-semibold text-slate-900 mt-5">{section.title}</h2>
              <p className="text-sm leading-6 text-slate-500 mt-2">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </AnimatedMain>
  )
}

export default SaasPage
