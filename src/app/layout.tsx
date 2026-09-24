import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/navbar";
import BooksContextProvider from "@/context/BooksContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "Discover and read your favorite books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BooksContextProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="bg-gray-800 text-white p-4 text-center text-sm">
            &copy; {new Date().getFullYear()} Book Vibe. All rights reserved.
          </footer>
          <ToastContainer position="top-right" autoClose={3000} />
        </BooksContextProvider>
      </body>
    </html>
  );
}
