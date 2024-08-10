import Data from "@/app/components/data/data.json"
import Image from "next/image";
import Button from "../button/button";
import SliderChale from "../slider Chalé/slider";

interface CardProps {
    leftPosition?: boolean
    isImage?: boolean
    indexNumber: number
    onClickButton: () => void
    title?: string
    subTitle?: string
    label?: string
    labelButton: string
}

const { photos } = Data


const CardQuartos = ({ leftPosition = true, isImage = true, indexNumber, onClickButton, title = "Titulo", subTitle = "Sub Title", labelButton = "Button", label = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique velit dolor tempore amet vitae odit sapiente exercitationem voluptatem veritatis, sed, incidunt nulla officiis quas cupiditate? Consectetur earum amet obcaecati." }: CardProps) => {

    const IndexDinamic = indexNumber
    
    const handleClick = onClickButton

    const handClick = () => {
        console.log(`informações sobre ${photos[indexNumber].alt}`)
    }

    return (
        <div className="min-h-[75vh] ">
            {leftPosition ?
                <div className="flex flex-col sm:flex-row ">
                    <div className="w-full sm:w-1/2 flex justify-stretch px-5">
                        <div className="flex flex-col justify-center items-center sm:items-start">
                            <div className="bg-white h-1/3 px-2 m-1">
                                <div className="flex flex-col justify-evenly items-center sm:items-start h-full">
                                    <p className="font-Caveat text-6xl text-blue-400">{title}</p>
                                    <p className="font-Caveat text-2xl">{subTitle}</p>
                                </div>
                            </div>
                            {isImage ? <Image src={photos[IndexDinamic].url} alt={photos[indexNumber].alt} width={300} height={250} className="w-full mx-auto px-1 sm:w-6/12 rounded-2xl block sm:hidden" /> : <SliderChale rounded="rounded-2xl" width="w-full" smWidth="sm:w-6/12" className="block sm:hidden" />}
                            <div className="bg-blue-300 rounded-2xl">
                                <div className="h-1/3 m-1 p-2">
                                    <div className="text-justify flex flex-col justify-evenly items-center h-full w-full">
                                        {label}
                                        <Button onClick={handleClick} label={labelButton} wSize="w-full" background="bg-green-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isImage ? <Image src={photos[IndexDinamic].url} alt={photos[indexNumber].alt} width={300} height={250} className="w-full mx-4 px-1 sm:w-6/12 rounded-2xl hidden sm:block" /> : <SliderChale rounded="rounded-2xl" smWidth="w-6/12" className="hidden sm:block"/>}
                </div>

                :

                <div className="flex flex-col sm:flex-row ">

                    {isImage ? <Image src={photos[IndexDinamic].url} alt={photos[indexNumber].alt} width={300} height={250} className="w-full mx-4 px-1 sm:w-6/12 rounded-2xl hidden sm:block" /> : <SliderChale rounded="rounded-2xl" smWidth="w-6/12" className="hidden sm:block"/>}

                    <div className="w-full sm:w-1/2 flex justify-stretch px-5">
                        <div className="flex flex-col justify-center items-center sm:items-end">
                            <div className="bg-white h-1/3 px-2 m-1">
                                <div className="flex flex-col justify-evenly items-center sm:items-end h-full">
                                    <p className="font-Caveat text-6xl text-blue-400">{title}</p>
                                    <p className="font-Caveat text-2xl">{subTitle}</p>
                                </div>
                            </div>
                            {isImage ? <Image src={photos[IndexDinamic].url} alt={photos[indexNumber].alt} width={300} height={250} className="w-full px-1 sm:w-6/12 rounded-2xl mx-auto block sm:hidden" /> : <SliderChale rounded="rounded-2xl" smWidth="w-6/12" className="block sm:hidden" />}
                            <div className="bg-blue-300 rounded-2xl">
                                <div className="h-1/3 m-1 p-2">
                                    <div className="text-justify flex flex-col justify-evenly items-center h-full w-full">
                                        {label}
                                        <Button onClick={handClick} label="Saiba mais" wSize="w-full" background="bg-green-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default CardQuartos;