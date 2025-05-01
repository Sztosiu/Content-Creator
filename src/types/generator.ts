export type Platform = 'tiktok' | 'instagram' | 'youtube' | 'facebook';

export type ContentCategory = 
  | 'lifestyle' 
  | 'gaming' 
  | 'edukacja' 
  | 'humor' 
  | 'sport'
  | 'moda'
  | 'technologia'
  | 'kulinaria'
  | 'podróże'
  | 'muzyka'
  | 'behind_the_scenes'
  | 'uroda'
  | 'biznes'
  | 'sztuka'
  | 'DIY'
  | 'zwierzęta'
  | 'rodzina'
  | 'książki'
  | 'film'
  | 'zdrowie'
  | 'ogród'
  | 'motoryzacja'
  | 'nauka'
  | 'fotografia'
  | 'taniec'
  | 'rozrywka';

export type ContentType = 
  | 'tutorial' 
  | 'challenge' 
  | 'storytime' 
  | 'reakcja' 
  | 'poradnik'
  | 'recenzja'
  | 'trend'
  | 'transformation'
  | 'qa'
  | 'behind_the_scenes'
  | 'unboxing'
  | 'vlog'
  | 'haul'
  | 'ranking'
  | 'experiment'
  | 'compilation'
  | 'interview'
  | 'routine'
  | 'comparison'
  | 'reaction'
  | 'parody'
  | 'showcase'
  | 'timelapses'
  | 'shorts'
  | 'series';

export interface ContentTemplate {
  id: string;
  title: string;
  description: string;
  example: string;
  platforms: Platform[];
  categories: ContentCategory[];
  type: ContentType;
  trending?: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface GeneratorFilters {
  platform: Platform | null;
  category: ContentCategory | null;
  type: ContentType | null;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface GeneratedIdea {
  template: ContentTemplate;
  customization: string;
  hashtags: string[];
  tips: string[];
} 