import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Editors(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl font-bold text-[#001F3F]">Empowering Editors. Elevating Journalism.</h1>
        <p className="text-gray-600 mt-4 max-w-3xl">SamacharAI is built to help editors focus on storytelling — not formatting.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {[
            'Manage multiple newspapers under one account',
            'Shared content libraries',
            'Cloud storage for news archives',
            'Team collaboration tools'
          ].map((t,i)=> (
            <div key={i} className="p-6 rounded-xl bg-white ring-1 ring-gray-200 shadow-sm">
              <h3 className="font-semibold text-[#001F3F]">{t}</h3>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  )
}
