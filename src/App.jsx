import { useEffect, useMemo, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full border text-sm mr-2 mb-2 transition-colors ${
        active ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
      }`}
    >
      {label}
    </button>
  )
}

function App() {
  const [title, setTitle] = useState('Monsoon Rains Arrive in Kerala')
  const [bullets, setBullets] = useState(['IMD declares onset of monsoon', 'Heavy showers across coastal districts', 'Fishermen advised caution'])
  const [tone, setTone] = useState('journalistic')
  const [audience, setAudience] = useState('general')
  const [language, setLanguage] = useState('English')
  const [loading, setLoading] = useState(false)
  const [article, setArticle] = useState(null)
  const [error, setError] = useState('')

  const tones = ['formal','neutral','emotional','journalistic']
  const audiences = ['general','youth','rural','urban','business']
  const languages = ['English','Hindi','Bengali','Tamil','Marathi']

  const canCallApi = useMemo(() => !!BACKEND, [])

  const generate = async () => {
    setLoading(true)
    setError('')
    setArticle(null)
    try {
      const res = await fetch(`${BACKEND}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, bullets, tone, audience, language })
      })
      if (!res.ok) throw new Error('Failed to generate')
      const data = await res.json()
      setArticle(data)
    } catch (e) {
      setError('Could not reach the backend. Make sure the URL is set.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight">
          SamacharAI
        </div>
        <div className="text-xs text-gray-600">{canCallApi ? 'Connected to backend' : 'Set VITE_BACKEND_URL to enable API'}</div>
      </header>

      <main className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 p-6">
        {/* Left: input form */}
        <section className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Smart Article Generator</h2>

          <label className="block text-sm font-medium mb-1">Headline</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter headline"
          />

          <label className="block text-sm font-medium mb-1">Key points (one per line)</label>
          <textarea
            value={bullets.join('\n')}
            onChange={e => setBullets(e.target.value.split('\n').filter(Boolean))}
            rows={6}
            className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add key points"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-sm font-medium mb-2">Tone</div>
              <div>
                {tones.map(t => (
                  <Chip key={t} label={t} active={tone===t} onClick={() => setTone(t)} />
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2">Audience</div>
              <div>
                {audiences.map(a => (
                  <Chip key={a} label={a} active={audience===a} onClick={() => setAudience(a)} />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-sm font-medium mb-2">Language</div>
            <div>
              {languages.map(l => (
                <Chip key={l} label={l} active={language===l} onClick={() => setLanguage(l)} />
              ))}
            </div>
          </div>

          <button
            onClick={generate}
            disabled={loading || !title}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-2 rounded-md transition"
          >
            {loading ? 'Generating...' : 'Generate Article'}
          </button>

          {error && (
            <div className="mt-3 text-sm text-red-600">{error}</div>
          )}
        </section>

        {/* Right: output preview */}
        <section className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          {!article ? (
            <div className="text-gray-500 text-sm">Generated article will appear here.</div>
          ) : (
            <div>
              <div className="mb-2 text-2xl font-black leading-tight">{article.title}</div>
              {article.subheads?.length > 0 && (
                <div className="text-gray-700 italic mb-4">{article.subheads[0]}</div>
              )}
              <div className="prose max-w-none whitespace-pre-wrap">{article.content}</div>
              {article.headlines?.length > 1 && (
                <div className="mt-6">
                  <div className="text-sm font-semibold mb-2">Alternate Headlines</div>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {article.headlines.slice(1).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      <footer className="text-center text-xs text-gray-500 py-4">
        Build full papers automatically — from headline to layout.
      </footer>
    </div>
  )
}

export default App
