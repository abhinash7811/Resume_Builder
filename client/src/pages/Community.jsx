import React from 'react'
import { MessageSquare, Users, Trophy } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import AnimatedMain from '../components/AnimatedMain'

const Community = () => {
  useDocumentTitle('Community')

  return (
    <AnimatedMain className="px-6 md:px-16 lg:px-24 xl:px-40 py-20">
      <p className="text-sm font-semibold text-green-600">Community</p>
      <h1 className="text-4xl md:text-5xl font-semibold mt-3 max-w-3xl">A career community built around momentum.</h1>
      <p className="text-slate-600 mt-5 max-w-2xl">Join builders, applicants, mentors, and creators sharing resume feedback and practical job-search systems.</p>

      <section className="grid md:grid-cols-3 gap-5 mt-12">
        {[
          { value: '10k+', label: 'Active users', icon: <Users className="size-6 text-green-600 mx-auto" /> },
          { value: '2.4k', label: 'Shared resumes', icon: <Trophy className="size-6 text-green-600 mx-auto" /> },
          { value: '18k', label: 'Feedback threads', icon: <MessageSquare className="size-6 text-green-600 mx-auto" /> },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-slate-200 p-7 text-center hover:-translate-y-1 hover:shadow-md transition">
            {item.icon}
            <p className="text-3xl font-semibold mt-4">{item.value}</p>
            <p className="text-sm text-slate-500 mt-1">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-14">
        <div className="rounded-lg bg-green-50 border border-green-100 p-8">
          <h2 className="text-2xl font-semibold">Discord and socials</h2>
          <p className="text-slate-600 mt-3">Community channels are ready for Discord, LinkedIn, X, and YouTube integrations from one routed page.</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold">User showcase</h2>
          <p className="text-slate-600 mt-3">Highlight resume transformations, interview wins, and template inspiration with scalable cards.</p>
        </div>
      </section>
    </AnimatedMain>
  )
}

export default Community
