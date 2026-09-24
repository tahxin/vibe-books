import React from 'react';
import Image from 'next/image';
import BannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <div className="grid grid-cols-2 items-center gap-4">
            <div>
                <h2>Welcome to Book Vibe</h2>
                <button>Get Started</button>
            </div>
            <div>
                <Image src={BannerImage} alt="Banner Image" width={600} height={400} />
            </div>
        </div>
    );
};

export default Banner;