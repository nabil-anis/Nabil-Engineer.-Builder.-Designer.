export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  images?: string[];
  video?: string;
}

export interface Website {
  id: string;
  name: string;
  description: string;
  url: string;
  image?: string;
  techStack?: string[];
}

export enum Page {
  Home = 'home',
  About = 'about',
  Gallery = 'gallery',
  Websites = 'websites'
}