'use client';

import { useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { register, authState } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(email, password, name);
    if (authState.isAuthenticated) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="space-y-6">
      {authState.error && (
        <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
          {authState.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Imię
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field w-full mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field w-full mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field w-full mt-1"
            required
          />
        </div>

        <button
          type="submit"
          disabled={authState.isLoading}
          className="btn-primary w-full"
        >
          {authState.isLoading ? 'Rejestrowanie...' : 'Zarejestruj się'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-400">
        Masz już konto?{' '}
        <Link href="/auth/signin" className="text-primary hover:text-primary/80 font-medium">
          Zaloguj się
        </Link>
      </p>
    </div>
  );
} 