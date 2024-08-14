import Image from "next/image";

interface CardProps{
    background?: string;
    width?: string;
    img?: string;
    label: string
}

const CardSimple = ({ background = "bg-blue-300", width = "w-full",img, label = "Seu texto aqui"}: CardProps) => {
    return(
        <div className={`${background} shadow-xl rounded-3xl p-2 m-2 h-full ${width}`}>
          <div className="flex flex-col items-center">
            <Image src={"/images/logo 1.png"} alt="aafa" width={200} height={200} className="w-1/2 h-1/2 p-1 m-1" />
            <p className="text-lg w-1/2 h-14 text-center">{label}</p>
          </div>
        </div>
    );
}

export default CardSimple;