import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pricingPlans } from '../data/saasContent'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import AnimatedMain from '../components/AnimatedMain'

const Pricing = () => {
  const [yearly, setYearly] = useState(true)
  useDocumentTitle('Pricing')

  return (
    <AnimatedMain className="px-6 md:px-16 lg:px-24 xl:px-40 py-20">
      <section className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-green-600">Pricing</p>
        <h1 className="text-4xl md:text-5xl font-semibold mt-3">Plans for every stage of the job search.</h1>
        <p className="text-slate-600 mt-5">Start simple, then unlock the workflows that make a resume workspace feel serious.</p>
        <div className="inline-flex items-center rounded-full bg-slate-100 p-1 mt-8">
          <button onClick={() => setYearly(false)} className={`px-5 py-2 rounded-full text-sm transition ${!yearly ? 'bg-white shadow-sm text-green-700' : 'text-slate-500'}`}>Monthly</button>
          <button onClick={() => setYearly(true)} className={`px-5 py-2 rounded-full text-sm transition ${yearly ? 'bg-white shadow-sm text-green-700' : 'text-slate-500'}`}>Yearly</button>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6 mt-14">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className={`relative rounded-lg border p-7 bg-white hover:-translate-y-1 hover:shadow-lg transition ${plan.popular ? 'border-green-500 shadow-md' : 'border-slate-200'}`}>
            {plan.popular && <span className="absolute right-5 top-5 rounded-full bg-green-600 px-3 py-1 text-xs text-white">Popular</span>}
            <h2 className="text-xl font-semibold text-slate-900">{plan.name}</h2>
            <p className="text-sm text-slate-500 mt-2 min-h-12">{plan.description}</p>
            <div className="mt-6">
              <span className="text-4xl font-semibold">${yearly ? plan.yearly : plan.monthly}</span>
              <span className="text-slate-500 text-sm">/{yearly ? 'year' : 'month'}</span>
            </div>
            <Link to="/dashboard" className="mt-6 flex h-11 items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition">Get started</Link>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                  <Check className="size-4 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </AnimatedMain>
  )
}

export default Pricing
