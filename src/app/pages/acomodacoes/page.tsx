'use client'

import Button from "@/app/components/button/button";
import Image from "next/image";
import CardServiços from "@/app/components/cardServiços/cardservicos";


const LadingPage = () => {

    const handleClick = () => {
        console.log("Function not implemented.")
    }

    return (
        <main className="mx-auto max-w-screen-lg">
            <div className="bg-slate-200 w-full h-full ">
                <div className="grid grid-cols-2">
                    
                        <CardServiços backgroundColor="bg-blue-300" srcImage={"/images/chalé.png"} label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza." titleColor="text-blue-600" titleFont="font-Caveat" titleLabel="Chalé Suíço" onclick={handleClick}/>
                    
                        <CardServiços width="w-3/4" backgroundColor="bg-blue-300" srcImage={"/images/suites.png"} label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza." titleColor="text-blue-600" titleFont="font-Caveat" titleLabel="Suítes" onclick={handleClick}/>
                    
                        <CardServiços backgroundColor="bg-blue-300" srcImage={"/images/chalé.png"} label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza." titleColor="text-blue-600" titleFont="font-Caveat" titleLabel="Day use" onclick={handleClick}/>

                        <CardServiços backgroundColor="bg-blue-300" srcImage={"/images/chalé.png"} label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza." titleColor="text-blue-600" titleFont="font-Caveat" titleLabel="Eventos" onclick={handleClick}/>
                </div>
            </div>
        </main>
    );
}

export default LadingPage;