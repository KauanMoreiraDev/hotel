"use client";

import Data from "@/app/components/data/data.json"
import Image from 'next/image';
import CardSimple from "../cardSimple/cardsimple";
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface SliderChaleProps{
    rounded?: string;
    width?: string;
    smWidth?: string
    className?: string
}

const labels = [
    {   icons: "/images/servicos/icons/pescaria.png",
        label: "Estacionamento gratuito" },
    {   icons: "/images/servicos/icons/natacao.png",
        label: "Piscinas" },
    {   icons: "/images/servicos/icons/academia.png",
        label: "Academia" },
    {   icons: "/images/servicos/icons/cerveja.png",
        label: "Bar" },
    {   icons: "/images/servicos/icons/restaurante.png",
        label: "Restaurante" },
    {   icons: "/images/servicos/icons/praia.png",
        label: "Prainha" },
    {   icons: "/images/servicos/icons/pescaria.png",
        label: "Caiques" },
    {   icons: "/images/servicos/icons/pescaria.png",
        label: "Redes de descanso" },
    {   icons: "/images/servicos/icons/bilhar.png",
        label: "Sala de jogos" },
    {   icons: "/images/servicos/icons/televisao.png",
        label: "Tv via satelite" },
    {   icons: "/images/servicos/icons/bola.png",
        label: "Campo de futebol" },
    {   icons: "/images/servicos/icons/voleibol.png",
        label: "Campo de volei" },
    {   icons: "/images/servicos/icons/pescaria.png",
        label: "Pesca no lago" },
    {   icons: "/images/servicos/icons/pescaria.png",
        label: "Pensão completa" }
]


const Slider = ({rounded, width = "w-1/2", smWidth = "w-full", className} : SliderChaleProps) => {

    const handleClick = () =>{
        console.log("teste")
    }
    
        useEffect(() => {
            const interval = setInterval(nextSlide, 3500);
            
            return () => clearInterval(interval);
        }, []);
    
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
                        <div key={index} className="flex-shrink-0 w-1/5">
                            <CardSimple icons={labels.icons} label={labels.label} width="1/3"/>
                        </div>
                    ))}
                </div>
            

            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 flex justify-start items-center w-1/12 h-full opacity-100"><ChevronLeftIcon className="text-black font-semibold" /></button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 flex justify-end items-center w-1/12 h-full opacity-100"><ChevronRightIcon className="text-black font-semibold" /></button>
        </div>

    );
};


export default Slider;