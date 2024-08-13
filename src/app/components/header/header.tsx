'use client'

import Image from "next/image";
import Data from "@/app/components/data/data.json";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

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

    const { logo, navLinks } = Data;

    const [open, setOpen] = useState(true)

    const navClose = () => {
        setOpen(true)
    }      

    return(
        <header className={`sticky top-0 z-50 ${background} ${textColor} ${wSize} ${hSize}`} >
            <div className="mx-auto max-w-screen-lg h-full">
                <div className="flex flex-row justify-between items-center py-5">
                    <Link href={logo.logoPadrão.url} className="mx-2">
                        <Image src={logo.logoPadrão.src} alt={logo.logoPadrão.alt} width={200} height={100} />
                    </Link>

                    <div className="block sm:hidden">
                        <button onClick={() => setOpen(!open)} className="z-10 flex items-center justify-center w-10 h-10 fixed top-1 right-0 m-4">
                                    <div className={`transition-transform duration-1000 ${open ? 'rotate-180' : ''}`}>
                                        {open ? <HamburgerMenuIcon className="w-10 h-10" /> : <Cross1Icon className="w-10 h-10" />}
                                    </div>
                                </button>
                                {!open && (
                                        <div className="w-screen h-screen">
                                            <div className="bg-blue-300 opacity-70 absolute inset-0">

                                                <nav className="flex flex-col items-center space-y-6 py-6">
                                                    <Link href={logo.logoPadrão.url} onClick={navClose}>Início</Link>
                                                    {navLinks.map((navfn ,index) => (
                                                        <Link key={index} href={navfn.url} onClick={navClose}>{navfn.label}</Link>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                    )}
                    </div>


                    <div className="hidden sm:block">
                    <div className="flex flex-row space-x-5 ">
                        {navLinks.map((navfn ,index) => (
                            <Link key={index} href={navfn.url}>{navfn.label}</Link>
                        ))}
                        </div>
                    </div>
                </div>  
            </div>
        </header>
    );
}

export default Header;