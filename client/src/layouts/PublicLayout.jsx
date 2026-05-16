import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicNavbar from '../components/PublicNavbar'
import Footer from '../components/home/Footer'
import { useScrollToTop } from '../hooks/useScrollToTop'

const PublicLayout = () => {
  useScrollToTop()

  return (
    <div className="bg-white text-slate-900">
      <PublicNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayout
