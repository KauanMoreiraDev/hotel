import Data from "@/app/components/data/data.json";
import Image from "next/image";
import Button from "../button/button";

interface CardServiceProps {
    src?: number,
    background?: string,
    label?: string,
    whatPosition?: boolean
}

const CardService = ({src,
    background= 'bg-white',
    label,
    whatPosition = true
} : CardServiceProps) => {

    const { photos } = Data

    

    const handleClick = () => {
        console.log('saiba mais')
    }

    const position = `${whatPosition}`

    return(
        <div className="w-full h-full my-10 py-1">
            <div className="drop-shadow-lg">
            <div className="flex flex-row justify-center">
                {whatPosition ? <div className="flex flex-row justify-center">
                                    <div className="w-1/2 h-full">
                                    {photos.map((photos, index) => (
                                        index === src && (
                                        <Image key={index} src={photos.url} alt={photos.alt} width={400} height={300} className="w-full h-full rounded-l-3xl"/>
                                    )
                                    ))}
                                    </div>
                                    <div className={`w-1/2 ${background} rounded-r-3xl`}>
                                        <div className="flex flex-col p-8">
                                            <div className="text-justify">
                                                {label}
                                            </div>
                                            <div className="flex justify-end">
                                                <Button label="Saiba mais" onClick={handleClick} background="bg-green-400" wSize="w-1/3" hSize="h-1/4"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="flex flex-row justify-center">
                                    <div className={`w-1/2 ${background} rounded-l-3xl`}>
                                        <div className="flex flex-col p-8">
                                            <div className="text-justify">
                                                {label}
                                            </div>
                                            <div className="flex justify-start">
                                                <Button label="Saiba mais" onClick={handleClick} background="bg-green-400" wSize="w-1/3" hSize="h-1/4"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-full">
                                    {photos.map((photos, index) => (
                                        index === src && (
                                        <Image key={index} src={photos.url} alt={photos.alt} width={400} height={300} className="w-full h-full rounded-r-3xl"/>
                                    )
                                    ))}
                                    </div>
                                </div>}
                </div>
            </div>
        </div>
    );
}

export default CardService