import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RedesSociais() {

const contato = [{
    nome: "Whatsapp",
    link: "https://www.linkedin.com/in/kauan-moreira-a5449426a/",
    image: "/images/redesIcon/whatsapp.png"
  },
  {
    nome: "Instagram",
    link: "https://github.com/KauanMoreiraDev",
    image: "/images/redesIcon/instagram.png"
  },
  {
    nome: "Facebook",
    link: "https://instagram.com/kauannmoreira_",
    image: "/images/redesIcons/facebook.png"
  },
  {
    nome: "Email",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=kauanmoreira457@gmail.com&tf=cm",
    image: "/images/redesIcon/email.png"
  }]

  return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-center gap-3 p-1 ">
          {contato.map((cttfn, index) => (
            <Link key={index} href={cttfn.link} target="_blank" className="rounded-full hover:bg-primary hover:scale-110">
              <Image src={cttfn.image} alt={cttfn.nome} width={40} height={40} className="" /></Link>
          ))}
        </div>
      </div>
  );
}