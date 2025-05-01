'use client'

import { FaRocket, FaLightbulb, FaHashtag, FaChartLine, FaUsers, FaClock } from 'react-icons/fa'

export default function LearnMorePage() {
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
            <span className="gradient-text">Dowiedz się więcej</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Poznaj wszystkie możliwości naszego generatora pomysłów na content
          </p>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Dlaczego warto korzystać z naszego generatora?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FaLightbulb className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Nieograniczona kreatywność</h3>
              </div>
              <p className="text-gray-300">
                Otrzymuj unikalne pomysły dostosowane do Twojej niszy i stylu. Generator analizuje trendy i sugeruje świeże koncepcje.
              </p>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <FaClock className="text-2xl text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Oszczędność czasu</h3>
              </div>
              <p className="text-gray-300">
                Zapomnij o godzinach spędzonych na wymyślaniu pomysłów. W kilka sekund otrzymujesz gotowe koncepcje do realizacji.
              </p>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <FaChartLine className="text-2xl text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Większe zaangażowanie</h3>
              </div>
              <p className="text-gray-300">
                Dzięki różnorodnym formatom i trendującym pomysłom, Twój content przyciąga więcej uwagi i generuje lepsze wyniki.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Jak to działa?</h2>
          <div className="space-y-6">
            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Wybierz parametry</h3>
                  <p className="text-gray-300">
                    Określ platformę, kategorię i typ contentu, który Cię interesuje. Możesz też zostawić te pola puste, aby otrzymać losowe sugestie.
                  </p>
                </div>
              </div>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Generuj pomysły</h3>
                  <p className="text-gray-300">
                    Kliknij przycisk "Generuj Pomysł" i otrzymaj gotową koncepcję wraz z przykładami, hashtagami i wskazówkami.
                  </p>
                </div>
              </div>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dostosuj i twórz</h3>
                  <p className="text-gray-300">
                    Wykorzystaj otrzymany pomysł jako inspirację, dodaj własny twist i stwórz unikalny content dla swojej społeczności.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Korzyści dla Ciebie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FaRocket className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Szybki rozwój</h3>
              </div>
              <p className="text-gray-300">
                Regularne publikowanie wartościowego contentu pomaga szybciej budować zaangażowaną społeczność i zwiększać zasięgi.
              </p>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <FaHashtag className="text-2xl text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Optymalne hashtagi</h3>
              </div>
              <p className="text-gray-300">
                Otrzymuj sugerowane hashtagi dopasowane do Twojej niszy, które pomagają zwiększyć widoczność Twojego contentu.
              </p>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <FaUsers className="text-2xl text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Większa społeczność</h3>
              </div>
              <p className="text-gray-300">
                Różnorodne i angażujące treści przyciągają nowych followersów i budują lojalną społeczność wokół Twojej marki.
              </p>
            </div>

            <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FaLightbulb className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Nieustanna inspiracja</h3>
              </div>
              <p className="text-gray-300">
                Nigdy nie zabraknie Ci pomysłów na content. Generator stale się rozwija i dodaje nowe, trendujące formaty.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card backdrop-blur-sm bg-surface/80 border border-white/10 shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Gotowy na kreatywną przygodę?</h2>
            <p className="text-gray-300 mb-6">
              Dołącz do grona zadowolonych twórców i odkryj potencjał naszego generatora pomysłów.
            </p>
            <a
              href="/generator"
              className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <FaRocket className="text-xl" />
              Rozpocznij teraz
            </a>
          </div>
        </section>
      </div>
    </main>
  )
} 