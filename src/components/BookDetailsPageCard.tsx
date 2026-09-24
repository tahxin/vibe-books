'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Book from '@/types/booktypes';
import booksData from '../../public/booksData.json';
import ReadButton from './bookDetails/readButton';
import WishlistButton from './bookDetails/wishlistButton';

export interface BookDetailsPageCardProps {
  book?: Book;
  slug?: string;
}

export const getBookBySlug = (slug: string | number): Book | undefined => {
  const books: Book[] = booksData;
  return books.find((b) => b.bookId.toString() === slug?.toString());
};

const BookDetailsPageCard = ({ book: propBook, slug }: BookDetailsPageCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const book = propBook || (slug ? getBookBySlug(slug) : undefined);

  if (!book) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-2xl font-semibold text-error">Book not found</h2>
        <p className="text-base text-[#131313B3] mt-2">
          Unable to find details for the requested book.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Book Cover Image with local loading placeholder */}
        <div className="relative bg-[#13131308] rounded-3xl p-6 sm:p-12 lg:p-16 flex items-center justify-center min-h-[280px] sm:min-h-[400px] lg:min-h-[520px]">
          {!imageLoaded && (
            <div className="w-48 sm:w-64 lg:w-72 h-64 sm:h-96 bg-base-300/40 rounded-xl animate-pulse absolute"></div>
          )}
          <Image
            src={book.image}
            alt={book.bookName}
            width={340}
            height={480}
            className={`rounded-xl shadow-xl lg:shadow-2xl object-contain max-h-[260px] sm:max-h-[380px] lg:max-h-[460px] w-auto transition-all duration-500 hover:scale-[1.02] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            priority
            unoptimized
          />
        </div>

        {/* Right Column: Book Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold font-(family-name:--font-playfair) text-[#131313] leading-tight">
            {book.bookName}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#131313CC] font-medium mt-2 sm:mt-3 mb-3 sm:mb-4">
            By : {book.author}
          </p>

          <div className="border-b border-[#13131326] my-3 sm:my-4"></div>

          <p className="text-sm sm:text-base lg:text-lg text-[#131313CC] font-medium py-0.5 sm:py-1">
            {book.category}
          </p>

          <div className="border-b border-[#13131326] my-3 sm:my-4"></div>

          <p className="text-[#131313B3] text-xs sm:text-sm lg:text-base leading-relaxed my-3 sm:my-4">
            <span className="font-bold text-[#131313]">Review : </span>
            {book.review}
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-3 sm:my-4">
            <span className="font-bold text-xs sm:text-sm lg:text-base text-[#131313] mr-1 sm:mr-2">Tag</span>
            {book.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-[#23BE0A0D] text-[#23BE0A] font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="border-b border-[#13131326] my-3 sm:my-4"></div>

          <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm lg:text-base">
            <div className="flex items-center">
              <span className="w-36 sm:w-48 lg:w-52 shrink-0 text-[#131313B3]">Number of Pages:</span>
              <span className="font-bold text-[#131313]">{book.totalPages}</span>
            </div>
            <div className="flex items-center">
              <span className="w-36 sm:w-48 lg:w-52 shrink-0 text-[#131313B3]">Publisher:</span>
              <span className="font-bold text-[#131313]">{book.publisher}</span>
            </div>
            <div className="flex items-center">
              <span className="w-36 sm:w-48 lg:w-52 shrink-0 text-[#131313B3]">Year of Publishing:</span>
              <span className="font-bold text-[#131313]">{book.yearOfPublishing}</span>
            </div>
            <div className="flex items-center">
              <span className="w-36 sm:w-48 lg:w-52 shrink-0 text-[#131313B3]">Rating:</span>
              <span className="font-bold text-[#131313]">{book.rating}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-7">
            <ReadButton book={book} />
            <WishlistButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPageCard;