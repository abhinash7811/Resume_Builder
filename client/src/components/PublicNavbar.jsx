import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { publicNavLinks } from '../constants/navigation'
import { useSelector } from 'react-redux'

const PublicNavbar = () => {
  const [open, setOpen] = useState(false)
  const { user } = useSelector((state) => state.auth)

  return (
    <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm bg-white/85 backdrop-blur border-b border-slate-100 sticky top-0">
      <Link to="/" className="active:scale-95 transition">
        <img src="/logo.svg" alt="Resume Builder logo" className="h-11 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-slate-800">
        {publicNavLinks.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `hover:text-green-600 transition ${isActive ? 'text-green-600' : ''}`}>
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex gap-2">
        <Link to={user ? '/dashboard' : '/dashboard?state=register'} className="px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white">
          {user ? 'Dashboard' : 'Get started'}
        </Link>
      </div>

      <button onClick={() => setOpen(true)} className="md:hidden active:scale-90 transition" aria-label="Open menu">
        <Menu className="size-6" />
      </button>

      <div className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        {publicNavLinks.map((item) => (
          <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="text-white">
            {item.label}
          </Link>
        ))}
        <Link to="/dashboard" onClick={() => setOpen(false)} className="rounded-full bg-green-600 px-7 py-2 text-white">
          Dashboard
        </Link>
        <button onClick={() => setOpen(false)} className="aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex" aria-label="Close menu">
          <X className="size-5" />
        </button>
      </div>
    </nav>
  )
}

export default PublicNavbar
