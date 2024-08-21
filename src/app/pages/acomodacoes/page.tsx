'use client'

import Button from "@/app/components/button/button";
import Image from "next/image";
import CardQuartos from "@/app/components/cardQuartos/cardQuartos";


const LadingPage = () => {

    const handleClick = () => {
        console.log("Function not implemented.")
    }

    return (
        <main className="mx-auto max-w-screen-lg">
            <CardQuartos onclick={handleClick} />
        </main>
    );
}

export default LadingPage;