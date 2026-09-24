'use client';
import React, { useState } from 'react';
import { useBooks } from '@/context/BooksContext';
import { Book } from '@/types/booktypes';

interface WishlistButtonProps {
  book: Book;
}

const WishlistButton = ({ book }: WishlistButtonProps) => {
  const { addToWishlist } = useBooks();
  const [isLoading, setIsLoading] = useState(false);

  const handleWishlist = async () => {
    setIsLoading(true);
    try {
      await addToWishlist(book);
    } catch (error) {
      console.error('Error in handleWishlist async action:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleWishlist}
      disabled={isLoading}
      className="btn bg-[#59C6D2] hover:bg-[#4eb3be] text-white font-semibold text-base px-8 py-3 rounded-lg border-none shadow-none h-auto min-h-0 transition-all cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto disabled:bg-[#59C6D2]/70 disabled:text-white/80"
    >
      {isLoading && <span className="loading loading-spinner loading-xs text-white"></span>}
      Wishlist
    </button>
  );
};

export default WishlistButton;
