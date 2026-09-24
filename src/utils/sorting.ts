import Book from '@/types/booktypes';

export type SortCriteria = 'default' | 'rating' | 'totalPages' | 'yearOfPublishing';

/**
 * Pure function to sort a list of books based on selected criteria
 * @param books Array of Book objects
 * @param criteria Criteria to sort by: 'rating' | 'totalPages' | 'yearOfPublishing' | 'default'
 * @returns Sorted new array of Book objects
 */
export function sortBooks(books: Book[], criteria: SortCriteria): Book[] {
  const cloned = [...books];

  switch (criteria) {
    case 'rating':
      return cloned.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'totalPages':
      return cloned.sort((a, b) => (b.totalPages || 0) - (a.totalPages || 0));
    case 'yearOfPublishing':
      return cloned.sort((a, b) => (b.yearOfPublishing || 0) - (a.yearOfPublishing || 0));
    case 'default':
    default:
      return cloned;
  }
}
