import React from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
          <div className="max-w-md text-center bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
            <p className="text-sm font-semibold text-green-600">Resume Builder</p>
            <h1 className="text-2xl font-semibold text-slate-900 mt-2">Something needs a quick refresh.</h1>
            <p className="text-slate-500 mt-3">The page hit an unexpected state. Head home and continue from a clean route.</p>
            <Link to="/" className="inline-flex mt-6 rounded-full bg-green-600 px-6 py-2 text-white hover:bg-green-700 transition">
              Go home
            </Link>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
