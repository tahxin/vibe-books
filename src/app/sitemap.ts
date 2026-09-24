import type { MetadataRoute } from 'next';
import booksData from '../../public/booksData.json';
import Book from '@/types/booktypes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const books: Book[] = booksData;

  const bookRoutes = books.map((book) => ({
    url: `${baseUrl}/books/${book.bookId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/listed-books`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pages-to-read`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...bookRoutes];
}
