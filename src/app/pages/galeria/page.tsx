import Image from "next/image";

const Galeria = () => {
    return(
        <div className="w-screen bg-[url('/images/testefundo2.png')] bg-center">
        <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col items-center mt-4 p-2">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-10">
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                    <Image src="/images/chalé.png" alt="teste" width={600} height={450} className="w-full h-full"/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Galeria;