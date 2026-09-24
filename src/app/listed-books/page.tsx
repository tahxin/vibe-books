import React, { Suspense } from 'react';
import ReadBooksList from '@/components/listedBooks/readBooksList';
import ListedBooksLoading from './loading';

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
