import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/providers/AuthProvider'
import Navbar from '@/components/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Content Creator - Twój Asystent Kreatywności',
  description: 'Generuj pomysły na content dla social media z pomocą AI. Odkrywaj trendy, twórz angażujące treści i rozwijaj swój profil!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="bg-background text-text min-h-screen relative overflow-x-hidden">
        {/* Ruchome gradientowe tło */}
        <div className="fixed inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-primary via-secondary to-accent opacity-60 blur-2xl" />
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 