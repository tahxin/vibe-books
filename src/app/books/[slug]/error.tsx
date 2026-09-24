'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function BookDetailsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('BookDetails route error:', error);
  }, [error]);

  return (
    <div className="container mx-auto py-16 px-4 max-w-xl text-center">
      <div className="bg-[#13131305] rounded-3xl p-10 border border-[#13131315]">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-[#131313]">
          Something went wrong
        </h2>
        <p className="text-base text-[#131313B3] mt-2 mb-6">
          Failed to load book details. Please try again or return to the homepage.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold px-6 py-2.5 rounded-full border-none shadow-none cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="btn bg-white hover:bg-gray-50 text-[#131313] font-semibold px-6 py-2.5 rounded-full border border-[#1313134D] shadow-none"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
