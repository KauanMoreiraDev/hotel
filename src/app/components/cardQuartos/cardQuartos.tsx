'use client'

import Image from "next/image";
import Button from "../button/button";
import SliderImages from "../sliderImages/slider";
import { LucideBed, LucideRefrigerator, LucideBath, LucideTv, LucideGroup, LucideWifi } from "lucide-react";

interface CardProps {
    backgroundColor?: string;
    hover?: string;
    srcImage?: string;
    titleFont?: string;
    titleColor?: string;
    titleLabel?: string;
    label?: string;
    colorButoon?: string;
    onclick: () => void
}

const handleClick = () => {
    console.log("Function not implemented.")
}

const CardQuartos = ({ backgroundColor = "bg-slate-400", hover = "bg-slate-600", srcImage, titleFont, titleColor, titleLabel = "Titulo aqui", label = "escreva seu texto aqui", colorButoon = "bg-white", onclick }: CardProps) => {

    {/* <Image src={`/images/chalé.png`} alt="teste" width={500} height={500} className="h-4/5 rounded-r-[90px] rounded-3xl z-20" /> */ }

    return (
        <div className="my-5">
            <div className="flex flex-row justify-center">
                <div className="w-5/12">
                    <SliderImages constSrc="photosChale" sizeQuarto="h-96" rounded="rounded-3xl rounded-r-[75px]" />
                </div>
                <div className={`${backgroundColor} w-3/5 h-96 p-5 pl-24 -ml-20 rounded-3xl`}>
                    <div className="flex flex-col justify-between h-full">
                        <div className={`text-5xl ${titleColor} ${titleFont}`}>{titleLabel}</div>
                        <div className="flex flex-row flex-wrap items-center h-[10%]">
                            <div className="h-[7%] py-2 pr-3 text-xs flex flex-nowrap"><LucideWifi className="w-4 h-4 " />Wi-fi</div>
                            <div className="h-[7%] py-2 pr-3 text-xs flex flex-nowrap"><LucideRefrigerator className="w-4 h-4 " />Frigobar</div>
                            <div className="h-[7%] py-2 pr-3 text-xs flex flex-nowrap"><LucideBed className="w-4 h-4 " />Cama box</div>
                            <div className="h-[7%] py-2 pr-3 text-xs flex flex-nowrap"><LucideBath className="w-4 h-4 " />Banheiro</div>
                            <div className="h-[7%] py-2 pr-3 text-xs flex flex-nowrap"><LucideTv className="w-4 h-4 " />Tv via satélite</div>
                            <div className="h-[7%] py-2 pr-3 text-xs flex flex-nowrap"><LucideBed className="w-4 h-4 " />2 Quartos</div>
                            <div className="h-[7%] py-2 pr-3 text-xs flex flex-nowrap"><LucideGroup className="w-4 h-4 " />Máx 7 pessoas</div>
                        </div>
                        <div className="">{label}</div>
                        <Button onClick={onclick} background={colorButoon} backgroundHover={hover} label={"Reservar quarto"} wSize="w-full" hSize="h-1/6" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardQuartos;