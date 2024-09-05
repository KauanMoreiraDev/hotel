'use client'

import Data from "./components/data/data.json";
import Slide from "./components/slide/slider"
import Image from "next/image";
import Button from "./components/button/button";
import CardServicos from "./components/cardServiços/cardservicos";
import RedesSociais from "./components/redesSociais/redesSociais";
import SliderDepoimentos from "./components/slideDepoimentos/slider";

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
      <div className="inicio relative w-screen h-[90vh]">
        <div className="absolute inset-0 bg-[url('/images/drone1.jpg')] bg-cover blur-sm"></div>
        <div className="relative flex flex-col justify-center items-center w-full min-h-full z-10">

          <Image src={"/images/logo.png"} alt="" width={1200} height={1200} className="w-4/5 h-4/5 sm:w-1/3 sm:h-1/3 py-8" />
          <RedesSociais textColor="text-slate-950" />
          <Button onClick={handleClick} label="Reservar já" background="bg-blue-500" backgroundHover="hover:bg-blue-600" textColor="text-white" textSize="font-semibold" wSize="w-1/2" smWSize="sm:w-2/12"/>

        </div>
      </div>

      <div className="Apresentação mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center sm:flex-row sm:justify-evenly py-16">
          <div className="relative">
            <Image src={logo.imgHome.src} alt={logo.imgHome.alt} width={300} height={450} className="w-4/5 h-full mx-auto sm:mx-0" />
            <div className="bg-blue-400 w-4/5 h-full absolute top-8 left-4 sm:top-4 sm:-left-4 -z-10" />
          </div>
          <div className="w-11/12 sm:w-1/2 h-full">
            <div className="flex flex-col text-justify text-base bg-white rounded-3xl mt-10 sm:mt-0">
              Localizado à beira do lago, o Hotel Marina do Lago oferece conforto e qualidade com foco na preservação ambiental. Proporciona uma experiência íntima com a natureza, lazer, entretenimento e diversas opções de hospedagem. Nosso objetivo é garantir a satisfação dos clientes com serviços de excelência e responsabilidade ambiental. Buscamos ser reconhecidos nacionalmente por nossa excelência em turismo, conforto e segurança, mantendo harmonia com a natureza, e valorizamos segurança, qualidade de vida, profissionalismo, ética, atendimento personalizado e responsabilidade socioambiental.
            </div>
            <div className="flex flex-row justify-end">
              <Button label="Entre em contato" onClick={GoToSobreNos} background="bg-green-400" backgroundHover="hover:bg-blue-500" wSize="w-full" smWSize="sm:w-1/3" />
            </div>
          </div>
        </div>

        {/* <iframe src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3mIPT8Dei1zonWkvM1CG1sWaRNHtbohl2zRrNRoLAxehvgDPixTpY7nOjSohrRvnbkfMC-KBrp" className="mx-auto max-w-screen-lg overflow-auto bg-green-400 rounded-3xl" width="1000" height="600"  scrolling="yes"></iframe> */}

        <Slide />
        <div className="button">
          <div className="flex flex-row justify-center py-5">
            <Button onClick={GoToServicos} label="Ver todos os serviços" textColor="text-white" textSize="font-semibold" background="bg-blue-400" backgroundHover="hover:bg-blue-600" wSize="1/2" />
          </div>
        </div>
      </div>

      <div className="Locais hotel bg-blue-300 w-screen ">
        <div className="bg-[url('/images/testefundoazul.png')] bg-cover bg-center w-screen ">
          <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
            
            <CardServicos backgroundColor="bg-white" hover="hover:bg-blue-600" titleFont="font-Caveat" titleLabel="Chalés" titleColor="text-blue-500" colorButoon="bg-blue-400" label="Nosso Chalé é do tipo Suíço e bem aconchegante" onclick={GoToAcomodacoes} />

            <CardServicos backgroundColor="bg-white" hover="hover:bg-blue-600" titleFont="font-Caveat" titleLabel="Suítes" titleColor="text-blue-500" colorButoon="bg-blue-400" label="Nossas suítes trazem o conforto que você precisa para relaxar" onclick={GoToAcomodacoes} />

            <CardServicos backgroundColor="bg-white" hover="hover:bg-yellow-600" titleFont="font-Caveat" titleLabel="DayUse" titleColor="text-yellow-500" colorButoon="bg-yellow-500" label="Desfrute de nossos serviços pagando uma singela diária" onclick={GoToAcomodacoes} />

            <CardServicos backgroundColor="bg-white" hover="hover:bg-gray-600" titleFont="font-Caveat" titleLabel="Palestras" titleColor="text-gray-400" colorButoon="bg-gray-400" label="Sala ampla com carteiras para sua palestra" onclick={GoToAcomodacoes} />

            <CardServicos backgroundColor="bg-white" hover="hover:bg-green-600" titleFont="font-Caveat" titleLabel="Eventos" titleColor="text-green-500" colorButoon="bg-green-400" label="Utilize do nosso espaço para ter as melhores fotos do seu evento" onclick={GoToAcomodacoes} />
          </div>
          <div className="flex flex-col items-center py-10">
            <Button onClick={handleClick} label="Ver todos as acomodações" background="bg-white" textSize="font-semibold" backgroundHover="hover:bg-slate-400" wSize="1/2" />
          </div>
        </div>
      </div>

      <div id="contato" className="mx-auto max-w-screen-lg my-3">

        <SliderDepoimentos />

        <div className="flex justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118267.54058485657!2d-47.554339932599454!3d-22.131288421826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7e28d80df514f%3A0xb31327fae98d4f34!2sHotel%20Marina%20do%20Lago!5e0!3m2!1spt-BR!2sbr!4v1723134597327!5m2!1spt-BR!2sbr" width="600" height="300" className="w-11/12" loading="lazy"></iframe>
        </div>
      </div>


    </main>
  );
}
