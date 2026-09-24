import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 py-3">
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/listed-books">Listed Books</Link>
              </li>
              <li>
                <Link href="/pages-to-read">Pages to Read</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="font-bold text-2xl text-[#131313] tracking-tight">
            Book Vibe
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium text-base text-[#131313CC]">
            <li>
              <Link href="/" className="hover:text-[#23BE0A] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/listed-books" className="hover:text-[#23BE0A] transition-colors">
                Listed Books
              </Link>
            </li>
            <li>
              <Link href="/pages-to-read" className="hover:text-[#23BE0A] transition-colors">
                Pages to Read
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <button className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold px-6 py-2.5 rounded-xl border-none shadow-none text-base h-auto min-h-0">
            Sign In
          </button>
          <button className="btn bg-[#59C6D2] hover:bg-[#4eb3be] text-white font-semibold px-6 py-2.5 rounded-xl border-none shadow-none text-base h-auto min-h-0">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;