'use client'

import Data from "./components/data/data.json";
import Slider from "./components/slider/slider";
import Image from "next/image";
import Button from "./components/button/button";
import CardService from "./components/cardService/cardService";
import CardQuarto from "./components/cardQuartos/cardQuartos";
import RedesSociais from "./components/redesSociais/redesSociais";

export default function Home() {

  const { logo, photos } = Data

  const handleClick = () => {
    console.log('aoba')
  }

  return (
    <main>
      <Slider />
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center sm:flex-row sm:justify-evenly my-20 p-2">
          <div className="relative">
            <Image src={logo.imgHome.src} alt={logo.imgHome.alt} width={300} height={450} className="w-2/3 h-3/4" />
            <div className="bg-blue-400 w-2/3 h-full absolute top-4 -left-4 -z-10" />
          </div>
          <div className="w-11/12 sm:w-1/2 h-full p-3 m-3">
            <div className="flex flex-col text-justify">
              Localizado à beira do lago, o Hotel Marina do Lago oferece conforto e qualidade com foco na preservação ambiental. Proporciona uma experiência íntima com a natureza, lazer, entretenimento e diversas opções de hospedagem. Nosso objetivo é garantir a satisfação dos clientes com serviços de excelência e responsabilidade ambiental. Buscamos ser reconhecidos nacionalmente por nossa excelência em turismo, conforto e segurança, mantendo harmonia com a natureza, e valorizamos segurança, qualidade de vida, profissionalismo, ética, atendimento personalizado e responsabilidade socioambiental.
            </div>
            <div className="flex flex-row justify-end">
              <Button label="Entre em contato" onClick={handleClick} background="bg-green-400" wSize="w-full" smWSize="sm:w-1/3" />
            </div>
          </div>
        </div>

        <CardQuarto leftPosition={true} isImage={true} indexNumber={0} title="Prainha" subTitle="Lazer garantido" label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza."/>

        <CardQuarto leftPosition={false} isImage={true} indexNumber={1} title="Chalé" subTitle="Tipo suiço" label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza."/>

        <CardQuarto leftPosition={true} isImage={true} indexNumber={2} title="Área Kids" subTitle="Nosso 'quintal' " label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza."/>

        <CardQuarto leftPosition={false} isImage={true} indexNumber={3} title="Day Use" subTitle="Tenha um dia maravilhoso" label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza."/>

        <CardQuarto leftPosition={true} isImage={true} indexNumber={4} title="Eventos" subTitle="Espaço incrivel para eventos" label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza."/>

      <div id="contato" className="min-h-screen mt-4 p-1">
                <div className="mx-auto max-w-screen-lg">
                <div className="flex flex-col items-center">
                    <Image src={logo.logoImagem.src} alt={logo.logoImagem.alt} width={270} height={270} />
                    <RedesSociais />
                    <div className="flex flex-col items-center m-2 p-1">
                            <p>Av. Rodolpho Morelli, 2016</p>
                            <p>Zona Rural, Santa Cruz da Conceição - SP</p>
                            <p> CEP-13629-022</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118267.54058485657!2d-47.554339932599454!3d-22.131288421826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7e28d80df514f%3A0xb31327fae98d4f34!2sHotel%20Marina%20do%20Lago!5e0!3m2!1spt-BR!2sbr!4v1723134597327!5m2!1spt-BR!2sbr" width="600" height="300" className="w-11/12" loading="lazy"></iframe>
                </div>
                </div>
            </div>
      
      </div>
    </main>
  );
}
