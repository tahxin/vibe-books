'use client';
import React from 'react';
import { useBooks } from '@/context/BooksContext';
import { Book } from '@/types/booktypes';

const ReadButton = ({ book }: { book: Book }) => {
  const { addToRead } = useBooks();

  return (
    <button
      onClick={() => addToRead(book)}
      className="btn bg-white hover:bg-gray-50 text-[#131313] font-semibold text-base px-8 py-3 rounded-lg border border-[#1313134D] shadow-none h-auto min-h-0 transition-colors cursor-pointer"
    >
      Read
    </button>
  );
};

export default ReadButton;