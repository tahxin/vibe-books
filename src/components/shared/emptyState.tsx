import React from 'react';
import Link from 'next/link';

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
}

const EmptyState = ({
  title,
  description,
  icon = '📚',
  actionText,
  actionHref,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="text-center py-16 sm:py-20 px-4 bg-[#13131305] rounded-3xl border border-dashed border-[#13131326] my-6">
      <div className="text-5xl sm:text-6xl mb-4 select-none" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#131313]">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-[#131313B3] mt-2 max-w-md mx-auto leading-relaxed">
        {description}
      </p>
      {actionText && (
        <div className="mt-6 sm:mt-8">
          {actionHref ? (
            <Link
              href={actionHref}
              className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-full border-none shadow-none inline-flex items-center gap-2 transition-transform hover:scale-105"
            >
              {actionText}
            </Link>
          ) : (
            <button
              onClick={onAction}
              className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-full border-none shadow-none inline-flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
            >
              {actionText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
