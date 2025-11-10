import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const steps = [
  {title:'Upload Inputs',desc:'Bullet points, voice note, or half-written report.'},
  {title:'Choose Layout',desc:'Pick from your saved patterns or upload a new one.'},
  {title:'Let SamacharAI Work',desc:'AI writes, edits, designs, and arranges all content automatically.'},
  {title:'Review & Publish',desc:'Preview → Approve → Download or auto-schedule to print.'},
]

export default function HowItWorks(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl font-bold text-[#001F3F]">How it works</h1>
        <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
          <div className="space-y-6">
            {steps.map((s,i)=> (
              <div key={i} className="p-6 rounded-xl bg-white ring-1 ring-gray-200 shadow-sm">
                <div className="text-sm text-[#FFC300] font-semibold">Step {i+1}</div>
                <h3 className="text-xl font-semibold text-[#001F3F] mt-1">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2b4d] to-[#001F3F] p-8 text-white ring-1 ring-white/20 shadow-2xl">
            <p className="opacity-80">“You upload. We publish. The world reads.”</p>
            <div className="mt-6 aspect-[4/3] rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
              <span className="text-sm">Process Preview</span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
