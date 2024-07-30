import Data from "@/app/components/data/data.json";
import Image from "next/image";
import Button from "../button/button";

interface CardServiceProps {
    src?: string,
    background?: string,
    label?: string,
    whatPosition?: boolean
}

const CardService = ({src,
    background= 'bg-blue-900',
    label,
    whatPosition = true
} : CardServiceProps) => {

    const handleClick = () => {
        console.log('saiba mais')
    }

    const position = `${whatPosition}`

    const ft = "/images/praia.jpg"

    return(
        <div className="w-full h-full m-10 p-1">
            <div className="flex flex-row justify-center">
                {whatPosition ? <div className="flex flex-row justify-center">
                                    <div className="w-1/2 h-full">
                                        <Image src={ft} alt="bla" width={400} height={300} className="w-full h-full rounded-l-3xl"/>
                                    </div>
                                    <div className={`w-1/2 ${background} rounded-r-3xl`}>
                                        <div className="flex flex-col p-8">
                                            <div className="text-justify">
                                                {label}
                                            </div>
                                            <Button label="Saiba mais" onClick={handleClick} background="bg-green-400" wSize="w-1/3" hSize="h-1/4"/>
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
                                            <Button label="Saiba mais" onClick={handleClick} background="bg-green-400" wSize="w-1/3" hSize="h-1/4"/>
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-full">
                                        <Image src={ft} alt="bla" width={400} height={300} className="w-full h-full rounded-r-3xl"/>
                                    </div>
                                </div>}
            </div>
        </div>
    );
}

export default CardService