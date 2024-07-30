import Data from "/Users/Kauan/Desktop/code/next.js/components genericos/public/data/data.json"
import Link from "next/link";
import Image from "next/image";

interface footerProps {
    background? : string;
    textColor? : string;
    wSize? : string;
    hSize? : string;
}

const Footer = ({
    background = 'bg-black',
    textColor = 'text-white',
    wSize = 'w-screen',
    hSize = 'h-full',
}: footerProps ) => {

    const { sitemap, contatos } = Data

    return(
        <footer className={`${background} ${textColor} ${wSize} ${hSize}`} >
            <div className="mx-auto max-w-screen-lg h-64">
                <div className="flex flex-col justify-center items-center">
                <div className= "flex flex-row justify-center items-center">
                    <div className="flex flex-row space-x-12">
                        <Image src={sitemap.logo.src} alt={sitemap.logo.alt} width={120} height={120} className="bg-lime-500"/>
                        <div className="flex flex-col items-center m-1">
                            <p>Intitucional</p>
                            {sitemap.navLinks.map((navfn, index) => (
                                <Link href={navfn.url}>{navfn.label}</Link>
                            ))}
                        </div>
                        <div className="flex flex-col items-center p-2 m-1">
                            <p>Entre em Contato</p>
                            {contatos.map((cttfn, index) => (
                                <Link href={cttfn.url}>{cttfn.nameRede}</Link>
                            ))}
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