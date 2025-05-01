'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getProviders, signIn } from 'next-auth/react'

export default function SignInPage() {
  const [providers, setProviders] = useState<any>(null)

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setupProviders()
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-center">
            <span className="gradient-text">Witaj z powrotem!</span>
          </h1>
          <p className="mt-2 text-center text-gray-400">
            Zaloguj się, aby kontynuować
          </p>
        </div>

        <div className="card">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Hasło
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input-field w-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-600 bg-surface text-primary focus:ring-primary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Zapamiętaj mnie
                </label>
              </div>

              <div className="text-sm">
                <Link href="/auth/forgot-password" className="text-primary hover:text-primary/80">
                  Zapomniałeś hasła?
                </Link>
              </div>
            </div>

            <div>
              <button type="submit" className="btn-primary w-full">
                Zaloguj się
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-gray-400">
                  Lub kontynuuj przez
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {providers &&
                Object.values(providers).map((provider: any) => (
                  <button
                    key={provider.name}
                    className="btn-secondary"
                    onClick={() => signIn(provider.id)}
                  >
                    <span className="sr-only">Zaloguj się przez {provider.name}</span>
                    {provider.name}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400">
          Nie masz jeszcze konta?{' '}
          <Link href="/auth/signup" className="text-primary hover:text-primary/80 font-medium">
            Zarejestruj się
          </Link>
        </p>
      </div>
    </main>
  )
} 