import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/editors', label: 'For Editors / Agencies' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#001F3F] to-[#0b3d77] ring-1 ring-white/40 shadow-md"/>
          <span className="font-serif text-xl font-semibold tracking-tight text-[#001F3F]">SamacharAI</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({isActive})=>`text-sm transition font-medium ${isActive ? 'text-[#001F3F]' : 'text-gray-600 hover:text-[#001F3F]'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/dashboard" className="text-sm font-semibold text-[#001F3F] hover:opacity-80">Login</Link>
          <Link to="/dashboard" className="text-sm font-semibold px-4 py-2 rounded-md text-[#001F3F] border border-[#001F3F]/20 bg-[#FFC300] shadow-sm hover:shadow transition">Start Free Trial</Link>
        </div>

        <button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 bg-white" onClick={()=>setOpen(v=>!v)}>
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map(item => (
              <NavLink key={item.to} to={item.to} onClick={()=>setOpen(false)} className={({isActive})=>`block text-sm py-1 ${isActive ? 'text-[#001F3F] font-semibold' : 'text-gray-700'}`}>{item.label}</NavLink>
            ))}
            <div className="pt-2 flex gap-3">
              <Link to="/dashboard" onClick={()=>setOpen(false)} className="text-sm font-semibold text-[#001F3F]">Login</Link>
              <Link to="/dashboard" onClick={()=>setOpen(false)} className="text-sm font-semibold px-3 py-1.5 rounded-md text-[#001F3F] border border-[#001F3F]/20 bg-[#FFC300]">Start Free Trial</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
