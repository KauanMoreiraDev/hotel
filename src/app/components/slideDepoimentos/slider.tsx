"use client";

import Data from "@/app/components/data/data.json"
import Image from 'next/image';
import CardSimple from "../cardSimple/cardsimple";
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface SliderChaleProps {
    rounded?: string;
    width?: string;
    smWidth?: string
    className?: string
}

const labels = [
    { label: "Estacionamento gratuito" },
    { label: "Piscinas" },
    { label: "Academia" },
    { label: "Bar" },
    { label: "Restaurante" },
    { label: "Prainha" },
    { label: "Caiques" },
    { label: "Redes de descanso" },
    { label: "Sala de jogos" },
    { label: "Tv via satelite" },
    { label: "Campo de futebol" },
    { label: "Campo de volei" },
    { label: "Pesca no lago" },
    { label: "Pensão completa" }
]


const Slider = ({ rounded, width = "w-full", smWidth = "w-full", className }: SliderChaleProps) => {

    const handleClick = () => {
        console.log("teste")
    }

    // useEffect(() => {
    //     const interval = setInterval(nextSlide, 3500);

    //     return () => clearInterval(interval);
    // }, []);

    const [current, setCurrent] = useState(0);
    const itemsToShow = 4;
    const totalItems = labels.length;
    const totalPages = Math.ceil(totalItems / itemsToShow);

    const nextSlide = () => {
        setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
        console.log(current, nextSlide)
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
        console.log(current, prevSlide)
    };

    return (
        <div className={`relative mx-auto overflow-hidden ${width} ${smWidth} h-full ${rounded} py-16 ${className}`}>

            {/* perguntar para o gu sobre isso, comparação com o de baixo <div className={`flex transition-transform ease-in-out duration-500 transform:translate-x-${current * 100/itemsToShow}%`}> */}

            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>

                {labels.map((labels, index) => (
                    <div key={index} className="flex flex-col items-start justify-items-center w-60 h-full bg-red-400 rounded-3xl">
                        <p>Estrelas</p>
                        <p>Jacinbto Silva Pinto</p>
                        <p>{labels.label}</p>
                    </div>
                ))}
            </div>


            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 flex justify-start items-center w-1/12 h-full opacity-100"><ChevronLeftIcon className="text-white" /></button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 flex justify-end items-center w-1/12 h-full opacity-100"><ChevronRightIcon className="text-white" /></button>
        </div>

    );
};


export default Slider;