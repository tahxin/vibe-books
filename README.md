# 📚 Book Vibe

A modern, responsive book discovery and reading list management web application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **DaisyUI**.

---

## 🌟 Key Features

- **📖 Interactive Book Discovery**: Browse a curated collection of books with tags, author info, category, and star ratings.
- **🔍 Dynamic Book Details**: Deep-dive into each book with synopsis, publisher, page count, published year, and rating specifications.
- **🏷️ Read List & Wishlist Management**:
  - Add books to either your "Read Books" list or "Wishlist".
  - Smart validation prevents duplicate entries.
  - Automatically prevents adding a book to your Wishlist if it's already in your Read Books list.
  - State persisted locally using browser `localStorage`.
- **🔔 Toast Notifications**: Real-time feedback using `react-toastify` for read/wishlist actions and validation alerts.
- **⚡ Custom Multi-Criteria Sorting**: Sort read and wishlist books seamlessly by:
  - Rating (highest to lowest)
  - Number of Pages (highest to lowest)
  - Published Year (newest to oldest)
- **📊 Pages to Read Visualization**:
  - Custom triangle-bar chart using `recharts` to graphically visualize pages read per book.
  - Fully responsive with tooltips, cartesian grid, and dynamic axis sizing.
- **⏳ Robust Loading & Error Boundaries**:
  - Route-level and local component skeleton loaders using React `Suspense`.
  - Global `error.tsx` and custom `not-found.tsx` with recovery actions.
  - Async operations wrapped in resilient `try...catch` blocks.
- **⚙️ Environment Configuration**: Configurable app branding, metadata descriptions, and toast auto-close timings via `.env` variables.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | Full-stack React framework with App Router & Turbopack |
| **React 19** | Modern UI component model with Suspense & Context |
| **TypeScript** | Strict type safety and data modeling |
| **Tailwind CSS v4** | Modern utility-first styling engine |
| **DaisyUI 5** | Accessible UI component library |
| **Recharts** | Declarative charting library for reading statistics |
| **React-Toastify** | Customizable toast notification alerts |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/book-vibe.git
   cd book-vibe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Configure the environment variables in `.env.local` as needed:
   ```env
   NEXT_PUBLIC_APP_NAME="Book Vibe"
   NEXT_PUBLIC_APP_DESCRIPTION="Discover and read your favorite books"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   NEXT_PUBLIC_TOAST_AUTO_CLOSE=3000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
book-vibe/
├── public/
│   ├── booksData.json       # Curated book catalog dataset
│   └── images/              # Static assets & book covers
├── src/
│   ├── app/
│   │   ├── books/[slug]/    # Dynamic book details page & error/loading states
│   │   ├── listed-books/    # Read & Wishlist tabs with sorting
│   │   ├── pages-to-read/   # Recharts reading statistics page
│   │   ├── error.tsx        # Global error boundary
│   │   ├── layout.tsx       # Root layout with context & toast container
│   │   ├── loading.tsx      # Global loading skeleton
│   │   ├── not-found.tsx    # Styled 404 page
│   │   └── page.tsx         # Homepage with Banner & Book Grid
│   ├── components/
│   │   ├── bookDetails/     # Action buttons (Read, Wishlist)
│   │   ├── Homepage/        # Banner, BookCard & Book catalog components
│   │   ├── listedBooks/     # Tabbed lists & sort controls
│   │   └── shared/          # Navigation bar & global UI
│   ├── context/
│   │   └── BooksContext.tsx # Context & localStorage state management
│   └── types/
│       └── booktypes.ts     # TypeScript interfaces for Book entities
├── .env.example             # Example environment configuration template
└── README.md
```

---

## 📜 Available Scripts

- `npm run dev`: Runs the app in development mode with Turbopack.
- `npm run build`: Builds an optimized production bundle.
- `npm run start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint to check for code quality and consistency.

---

## 📄 License

This project is licensed under the MIT License.
