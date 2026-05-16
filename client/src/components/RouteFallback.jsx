import React from 'react'

const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-white">
    <div className="w-full max-w-md px-6">
      <div className="h-3 w-32 rounded-full bg-green-100 animate-pulse" />
      <div className="mt-5 h-8 rounded-lg bg-slate-100 animate-pulse" />
      <div className="mt-3 h-8 rounded-lg bg-slate-100 animate-pulse" />
      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="h-24 rounded-lg bg-green-50 animate-pulse" />
        <div className="h-24 rounded-lg bg-slate-100 animate-pulse" />
        <div className="h-24 rounded-lg bg-green-50 animate-pulse" />
      </div>
    </div>
  </div>
)

export default RouteFallback
