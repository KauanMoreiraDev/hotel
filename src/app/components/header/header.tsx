import Image from "next/image";
import Data from "@/app/components/data/data.json";
import Link from "next/link";

interface headerProps {
    background? : string;
    textColor? : string;
    wSize? : string;
    hSize? : string;
}

const Header = ({
    background = 'bg-slate-500',
    textColor = 'text-black',
    wSize = 'w-screen',
    hSize = 'h-14',
}: headerProps ) => {

    const { sitemap, navLinks } = Data;
      

    return(
        <header className={`sticky top-0 z-10 ${background} ${textColor} ${wSize} ${hSize}`} >
            <div className="mx-auto max-w-screen-lg h-full">
                <div className="flex flex-row justify-between items-center py-5">
                    <Link href={sitemap.logo.url}>
                        <Image src={sitemap.logo.src} alt={sitemap.logo.alt} width={200} height={100} />
                    </Link>
                    <div className="flex flex-row space-x-5 ">
                        {navLinks.map((navfn ,index) => (
                            <Link key={index} href={navfn.url}>{navfn.label}</Link>
                        ))}
                    </div>
                </div>  
            </div>
        </header>
    );
}

export default Header;