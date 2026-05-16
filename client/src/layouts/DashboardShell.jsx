import React, { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Bell, ChevronDown, FileText, LayoutDashboard, LogOut, Search, Settings, Sparkles, UserCircle } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../app/features/authSlice'
import { dashboardNavItems } from '../constants/navigation'

const icons = [LayoutDashboard, FileText, Sparkles, Bell, UserCircle, Settings]

const DashboardShell = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [profileOpen, setProfileOpen] = useState(false)

  const logoutUser = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="shadow bg-white sticky top-0 z-30">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
          <Link to="/">
            <img src="/logo.svg" alt="Resume Builder logo" className="h-11 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 h-10 min-w-80">
            <Search className="size-4 text-slate-400" />
            <input className="border-none focus:ring-0 bg-transparent h-9 text-sm flex-1" placeholder="Search resumes, templates, analytics" />
          </div>
          <div className="flex items-center gap-3 text-sm">
            <button className="relative size-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition" aria-label="Notifications">
              <Bell className="size-4 mx-auto text-slate-600" />
              <span className="absolute top-2 right-2 size-2 rounded-full bg-green-500" />
            </button>
            <div className="relative">
              <button onClick={() => setProfileOpen((value) => !value)} className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-gray-300 px-4 py-2 rounded-full active:scale-95 transition-all">
                <UserCircle className="size-4" />
                <span className="max-sm:hidden">{user?.name || 'Account'}</span>
                <ChevronDown className="size-3" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-lg bg-white border border-slate-200 shadow-lg p-2 z-40">
                  <p className="px-3 py-2 text-xs text-slate-500 truncate">{user?.email || 'Signed in'}</p>
                  <button onClick={logoutUser} className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">
                    <LogOut className="size-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid lg:grid-cols-[220px_1fr] gap-6">
        <aside className="hidden lg:block">
          <div className="bg-white border border-slate-200 rounded-lg p-3 sticky top-24">
            {dashboardNavItems.map((item, index) => {
              const Icon = icons[index] || LayoutDashboard
              return (
                <NavLink key={item.label} to={item.path} end={item.path === '/dashboard'} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-600 hover:bg-green-50 hover:text-green-700 transition">
                  <Icon className="size-4" />
                  {item.label}
                </NavLink>
              )
            })}
            <div className="mt-4 rounded-lg bg-gradient-to-br from-green-50 to-white border border-green-100 p-4">
              <Sparkles className="size-5 text-green-600" />
              <p className="mt-2 text-sm font-medium text-slate-800">AI draft assistant</p>
              <p className="mt-1 text-xs text-slate-500">Backend-ready placeholders are prepared for upcoming AI actions.</p>
            </div>
          </div>
        </aside>
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardShell
