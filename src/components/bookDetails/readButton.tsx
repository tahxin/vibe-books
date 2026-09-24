'use client';
import React, { useState } from 'react';
import { useBooks } from '@/context/BooksContext';
import { Book } from '@/types/booktypes';

const ReadButton = ({ book }: { book: Book }) => {
  const { addToRead } = useBooks();
  const [isLoading, setIsLoading] = useState(false);

  const handleReadBook = () => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        addToRead(book);
      } finally {
        setIsLoading(false);
      }
    }, 250);
  };

  return (
    <button
      onClick={handleReadBook}
      disabled={isLoading}
      className="btn bg-white hover:bg-gray-50 text-[#131313] font-semibold text-base px-8 py-3 rounded-lg border border-[#1313134D] shadow-none h-auto min-h-0 transition-all cursor-pointer flex items-center gap-2 disabled:bg-gray-100 disabled:text-gray-400"
    >
      {isLoading && <span className="loading loading-spinner loading-xs text-[#131313]"></span>}
      Read
    </button>
  );
};

export default ReadButton;