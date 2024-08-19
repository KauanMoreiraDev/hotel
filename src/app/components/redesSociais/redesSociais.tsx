import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IconProps {
  sizeIcon?: string;
  sizeIconSm?: string;
  textColor?: string
}

export default function RedesSociais({
  sizeIcon = "text-3xl",
  sizeIconSm, textColor = "text-lime-500"
}: IconProps) {
  const contato = [
    {
      nome: "Whatsapp",
      link: "https://api.whatsapp.com/send/?phone=5519971240437&text&type=phone_number&app_absent=0",
      icon: `fi fi-brands-whatsapp ${sizeIcon}`,
      iconSm: `fi fi-brands-whatsapp ${sizeIcon}`,
    },
    {
      nome: "Instagram",
      link: "https://www.instagram.com/hotel.marina.do.lago.oficial/",
      icon: `fi fi-brands-instagram ${sizeIcon}`,
      iconSm: `fi fi-brands-instagram ${sizeIcon}`,
    },
    {
      nome: "Facebook",
      link: "https://www.facebook.com/hotelmarinadolago",
      icon: `fi fi-brands-facebook ${sizeIcon}`,
      iconSm: `fi fi-brands-facebook ${sizeIcon}`,
    },
    {
      nome: "Email",
      link: "https://mail.google.com/mail/u/0/?fs=1&to=contato@hotelmarinadolago.com.br&tf=cm",
      icon: `fi fi-rr-envelope ${sizeIcon}`,
      iconSm: `fi fi-rr-envelope ${sizeIcon}`,
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="block sm:hidden">
        <div className="flex flex-row justify-center gap-3 p-1 py-2">
          {contato.map((cttfn, index) => (
            <Link
              key={index}
              href={cttfn.link}
              target="_blank"
              className="rounded-full text-black hover:text-slate-800 hover:scale-125">
              <i className={cttfn.icon} />
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-row justify-center gap-3 p-1 py-2 ">
          {contato.map((cttfn, index) => (
            <Link
              key={index}
              href={cttfn.link}
              target="_blank"
              className={`rounded-full ${textColor} hover:text-slate-800 hover:scale-125`}>
              <i className={cttfn.iconSm} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
