import Data from "@/app/components/data/data.json"
import Image from "next/image";
import SliderChale from "../slider Chalé/slider";

interface CardProps{
    leftPosition?: boolean
    isImage?: boolean
    indexNumber: number
    title?: string
    subTitle?: string
    label?: string
}

const { photos } = Data

const CardQuartos = ({ leftPosition = true, isImage = true, indexNumber, title = "Titulo", subTitle = "Sub Title", label = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique velit dolor tempore amet vitae odit sapiente exercitationem voluptatem veritatis, sed, incidunt nulla officiis quas cupiditate? Consectetur earum amet obcaecati." } : CardProps) => {

    const IndexDinamic = indexNumber

    return(
        <div className="h-full mt-5">
            {leftPosition ? 
                <div className="flex flex-col sm:flex-row items-center ">
                        <div className="w-full sm:w-1/2 flex justify-stretch p-5 pb-0">
                            <div className="flex flex-col justify-center items-start">
                                <div className="bg-white h-1/3 px-2 m-1">
                                    <div className="flex flex-col justify-evenly h-full">
                                        <p className="font-Caveat text-6xl text-blue-400">{title}</p>
                                        <p className="font-Caveat text-2xl">{subTitle}</p>
                                    </div>
                                </div>
                                <div className="bg-blue-300 rounded-2xl">
                                    <div className="h-1/3 m-1 p-2">
                                        {label}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isImage ? <Image src={photos[IndexDinamic].url} alt={photos[indexNumber].alt} width={300} height={250} className="w-full px-5 sm:w-6/12 rounded-2xl" /> : <SliderChale rounded="rounded-2xl" smWidth="w-6/12" />}
                    </div>

                :

                <div className="flex flex-col sm:flex-row ">
                    <div className="hidden sm:block">
                        {isImage ? <Image src={photos[IndexDinamic].url} alt={photos[indexNumber].alt} width={300} height={250} className="w-full px-5 sm:w-6/12 rounded-2xl" /> : <SliderChale rounded="rounded-2xl" smWidth="w-6/12" />}
                    </div>
                <div className="w-full sm:w-1/2 flex justify-stretch p-5">
                    <div className="flex flex-col justify-center items-end">
                        <div className="bg-white h-1/3 px-2 m-1">
                            <div className="flex flex-col justify-evenly items-end h-full">
                                <p className="font-Caveat text-6xl text-blue-400">{title}</p>
                                <p className="font-Caveat text-2xl">{subTitle}</p>
                            </div>
                        </div>
                        <div className="bg-blue-300 rounded-2xl">
                            <div className="h-1/3 m-1 p-2">
                                {label}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block sm:hidden">
                        {isImage ? <Image src={photos[IndexDinamic].url} alt={photos[indexNumber].alt} width={300} height={250} className="w-full px-5 sm:w-6/12 rounded-2xl" /> : <SliderChale rounded="rounded-2xl" smWidth="w-6/12" />}
                    </div>
            </div>
            }
            </div>
    );
}

export default CardQuartos;