import Link from 'next/link'
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook, FaMagic, FaSmile, FaRocket, FaUserFriends, FaLightbulb, FaStar } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold mb-8">
              <span className="gradient-text drop-shadow-lg">Twórz Viralowy Content</span>
              <br />
              <span className="text-text">z Pomocą AI <span className="animate-pulse">🤖✨</span></span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              <span className="font-bold text-primary">Content Creator</span> to Twój osobisty asystent kreatywności!<br />
              Odkrywaj najnowsze trendy, generuj pomysły na TikToki, Reelsy i YouTube Shorts, zapisuj ulubione inspiracje i rozwijaj swój profil w social mediach! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/generator" className="btn-primary text-lg">
                Rozpocznij Za Darmo
              </Link>
              <Link href="/learn-more" className="btn-secondary text-lg">
                Dowiedz się Więcej
              </Link>
            </div>
          </div>

          {/* Platform Icons */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-center mb-8">
              Wspieramy Wszystkie Popularne Platformy
            </h2>
            <div className="flex justify-center space-x-8 sm:space-x-12 text-4xl">
              <FaYoutube className="text-red-500 hover:scale-110 transition-transform" />
              <FaTiktok className="text-white hover:scale-110 transition-transform" />
              <FaInstagram className="text-pink-500 hover:scale-110 transition-transform" />
              <FaFacebook className="text-blue-500 hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:scale-105 transition-transform flex flex-col items-center text-center">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">
                Jak to działa? <FaMagic className="inline ml-2 text-accent animate-bounce" />
              </h2>
              <p className="text-gray-400">Cztery proste kroki do tworzenia viralowego contentu</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="card group relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div className="text-3xl mb-4 text-primary group-hover:scale-110 transition-transform">
                  <FaYoutube />
                </div>
                <h3 className="font-bold mb-2">Wybierz platformę</h3>
                <p className="text-sm text-gray-400">i kategorię, która Cię interesuje</p>
              </div>

              {/* Step 2 */}
              <div className="card group relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div className="text-3xl mb-4 text-secondary group-hover:scale-110 transition-transform">
                  <FaMagic />
                </div>
                <h3 className="font-bold mb-2">Kliknij "Wygeneruj"</h3>
                <p className="text-sm text-gray-400">i zobacz, co podpowie AI!</p>
              </div>

              {/* Step 3 */}
              <div className="card group relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div className="text-3xl mb-4 text-accent group-hover:scale-110 transition-transform">
                  <FaStar />
                </div>
                <h3 className="font-bold mb-2">Zapisz inspiracje</h3>
                <p className="text-sm text-gray-400">i wracaj do nich, kiedy chcesz</p>
              </div>

              {/* Step 4 */}
              <div className="card group relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div className="text-3xl mb-4 text-yellow-500 group-hover:scale-110 transition-transform">
                  <FaRocket />
                </div>
                <h3 className="font-bold mb-2">Zbieraj creditsy</h3>
                <p className="text-sm text-gray-400">i odblokowuj kolejne pomysły!</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/generator" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3">
                Rozpocznij Teraz <FaRocket className="animate-bounce" />
              </Link>
            </div>
          </div>

          {/* Why us? */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-center mb-6">Dlaczego warto? <FaStar className="inline ml-2 text-yellow-400 animate-spin-slow" /></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card flex flex-col gap-2">
                <span className="text-2xl">⚡</span>
                <b>Błyskawiczne pomysły</b>
                <span className="text-gray-300 text-sm">Nie musisz już szukać inspiracji godzinami – AI zrobi to za Ciebie!</span>
              </div>
              <div className="card flex flex-col gap-2">
                <span className="text-2xl">🎯</span>
                <b>Personalizacja</b>
                <span className="text-gray-300 text-sm">Pomysły dopasowane do Twoich zainteresowań i trendów.</span>
              </div>
              <div className="card flex flex-col gap-2">
                <span className="text-2xl">🛡️</span>
                <b>Bezpieczna przestrzeń</b>
                <span className="text-gray-300 text-sm">Tworzymy przyjazne miejsce do rozwijania swojej kreatywności!</span>
              </div>
              <div className="card flex flex-col gap-2">
                <span className="text-2xl">💡</span>
                <b>Codzienna dawka inspiracji</b>
                <span className="text-gray-300 text-sm">Każdego dnia nowe pomysły dopasowane do Twojej niszy!</span>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">Dołącz do społeczności kreatywnych twórców! <FaSmile className="inline ml-2 text-secondary animate-bounce" /></h2>
            <p className="text-lg text-gray-200 mb-6">Zacznij już dziś i odkryj, jak łatwo możesz stać się viralem! 🚀</p>
            <Link href="/generator" className="btn-primary text-xl px-10 py-4">
              Start Generowania
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    icon: <FaLightbulb className="text-yellow-400" />,
    title: "Pomysły Bazujące na Trendach",
    description: "Otrzymuj pomysły na content bazujące na aktualnych trendach i viralowych tematach."
  },
  {
    icon: <FaRocket className="text-accent" />,
    title: "Personalizowane Sugestie",
    description: "AI dostosowuje pomysły do Twojego stylu i preferencji Twoich widzów."
  },
  {
    icon: <FaMagic className="text-primary" />,
    title: "Gotowe Szablony",
    description: "Wykorzystuj sprawdzone formaty i szablony do tworzenia angażujących treści."
  },
  {
    icon: <FaStar className="text-yellow-400" />,
    title: "Analiza Hashtagów",
    description: "Dobieraj odpowiednie hashtagi, aby zwiększyć zasięg swoich treści."
  },
  {
    icon: <FaSmile className="text-secondary" />,
    title: "Biblioteka Pomysłów",
    description: "Zapisuj i organizuj swoje ulubione pomysły na content."
  },
  {
    icon: <FaUserFriends className="text-pink-400" />,
    title: "Codzienna Inspiracja",
    description: "Otrzymuj codziennie nowe pomysły dopasowane do Twojej niszy."
  }
] 