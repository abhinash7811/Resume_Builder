import React from 'react'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const NotFound = () => {
  useDocumentTitle('Page not found')

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-sm font-semibold text-green-600">404</p>
        <h1 className="text-4xl font-semibold text-slate-900 mt-3">This page is not on the resume.</h1>
        <p className="text-slate-500 mt-3">The route does not exist, but the rest of the app is ready.</p>
        <Link to="/" className="inline-flex mt-6 rounded-full bg-green-600 px-6 py-2 text-white hover:bg-green-700 transition">
          Back home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
