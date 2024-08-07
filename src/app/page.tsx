'use client'

import Data from "./components/data/data.json";
import Slider from "./components/slider/slider";
import Image from "next/image";
import Button from "./components/button/button";
import CardService from "./components/cardService/cardService";
import RedesSociais from "./components/redesSociais/redesSociais";

export default function Home() {

  const ft = "/images/o hotel.jpg"
  const ft1 = "/images/logo 1.png"


  const handleClick = () => {
    console.log('aoba')
  }

  return (
    <main>
      <Slider />
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-row justify-evenly my-20 p-2">
          <div className="relative">
            <Image src={ft} alt="teste" width={300} height={450} />
            <div className="bg-blue-400 w-[300px] h-[375px] absolute top-4 right-4 -z-10" />
          </div>
          <div className="w-1/2 h-full p-2">
            <div className="flex flex-col text-justify">
              Localizado à beira do lago, o Hotel Marina do Lago oferece conforto e qualidade com foco na preservação ambiental. Proporciona uma experiência íntima com a natureza, lazer, entretenimento e diversas opções de hospedagem. Nosso objetivo é garantir a satisfação dos clientes com serviços de excelência e responsabilidade ambiental. Buscamos ser reconhecidos nacionalmente por nossa excelência em turismo, conforto e segurança, mantendo harmonia com a natureza, e valorizamos segurança, qualidade de vida, profissionalismo, ética, atendimento personalizado e responsabilidade socioambiental.
            </div>
            <div className="flex flex-row justify-end">
              <Button label="Entre em contato" onClick={handleClick} background="bg-green-400" wSize="w-1/3" />
            </div>
          </div>
        </div>
      <CardService
        src={1}
        url={0}
        background="bg-blue-400"
        whatPosition={true}
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas cumque possimus alias aspernatur eum, voluptatibus officia maiores, facere exercitationem, doloribus fuga laudantium corrupti placeat at optio eius qui enim." />

      <CardService
        src={5}
        url={0}
        background="bg-blue-400"
        whatPosition={false}
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas cumque possimus alias aspernatur eum, voluptatibus officia maiores, facere exercitationem, doloribus fuga laudantium corrupti placeat at optio eius qui enim." />

      <CardService
        src={3}
        url={3}
        background="bg-blue-400"
        whatPosition={true}
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas cumque possimus alias aspernatur eum, voluptatibus officia maiores, facere exercitationem, doloribus fuga laudantium corrupti placeat at optio eius qui enim." />

      <CardService
        src={4}
        url={3}
        background="bg-blue-400"
        whatPosition={false}
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas cumque possimus alias aspernatur eum, voluptatibus officia maiores, facere exercitationem, doloribus fuga laudantium corrupti placeat at optio eius qui enim." />

        <div id="contato" className="min-h-screen mt-4 p-1">
                <div className="mx-auto max-w-screen-lg">
                <div className="flex flex-col items-center">
                    <Image src={ft1} alt="logo" width={270} height={270} />
                    <RedesSociais />
                    <div className="flex flex-col items-center m-2 p-1">
                    <p>rua w, numero x , cidade y</p>
                    <p>cep-135698540</p>
                    </div>
                    <div className="bg-lime-500 w-80 h-52" />
                </div>
                </div>
            </div>
      
      </div>
    </main>
  );
}
