'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useBooks } from '@/context/BooksContext';
import { Book } from '@/types/booktypes';

type SortOption = 'default' | 'rating' | 'totalPages' | 'yearOfPublishing';

const ReadBooksList = () => {
  const { readBooks, wishlist } = useBooks();
  const [activeTab, setActiveTab] = useState<'read' | 'wishlist'>('read');
  const [sortBy, setSortBy] = useState<SortOption>('default');

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
    if (books.length === 0) {
      return (
        <div className="text-center py-16 px-4 bg-base-200/30 rounded-2xl border border-dashed border-base-300">
          <div className="text-5xl mb-4">📚</div>
          <h2 className="text-xl font-bold text-base-content">{emptyMessage}</h2>
          <p className="text-sm text-base-content/70 mt-2 max-w-md mx-auto">
            Discover our collection of books and add them to your reading lists!
          </p>
          <Link href="/" className="btn btn-primary btn-sm mt-6">
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
            className="card lg:card-side bg-base-100 border border-base-200 shadow-xs hover:shadow-md transition-shadow p-6 gap-6 items-start"
          >
            <div className="w-full lg:w-48 bg-base-200/50 rounded-xl flex items-center justify-center p-4 shrink-0">
              <Image
                src={book.image}
                alt={book.bookName}
                width={150}
                height={200}
                className="rounded-lg shadow-sm object-cover max-h-52 w-auto"
                unoptimized
              />
            </div>

            <div className="flex-1 w-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-base-content">
                  {book.bookName}
                </h2>
                <p className="text-sm text-base-content/70 font-medium mt-1">
                  By : {book.author}
                </p>

                <div className="flex flex-wrap items-center gap-3 my-3">
                  <span className="font-bold text-sm text-base-content">Tag</span>
                  {book.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="badge bg-green-50 text-green-600 border border-green-200 font-medium text-xs px-2.5 py-2"
                    >
                      #{tag}
                    </span>
                  ))}
                  <div className="flex items-center gap-1 text-sm text-base-content/70 ml-2">
                    <svg
                      className="w-4 h-4 text-base-content/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Year of Publishing: {book.yearOfPublishing}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/70 pb-4 border-b border-base-200">
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Publisher: {book.publisher}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    Page: {book.totalPages}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge badge-info/10 text-info border-none font-medium px-3 py-2">
                    Category: {book.category}
                  </span>
                  <span className="badge badge-warning/15 text-warning-content border-none font-medium px-3 py-2">
                    Rating: {book.rating} ★
                  </span>
                </div>

                <Link
                  href={`/books/${book.bookId}`}
                  className="btn btn-success text-white btn-sm px-4 rounded-full"
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
      <div className="bg-base-200/60 rounded-2xl py-8 mb-8 text-center shadow-xs">
        <h1 className="text-2xl sm:text-3xl font-bold text-base-content">
          Listed Books
        </h1>
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-center mb-8">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-success text-white font-medium gap-2 px-6"
          >
            <span>
              {sortBy === 'rating'
                ? 'Sorted by Rating'
                : sortBy === 'totalPages'
                ? 'Sorted by Pages'
                : sortBy === 'yearOfPublishing'
                ? 'Sorted by Publishing Year'
                : 'Sort By'}
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52 mt-2 z-10 border border-base-200"
          >
            <li>
              <button
                onClick={() => setSortBy('rating')}
                className={sortBy === 'rating' ? 'active' : ''}
              >
                Rating
              </button>
            </li>
            <li>
              <button
                onClick={() => setSortBy('totalPages')}
                className={sortBy === 'totalPages' ? 'active' : ''}
              >
                Number of pages
              </button>
            </li>
            <li>
              <button
                onClick={() => setSortBy('yearOfPublishing')}
                className={sortBy === 'yearOfPublishing' ? 'active' : ''}
              >
                Publisher year
              </button>
            </li>
            {sortBy !== 'default' && (
              <li>
                <button
                  onClick={() => setSortBy('default')}
                  className="text-error"
                >
                  Reset Sort
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* DaisyUI Radio Tabs Lift + Tab Content */}
      <div role="tablist" className="tabs tabs-lift">
        {/* Read Books Tab */}
        <input
          type="radio"
          name="listed_books_tabs"
          role="tab"
          className="tab text-base font-semibold"
          aria-label={`Read Books (${readBooks.length})`}
          checked={activeTab === 'read'}
          onChange={() => setActiveTab('read')}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {renderBookCards(sortedReadBooks, 'No books in Read List yet')}
        </div>

        {/* Wishlist Books Tab */}
        <input
          type="radio"
          name="listed_books_tabs"
          role="tab"
          className="tab text-base font-semibold"
          aria-label={`Wishlist Books (${wishlist.length})`}
          checked={activeTab === 'wishlist'}
          onChange={() => setActiveTab('wishlist')}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {renderBookCards(sortedWishlistBooks, 'No books in Wishlist yet')}
        </div>
      </div>
    </div>
  );
};

export default ReadBooksList;
