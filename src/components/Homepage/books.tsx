import React from 'react';
import booksData from '@/../public/booksData.json';
import Book from '@/types/booktypes';
import BookCard from '@/components/BookCard';

const Books = () => {
  const books: Book[] = booksData;

  return (
    <section id="books" className="container mx-auto px-4 py-10 sm:py-16">
      <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[40px] font-bold text-center text-[#131313] mb-10">
        Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export { BookCard };
export default Books;
