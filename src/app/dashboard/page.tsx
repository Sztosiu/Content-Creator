import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Panel Użytkownika - Content Creator',
  description: 'Zarządzaj swoimi pomysłami i ustawieniami',
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-12">
          <span className="gradient-text">Panel Użytkownika</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Statystyki */}
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Twoje Statystyki</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface rounded-lg">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-gray-400">Pozostałe Credity</div>
              </div>
              <div className="p-4 bg-surface rounded-lg">
                <div className="text-2xl font-bold text-secondary">15</div>
                <div className="text-sm text-gray-400">Zapisane Pomysły</div>
              </div>
            </div>
          </div>

          {/* Ustawienia Powiadomień */}
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Ustawienia Powiadomień</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Codzienny Pomysł Dnia</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Powiadomienia Email</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Zapisane Pomysły */}
          <div className="card md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Zapisane Pomysły</h2>
            <div className="space-y-4">
              {savedIdeas.map((idea) => (
                <div key={idea.id} className="p-4 bg-surface rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold mb-2">{idea.title}</h3>
                      <p className="text-sm text-gray-400">{idea.description}</p>
                      <div className="mt-2 flex gap-2">
                        {idea.hashtags.map((tag) => (
                          <span key={tag} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="text-red-500 hover:text-red-400">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

import { TrashIcon } from '@heroicons/react/24/outline'

const savedIdeas = [
  {
    id: 1,
    title: 'DIY Room Makeover Challenge',
    description: 'Metamorfoza pokoju w stylu minimalistycznym z budżetem 200zł',
    hashtags: ['#DIY', '#RoomMakeover', '#Budget'],
  },
  {
    id: 2,
    title: 'Morning Routine 2024',
    description: 'Poranna rutyna dla uczniów - jak być produktywnym',
    hashtags: ['#MorningRoutine', '#Productivity', '#StudentLife'],
  },
] 