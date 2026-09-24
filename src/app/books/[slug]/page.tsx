import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import BookDetailsPageCard, { getBookBySlug } from '@/components/BookDetailsPageCard';
import BookDetailsLoading from './loading';

interface BookDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BookDetailsPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const book = getBookBySlug(slug);
    if (!book) {
      return {
        title: `Book Not Found | ${process.env.NEXT_PUBLIC_APP_NAME || 'Book Vibe'}`,
      };
    }
    return {
      title: `${book.bookName} | ${process.env.NEXT_PUBLIC_APP_NAME || 'Book Vibe'}`,
      description: book.review.slice(0, 160),
    };
  } catch {
    return {
      title: `Book Details | ${process.env.NEXT_PUBLIC_APP_NAME || 'Book Vibe'}`,
    };
  }
}

const BookDetailsContent = async ({ params }: BookDetailsPageProps) => {
  let resolvedSlug: string | null = null;
  let isError = false;

  try {
    const { slug } = await params;
    resolvedSlug = slug;
  } catch (error) {
    console.error('Error resolving book details page params in BookDetailsContent:', error);
    isError = true;
  }

  if (isError || !resolvedSlug) {
    return (
      <div className="p-12 text-center bg-[#13131305] rounded-3xl border border-dashed border-[#13131326] my-6">
        <h2 className="text-2xl font-bold text-error">Failed to load book details</h2>
        <p className="text-base text-[#131313B3] mt-2">
          An error occurred while loading this book. Please try refreshing the page.
        </p>
      </div>
    );
  }

  return <BookDetailsPageCard slug={resolvedSlug} />;
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