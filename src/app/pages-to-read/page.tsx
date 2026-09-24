'use client';
import React from 'react';
import Link from 'next/link';
import { useBooks } from '@/context/BooksContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#22c55e',
  '#ec4899',
  '#8b5cf6',
  '#06b6d4',
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

interface TriangleBarProps {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  [key: string]: unknown;
}

const TriangleBar = (props: TriangleBarProps) => {
  const { fill, x = 0, y = 0, width = 0, height = 0 } = props;
  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
};

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const PagesToReadPage = () => {
  const { readBooks } = useBooks();
  const isMounted = React.useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const totalPages = readBooks.reduce(
    (acc, book) => acc + (book.totalPages || 0),
    0
  );

  const chartData = readBooks.map((book) => ({
    name:
      book.bookName.length > 16
        ? `${book.bookName.slice(0, 14)}...`
        : book.bookName,
    fullName: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="container mx-auto py-10 px-4 max-w-6xl">
      {/* Header Banner */}
      <div className="bg-[#13131308] rounded-2xl py-8 mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#131313]">Pages to Read</h1>
        <p className="text-base text-[#13131380] mt-2">
          Visual chart showing page counts for books in your Read List
        </p>
      </div>

      {readBooks.length === 0 ? (
        <div className="text-center py-20 px-4 bg-[#13131305] rounded-3xl border border-dashed border-[#13131326] my-6">
          <div className="text-5xl mb-4">📊</div>
          <h2 className="text-2xl font-bold text-[#131313]">
            No books in your Read list yet
          </h2>
          <p className="text-base text-[#131313B3] mt-2 max-w-md mx-auto">
            Mark books as &quot;Read&quot; from their details page to see them graphed here in Recharts!
          </p>
          <Link
            href="/"
            className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold text-base px-6 py-2.5 rounded-full border-none shadow-none mt-6 inline-flex"
          >
            Explore Books
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Summary Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#13131305] border border-[#13131315] rounded-2xl p-6 text-center">
              <span className="text-sm font-medium text-[#13131380]">Books Read</span>
              <h3 className="text-3xl font-bold text-[#131313] mt-1">
                {readBooks.length}
              </h3>
            </div>

            <div className="bg-[#13131305] border border-[#13131315] rounded-2xl p-6 text-center">
              <span className="text-sm font-medium text-[#13131380]">Total Pages</span>
              <h3 className="text-3xl font-bold text-[#23BE0A] mt-1">
                {totalPages}
              </h3>
            </div>

            <div className="bg-[#13131305] border border-[#13131315] rounded-2xl p-6 text-center">
              <span className="text-sm font-medium text-[#13131380]">Average Pages/Book</span>
              <h3 className="text-3xl font-bold text-[#50B1C9] mt-1">
                {Math.round(totalPages / readBooks.length)}
              </h3>
            </div>
          </div>

          {/* Recharts Custom Shape Triangle Bar Chart */}
          <div className="bg-[#13131305] border border-[#13131315] rounded-3xl p-6 sm:p-10">
            <h2 className="text-xl font-bold text-[#131313] mb-6">
              Pages Read Comparison
            </h2>

            {!isMounted ? (
              <div className="w-full h-96 flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#23BE0A]"></span>
              </div>
            ) : (
              <div className="w-full h-110 sm:h-120">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{
                      top: 25,
                      right: 20,
                      left: 10,
                      bottom: 50,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#13131315" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: '#131313B3', fontSize: 13 }}
                      interval={0}
                      angle={-15}
                      textAnchor="end"
                    />
                    <YAxis tick={{ fill: '#131313B3', fontSize: 13 }} />
                    <Tooltip
                      formatter={(value: unknown) => [`${value} pages`, 'Pages']}
                      labelFormatter={(_, payload) =>
                        payload?.[0]?.payload?.fullName || ''
                      }
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderRadius: '12px',
                        border: '1px solid #13131326',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                      }}
                    />
                    <Bar
                      dataKey="pages"
                      shape={(barProps: unknown) => (
                        <TriangleBar {...(barProps as TriangleBarProps)} />
                      )}
                      label={{
                        position: 'top',
                        fill: '#131313',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}
                    >
                      {chartData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PagesToReadPage;
