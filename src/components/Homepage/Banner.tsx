
import React from 'react';
import Image from 'next/image';

import BannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-2 items-center gap-4 bg-slate-200 p-3 rounded-4xl shadow-md">
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold">
            Books to Freshen Up <br /> your Bookshelf
          </h2>

          <button className="btn btn-success">
            View The List
          </button>
        </div>

        <div>
          <Image
            src={BannerImage}
            alt="Banner Image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
