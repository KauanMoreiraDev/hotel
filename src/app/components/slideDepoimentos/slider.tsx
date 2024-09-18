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
        nome: "Gretchen",
        label: "Trabalho com excursão e fui duas vezes este ano eu e meus clientes gostamos muito ambiente familiar comidas boas lugar top"
    },
    {   
        ranking: 4,
        nome: "Thomas Edisom",
        label: "Local com excelente vista, natureza e aconchegante! Ótimo ambiente, ideal para família e convenções! Super recomendo!"
    },
    {   
        ranking: 5,
        nome: "Pelézinho",
        label: "Nossa amei conhecer este lugar, muito bom, natureza perfeita lugar maravilhoso pra passear com família,estive aí com o grupo da terceira idade Lua Nova, funcionários maravilhosos muito educados e simpáticos,eu recomendo com certeza"
    },
    {   
        ranking: 4,
        nome: "Serjão Berranteiro",
        label: "Lugar maravilhoso em meio a natureza. Piscina para lazer, playground, lago para andar de jet sky e também ótimo local para se hospedar. Fácil acesso pela rodovia anhanguera."
    },
    {   
        ranking: 4,
        nome: "Mestre Miague",
        label: "Fui no Dia das Mães para um day use e achei o lugar bonito e tranquilo. Há piscinas para adultos e crianças, uma 'prainha', e uma sala de jogos com bilhar e ping pong. A comida é simples, mas boa, e os funcionários foram muito atenciosos. Minha mãe adorou, o que já valeu a pena. Continuem com o bom serviço. Deus abençoe."
    },
]


const Slider = ({ rounded, width = "w-full", smWidth = "w-full", className }: SliderChaleProps) => {

    const handleClick = () => {
        console.log("teste")
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3500);

        return () => clearInterval(interval);
    }, []);

    const [current, setCurrent] = useState(0);
    const itemsToShow = 1;
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

            <button onClick={prevSlide} className="absolute z-10 top-1/2 left-0 p-2 flex justify-start items-center rounded-full bg-slate-500"><ChevronLeftIcon className="text-white w-4 h-4" /></button>

            {/* perguntar para o gu sobre isso, comparação com o de baixo <div className={`flex transition-transform ease-in-out duration-500 transform:translate-x-${current * 100/itemsToShow}%`}> */}

            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {labels.map((items, index) => (
                    <div key={index} className="w-full h-full object-cover flex-shrink-0 px-10 rounded-3xl bg-slate-300 ">
                        <div className="p-2 flex">{Array.from({ length: items.ranking}).map((_, index) => (
                            <StarFilledIcon key={index} className="text-yellow-400 w-7 h-7" />
                        ))}</div>
                        <div className="py-2 text-lg flex items-center"><PersonIcon className="w-10 h-10"/>{items.nome}</div>
                        <div className="p-2 h-24 ">{items.label}</div>
                    </div>
                ))}
            </div>

            <button onClick={nextSlide} className="absolute z-10 top-1/2 right-0 p-2 flex justify-start items-center rounded-full bg-slate-500">
                <ChevronRightIcon className="text-white w-4 h-4" />
            </button>
        </div>
    );
};


export default Slider;