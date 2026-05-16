import React, { useState } from 'react'
import { ChevronDown, Mail, MessageCircle, Search } from 'lucide-react'
import { faqs, supportCategories } from '../data/saasContent'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import AnimatedMain from '../components/AnimatedMain'

const Support = () => {
  const [open, setOpen] = useState(0)
  useDocumentTitle('Support')

  return (
    <AnimatedMain className="px-6 md:px-16 lg:px-24 xl:px-40 py-20">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold text-green-600">Support center</p>
        <h1 className="text-4xl md:text-5xl font-semibold mt-3">Get unstuck quickly and keep building.</h1>
        <p className="text-slate-600 mt-5">Browse common topics, search help content, or reach the team from one professional support hub.</p>
        <div className="mt-8 flex items-center gap-3 rounded-full border border-slate-200 px-5 h-12 max-w-xl shadow-sm">
          <Search className="size-4 text-slate-400" />
          <input className="border-none focus:ring-0 flex-1" placeholder="Search help articles" />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-5 mt-14">
        <div className="rounded-lg border border-slate-200 p-6 hover:shadow-md transition">
          <Mail className="size-5 text-green-600" />
          <h2 className="font-semibold mt-4">Email support</h2>
          <p className="text-sm text-slate-500 mt-2">support@resumebuilder.ai</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-6 hover:shadow-md transition">
          <MessageCircle className="size-5 text-green-600" />
          <h2 className="font-semibold mt-4">Live chat</h2>
          <p className="text-sm text-slate-500 mt-2">Chat placeholder ready for Intercom, Crisp, or custom backend events.</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-6 hover:shadow-md transition">
          <h2 className="font-semibold">Help categories</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {supportCategories.map((category) => <span key={category} className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">{category}</span>)}
          </div>
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-5 divide-y divide-slate-200 rounded-lg border border-slate-200">
          {faqs.map((faq, index) => (
            <button key={faq.question} onClick={() => setOpen(open === index ? -1 : index)} className="w-full text-left p-5">
              <span className="flex items-center justify-between font-medium text-slate-900">
                {faq.question}
                <ChevronDown className={`size-4 transition ${open === index ? 'rotate-180' : ''}`} />
              </span>
              {open === index && <p className="text-sm text-slate-500 mt-3 leading-6">{faq.answer}</p>}
            </button>
          ))}
        </div>
      </section>
    </AnimatedMain>
  )
}

export default Support
