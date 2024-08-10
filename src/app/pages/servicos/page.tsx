"use client"

import CardQuarto from "@/app/components/cardQuartos/cardQuartos";

const Serviços = () => {

    function wppChalé () {
        window.open("https://api.whatsapp.com/send/?phone=5519971240437&text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20mais%20detalhes%20sobre%20a%20hospedagem%20no%20chal%C3%A9%20do%20hotel.%20Poderiam%20me%20informar%20sobre%20as%20comodidades,%20disponibilidade%20e%20tarifas?%20Estou%20planejando%20uma%20estadia%20relaxante%20e%20adoraria%20considerar%20essa%20op%C3%A7%C3%A3o.&type=phone_number&app_absent=0", "_blank")
    }

    const wppSuite = () => {
        window.open("https://api.whatsapp.com/send/?phone=5519971240437&text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20mais%20detalhes%20sobre%20a%20hospedagem%20no%20suite%20do%20hotel.%20Poderiam%20me%20informar%20sobre%20as%20comodidades,%20disponibilidade%20e%20tarifas?%20Estou%20planejando%20uma%20estadia%20relaxante%20e%20adoraria%20considerar%20essa%20op%C3%A7%C3%A3o.&type=phone_number&app_absent=0", "_blank")
    }

    return (
        <div className="max-w-screen-lg mx-auto">
            <CardQuarto leftPosition={true} isImage={false} indexNumber={1} title="Chalé" subTitle="Tipo suiço até 7 pessoas" label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza." labelButton="Agendar Hospedagem" onClickButton={wppChalé}/>

            <CardQuarto leftPosition={false} indexNumber={5} title="Suítes" subTitle="Suíte Sol, Lua e Estrela" label="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam asperiores labore earum, ipsam iure commodi incidunt excepturi ad aliquid neque ullam obcaecati numquam dolor maxime sint eum cupiditate modi quos!" labelButton="Agendar Hospedagem" onClickButton={wppSuite}/>
        </div>
    );
}

export default Serviços;