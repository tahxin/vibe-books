'use client';
import React, { useState, useMemo, useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useBooks } from '@/context/BooksContext';
import { Book } from '@/types/booktypes';

type SortOption = 'default' | 'rating' | 'totalPages' | 'yearOfPublishing';

const ReadBooksList = () => {
  const { readBooks, wishlist } = useBooks();
  const [activeTab, setActiveTab] = useState<'read' | 'wishlist'>('read');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [isPending, startTransition] = useTransition();

  const sortList = React.useCallback(
    (list: Book[]) => {
      const copy = [...list];
      if (sortBy === 'rating') {
        return copy.sort((a, b) => b.rating - a.rating);
      }
      if (sortBy === 'totalPages') {
        return copy.sort((a, b) => b.totalPages - a.totalPages);
      }
      if (sortBy === 'yearOfPublishing') {
        return copy.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      }
      return copy;
    },
    [sortBy]
  );

  const sortedReadBooks = useMemo(() => sortList(readBooks), [readBooks, sortList]);
  const sortedWishlistBooks = useMemo(() => sortList(wishlist), [wishlist, sortList]);

  const renderBookCards = (books: Book[], emptyMessage: string) => {
    if (isPending) {
      return (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
          <span className="loading loading-spinner loading-md text-[#23BE0A]"></span>
          <span className="text-sm font-medium text-[#13131380] animate-pulse">
            Updating books list...
          </span>
        </div>
      );
    }

    if (books.length === 0) {
      return (
        <div className="text-center py-16 px-4 bg-[#13131305] rounded-2xl border border-dashed border-[#13131326] my-4">
          <div className="text-5xl mb-4">📚</div>
          <h2 className="text-xl font-bold text-[#131313]">{emptyMessage}</h2>
          <p className="text-base text-[#131313B3] mt-2 max-w-md mx-auto">
            Discover our collection of books and add them to your reading lists!
          </p>
          <Link
            href="/"
            className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold text-base px-6 py-2.5 rounded-full border-none shadow-none mt-6 inline-flex"
          >
            Browse Books
          </Link>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {books.map((book: Book) => (
          <div
            key={book.bookId}
            className="border border-[#13131326] rounded-2xl p-6 bg-white flex flex-col md:flex-row gap-6 items-center shadow-none transition-all duration-300 hover:shadow-xs"
          >
            {/* Left Cover Box */}
            <div className="bg-[#13131308] rounded-2xl w-full md:w-56 h-60 flex items-center justify-center p-6 shrink-0">
              <Image
                src={book.image}
                alt={book.bookName}
                width={140}
                height={190}
                className="rounded-lg object-contain max-h-48 w-auto drop-shadow-md"
                unoptimized
              />
            </div>

            {/* Right Details */}
            <div className="flex-1 w-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold font-(family-name:--font-playfair) text-[#131313]">
                  {book.bookName}
                </h2>
                <p className="text-base font-medium text-[#131313CC] mt-2 mb-3">
                  By : {book.author}
                </p>

                {/* Tags & Year */}
                <div className="flex flex-wrap items-center gap-3 my-2">
                  <span className="font-bold text-base text-[#131313] mr-1">Tag</span>
                  {book.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#23BE0A0D] text-[#23BE0A] font-medium text-sm px-4 py-1.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                  <div className="flex items-center gap-2 text-base text-[#131313B3] ml-2">
                    <svg
                      className="w-5 h-5 text-[#13131399]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Year of Publishing: {book.yearOfPublishing}</span>
                  </div>
                </div>

                {/* Publisher & Page */}
                <div className="flex flex-wrap items-center gap-6 text-[#131313B3] text-base my-3">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#13131399]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Publisher: {book.publisher}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#13131399]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Page {book.totalPages}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-b border-[#13131326] my-2"></div>

              {/* Badges & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#328EFF26] text-[#328EFF] font-medium text-base px-5 py-2.5 rounded-full">
                    Category: {book.category}
                  </span>
                  <span className="bg-[#FFAC3326] text-[#FFAC33] font-medium text-base px-5 py-2.5 rounded-full">
                    Rating: {book.rating}
                  </span>
                </div>

                <Link
                  href={`/books/${book.bookId}`}
                  className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold text-base px-6 py-2.5 rounded-full border-none shadow-none h-auto min-h-0 cursor-pointer"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      {/* Header Banner */}
      <div className="bg-[#13131308] rounded-2xl py-8 mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#131313]">Books</h1>
      </div>

      {/* Sort Select */}
      <div className="flex justify-center mb-8">
        <select
          value={sortBy}
          onChange={(e) => {
            startTransition(() => {
              setSortBy(e.target.value as SortOption);
            });
          }}
          className="select bg-[#23BE0A] text-white font-semibold text-base border-none rounded-xl px-6 py-2.5 h-auto min-h-0 focus:outline-none cursor-pointer"
        >
          <option disabled={true} value="default" className="bg-white text-[#131313]">
            Sort By
          </option>
          <option value="rating" className="bg-white text-[#131313]">
            Rating
          </option>
          <option value="totalPages" className="bg-white text-[#131313]">
            Number of Pages
          </option>
          <option value="yearOfPublishing" className="bg-white text-[#131313]">
            Published Year
          </option>
        </select>
      </div>

      {/* DaisyUI Radio Tabs Lift */}
      <div role="tablist" className="tabs tabs-lift">
        {/* Read Books Radio Tab */}
        <input
          type="radio"
          name="listed_books_tabs"
          role="tab"
          className="tab text-base font-semibold text-[#131313CC]"
          aria-label="Read Books"
          checked={activeTab === 'read'}
          onChange={() => {
            startTransition(() => {
              setActiveTab('read');
            });
          }}
        />
        <div
          role="tabpanel"
          className="tab-content pt-8 border-none bg-transparent"
        >
          {renderBookCards(sortedReadBooks, 'No books in Read List yet')}
        </div>

        {/* Wishlist Books Radio Tab */}
        <input
          type="radio"
          name="listed_books_tabs"
          role="tab"
          className="tab text-base font-semibold text-[#131313CC]"
          aria-label="Wishlist Books"
          checked={activeTab === 'wishlist'}
          onChange={() => {
            startTransition(() => {
              setActiveTab('wishlist');
            });
          }}
        />
        <div
          role="tabpanel"
          className="tab-content pt-8 border-none bg-transparent"
        >
          {renderBookCards(sortedWishlistBooks, 'No books in Wishlist yet')}
        </div>
      </div>
    </div>
  );
};

export default ReadBooksList;
