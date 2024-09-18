'use client'

import Button from "@/app/components/button/button";
import Image from "next/image";
import CardQuartos from "@/app/components/cardQuartos/cardQuartos";


const LadingPage = () => {

    const handleClick = () => {
        console.log("Function not implemented.")
    }

    return (
        <main className="mx-auto max-w-screen-lg ">
            <CardQuartos onclick={handleClick} titleFont="font-Caveat" titleColor="text-white" titleLabel="Chalé" backgroundColor="bg-blue-400" label="Chalé suíço exclusivo, perfeito para até 7 pessoas, com opção de camas extras. Combine conforto rústico com uma vista deslumbrante e momentos inesquecíveis."/>

            <CardQuartos onclick={handleClick} titleFont="font-Caveat" titleColor="text-white" titleLabel="Suíte" backgroundColor="bg-blue-400" label="Desfrute do conforto e elegância da nossa suíte, projetada para proporcionar momentos inesquecíveis. Relaxe em um ambiente sofisticado, com todas as comodidades que você merece."/>

            <CardQuartos onclick={handleClick} titleFont="font-Caveat" titleColor="text-white" titleLabel="Palestras" backgroundColor="bg-blue-400" label="Desfrute do conforto e elegância da nossa suíte, projetada para proporcionar momentos inesquecíveis. Relaxe em um ambiente sofisticado, com todas as comodidades que você merece."/>

            <CardQuartos onclick={handleClick} titleFont="font-Caveat" titleColor="text-white" titleLabel="Eventos" backgroundColor="bg-blue-400" label="Desfrute do conforto e elegância da nossa suíte, projetada para proporcionar momentos inesquecíveis. Relaxe em um ambiente sofisticado, com todas as comodidades que você merece."/>
            
        </main>
    );
}

export default LadingPage;