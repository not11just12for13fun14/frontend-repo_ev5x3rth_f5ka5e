import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Check } from 'lucide-react'

const plans = [
  {name:'Free Trial',for:'Individuals',price:'₹0',features:['5 pages/month']},
  {name:'Pro',for:'Local Papers',price:'₹999/month',features:['Unlimited pages','Pattern saving','AI rewrite']},
  {name:'Enterprise',for:'Agencies',price:'Custom',features:['Multi-user','API access','Real-time updates']},
]

export default function Pricing(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl font-bold text-[#001F3F]">Plans that scale with your newsroom.</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {plans.map((p,i)=> (
            <div key={i} className={`p-6 rounded-2xl ring-1 ring-gray-200 shadow-sm bg-gradient-to-b from-white to-[#f7fbff] ${i===1 ? 'border-2 border-[#FFC300]' : ''}`}>
              <div className="text-sm text-gray-500">For {p.for}</div>
              <h3 className="text-2xl font-semibold text-[#001F3F] mt-1">{p.name}</h3>
              <div className="text-3xl font-bold mt-3 text-[#001F3F]">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f,idx)=> (
                  <li key={idx} className="flex items-center gap-2"><Check className="text-[#FFC300]" size={18}/> {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-md bg-[#001F3F] text-white font-semibold hover:opacity-90">{i===0 ? 'Start Free' : i===1 ? 'Go Pro' : 'Contact Sales'}</button>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md border border-[#001F3F]/20 text-[#001F3F] font-semibold hover:bg-[#001F3F]/5">Book a Demo →</a>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
