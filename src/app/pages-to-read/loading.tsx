import React from 'react';

export default function PagesToReadLoading() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl animate-pulse">
      {/* Banner Skeleton */}
      <div className="bg-[#13131308] rounded-2xl py-8 mb-8 flex flex-col items-center justify-center space-y-2">
        <div className="h-8 bg-base-300/60 rounded-md w-48"></div>
        <div className="h-4 bg-base-200 rounded w-72"></div>
      </div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-base-100 border border-base-200 rounded-xl p-6 space-y-2">
            <div className="h-4 bg-base-200 rounded w-24"></div>
            <div className="h-8 bg-base-300/60 rounded w-16"></div>
            <div className="h-3 bg-base-200 rounded w-36"></div>
          </div>
        ))}
      </div>

      {/* Chart Skeleton */}
      <div className="bg-base-100 border border-base-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="h-6 bg-base-300/60 rounded w-48"></div>
        <div className="h-72 bg-base-200/50 rounded-xl"></div>
      </div>
    </div>
  );
}
