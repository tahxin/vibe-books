'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Thank you for subscribing to Book Vibe updates!');
    setEmail('');
  };

  return (
    <footer className="bg-[#13131305] border-t border-[#13131315] text-[#131313] mt-16 sm:mt-24">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Mission (2 cols on lg) */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-extrabold text-2xl lg:text-[28px] text-[#131313] tracking-tight inline-block mb-4"
            >
              {process.env.NEXT_PUBLIC_APP_NAME || 'Book Vibe'}
            </Link>
            <p className="text-[#131313B3] text-sm sm:text-base leading-relaxed max-w-sm mb-6">
              Your personal digital sanctuary for discovering, tracking, and celebrating world-class literature. Curate reading lists, track page stats, and build your dream library.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-full bg-white border border-[#1313131A] flex items-center justify-center text-[#131313] hover:text-[#23BE0A] hover:border-[#23BE0A] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white border border-[#1313131A] flex items-center justify-center text-[#131313] hover:text-[#23BE0A] hover:border-[#23BE0A] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white border border-[#1313131A] flex items-center justify-center text-[#131313] hover:text-[#23BE0A] hover:border-[#23BE0A] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white border border-[#1313131A] flex items-center justify-center text-[#131313] hover:text-[#23BE0A] hover:border-[#23BE0A] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base text-[#131313] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#131313B3]">
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
              <li>
                <Link href="/#books" className="hover:text-[#23BE0A] transition-colors">
                  Featured Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-base text-[#131313] mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-[#131313B3]">
              <li>
                <span className="hover:text-[#23BE0A] transition-colors cursor-pointer">
                  Fiction & Drama
                </span>
              </li>
              <li>
                <span className="hover:text-[#23BE0A] transition-colors cursor-pointer">
                  Classic Literature
                </span>
              </li>
              <li>
                <span className="hover:text-[#23BE0A] transition-colors cursor-pointer">
                  Romance & Poetry
                </span>
              </li>
              <li>
                <span className="hover:text-[#23BE0A] transition-colors cursor-pointer">
                  Mystery & Thriller
                </span>
              </li>
              <li>
                <span className="hover:text-[#23BE0A] transition-colors cursor-pointer">
                  Sci-Fi & Fantasy
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-base text-[#131313] mb-4">
              Stay Connected
            </h3>
            <p className="text-xs sm:text-sm text-[#131313B3] leading-relaxed mb-4">
              Subscribe to get reading recommendations, literary essays, and new release alerts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-sm w-full bg-white border border-[#13131326] focus:border-[#23BE0A] focus:outline-none rounded-xl text-sm px-3.5 py-2 h-auto"
                required
              />
              <button
                type="submit"
                className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold text-sm w-full rounded-xl border-none shadow-none h-auto py-2 min-h-0 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#13131315] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#13131380]">
          <p>
            &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME || 'Book Vibe'}. All rights reserved. &bull; Made with care by{' '}
            <span className="text-[#131313] font-medium">Shahjalal Ahmed Nishat</span>
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#131313] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[#131313] cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-[#131313] cursor-pointer transition-colors">
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
