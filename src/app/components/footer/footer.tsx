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
            <div className="mx-auto max-w-screen-lg min-h-full mt-3 p-5">
                        <div className="flex flex-col items-center sm:flex-row sm:space-x-12">
                            <div className="flex flex-col items-center sm:items-start">
                                <Image src={logo.logoAzul.src} alt={logo.logoAzul.alt} width={350} height={350} className="mx-1" />
                                <p>Av. Rodolpho Morelli, 2016</p>
                                <p>Zona Rural, Santa Cruz da Conceição - SP</p>
                                <p> CEP-13629-022</p>
                            </div>
                            <div className="flex flex-col items-center mt-2 m-1 p-2">
                                <p className="text-xl">Sitemap</p>
                                {navLinks.map((navfn, index) => (
                                    <Link key={index} href={navfn.url} className="text-blue-300 m-1">{navfn.label}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col items-center m-1 p-2">
                                <p className="text-xl">Institucional</p>
                                {institucional.map((institucional, index) => (
                                    <Link href={institucional.url} target="_blank" className="text-blue-300 m-1">{institucional.label}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col items-center m-1 p-2">
                                <p className="text-xl">Informações</p>
                                <p>(19) 97124-0437</p>
                                <RedesSociais sizeIcon="text-3xl" sizeIconSm="text-xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <p>Todos os direitos reservados 2024</p>
                        <Link href="https://portfoliokdev.netflify.app" target="_blank" className="text-blue-500 hover:text-blue-700">Desenvolvido por Kdev</Link>
                    </div>
                
        </footer>
    );
}

export default Footer;