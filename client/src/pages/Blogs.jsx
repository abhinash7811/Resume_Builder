import React, { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { blogPosts } from '../data/saasContent'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import AnimatedMain from '../components/AnimatedMain'

const Blogs = () => {
  const [query, setQuery] = useState('')
  useDocumentTitle('Blogs')
  const posts = useMemo(() => blogPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()) || post.category.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <AnimatedMain className="px-6 md:px-16 lg:px-24 xl:px-40 py-20">
      <section className="grid lg:grid-cols-[1fr_360px] gap-10 items-end">
        <div>
          <p className="text-sm font-semibold text-green-600">Blogs</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-3">Practical advice for sharper applications.</h1>
          <p className="text-slate-600 mt-5 max-w-2xl">Guides on resume strategy, AI writing, templates, and the small details that help job seekers move faster.</p>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-slate-200 px-5 h-12 shadow-sm">
          <Search className="size-4 text-slate-400" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} className="border-none focus:ring-0 flex-1" placeholder="Search articles" />
        </div>
      </section>

      <article className="mt-14 rounded-lg bg-gradient-to-r from-green-50 to-white border border-green-100 p-8">
        <span className="text-xs font-semibold text-green-700">Featured</span>
        <h2 className="text-2xl font-semibold mt-3">The resume workflow high-performing candidates use every week</h2>
        <p className="text-slate-600 mt-3 max-w-3xl">A simple system for keeping one source resume, targeted variants, and measurable progress without turning your job search into admin work.</p>
      </article>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {posts.map((post) => (
          <article key={post.title} className="rounded-lg border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-md transition">
            <span className="text-xs text-green-700 bg-green-50 rounded-full px-3 py-1">{post.category}</span>
            <h2 className="font-semibold text-slate-900 mt-5">{post.title}</h2>
            <p className="text-sm text-slate-500 mt-4">{post.read}</p>
          </article>
        ))}
      </section>
    </AnimatedMain>
  )
}

export default Blogs
