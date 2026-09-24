import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import ReadBooksList from '@/components/listedBooks/readBooksList';
import ListedBooksLoading from './loading';

export const metadata: Metadata = {
  title: `Listed Books | ${process.env.NEXT_PUBLIC_APP_NAME || 'Book Vibe'}`,
  description: 'View and manage your read books and wishlist collections with custom sorting.',
};

const ListedBooksPage = () => {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<ListedBooksLoading />}>
        <ReadBooksList />
      </Suspense>
    </div>
  );
};

export default ListedBooksPage;
