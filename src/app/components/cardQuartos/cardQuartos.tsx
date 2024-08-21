'use client'

import Image from "next/image";
import Button from "../button/button";
import SliderImages from "../sliderImages/slider";

interface CardProps{
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

const CardQuartos = ({ backgroundColor = "bg-slate-400", hover = "bg-slate-600", srcImage, titleFont, titleColor, titleLabel = "Titulo aqui",label = "escreva seu texto aqui", colorButoon = "bg-white", onclick } : CardProps) => {

    return(
                    <div className={`w-full h-full p-2 m-3`}>
                        <div className="flex flex-row items-center h-4/5">
                            <div className="w-1/2">
                                <SliderImages constSrc="photosChalé"/>
                                {/* <Image src={`/images/chalé.png`} alt="teste" width={500} height={500} className="h-4/5 rounded-r-[90px] rounded-3xl z-20" /> */}
                            </div>
                            <div className={`${backgroundColor} w-full h-full pl-24 -ml-20 p-10 rounded-r-3xl`}>
                                <p className={`${titleFont} text-5xl ${titleColor} mb-2 pb-1`}>{titleLabel}</p>
                                    <p className="mb-2 pb-1 text-base min-h-[5em]">{label}</p>
                                <Button onClick={onclick} textColor="text-white" textSize="text-lg" label={"Saiba mais"} wSize="w-full" background={`${colorButoon}`} backgroundHover={`${hover}`} />
                            </div>
                        </div>
                    </div>
    );
}

export default CardQuartos;