"use client";

import Data from "@/app/components/data/data.json"
import Image from 'next/image';
import CardSimple from "../cardSimple/cardsimple";
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarFilledIcon, PersonIcon } from "@radix-ui/react-icons";

interface SliderChaleProps {
    rounded?: string;
    width?: string;
    smWidth?: string
    className?: string
}

const labels = [

    {   
        ranking: 4,
        nome: "Paula Tejando",
        label: "iaifjahofj"
    },
    {   
        ranking: 3,
        nome: "Tomás Turbando",
        label: "Piscinas"
    },
    {   
        ranking: 5,
        nome: "Oscar Alho",
        label: "Academia"
    },
    {   
        ranking: 4,
        nome: "Paula Noku",
        label: "Bar"
    },
    {   
        ranking: 3,
        nome: "Cuca Beludo",
        label: "Restaurante"
    },
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
        <div className={`relative overflow-hidden ${width} ${smWidth} h-full ${rounded} py-16 ${className} flex flex-row items-center justify-center`}>

            <button onClick={prevSlide} className="p-2 mx-2 flex justify-start items-center rounded-full bg-slate-500"><ChevronLeftIcon className="text-white" /></button>

            {/* perguntar para o gu sobre isso, comparação com o de baixo <div className={`flex transition-transform ease-in-out duration-500 transform:translate-x-${current * 100/itemsToShow}%`}> */}
            {/* 
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}> */}

            <div className={`relative flex flex-col items-start justify-items-center w-11/12 h-full p-12 rounded-3xl ${current}`}>
                <div className="absolute inset-0 rounded-3xl bg-slate-300 backdrop-blur-sm" />
                {labels.map((labels, index) => (
                    <div key={index} className="relative flex flex-col items-start justify-items-center w-full h-full">

                        <div className="flex flex-row justify-start">
                            {Array.from({length: labels.ranking}).map((_, index) => (
                                <StarFilledIcon key={index} className="text-yellow-400 w-6 h-6" />

                            ))}
                            
                        </div>

                        <div className="text-lg flex flex-row">
                            <PersonIcon className="w-1/2 h-1/2" />
                            {labels.nome}
                        </div>
                        <p className="py-5 h-16">{labels.label}</p>
                    </div>
                ))}
            </div>

            <button onClick={nextSlide} className="p-2 mx-2 flex justify-start items-center rounded-full bg-slate-500">
                <ChevronRightIcon className="text-white" />
            </button>
        </div>
    );
};


export default Slider;