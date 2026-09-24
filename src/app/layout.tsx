import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "Book Vibe",
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Discover and read your favorite books",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#131313]">
        <BooksContextProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[#13131315] bg-white text-base-content/60 p-6 text-center text-sm">
            &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME || "Book Vibe"}. All rights reserved.
          </footer>
          <ToastContainer
            position="top-right"
            autoClose={Number(process.env.NEXT_PUBLIC_TOAST_AUTO_CLOSE) || 3000}
          />
        </BooksContextProvider>
      </body>
    </html>
  );
}