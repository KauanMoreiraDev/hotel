'use client'

import Image from "next/image";
import Button from "../button/button";

interface CardProps{
    width?: string;
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

const CardServiços = ({width = "full", backgroundColor = "bg-slate-400", hover = "bg-slate-600", srcImage, titleFont, titleColor, titleLabel = "Titulo aqui",label = "escreva seu texto aqui", colorButoon = "bg-white", onclick } : CardProps) => {

    return(
                    <div className={`${width} h-full p-2 m-3`}>
                        <div className="flex flex-col items-start ">
                            <Image src={`/images/chalé.png`} alt="teste" width={500} height={300} className="w-full rounded-b-[90px] rounded-t-3xl z-20" />
                            <div className={`${backgroundColor} w-full z-10  pt-24 -mt-20 p-7 rounded-b-3xl`}>
                                <p className={`${titleFont} text-5xl ${titleColor} mb-2 pb-1`}>{titleLabel}</p>
                                    <p className="mb-2 pb-1 text-base min-h-[5em]">{label}</p>
                                <Button onClick={onclick} textColor="text-white" textSize="text-lg" label={"Saiba mais"} wSize="w-full" background={`${colorButoon}`} backgroundHover={`${hover}`} />
                            </div>
                        </div>
                    </div>
    );
}

export default CardServiços;