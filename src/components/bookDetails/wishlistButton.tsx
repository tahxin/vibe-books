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
      className="btn btn-info text-white font-semibold px-6"
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;
