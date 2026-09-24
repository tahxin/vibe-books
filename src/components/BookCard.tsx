import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Book from '@/types/booktypes';

export interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <figure className="p-4">
          <Image
            src={book.image}
            alt={book.bookName}
            className="h-64 w-full rounded-lg object-cover"
            width={300}
            height={400}
            unoptimized
          />
        </figure>

        <div className="card-body p-4">
          <div className="flex items-center justify-between">
            <span className="badge badge-outline">
              {book.category}
            </span>

            <span className="text-sm font-medium">
              ⭐ {book.rating}
            </span>
          </div>

          <h2 className="card-title text-lg mt-2">
            {book.bookName}
          </h2>

          <p className="text-sm text-base-content/70">
            By: {book.author}
          </p>

          <div className="flex items-center justify-between text-sm text-base-content/60 my-2">
            <span>{book.totalPages} pages</span>
            <span>{book.yearOfPublishing}</span>
          </div>

          <div className="card-actions mt-4">
            <Link
              href={`/books/${book.bookId}`}
              className="btn btn-primary btn-sm w-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
export { BookCard };
