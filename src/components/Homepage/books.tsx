
import React from 'react';
import Image from 'next/image';
import booksData from '@/../public/booksData.json';


interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm">
      <figure className="p-4">
        <Image
          src={book.image}
          alt={book.bookName}
          className="h-64 w-full rounded-lg object-cover"
          width={300}
          height={400}
        />
      </figure>

      <div className="card-body p-4">
        <div className="flex items-center justify-between">
          <span className="badge badge-outline">
            {book.category}
          </span>

          <span className="text-sm">
            ⭐ {book.rating}
          </span>
        </div>

        <h2 className="card-title text-lg">
          {book.bookName}
        </h2>

        <p className="text-sm text-base-content/70">
          {book.author}
        </p>

        <div className="flex items-center justify-between text-sm text-base-content/60">
          <span>{book.totalPages} pages</span>
          <span>{book.yearOfPublishing}</span>
        </div>
      </div>
    </div>
  );
};

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

export default Books;
