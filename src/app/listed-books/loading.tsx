import React from 'react';

export default function ListedBooksLoading() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl animate-pulse">
      {/* Banner Skeleton */}
      <div className="bg-[#13131308] rounded-2xl py-8 mb-8 flex items-center justify-center">
        <div className="h-9 bg-base-300/60 rounded-md w-36"></div>
      </div>

      {/* Sort Button Skeleton */}
      <div className="flex justify-center mb-8">
        <div className="h-12 bg-base-300/60 rounded-xl w-36"></div>
      </div>

      {/* Tabs Skeleton */}
      <div className="flex gap-4 border-b border-[#13131326] pb-2 mb-8">
        <div className="h-8 bg-base-300/60 rounded-t-md w-32"></div>
        <div className="h-8 bg-base-200 rounded-t-md w-32"></div>
      </div>

      {/* Book Cards Skeleton List */}
      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border border-[#13131326] rounded-2xl p-6 bg-white flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Left Cover Box Skeleton */}
            <div className="bg-[#13131308] rounded-2xl w-full md:w-56 h-60 flex items-center justify-center p-6 shrink-0">
              <div className="w-28 h-40 bg-base-300/60 rounded-lg"></div>
            </div>

            {/* Right Details Skeleton */}
            <div className="flex-1 w-full flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="h-7 bg-base-300/60 rounded w-1/2"></div>
                <div className="h-5 bg-base-200 rounded w-1/4"></div>

                <div className="flex gap-2 pt-1">
                  <div className="h-6 bg-base-200 rounded-full w-20"></div>
                  <div className="h-6 bg-base-200 rounded-full w-20"></div>
                  <div className="h-6 bg-base-200 rounded w-36"></div>
                </div>

                <div className="flex gap-6 pt-1">
                  <div className="h-5 bg-base-200 rounded w-36"></div>
                  <div className="h-5 bg-base-200 rounded w-24"></div>
                </div>
              </div>

              <div className="border-b border-[#13131326] my-2"></div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-3">
                  <div className="h-8 bg-base-200 rounded-full w-28"></div>
                  <div className="h-8 bg-base-200 rounded-full w-24"></div>
                </div>
                <div className="h-9 bg-base-300/60 rounded-full w-28"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
