import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/20 bg-gradient-to-b from-white to-[#f6f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600">© 2025 SamacharAI — The Future of Indian Journalism.</p>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:text-[#001F3F]" aria-label="X"><Twitter size={18}/></a>
            <a href="#" className="hover:text-[#001F3F]" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="#" className="hover:text-[#001F3F]" aria-label="Instagram"><Instagram size={18}/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
