"use client";

import Data from "@/app/components/data/data.json"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const handleClick = () => {
    console.log('você entrou em contato')
}

const { photosChale } = Data


const Slider = () => {
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
        <div className="relative mx-auto overflow-hidden w-11/12 h-3/4">
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {photosChale.map((photos, index) => (
                    <Image key={index} src={photos.url} alt={`Slide ${index}`} width={1500} height={1500} className="w-full h-full object-cover flex-shrink-0" />
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 w-1/2 h-screen opacity-10" />
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 w-1/2 h-screen opacity-10" />
        </div>

    );
};


export default Slider;