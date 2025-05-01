import RegisterForm from '@/components/auth/RegisterForm';
import { FaRocket } from 'react-icons/fa';

export default function SignUpPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-center">
            <span className="gradient-text">Załóż konto</span>
          </h1>
          <p className="mt-2 text-center text-gray-400">
            Dołącz do społeczności kreatywnych twórców! <FaRocket className="inline ml-1" />
          </p>
        </div>

        <div className="card">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
} 