import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Landing(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar/>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFC300]/10 via-transparent to-transparent"/>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#001F3F] rounded-full blur-3xl opacity-10"/>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#FFC300] rounded-full blur-3xl opacity-10"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#FFC300] font-semibold tracking-wider uppercase">The Future of Indian Journalism</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001F3F] leading-tight mt-3">
                📰 The Future of News Is Here
              </h1>
              <p className="text-2xl font-semibold mt-2 text-[#001F3F]">Make Your Newspaper in Seconds — with SamacharAI</p>
              <p className="text-gray-600 mt-5 max-w-2xl">AI that writes, edits, designs, and formats your entire newspaper — while you sip your tea.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/dashboard" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#001F3F] text-white font-semibold shadow hover:shadow-md transition">
                  Start Free Trial
                  <ArrowRight className="ml-2" size={18}/>
                </Link>
                <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#001F3F]/20 text-[#001F3F] font-semibold hover:bg-[#001F3F]/5">
                  <Play className="mr-2" size={18}/> Watch Demo
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0f2b4d] to-[#001F3F] shadow-2xl ring-1 ring-white/20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-20"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-md text-center text-white/90">
                    <p className="text-sm tracking-widest uppercase">Cinematic Simulation</p>
                    <h3 className="font-serif text-2xl mt-2">A newspaper forms itself — headlines, text and images appearing by AI.</h3>
                    <div className="mt-6 grid grid-cols-3 gap-2 text-xs">
                      <div className="p-3 rounded-lg bg-white/10 backdrop-blur">AI Writes</div>
                      <div className="p-3 rounded-lg bg-white/10 backdrop-blur">Auto Layout</div>
                      <div className="p-3 rounded-lg bg-white/10 backdrop-blur">Print Preview</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Revolution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200">
              <img src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=1200&auto=format&fit=crop" alt="Chaotic newsroom" className="w-full h-full object-cover"/>
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-[#001F3F]">From hours of editing… to seconds of creation.</h2>
              <p className="text-gray-600">Left: chaotic newsroom. Right: sleek AI dashboard finishing a paper.</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {["AI that Writes","Layout Genius","Multilingual Magic"].map((t,i)=> (
                  <div key={i} className="p-5 rounded-xl bg-white shadow ring-1 ring-gray-200">
                    <h4 className="font-semibold text-[#001F3F]">{t}</h4>
                    <p className="text-sm mt-1 text-gray-600">
                      {i===0 && 'Just upload your notes or voice — we’ll make your article.'}
                      {i===1 && 'We design your newspaper, exactly how you want.'}
                      {i===2 && 'Supports 20+ Indian languages.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Carousel (placeholder static visuals) */}
      <section id="demo" className="py-16 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-3xl">See it in action</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {title:'News input upload',img:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop'},
              {title:'Auto layout',img:'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop'},
              {title:'Final print preview',img:'https://images.unsplash.com/photo-1457694587812-e8bf29a43845?q=80&w=1200&auto=format&fit=crop'}
            ].map((card,i)=>(
              <div key={i} className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/30 transition">
                <img src={card.img} alt="demo" className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition"/>
                <div className="p-4">
                  <p className="font-medium">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/dashboard" className="inline-flex items-center px-5 py-3 rounded-md bg-[#FFC300] text-[#001F3F] font-semibold shadow hover:shadow-md">Be the editor of tomorrow — today <ArrowRight size={18} className="ml-2"/></Link>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
