'use client';
import React from 'react';
import { useBooks } from '@/context/BooksContext';
import { Book } from '@/types/booktypes';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: Book }) => {
  const { addToRead, readBooks, setReadBooks } = useBooks();

  const handleReadBook = () => {
    if (addToRead) {
      addToRead(book);
    } else {
      if (!readBooks.some((b: Book) => b.bookId === book.bookId)) {
        setReadBooks((prevReadBooks: Book[]) => [...prevReadBooks, book]);
        toast.success(`"${book.bookName}" added to Read List!`);
      } else {
        toast.warn(`"${book.bookName}" is already in your Read List!`);
      }
    }
  };

  return (
    <button
      onClick={handleReadBook}
      className="btn btn-outline border-base-300 font-semibold px-6 hover:bg-neutral hover:text-neutral-content"
    >
      Read
    </button>
  );
};

export default ReadButton;