import Data from "@/app/components/data/data.json";
import Image from "next/image";
import RedesSociais from "@/app/components/redesSociais/redesSociais";

const About =  () => {

    const { logo } = Data

    return(
        <div className="mx-auto max-w-screen-lg">
            <div className="p-7">
                <h1 className="font-Caveat text-blue-500 text-6xl mb-5">Quem somos?</h1>
                <p>
                O Hotel Marina do Lago, situado à beira do lago, oferece uma experiência única que combina conforto e respeito pelo meio ambiente. Proporcionamos lazer e descanso em acomodações de excelência, sempre com foco na preservação ambiental e na satisfação dos nossos hóspedes. Buscamos ser referência no turismo nacional, destacando-nos pelo conforto, segurança e harmonia com a natureza. Valorizamos qualidade de vida, ética e atendimento personalizado, mantendo nosso compromisso com a responsabilidade socioambiental. No Hotel Marina do Lago, cada detalhe é pensado para tornar sua estadia memorável.
                </p>
            </div>
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
    );
}

export default About;