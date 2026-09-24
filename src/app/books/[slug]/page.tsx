import React from 'react';
import BookDetailsPageCard from '@/components/BookDetailsPageCard';

interface BookDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-10 px-4">
      <BookDetailsPageCard slug={slug} />
    </div>
  );
};

export default BookDetailsPage;