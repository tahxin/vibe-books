'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Book from '@/types/booktypes';

export interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="border border-[#13131326] rounded-3xl p-6 bg-white hover:border-[#23BE0A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Book Cover Container */}
        <div className="relative bg-[#F3F3F3] rounded-2xl py-8 px-4 flex items-center justify-center min-h-[230px] overflow-hidden">
          {!imageLoaded && (
            <div className="w-28 h-40 bg-base-300/40 rounded-lg animate-pulse absolute"></div>
          )}
          <Image
            src={book.image}
            alt={book.bookName}
            width={160}
            height={220}
            className={`h-[170px] w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            unoptimized
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5 mb-3">
          {book.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-[#23BE0A0D] text-[#23BE0A] font-medium text-sm px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-playfair font-bold text-2xl text-[#131313] line-clamp-1 group-hover:text-[#23BE0A] transition-colors">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="font-medium text-base text-[#131313CC] mt-2 mb-4">
          By : {book.author}
        </p>
      </div>

      <div>
        {/* Dashed divider */}
        <div className="border-t border-dashed border-[#13131326] my-3"></div>

        {/* Bottom row: Category & Rating */}
        <div className="flex items-center justify-between text-base font-medium text-[#131313CC]">
          <span>{book.category}</span>
          <div className="flex items-center gap-2">
            <span>{book.rating}</span>
            <svg
              className="w-5 h-5 text-amber-400 fill-current"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* View Details Button matching the rest of the website */}
        <div className="mt-4 pt-1">
          <Link
            href={`/books/${book.bookId}`}
            className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold text-base w-full py-2.5 rounded-full border-none shadow-none h-auto min-h-0 text-center transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>View Details</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
export { BookCard };
