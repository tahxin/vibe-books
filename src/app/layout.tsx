import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
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

const appName = process.env.NEXT_PUBLIC_APP_NAME || "Book Vibe";
const appDescription =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Discover and read your favorite books, curate wishlists, and track your reading journey.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: appDescription,
  applicationName: appName,
  authors: [{ name: "Shahjalal Ahmed Nishat" }],
  creator: "Shahjalal Ahmed Nishat",
  openGraph: {
    title: appName,
    description: appDescription,
    url: siteUrl,
    siteName: appName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: appName,
    description: appDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
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
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={Number(process.env.NEXT_PUBLIC_TOAST_AUTO_CLOSE) || 3000}
          />
        </BooksContextProvider>
      </body>
    </html>
  );
}