'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Book } from '@/types/booktypes';
import { toast } from 'react-toastify';

export interface BooksContextType {
  readBooks: Book[];
  setReadBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  wishlist: Book[];
  setWishlist: React.Dispatch<React.SetStateAction<Book[]>>;
  addToRead: (book: Book) => boolean;
  addToWishlist: (book: Book) => boolean;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Book[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('readBooks');
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [wishlist, setWishlist] = useState<Book[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('wishlist');
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  // Sync readBooks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('readBooks', JSON.stringify(readBooks));
    } catch {
      // Ignore localStorage errors
    }
  }, [readBooks]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch {
      // Ignore localStorage errors
    }
  }, [wishlist]);

  const addToRead = (book: Book): boolean => {
    const alreadyRead = readBooks.some((b) => b.bookId === book.bookId);
    if (alreadyRead) {
      toast.warn(`"${book.bookName}" is already in your Read List!`);
      return false;
    }

    setReadBooks((prev) => [...prev, book]);
    // If the book was in the wishlist, remove it when marked as read
    setWishlist((prev) => prev.filter((b) => b.bookId !== book.bookId));
    toast.success(`"${book.bookName}" added to Read List!`);
    return true;
  };

  const addToWishlist = (book: Book): boolean => {
    const alreadyRead = readBooks.some((b) => b.bookId === book.bookId);
    if (alreadyRead) {
      toast.error(`You have already read "${book.bookName}"! Cannot add to Wishlist.`);
      return false;
    }

    const alreadyInWishlist = wishlist.some((b) => b.bookId === book.bookId);
    if (alreadyInWishlist) {
      toast.warn(`"${book.bookName}" is already in your Wishlist!`);
      return false;
    }

    setWishlist((prev) => [...prev, book]);
    toast.success(`"${book.bookName}" added to Wishlist!`);
    return true;
  };

  return (
    <BooksContext.Provider
      value={{
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
        addToRead,
        addToWishlist,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = (): BooksContextType => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error('useBooks must be used within a BooksContextProvider');
  }
  return context;
};

export default BooksContextProvider;