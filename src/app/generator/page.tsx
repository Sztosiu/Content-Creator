'use client'

import { useState } from 'react'
import { FaRocket, FaMagic, FaHashtag, FaLightbulb, FaStar, FaFilter } from 'react-icons/fa'
import { generateContentIdea } from '@/utils/generator'
import { Platform, ContentCategory, ContentType, GeneratedIdea, GeneratorFilters } from '@/types/generator'
import { useAuth } from '@/providers/AuthProvider'

export default function GeneratorPage() {
  const { authState } = useAuth()
  const [filters, setFilters] = useState<GeneratorFilters>({
    platform: null,
    category: null,
    type: null,
  })
  const [generatedIdea, setGeneratedIdea] = useState<GeneratedIdea | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = () => {
    if (!authState.isAuthenticated) {
      setError('Zaloguj się, aby generować pomysły!')
      return
    }

    if (authState.user && authState.user.credits <= 0) {
      setError('Brak kredytów! Kup więcej, aby generować pomysły.')
      return
    }

    const idea = generateContentIdea(filters)
    if (idea) {
      setGeneratedIdea(idea)
      setError(null)
    } else {
      setError('Nie znaleziono pomysłów dla wybranych filtrów. Spróbuj innych kombinacji!')
    }
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 animate-gradient-y"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Generator Pomysłów</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Wybierz platformę i kategorię, a my wygenerujemy dla Ciebie kreatywny pomysł na content!
          </p>
        </div>

        <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl mb-8">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <FaFilter className="text-xl" />
            <h2 className="text-xl font-semibold">Filtry</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">
                Platforma
              </label>
              <select
                value={filters.platform || ''}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  platform: e.target.value as Platform || null 
                }))}
                className="input-field w-full bg-surface/50 border-white/10 focus:border-primary/50 focus:ring-primary/20"
              >
                <option value="">Wszystkie platformy</option>
                <option value="tiktok">TikTok</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">YouTube</option>
                <option value="facebook">Facebook</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">
                Kategoria
              </label>
              <select
                value={filters.category || ''}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  category: e.target.value as ContentCategory || null 
                }))}
                className="input-field w-full bg-surface/50 border-white/10 focus:border-primary/50 focus:ring-primary/20"
              >
                <option value="">Wszystkie kategorie</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="gaming">Gaming</option>
                <option value="edukacja">Edukacja</option>
                <option value="humor">Humor</option>
                <option value="sport">Sport</option>
                <option value="moda">Moda</option>
                <option value="technologia">Technologia</option>
                <option value="kulinaria">Kulinaria</option>
                <option value="podróże">Podróże</option>
                <option value="muzyka">Muzyka</option>
                <option value="behind_the_scenes">Za Kulisami</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">
                Typ contentu
              </label>
              <select
                value={filters.type || ''}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  type: e.target.value as ContentType || null 
                }))}
                className="input-field w-full bg-surface/50 border-white/10 focus:border-primary/50 focus:ring-primary/20"
              >
                <option value="">Wszystkie typy</option>
                <option value="tutorial">Tutorial</option>
                <option value="challenge">Challenge</option>
                <option value="storytime">Story Time</option>
                <option value="reakcja">Reakcja</option>
                <option value="poradnik">Poradnik</option>
                <option value="recenzja">Recenzja</option>
                <option value="trend">Trend</option>
                <option value="transformation">Transformacja</option>
                <option value="qa">Q&A</option>
                <option value="behind_the_scenes">Za Kulisami</option>
              </select>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleGenerate}
              className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2 hover:scale-105 transition-transform"
              disabled={!authState.isAuthenticated || (authState.user?.credits || 0) <= 0}
            >
              <FaMagic className="text-xl" />
              Wygeneruj Pomysł
            </button>
            {authState.isAuthenticated && (
              <p className="mt-2 text-sm text-gray-400">
                Pozostałe kredyty: <span className="text-primary font-semibold">{authState.user?.credits || 0}</span>
              </p>
            )}
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center backdrop-blur-sm">
            {error}
          </div>
        )}

        {generatedIdea && (
          <div className="space-y-6">
            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FaLightbulb className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{generatedIdea.template.title}</h3>
                  <p className="text-gray-300">{generatedIdea.template.description}</p>
                  <div className="mt-4 p-4 bg-surface/50 rounded-lg border border-white/5">
                    <p className="text-sm text-gray-400">Przykład:</p>
                    <p className="text-gray-200">{generatedIdea.template.example}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <FaRocket className="text-2xl text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Twój Twist</h3>
                  <p className="text-gray-300">{generatedIdea.customization}</p>
                </div>
              </div>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <FaStar className="text-2xl text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Wskazówki</h3>
                  <ul className="space-y-2">
                    {generatedIdea.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-accent">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FaHashtag className="text-2xl text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sugerowane Hashtagi</h3>
                  <div className="flex flex-wrap gap-2">
                    {generatedIdea.hashtags.map((hashtag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm hover:bg-blue-500/20 transition-colors"
                      >
                        {hashtag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 