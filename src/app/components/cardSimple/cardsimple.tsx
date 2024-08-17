import Image from "next/image";

interface CardProps{
    background?: string;
    width?: string;
    icons: string;
    label: string
}

const CardSimple = ({ background = "bg-blue-300", width = "w-full",icons, label = "Seu texto aqui"}: CardProps) => {
    return(
        <div className={`${background} shadow-xl rounded-3xl p-2 m-2 h-full ${width}`}>
          <div className="flex flex-col items-center">
            <Image src={icons} alt="aafa" width={200} height={200} className="w-1/3 h-1/3 p-2 rounded-2xl" />
            <p className="text-lg w-1/2 h-1/2 text-center">{label}</p>
          </div>
        </div>
    );
}

export default CardSimple;