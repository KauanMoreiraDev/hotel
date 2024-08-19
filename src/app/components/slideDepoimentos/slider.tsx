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
        <div className={`relative overflow-hidden ${width} ${smWidth} h-full ${rounded} py-16 `}>

            <button onClick={prevSlide} className=" p-2 mx-2 flex justify-start items-center rounded-full bg-slate-500"><ChevronLeftIcon className="text-white" /></button>

            {/* perguntar para o gu sobre isso, comparação com o de baixo <div className={`flex transition-transform ease-in-out duration-500 transform:translate-x-${current * 100/itemsToShow}%`}> */}

            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {labels.map((items, index) => (
                    <div key={index} className="w-full h-full object-cover flex-shrink-0 ">
                        <div className="p-2 flex">{Array.from({ length: items.ranking}).map((_, index) => (
                            <StarFilledIcon key={index} className="text-yellow-400 w-10 h-10" />
                        ))}</div>
                        <div className="p-2 text-lg flex items-center"><PersonIcon className="w-10 h-10"/>{items.nome}</div>
                        <div className="p-2">{items.label}</div>
                    </div>
                ))}
            </div>

            <button onClick={nextSlide} className=" p-2 mx-2 flex justify-start items-center rounded-full bg-slate-500">
                <ChevronRightIcon className="text-white" />
            </button>
        </div>
    );
};


export default Slider;