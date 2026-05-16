import React from 'react'
import { Briefcase, HeartHandshake, Layers } from 'lucide-react'
import { roles } from '../data/saasContent'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import AnimatedMain from '../components/AnimatedMain'

const Careers = () => {
  useDocumentTitle('Careers')

  return (
    <AnimatedMain className="px-6 md:px-16 lg:px-24 xl:px-40 py-20">
      <p className="text-sm font-semibold text-green-600">Careers</p>
      <h1 className="text-4xl md:text-5xl font-semibold mt-3 max-w-3xl">Help people present their best work with confidence.</h1>
      <p className="text-slate-600 mt-5 max-w-2xl">We are building a practical career platform with a calm product culture, thoughtful craft, and high ownership.</p>

      <section className="grid md:grid-cols-3 gap-5 mt-12">
        {[
          { label: 'Craft', icon: <Briefcase className="size-5 text-green-600" /> },
          { label: 'Ownership', icon: <Layers className="size-5 text-green-600" /> },
          { label: 'Care', icon: <HeartHandshake className="size-5 text-green-600" /> },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-slate-200 p-6">
            {item.icon}
            <h2 className="font-semibold mt-4">{item.label}</h2>
            <p className="text-sm text-slate-500 mt-2">Build with taste, move with clarity, and keep the user close to the work.</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Open roles</h2>
        <div className="mt-5 space-y-3">
          {roles.map((role) => (
            <article key={role.title} className="rounded-lg border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-sm transition">
              <div>
                <h3 className="font-semibold">{role.title}</h3>
                <p className="text-sm text-slate-500">{role.location} · {role.type}</p>
              </div>
              <button className="rounded-full border border-green-200 text-green-700 px-5 py-2 hover:bg-green-50 transition">View role</button>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Hiring process</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-5">
          {['Intro call', 'Portfolio review', 'Team interview', 'Offer'].map((step, index) => (
            <div key={step} className="rounded-lg bg-slate-50 p-5 border border-slate-100">
              <span className="text-green-600 font-semibold">0{index + 1}</span>
              <p className="font-medium mt-2">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedMain>
  )
}

export default Careers
