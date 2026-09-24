'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-md w-full bg-[#13131305] border border-[#13131315] rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-2xl font-bold">
          !
        </div>
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#131313] mb-3">
          Something went wrong
        </h2>
        <p className="text-[#131313B3] text-sm sm:text-base leading-relaxed mb-8">
          An unexpected error occurred while loading this page. You can try refreshing or navigate back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold px-6 py-2.5 rounded-xl border-none shadow-none text-base cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="btn bg-white hover:bg-gray-100 text-[#131313] font-semibold px-6 py-2.5 rounded-xl border border-[#13131326] shadow-none text-base"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
