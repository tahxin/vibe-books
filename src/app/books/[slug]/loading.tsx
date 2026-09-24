import React from 'react';

export default function BookDetailsLoading() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-6xl mx-auto py-6 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column Skeleton */}
          <div className="bg-[#13131308] rounded-3xl p-10 sm:p-14 lg:p-20 flex items-center justify-center min-h-140">
            <div className="w-75 h-110 bg-base-300/60 rounded-xl"></div>
          </div>

          {/* Right Column Skeleton */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="h-10 bg-base-300/70 rounded-md w-3/4"></div>
            <div className="h-6 bg-base-200 rounded-md w-1/3"></div>
            <div className="border-b border-[#13131326] my-2"></div>
            <div className="h-6 bg-base-200 rounded-md w-1/4"></div>
            <div className="border-b border-[#13131326] my-2"></div>
            <div className="space-y-2">
              <div className="h-4 bg-base-200 rounded w-full"></div>
              <div className="h-4 bg-base-200 rounded w-5/6"></div>
              <div className="h-4 bg-base-200 rounded w-4/6"></div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-8 bg-base-200 rounded-full w-24"></div>
              <div className="h-8 bg-base-200 rounded-full w-24"></div>
            </div>
            <div className="border-b border-[#13131326] my-2"></div>
            <div className="space-y-3 pt-2">
              <div className="h-5 bg-base-200 rounded w-1/2"></div>
              <div className="h-5 bg-base-200 rounded w-1/2"></div>
              <div className="h-5 bg-base-200 rounded w-1/2"></div>
              <div className="h-5 bg-base-200 rounded w-1/2"></div>
            </div>
            <div className="flex gap-4 pt-4">
              <div className="h-12 bg-base-200 rounded-lg w-28"></div>
              <div className="h-12 bg-base-300/70 rounded-lg w-28"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
