import React from 'react';
import Image from 'next/image';

import BannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Books to freshen up your bookshelf
          </h2>
          <button className="mt-6 px-5 py-2.5 bg-neutral-800 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors">
            View the list
          </button>
        </div>
        <div className="relative w-full max-w-lg">
          <Image
            src={BannerImage}
            alt="Decorative bookshelf"
            width={600}
            height={400}
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;