'use client'

import Data from "@/app/components/data/data.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"

const { logo, navLinks } = Data

const Header = () => {

    const [open, setOpen] = useState(true);

    const menuMobile = () => {
        setOpen(!open)
    }

    const Close = () => {
        setOpen(!open)
    }

    return (

        <header className={`w-screen sticky top-0 z-50 bg-blue-400`}>

            <div className="Mobile">
                <div className="block sm:hidden">
                    <div className="w-full h-full ">
                        <div className="flex flex-row items-center justify-center py-1">
                            <Link href={logo.logoPadrão.url}>
                                <Image src={logo.logoHeader.src} alt={logo.logoHeader.alt} width={1000} height={1000} className="w-2/5" />
                            </Link>

                            <button onClick={menuMobile} className="z-30 pl-5">
                                {open ? <Menu /> : <X />}
                            </button>
                            {!open && (
                                <div className={`w-screen h-screen absolute top-0 text-white bg-blue-400`}>
                                    <div className="flex flex-col items-center justify-between py-20">
                                        {navLinks.map((items, index) => (
                                            <Link key={index} href={items.url} className="py-3" onClick={menuMobile}>{items.label}</Link>
                                        ))}
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>

            <div className="desktop">
                <div className="hidden sm:block">
                    <div className="mx-auto max-w-screen-lg">
                        <div className="flex flex-row items-center justify-evenly">
                            <Link href={logo.logoPadrão.url} className="w-2/5">
                                <Image src={logo.logoHeader.src} alt={logo.logoHeader.alt} width={1000} height={1000} className="w-3/5" />
                            </Link>
                            <div className="Links">
                                {navLinks.map((items, index) => (
                                    <Link key={index} href={items.url} className="px-3 text-white">{items.label}</Link>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;