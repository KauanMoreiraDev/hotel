import Data from "@/app/components/data/data.json";
import Link from "next/link";
import Image from "next/image";
import RedesSociais from "@/app/components/redesSociais/redesSociais";

interface footerProps {
    background?: string;
    textColor?: string;
    wSize?: string;
    hSize?: string;
}

const Footer = ({
    background = 'bg-black',
    textColor = 'text-white',
    wSize = 'w-screen',
    hSize = 'h-full',
}: footerProps) => {

    const { logo, navLinks, institucional } = Data

    return (
        <footer className={`${background} ${textColor} ${wSize} ${hSize}`} >
            <div className="mx-auto max-w-screen-lg min-h-full p-5">
                <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-start sm:space-x-5">
                    <div className="flex flex-col items-center sm:items-start text-black font-medium">
                        <Image src={logo.logoPadrão.src} alt={logo.logoPadrão.alt} width={350} height={350} className="px-1" />
                        <p>Av. Rodolpho Morelli, 2016</p>
                        <p>Zona Rural, Santa Cruz da Conceição - SP</p>
                        <p> CEP-13629-022</p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start p-2">
                        {navLinks.map((navfn, index) => (
                            <Link key={index} href={navfn.url} className=" m-1">{navfn.label}</Link>
                        ))}
                    </div>
                    <div className="flex flex-col items-center sm:items-start p-2">
                        {institucional.map((institucional, index) => (
                            <Link key={index} href={institucional.url} target="_blank" className=" m-1">{institucional.label}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-3">
                <p>(19) 97124-0437</p>
                <RedesSociais sizeIcon="text-3xl" sizeIconSm="text-xl" textColor="text-black" />

                <p>Todos os direitos reservados 2024</p>
                <Link href="https://portfoliokdev.netflify.app" target="_blank" className="font-medium text-lg text-black hover:text-violet-700">Desenvolvido por Kdev</Link>
            </div>

        </footer>
    );
}

export default Footer;