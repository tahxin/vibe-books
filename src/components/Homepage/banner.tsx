import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="container mx-auto px-4 my-6 sm:my-10">
      <div className="bg-[#13131305] rounded-3xl px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-14 border border-[#1313130A]">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-[56px] text-[#131313] leading-tight lg:leading-18">
            Books to freshen up your bookshelf
          </h1>
          <div className="mt-8 sm:mt-10">
            <Link
              href="/listed-books"
              className="btn bg-[#23BE0A] hover:bg-[#1fa909] text-white font-bold text-lg sm:text-xl px-7 py-3.5 sm:py-4 rounded-xl border-none shadow-none inline-flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
            >
              View The List
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative max-w-sm sm:max-w-md w-full">
            <Image
              src={BannerImage}
              alt="Books to freshen up your bookshelf"
              width={500}
              height={380}
              className="w-full h-auto max-h-90 object-cover rounded-2xl shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;