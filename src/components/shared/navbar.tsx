'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return 'border border-[#23BE0A] text-[#23BE0A] font-semibold rounded-lg px-4 py-2 transition-colors';
    }
    return 'text-[#131313CC] hover:text-[#23BE0A] font-medium px-4 py-2 transition-colors';
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="navbar bg-base-100 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-3">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <Link
                  href="/"
                  className={pathname === '/' ? 'text-[#23BE0A] font-semibold' : ''}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/listed-books"
                  className={pathname === '/listed-books' ? 'text-[#23BE0A] font-semibold' : ''}
                >
                  Listed Books
                </Link>
              </li>
              <li>
                <Link
                  href="/pages-to-read"
                  className={pathname === '/pages-to-read' ? 'text-[#23BE0A] font-semibold' : ''}
                >
                  Pages to Read
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="font-extrabold text-2xl lg:text-[28px] text-[#131313] tracking-tight">
            Book Vibe
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-3">
            <Link href="/" className={getLinkClasses('/')}>
              Home
            </Link>
            <Link href="/listed-books" className={getLinkClasses('/listed-books')}>
              Listed Books
            </Link>
            <Link href="/pages-to-read" className={getLinkClasses('/pages-to-read')}>
              Pages to Read
            </Link>
          </div>
        </div>

        <div className="navbar-end gap-3">
          <button className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold px-6 py-2.5 rounded-xl border-none shadow-none text-base h-auto min-h-0 cursor-pointer">
            Sign In
          </button>
          <button className="btn bg-[#59C6D2] hover:bg-[#4eb3be] text-white font-semibold px-6 py-2.5 rounded-xl border-none shadow-none text-base h-auto min-h-0 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;