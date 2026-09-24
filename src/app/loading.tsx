import React from 'react';

export default function GlobalLoading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 px-4">
      <div className="relative flex items-center justify-center">
        {/* Pulsing outer aura */}
        <div className="w-16 h-16 rounded-full bg-[#23BE0A15] animate-ping absolute"></div>
        {/* Central themed spinner */}
        <span className="loading loading-spinner loading-lg text-[#23BE0A]"></span>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-[#131313] tracking-tight">
          Book Vibe
        </h2>
        <p className="text-sm font-medium text-[#13131380] mt-1 animate-pulse">
          Loading your literary world...
        </p>
      </div>
    </div>
  );
}
