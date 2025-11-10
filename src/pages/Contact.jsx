import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', org:'', msg:''})
  const handle = (e) => setForm({...form, [e.target.name]: e.target.value})
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section id="contact" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl font-bold text-[#001F3F]">Get in Touch</h1>
        <p className="text-gray-600 mt-2">Whether you run a small-town press or a national daily — we’d love to talk.</p>
        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input name="name" value={form.name} onChange={handle} className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-[#001F3F] focus:outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" value={form.email} onChange={handle} className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-[#001F3F] focus:outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Organization</label>
            <input name="org" value={form.org} onChange={handle} className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-[#001F3F] focus:outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="msg" rows={5} value={form.msg} onChange={handle} className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-[#001F3F] focus:outline-none"/>
          </div>
          <button type="button" className="w-full md:w-auto px-6 py-3 rounded-md bg-[#001F3F] text-white font-semibold">Get in Touch</button>
        </form>
      </section>
      <Footer/>
    </div>
  )
}
