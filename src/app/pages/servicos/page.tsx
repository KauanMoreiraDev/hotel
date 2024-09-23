"use client"

import CardSimple from "@/app/components/cardSimple/cardsimple";
import Slider from "@/app/components/sliderImages/slider";

const Serviços = () => {

    // function wppChalé() {
    //     window.open("https://api.whatsapp.com/send/?phone=5519971240437&text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20mais%20detalhes%20sobre%20a%20hospedagem%20no%20chal%C3%A9%20do%20hotel.%20Poderiam%20me%20informar%20sobre%20as%20comodidades,%20disponibilidade%20e%20tarifas?%20Estou%20planejando%20uma%20estadia%20relaxante%20e%20adoraria%20considerar%20essa%20op%C3%A7%C3%A3o.&type=phone_number&app_absent=0", "_blank")
    // }

    // const wppSuite = () => {
    //     window.open("https://api.whatsapp.com/send/?phone=5519971240437&text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20mais%20detalhes%20sobre%20a%20hospedagem%20no%20suite%20do%20hotel.%20Poderiam%20me%20informar%20sobre%20as%20comodidades,%20disponibilidade%20e%20tarifas?%20Estou%20planejando%20uma%20estadia%20relaxante%20e%20adoraria%20considerar%20essa%20op%C3%A7%C3%A3o.&type=phone_number&app_absent=0", "_blank")
    // }

    const labels = [
        {   icons: "/images/servicos/icons/pescaria.png",
            label: "Estacionamento" },
        {   icons: "/images/servicos/icons/natacao.png",
            label: "Piscinas" },
        {   icons: "/images/servicos/icons/academia.png",
            label: "Academia" },
        {   icons: "/images/servicos/icons/cerveja.png",
            label: "Bar" },
        {   icons: "/images/servicos/icons/restaurante.png",
            label: "Restaurante" },
        {   icons: "/images/servicos/icons/praia.png",
            label: "Prainha" },
        {   icons: "/images/servicos/icons/pescaria.png",
            label: "Caiques" },
        {   icons: "/images/servicos/icons/pescaria.png",
            label: "Redes de descanso" },
        {   icons: "/images/servicos/icons/bilhar.png",
            label: "Sala de jogos" },
        {   icons: "/images/servicos/icons/televisao.png",
            label: "Tv via satelite" },
        {   icons: "/images/servicos/icons/bola.png",
            label: "Campo de futebol" },
        {   icons: "/images/servicos/icons/voleibol.png",
            label: "Campo de volei" },
        {   icons: "/images/servicos/icons/pescaria.png",
            label: "Pesca no lago" },
        {   icons: "/images/servicos/icons/pescaria.png",
            label: "Pensão completa" }
    ]

    return (
        <div className="max-w-screen-lg mx-auto">

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-10 sm:mt-10 px-5 pb-10 pt-5">
                {labels.map((items, index) => (
                    <CardSimple key={index} label={items.label} icons={items.icons} />
                ))}
            </div>
            
            <div className="my-10 py-10">
                <h1 className="text-6xl bg-white text-blue-500 font-Caveat">Atividades Externa</h1>
                <Slider constSrc="photosExterna" sizeQuarto="h-[40vh] sm:h-[80vh]"/>
            </div>
            
            <div className="my-10 py-10">
                <h1 className="text-6xl bg-white text-blue-500 font-Caveat">Espaços para Alimentação</h1>
                <Slider constSrc="photosAlimentacao" sizeQuarto="h-[40vh] sm:h-[80vh]"/>
            </div>

            <div className="my-10 py-10">
                <h1 className="text-6xl bg-white text-blue-500 font-Caveat">Pensão completa</h1>
                <Slider constSrc="photosComida" sizeQuarto="h-[40vh] sm:h-[80vh]"/>
            </div>
        </div>
    );
}

export default Serviços;