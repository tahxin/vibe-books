import React from 'react';
import booksData from '@/../public/booksData.json';
import Book from '@/types/booktypes';
import BookCard from '@/components/BookCard';

const Books = () => {
  const books: Book[] = booksData;

  return (
    <section className="container mx-auto py-20">
      <h2 className="mb-8 text-2xl font-semibold">
        Featured Books
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export { BookCard };
export default Books;
