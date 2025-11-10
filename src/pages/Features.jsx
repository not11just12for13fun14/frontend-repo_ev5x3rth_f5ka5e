import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckCircle2 } from 'lucide-react'

const features = [
  {title:'Smart Article Generator',desc:'Upload a voice note, bullet list, or raw report. AI writes a grammatically perfect, journalistic story — in seconds.'},
  {title:'Layout Auto-Fitter',desc:'Upload your layout once. AI remembers where columns, ads, and images go — forever.'},
  {title:'Pattern Memory',desc:'No need to reupload. Your layout = your signature. Saved automatically.'},
  {title:'Headline Studio',desc:'Generates 5–10 headline options based on tone and target audience.'},
  {title:'Image Auto-Placement',desc:'AI analyzes photo subjects, crops, and fits them intelligently into design spaces.'},
  {title:'Fact-Check AI',desc:'Optional verification module that validates data through trusted APIs.'},
  {title:'Voice-to-News',desc:'Speak your news, and AI transcribes, edits, and formats it into a ready-to-print piece.'},
  {title:'Smart Export',desc:'Export to PDF (print-ready), Web E-paper, Newsletter format.'},
]

export default function Features(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl font-bold text-[#001F3F]">Every feature you wished existed — already built.</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((f, i)=> (
            <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-white to-[#f7fbff] ring-1 ring-gray-200 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#FFC300]"/>
                <div>
                  <h3 className="font-semibold text-[#001F3F]">{f.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  )
}
