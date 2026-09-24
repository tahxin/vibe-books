import React from 'react';
import Image from 'next/image';
import Book from '@/types/booktypes';
import booksData from '../../public/booksData.json';

export interface BookDetailsPageCardProps {
  book?: Book;
  slug?: string;
}

export const getBookBySlug = (slug: string | number): Book | undefined => {
  const books: Book[] = booksData;
  return books.find((b) => b.bookId.toString() === slug?.toString());
};

const BookDetailsPageCard = ({ book: propBook, slug }: BookDetailsPageCardProps) => {
  const book = propBook || (slug ? getBookBySlug(slug) : undefined);

  if (!book) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold text-error">Book not found</h2>
        <p className="text-sm text-base-content/70 mt-2">
          Unable to find details for the requested book.
        </p>
      </div>
    );
  }

  return (
    <div className="card lg:card-side bg-base-100 border border-base-200 shadow-sm overflow-hidden p-6 lg:p-8 gap-8">
      <div className="lg:w-5/12 bg-base-200/50 rounded-2xl flex items-center justify-center p-8">
        <Image
          src={book.image}
          alt={book.bookName}
          width={360}
          height={500}
          className="rounded-xl shadow-md object-cover max-h-[480px] w-auto transition-transform duration-300 hover:scale-[1.02]"
          priority
          unoptimized
        />
      </div>

      <div className="lg:w-7/12 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content">
            {book.bookName}
          </h1>

          <p className="text-base lg:text-lg text-base-content/70 font-medium mt-2">
            By : {book.author}
          </p>

          <div className="divider my-2"></div>

          <p className="text-base font-medium text-base-content/80">
            {book.category}
          </p>

          <div className="divider my-2"></div>

          <p className="text-sm lg:text-base leading-relaxed text-base-content/80">
            <span className="font-bold text-base-content">Review : </span>
            {book.review}
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="font-bold text-base-content mr-2">Tag</span>
            {book.tags?.map((tag, index) => (
              <span
                key={index}
                className="badge bg-green-50 text-green-600 border border-green-200 font-semibold px-3 py-3"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="divider my-3"></div>

          <div className="space-y-2 text-sm lg:text-base">
            <div className="flex items-center gap-8">
              <span className="w-40 text-base-content/70">Number of Pages:</span>
              <span className="font-bold text-base-content">{book.totalPages}</span>
            </div>
            <div className="flex items-center gap-8">
              <span className="w-40 text-base-content/70">Publisher:</span>
              <span className="font-bold text-base-content">{book.publisher}</span>
            </div>
            <div className="flex items-center gap-8">
              <span className="w-40 text-base-content/70">Year of Publishing:</span>
              <span className="font-bold text-base-content">{book.yearOfPublishing}</span>
            </div>
            <div className="flex items-center gap-8">
              <span className="w-40 text-base-content/70">Rating:</span>
              <span className="font-bold text-base-content flex items-center gap-1">
                {book.rating} <span className="text-amber-500">★</span>
              </span>
            </div>
          </div>
        </div>

        <div className="card-actions flex gap-4 mt-8">
          <button className="btn btn-outline border-base-300 font-semibold px-6 hover:bg-neutral hover:text-neutral-content">
            Read
          </button>
          <button className="btn btn-info text-white font-semibold px-6">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPageCard;