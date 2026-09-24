import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-md w-full bg-[#13131305] border border-[#13131315] rounded-3xl p-8 sm:p-12 shadow-sm">
        <span className="badge badge-lg bg-[#23BE0A1A] text-[#23BE0A] font-bold text-sm px-4 py-3 border-none mb-4">
          404 ERROR
        </span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#131313] mt-2 mb-4">
          Page Not Found
        </h1>
        <p className="text-[#131313B3] text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold px-6 py-2.5 rounded-xl border-none shadow-none text-base"
          >
            Back to Home
          </Link>
          <Link
            href="/listed-books"
            className="btn bg-white hover:bg-gray-100 text-[#131313] font-semibold px-6 py-2.5 rounded-xl border border-[#13131326] shadow-none text-base"
          >
            Listed Books
          </Link>
        </div>
      </div>
    </div>
  );
}
