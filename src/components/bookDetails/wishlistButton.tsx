'use client';
import React from 'react';
import { useBooks } from '@/context/BooksContext';
import { Book } from '@/types/booktypes';

interface WishlistButtonProps {
  book: Book;
}

const WishlistButton = ({ book }: WishlistButtonProps) => {
  const { addToWishlist } = useBooks();

  return (
    <button
      onClick={() => addToWishlist(book)}
      className="btn bg-[#50B1C9] hover:bg-[#439fb5] text-white font-semibold text-base px-8 py-3 rounded-lg border-none shadow-none h-auto min-h-0 transition-colors cursor-pointer"
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;
