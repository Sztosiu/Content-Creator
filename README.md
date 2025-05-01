# Content Creator

Aplikacja webowa dla początkujących twórców treści, pomagająca generować pomysły na content w oparciu o aktualne trendy i preferencje użytkownika.

## Funkcje

- Generator pomysłów na content dla różnych platform (YouTube, TikTok, Instagram, Facebook)
- System kredytów (2 darmowe generowania, następnie płatne)
- Panel użytkownika z zapisanymi pomysłami
- Integracja z API social media do analizy trendów
- System powiadomień (codzienny pomysł dnia)
- Personalizowane sugestie bazujące na preferencjach użytkownika

## Technologie

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma (PostgreSQL)
- NextAuth.js
- React Icons
- Heroicons

## Wymagania

- Node.js 18+
- PostgreSQL
- Konta deweloperskie dla API (TikTok, YouTube)

## Instalacja

1. Sklonuj repozytorium:
```bash
git clone [url-repozytorium]
cd content-creator
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Skopiuj plik `.env.example` do `.env` i uzupełnij zmienne środowiskowe:
```bash
cp .env.example .env
```

4. Zainicjalizuj bazę danych:
```bash
npx prisma db push
```

5. Uruchom aplikację w trybie deweloperskim:
```bash
npm run dev
```

## Zmienne środowiskowe

```env
DATABASE_URL="postgresql://user:password@localhost:5432/content_creator"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth providers
GOOGLE_ID=""
GOOGLE_SECRET=""

# API Keys
TIKTOK_API_KEY=""
YOUTUBE_API_KEY=""
```

## Struktura projektu

```
content-creator/
├── src/
│   ├── app/              # Komponenty stron
│   ├── components/       # Komponenty wielokrotnego użytku
│   ├── lib/             # Funkcje pomocnicze
│   └── types/           # Definicje TypeScript
├── prisma/              # Schemat bazy danych
├── public/             # Statyczne pliki
└── ...
```

## Licencja

MIT 