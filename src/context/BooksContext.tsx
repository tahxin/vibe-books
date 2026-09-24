'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Book } from '@/types/booktypes';
import { toast } from 'react-toastify';
import { getStoredItem, setStoredItem } from '@/utils/storage';

export interface BooksContextType {
  readBooks: Book[];
  setReadBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  wishlist: Book[];
  setWishlist: React.Dispatch<React.SetStateAction<Book[]>>;
  addToRead: (book: Book) => Promise<boolean>;
  addToWishlist: (book: Book) => Promise<boolean>;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Book[]>(() =>
    getStoredItem<Book[]>('readBooks', [])
  );

  const [wishlist, setWishlist] = useState<Book[]>(() =>
    getStoredItem<Book[]>('wishlist', [])
  );

  // Sync readBooks to localStorage
  useEffect(() => {
    setStoredItem('readBooks', readBooks);
  }, [readBooks]);

  // Sync wishlist to localStorage
  useEffect(() => {
    setStoredItem('wishlist', wishlist);
  }, [wishlist]);

  const addToRead = async (book: Book): Promise<boolean> => {
    try {
      // Simulate minor async processing to ensure smooth UI and safety
      await new Promise((resolve) => setTimeout(resolve, 200));

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
    } catch (error) {
      console.error('Error in addToRead async operation:', error);
      toast.error('Failed to add book to Read list. Please try again.');
      return false;
    }
  };

  const addToWishlist = async (book: Book): Promise<boolean> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));

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
    } catch (error) {
      console.error('Error in addToWishlist async operation:', error);
      toast.error('Failed to add book to Wishlist. Please try again.');
      return false;
    }
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