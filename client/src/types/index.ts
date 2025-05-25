export interface Principle {
  number: number;
  title: string;
  slug: string;
  summary: string;
  image: string;
  content: string;
  metadata?: {
    keywords?: string[];
    description?: string;
    ogImage?: string;
    twitterDescription?: string;
  };
}
