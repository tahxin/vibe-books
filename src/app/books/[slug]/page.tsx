import React from 'react';

interface BookDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-2xl font-bold">Books Detail Page - ID #{slug}</h1>
    </div>
  );
};

export default BookDetailsPage;