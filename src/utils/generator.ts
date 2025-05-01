import { 
  ContentTemplate, 
  GeneratorFilters, 
  GeneratedIdea,
  Platform,
  ContentCategory,
  ContentType 
} from '@/types/generator';
import { contentTemplates, hashtagsByCategory, tipsByType } from '@/data/contentTemplates';

// Pomocnicza funkcja do losowego wyboru elementu z tablicy
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Pomocnicza funkcja do losowego wyboru kilku elementów z tablicy
function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Funkcja do filtrowania szablonów na podstawie kryteriów
function filterTemplates(filters: GeneratorFilters): ContentTemplate[] {
  return contentTemplates.filter(template => {
    if (filters.platform && !template.platforms.includes(filters.platform)) {
      return false;
    }
    if (filters.category && !template.categories.includes(filters.category)) {
      return false;
    }
    if (filters.type && template.type !== filters.type) {
      return false;
    }
    if (filters.difficulty && template.difficulty !== filters.difficulty) {
      return false;
    }
    return true;
  });
}

// Główna funkcja generująca pomysł
export function generateContentIdea(filters: GeneratorFilters): GeneratedIdea | null {
  // Filtruj szablony według kryteriów
  const filteredTemplates = filterTemplates(filters);
  
  if (filteredTemplates.length === 0) {
    return null;
  }

  // Wybierz losowy szablon
  const template = getRandomElement(filteredTemplates);

  // Wybierz odpowiednie hashtagi
  const relevantHashtags: string[] = [];
  template.categories.forEach(category => {
    if (hashtagsByCategory[category]) {
      relevantHashtags.push(...getRandomElements(hashtagsByCategory[category], 2));
    }
  });

  // Dodaj hashtagi platformy
  if (filters.platform) {
    relevantHashtags.push(`#${filters.platform}`);
  }

  // Wybierz wskazówki
  const tips = tipsByType[template.type] || [];
  const selectedTips = getRandomElements(tips, 2);

  // Wygeneruj customizację
  const customizations = [
    'Dodaj własną osobowość do tego formatu',
    'Wykorzystaj swoje unikalne doświadczenia',
    'Pokaż proces od kulis',
    'Podziel się szczerą opinią',
    'Zrób to w swoim stylu',
    'Dodaj element zaskoczenia',
    'Pokaż przed i po',
    'Opowiedz historię',
    'Zadaj pytanie widzom',
    'Zrób serię z tego tematu'
  ];

  return {
    template,
    customization: getRandomElement(customizations),
    hashtags: [...new Set(relevantHashtags)], // usuń duplikaty
    tips: selectedTips
  };
}

// Funkcja do pobierania trendujących szablonów
export function getTrendingTemplates(): ContentTemplate[] {
  return contentTemplates.filter(template => template.trending);
}

// Funkcja do pobierania szablonów według trudności
export function getTemplatesByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): ContentTemplate[] {
  return contentTemplates.filter(template => template.difficulty === difficulty);
}

// Funkcja do pobierania szablonów według platformy
export function getTemplatesByPlatform(platform: Platform): ContentTemplate[] {
  return contentTemplates.filter(template => template.platforms.includes(platform));
}

// Funkcja do pobierania szablonów według kategorii
export function getTemplatesByCategory(category: ContentCategory): ContentTemplate[] {
  return contentTemplates.filter(template => template.categories.includes(category));
}

// Funkcja do pobierania szablonów według typu
export function getTemplatesByType(type: ContentType): ContentTemplate[] {
  return contentTemplates.filter(template => template.type === type);
} 