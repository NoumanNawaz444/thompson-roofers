'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroImageOne from "@/images/hero-1.jpg";
import HeroImageTwo from "@/images/hero-2.jpg";
import HeroImageThree from "@/images/hero-3.jpg";
import HeroImageFour from "@/images/hero-4.jpg";

const images = [
    HeroImageFour.src,
    HeroImageOne.src,
    HeroImageTwo.src,
    HeroImageThree.src,
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-slide every 5s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen relative overflow-hidden">
            {/* Images */}
            <div className="w-full h-full">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-700 ${
                            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    />
                ))}
            </div>

            {/* Black overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-20 pointer-events-none" />

            {/* Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition z-30"
            >
                <ChevronLeft size={30} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition z-30"
            >
                <ChevronRight size={30} />
            </button>
        </div>
    );
}
