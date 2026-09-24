import React, { Suspense } from 'react';
import BookDetailsPageCard from '@/components/BookDetailsPageCard';
import BookDetailsLoading from './loading';

interface BookDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const BookDetailsContent = async ({ params }: BookDetailsPageProps) => {
  const { slug } = await params;
  return <BookDetailsPageCard slug={slug} />;
};

const BookDetailsPage = ({ params }: BookDetailsPageProps) => {
  return (
    <div className="container mx-auto py-10 px-4">
      <Suspense fallback={<BookDetailsLoading />}>
        <BookDetailsContent params={params} />
      </Suspense>
    </div>
  );
};

export default BookDetailsPage;