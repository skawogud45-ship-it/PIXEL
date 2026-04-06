export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  equipment: string;
  imageUrl: string;
  category: 'concert' | 'corporate' | 'broadcast' | 'installation';
}

export interface Inquiry {
  name: string;
  contact: string;
  date: string;
  content: string;
}
