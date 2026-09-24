import React from 'react';
import Image from 'next/image';
import logo from '../../assets/book.ico';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/listed-books">Listed Books</Link>
            </li>
            <li>
              <Link href="/pages-to-read">Pages To Read</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-2 btn btn-ghost normal-case text-xl">
          <Image src={logo} alt="Book Vibe" width={32} height={32} />
          <span>Book Vibe</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/listed-books">Listed Books</Link>
          </li>
          <li>
            <Link href="/pages-to-read">Pages To Read</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn btn-success">Sign In</button>
        <button className="btn btn-info">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;