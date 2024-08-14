'use client'

import Data from "./components/data/data.json";
import SliderChale from "./components/slider Chalé/slider"
import Image from "next/image";
import Button from "./components/button/button";
import CardService from "./components/cardService/cardService";
import CardServicos from "./components/cardServiços/cardservicos";
import CardQuarto from "./components/cardQuartos/cardQuartos";
import CardSimple from "./components/cardSimple/cardsimple";
import RedesSociais from "./components/redesSociais/redesSociais";

export default function Home() {

  const { logo, photos } = Data

  const handleClick = () => {
    console.log('aoba')
  
  }
  const GoToSobreNos = () => {
    window.location.href = ("/pages/sobre_nos")
  }

  const GoToAcomodacoes = () => {
    window.location.href = ("/pages/acomodacoes")
  }

  const GoToServicos = () => {
    window.location.href = ("/pages/servicos")
  }

  return (
    <main>
      <div className="inicio relative w-screen h-[80vh]">
        <div className="absolute inset-0 bg-[url('/images/testefundo.png')] bg-cover opacity-70"></div>
        <div className="relative flex flex-col justify-center items-center w-full min-h-full z-10">

          <Image src={"/images/logo.png"} alt="" width={1200} height={1200} className="w-1/3 h-1/3 py-8" />
          <RedesSociais />
          <Button onClick={handleClick} label="Reservar já" background="bg-green-400" backgroundHover="hover:bg-blue-600"/>

        </div>
      </div>

      <div className="w-screen bg-[url('/images/testefundo2.png')] bg-center">
      <div className="Apresentação mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center sm:flex-row sm:justify-evenly my-20 p-2">
          <div className="relative">
            <Image src={logo.imgHome.src} alt={logo.imgHome.alt} width={300} height={450} className="w-2/3 h-3/4" />
            <div className="bg-blue-400 w-2/3 h-full absolute top-4 -left-4 -z-10" />
          </div>
          <div className="w-11/12 sm:w-1/2 h-full p-3 m-3">
            <div className="flex flex-col text-justify text-lg">
              Localizado à beira do lago, o Hotel Marina do Lago oferece conforto e qualidade com foco na preservação ambiental. Proporciona uma experiência íntima com a natureza, lazer, entretenimento e diversas opções de hospedagem. Nosso objetivo é garantir a satisfação dos clientes com serviços de excelência e responsabilidade ambiental. Buscamos ser reconhecidos nacionalmente por nossa excelência em turismo, conforto e segurança, mantendo harmonia com a natureza, e valorizamos segurança, qualidade de vida, profissionalismo, ética, atendimento personalizado e responsabilidade socioambiental.
            </div>
            <div className="flex flex-row justify-end">
              <Button label="Entre em contato" onClick={GoToSobreNos} background="bg-green-400" backgroundHover="hover:bg-blue-500" wSize="w-full" smWSize="sm:w-1/3" />
            </div>
          </div>
        </div>
      </div>

      <iframe src="https://calendar.google.com/calendar/embed?src=testekdev%40gmail.com&ctz=America%2FSao_Paulo" className="mx-auto max-w-screen-lg" width="800" height="600" scrolling="no"></iframe>

      <div className="Atributos hotel mx-auto max-w-screen-lg">
        <SliderChale />
        <div className="flex flex-row justify-center p-2 m-1">
          <Button onClick={GoToServicos} label="Ver todos os serviços" background="bg-green-500" backgroundHover="hover:bg-blue-500" wSize="1/2" />
        </div>
      </div>

      </div>

      <div className="Locais hotel bg-blue-300 w-screen ">
      <div className="bg-[url('/images/testefundoazul.png')] bg-contain w-screen ">
        <div className="grid grid-cols-3 max-w-screen-lg mx-auto">
          <CardServicos backgroundColor="bg-white" hover="hover:bg-blue-600" titleFont="font-Caveat" titleLabel="Chalés" titleColor="text-blue-500" colorButoon="bg-blue-400" label="Nosso Chalé é do tipo Suíço e bem aconchegante"  onclick={GoToAcomodacoes} />

          <CardServicos backgroundColor="bg-white" hover="hover:bg-blue-600" titleFont="font-Caveat" titleLabel="Suítes" titleColor="text-blue-500" colorButoon="bg-blue-400" label="Nossas suítes trazem o conforto que você precisa para relaxar" onclick={GoToAcomodacoes} />

          <CardServicos backgroundColor="bg-white" hover="hover:bg-blue-600" titleFont="font-Caveat" titleLabel="Day Use" titleColor="text-blue-500" colorButoon="bg-blue-400" label="Desfrute de nossos serviços pagando uma singela diária" onclick={GoToAcomodacoes} />

          <CardServicos backgroundColor="bg-white" hover="hover:bg-blue-600" titleFont="font-Caveat" titleLabel="Palestras" titleColor="text-blue-500" colorButoon="bg-blue-400" label="Sala ampla com carteiras para sua palestra" onclick={GoToAcomodacoes} />

          <CardServicos backgroundColor="bg-white" hover="hover:bg-blue-600" titleFont="font-Caveat" titleLabel="Eventos" titleColor="text-blue-500" colorButoon="bg-blue-400" label="Utilize do nosso espaço para ter as melhroes fotos do seu evento" onclick={GoToAcomodacoes} />
        </div>
        <div className="flex flex-col items-center my-10">
          <Button onClick={handleClick} label="Ver todos as acomodações" background="bg-green-500" backgroundHover="hover:bg-blue-600" wSize="1/2" />
        </div>
      </div>
      </div>

      <div id="contato" className="mx-auto max-w-screen-lg">
        <div className="min-h-screen mt-4 p-1">
          <div className="mx-auto max-w-screen-lg">
            <div className="flex flex-col items-center">
              <Image src={logo.logoImagem.src} alt={logo.logoImagem.alt} width={270} height={270} className="my-3" />
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
