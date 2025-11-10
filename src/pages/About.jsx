import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl font-bold text-[#001F3F]">Born from journalism. Built by innovation.</h1>
        <p className="text-gray-700 mt-6 max-w-3xl">SamacharAI was founded with a mission to empower every Indian newsroom — from the bustling metros to the quiet villages — with the power of artificial intelligence. We believe journalism’s soul lies in truth and storytelling, not in layout stress.</p>
      </section>
      <Footer/>
    </div>
  )
}
