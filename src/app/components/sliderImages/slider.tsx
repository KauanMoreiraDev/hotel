"use client";

import Data from "@/app/components/data/data.json"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface SliderProps{
    constSrc: "photosExterna" | "photosAlimentacao" | "photosComida" | "photosChale",
    rounded?: string,
    sizeQuarto?: string,
}

const handleClick = () => {
    console.log('você entrou em contato')
}

const folderImages = "/images/slider/eezycarePortfolio.png"

const Slider = ({constSrc, rounded = "rounded-3xl", sizeQuarto} : SliderProps) => {
    
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);

        return () => clearInterval(interval);
    }, []);

    const numberImagens = folderImages.slice(0, 1)

    const nextSlide = () => {
        setCurrent((prev) => (prev === numberImagens.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? numberImagens.length - 1 : prev - 1));
    };

    return (
        <div className={`relative mx-auto overflow-hidden w-full h-full ${rounded} shadow-xl`}> 
        {/* h-[70vh] */}
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                
                    <Image src={folderImages} alt={`Slide`} width={1500} height={1500} className="w-full h-full object-cover flex-shrink-0"/>
                
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 w-1/12 h-screen opacity-100"><ChevronLeftIcon className="text-white" /></button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 w-1/12 h-screen opacity-100"><ChevronRightIcon className="text-white" /></button>
        </div>
    );
};


export default Slider;