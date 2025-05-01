'use client'

import Link from 'next/link'
import { useAuth } from '@/providers/AuthProvider'

export default function Navbar() {
  const { authState, logout } = useAuth()

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold gradient-text">Content Creator</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {authState.isAuthenticated ? (
              <>
                <Link href="/generator" className="nav-link">
                  Generator
                </Link>
                <Link href="/dashboard" className="nav-link">
                  Panel
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-300">
                    Kredyty: {authState.user?.credits}
                  </span>
                  <button
                    onClick={logout}
                    className="btn-secondary text-sm"
                  >
                    Wyloguj
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/signin" className="nav-link">
                  Zaloguj się
                </Link>
                <Link href="/auth/signup" className="btn-primary">
                  Dołącz za darmo
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 