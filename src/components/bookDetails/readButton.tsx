'use client';
import React, { useState } from 'react';
import { useBooks } from '@/context/BooksContext';
import { Book } from '@/types/booktypes';

const ReadButton = ({ book }: { book: Book }) => {
  const { addToRead } = useBooks();
  const [isLoading, setIsLoading] = useState(false);

  const handleReadBook = async () => {
    setIsLoading(true);
    try {
      await addToRead(book);
    } catch (error) {
      console.error('Error in handleReadBook async action:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleReadBook}
      disabled={isLoading}
      className="btn bg-white hover:bg-gray-50 text-[#131313] font-semibold text-base px-8 py-3 rounded-lg border border-[#1313134D] shadow-none h-auto min-h-0 transition-all cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto disabled:bg-gray-100 disabled:text-gray-400"
    >
      {isLoading && <span className="loading loading-spinner loading-xs text-[#131313]"></span>}
      Read
    </button>
  );
};

export default ReadButton;