import React from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import AnimatedMain from '../components/AnimatedMain'

const About = () => {
  useDocumentTitle('About')

  return (
    <AnimatedMain className="px-6 md:px-16 lg:px-24 xl:px-40 py-20">
      <p className="text-sm font-semibold text-green-600">About</p>
      <h1 className="text-4xl md:text-5xl font-semibold mt-3 max-w-3xl">We make resume creation feel clear, fast, and genuinely useful.</h1>
      <p className="text-slate-600 mt-5 max-w-2xl">Our mission is to help people explain their experience with confidence, whether they are starting out, changing careers, or scaling a coaching practice.</p>

      <section className="grid md:grid-cols-2 gap-6 mt-14">
        <div className="rounded-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="text-slate-600 mt-3">Make professional career documents accessible without making them generic.</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="text-slate-600 mt-3">A focused workspace where every candidate can manage their career story end to end.</p>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-4 mt-10">
        {['10k users', '25k resumes', '4 templates', '1 clear goal'].map((stat) => <div key={stat} className="rounded-lg bg-slate-50 border border-slate-100 p-5 font-semibold">{stat}</div>)}
      </section>

      <section className="mt-14 rounded-lg bg-gradient-to-r from-green-50 to-white border border-green-100 p-8">
        <h2 className="text-2xl font-semibold">Founder section</h2>
        <p className="text-slate-600 mt-3">Founder profile, story, and photo placeholder prepared for production content.</p>
      </section>
    </AnimatedMain>
  )
}

export default About
