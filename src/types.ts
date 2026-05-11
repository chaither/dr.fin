export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  image: string;
  genre: string;
  description: string;
  stripeLink?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  image: string;
  books: string[];
}
