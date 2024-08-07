import Data from "@/app/components/data/data.json";
import Image from "next/image";
import Button from "../button/button";

interface CardServiceProps {
    src: number;
    url: number;
    background?: string;
    label?: string;
    whatPosition?: boolean
}

const CardService = ({src,
    url,
    background= 'bg-white',
    label,
    whatPosition = true
} : CardServiceProps) => {

    const { navLinks , photos } = Data

    

    const directClick = () => {
        window.location.href = navLinks[url].url
    }

    const position = `${whatPosition}`

    return(
        <div className="w-full h-full my-10 py-1">
            <div className="drop-shadow-lg">
            <div className="flex flex-row justify-center">
                {whatPosition ? <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                                    <div className="w-11/12 sm:w-1/2 h-full">
                                    {photos.map((photos, index) => (
                                        index === src && (
                                        <Image key={index} src={photos.url} alt={photos.alt} width={400} height={300} className="w-full h-full rounded-t-3xl sm:rounded-r-none sm:rounded-l-3xl"/>
                                    )
                                    ))}
                                    </div>
                                    <div className={`w-11/12 sm:w-1/2 h-full ${background} rounded-b-3xl sm:rounded-l-none sm:rounded-r-3xl`}>
                                        <div className="flex flex-col p-8">
                                            <div className="text-justify">
                                                {label}
                                            </div>
                                            <div className="flex justify-end">
                                                <Button label="Saiba mais" onClick={directClick} background="bg-green-400" wSize="w-full" hSize="h-1/4" smWSize="sm:w-1/3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-center">
                                    <div className={`w-11/12 sm:w-1/2 h-full ${background} rounded-b-3xl sm:rounded-r-none sm:rounded-l-3xl`}>
                                        <div className="flex flex-col p-8">
                                            <div className="text-justify">
                                                {label}
                                            </div>
                                            <div className="flex justify-start">
                                                <Button label="Saiba mais" onClick={directClick} background="bg-green-400" wSize="w-full" hSize="h-1/4" smWSize="sm:w-1/3"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-11/12 sm:w-1/2 h-full">
                                    {photos.map((photos, index) => (
                                        index === src && (
                                        <Image key={index} src={photos.url} alt={photos.alt} width={400} height={300} className="w-full h-full rounded-t-3xl sm:rounded-l-none sm:rounded-r-3xl"/>
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