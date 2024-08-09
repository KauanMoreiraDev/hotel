"use client";

import Data from "@/app/components/data/data.json"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface SliderChaleProps{
    rounded?: string;
    width?: string;
    smWidth?: string
}

const { photosChale } = Data


const Slider = ({rounded, width = "w-1/2", smWidth = "w-full"} : SliderChaleProps) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev === photosChale.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? photosChale.length - 1 : prev - 1));
    };

    return (
        <div className={`relative mx-auto overflow-hidden ${width} ${smWidth} h-full ${rounded} m-4`}>
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {photosChale.map((photos, index) => (
                    <Image key={index} src={photos.url} alt={`Slide ${index}`} width={1500} height={1500} className="w-full h-full object-cover flex-shrink-0" />
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 w-1/12 h-screen opacity-100"><ChevronLeftIcon className="text-white" /></button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 w-1/12 h-screen opacity-100"><ChevronRightIcon className="text-white" /></button>
        </div>

    );
};


export default Slider;