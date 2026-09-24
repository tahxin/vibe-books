'use client';
import React from 'react';
import Link from 'next/link';
import { useBooks } from '@/context/BooksContext';
import { Book } from '@/types/booktypes';

const PagesToReadPage = () => {
  const { readBooks } = useBooks();

  const totalPages = readBooks.reduce((acc, book) => acc + (book.totalPages || 0), 0);
  const maxPages = Math.max(...readBooks.map((b) => b.totalPages), 100);

  const colors = [
    '#22c55e', // green
    '#3b82f6', // blue
    '#f59e0b', // amber
    '#ec4899', // pink
    '#8b5cf6', // purple
    '#06b6d4', // cyan
    '#10b981', // emerald
    '#f97316', // orange
  ];

  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl">
      <div className="bg-base-200/60 rounded-2xl py-8 mb-8 text-center shadow-xs">
        <h1 className="text-2xl sm:text-3xl font-bold text-base-content">
          Pages To Read
        </h1>
        <p className="text-sm text-base-content/70 mt-2">
          Visual overview of your reading achievements and page counts
        </p>
      </div>

      {readBooks.length === 0 ? (
        <div className="text-center py-16 px-4 bg-base-200/30 rounded-2xl border border-dashed border-base-300">
          <div className="text-5xl mb-4">📊</div>
          <h2 className="text-xl font-bold text-base-content">
            No books read yet
          </h2>
          <p className="text-sm text-base-content/70 mt-2 max-w-md mx-auto">
            Mark books as Read from their details page to visualize your reading progress here!
          </p>
          <Link href="/" className="btn btn-primary btn-sm mt-6">
            Explore Books
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="stat bg-base-100 border border-base-200 rounded-xl shadow-xs">
              <div className="stat-title text-base-content/70">Books Read</div>
              <div className="stat-value text-primary">{readBooks.length}</div>
              <div className="stat-desc">Total completed books</div>
            </div>

            <div className="stat bg-base-100 border border-base-200 rounded-xl shadow-xs">
              <div className="stat-title text-base-content/70">Total Pages</div>
              <div className="stat-value text-success">{totalPages}</div>
              <div className="stat-desc">Pages across all read books</div>
            </div>

            <div className="stat bg-base-100 border border-base-200 rounded-xl shadow-xs">
              <div className="stat-title text-base-content/70">Average Pages</div>
              <div className="stat-value text-info">
                {Math.round(totalPages / readBooks.length)}
              </div>
              <div className="stat-desc">Pages per book</div>
            </div>
          </div>

          {/* Custom SVG Bar Chart */}
          <div className="bg-base-100 border border-base-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-base-content mb-6">
              Page Count Comparison
            </h2>

            <div className="overflow-x-auto pb-4">
              <div className="min-w-[600px] h-72 flex items-end gap-6 sm:gap-10 border-b border-l border-base-300 px-4 pb-2 pt-6">
                {readBooks.map((book: Book, index) => {
                  const heightPercent = Math.max(
                    15,
                    Math.round((book.totalPages / maxPages) * 100)
                  );
                  const color = colors[index % colors.length];

                  return (
                    <div
                      key={book.bookId}
                      className="flex-1 flex flex-col items-center h-full justify-end group"
                    >
                      <span className="text-xs font-semibold text-base-content/80 mb-1">
                        {book.totalPages}
                      </span>
                      <div
                        style={{
                          height: `${heightPercent}%`,
                          backgroundColor: color,
                        }}
                        className="w-full max-w-[48px] rounded-t-lg transition-all duration-300 group-hover:opacity-85 shadow-xs"
                        title={`${book.bookName}: ${book.totalPages} pages`}
                      />
                      <span
                        className="text-[11px] font-medium text-base-content/70 mt-2 text-center truncate max-w-[70px]"
                        title={book.bookName}
                      >
                        {book.bookName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PagesToReadPage;
