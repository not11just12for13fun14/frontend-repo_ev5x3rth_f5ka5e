import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { UploadCloud, FileText, Sparkles, Eye, Layout, Download } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Dashboard(){
  const [dragOver, setDragOver] = useState(false)
  return (
    <div className="min-h-screen bg-[#0e1116] text-white">
      <Navbar/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="bg-white/5 rounded-xl ring-1 ring-white/10 p-4 space-y-2">
            {[
              {icon: UploadCloud, label: 'Upload News'},
              {icon: Layout, label: 'Layouts'},
              {icon: FileText, label: 'Templates'},
              {icon: Sparkles, label: 'Generate'},
              {icon: Download, label: 'Export'}
            ].map((item,i)=> (
              <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
                <item.icon size={18}/> <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </aside>

          {/* Main */}
          <main>
            <div
              className={`rounded-2xl border-2 border-dashed ${dragOver? 'border-[#FFC300] bg-white/5':'border-white/10'} p-10 text-center transition`}
              onDragOver={(e)=>{e.preventDefault(); setDragOver(true)}}
              onDragLeave={()=>setDragOver(false)}
              onDrop={(e)=>{e.preventDefault(); setDragOver(false)}}
            >
              <UploadCloud className="mx-auto"/>
              <h2 className="text-xl mt-3 font-semibold">Drop your news files here</h2>
              <p className="text-white/70 text-sm">PDFs, Docs, Audio notes</p>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
                <Sparkles className="text-[#FFC300]"/>
                <h3 className="mt-3 font-semibold">AI Writing in Progress…</h3>
                <p className="text-sm text-white/70">Your stories are being drafted.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
                <Eye className="text-[#FFC300]"/>
                <h3 className="mt-3 font-semibold">Preview Newspaper</h3>
                <p className="text-sm text-white/70">Open a live preview window.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
                <Layout className="text-[#FFC300]"/>
                <h3 className="mt-3 font-semibold">Auto Layout</h3>
                <p className="text-sm text-white/70">Your saved patterns will apply automatically.</p>
              </div>
            </div>
          </main>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
