"use client"

import CardSimple from "@/app/components/cardSimple/cardsimple";
import Slider from "@/app/components/sliderImages/slider";

const Serviços = () => {

    function wppChalé() {
        window.open("https://api.whatsapp.com/send/?phone=5519971240437&text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20mais%20detalhes%20sobre%20a%20hospedagem%20no%20chal%C3%A9%20do%20hotel.%20Poderiam%20me%20informar%20sobre%20as%20comodidades,%20disponibilidade%20e%20tarifas?%20Estou%20planejando%20uma%20estadia%20relaxante%20e%20adoraria%20considerar%20essa%20op%C3%A7%C3%A3o.&type=phone_number&app_absent=0", "_blank")
    }

    const wppSuite = () => {
        window.open("https://api.whatsapp.com/send/?phone=5519971240437&text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20mais%20detalhes%20sobre%20a%20hospedagem%20no%20suite%20do%20hotel.%20Poderiam%20me%20informar%20sobre%20as%20comodidades,%20disponibilidade%20e%20tarifas?%20Estou%20planejando%20uma%20estadia%20relaxante%20e%20adoraria%20considerar%20essa%20op%C3%A7%C3%A3o.&type=phone_number&app_absent=0", "_blank")
    }

    const labels = [
        { label: "Estacionamento gratuito" },
        { label: "Piscinas" },
        { label: "Academia" },
        { label: "Bar" },
        { label: "Restaurante" },
        { label: "Prainha" },
        { label: "Caiques" },
        { label: "Redes de descanso" },
        { label: "Sala de jogos" },
        { label: "Tv via satelite" },
        { label: "Campo de futebol" },
        { label: "Campo de volei" },
        { label: "Pesca no lago" },
        { label: "Pensão completa" }
    ]

    return (
        <div className="w-screen bg-center bg-[url('/images/testefundo2.png')]">
        <div className="max-w-screen-lg mx-auto">

            <div className="grid grid-cols-5 gap-3 my-10 py-10">
                {labels.map((labels, index) => (
                    <CardSimple key={index} label={labels.label} />
                ))}
            </div>
            
            <div className="my-10 py-10">
                <h1 className="text-6xl text-blue-500 font-Caveat">Atividades Externa</h1>
                <Slider constSrc="photosExterna"/>
            </div>
            
            <div className="my-10 py-10">
                <h1 className="text-6xl text-blue-500 font-Caveat">Espaços para Alimentação</h1>
                <Slider constSrc="photosAlimentacao"/>
            </div>

            <div className="my-10 py-10">
                <h1 className="text-6xl text-blue-500 font-Caveat">Pensão completa</h1>
                <Slider constSrc="photosComida"/>
            </div>
        </div>
    </div>
    );
}

export default Serviços;