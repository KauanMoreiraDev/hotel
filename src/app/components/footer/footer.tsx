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

    const { sitemap, navLinks } = Data

    return (
        <footer className={`${background} ${textColor} ${wSize} ${hSize}`} >
            <div className="mx-auto max-w-screen-lg min-h-full mt-3 p-5">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-row space-x-12">
                            <div className="flex flex-col items-center">
                                <Image src={sitemap.logo.src} alt={sitemap.logo.alt} width={350} height={350} className="" />
                                <p>rua x, nuemro y cidade z</p>
                                <p>cep- 123791373766</p>
                            </div>
                            <div className="flex flex-col items-center m-1">
                                <p className="text-xl">Intitucional</p>
                                {navLinks.map((navfn, index) => (
                                    <Link key={index} href={navfn.url}>{navfn.label}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-xl">Trabalhe Conosco</p>
                                <p>Parcerias</p>
                                <p>Termos de uso</p>
                                <p>Politica</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-xl">Informações</p>
                                <p>791373766</p>
                                <RedesSociais />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center m-2 p-1">
                        <p>Todos os direitos reservados 2024</p>
                        <p>Desenvolvido por Kdev</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;