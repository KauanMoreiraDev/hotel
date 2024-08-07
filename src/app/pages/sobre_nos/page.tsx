import Data from "@/app/components/data/data.json";
import Image from "next/image";
import RedesSociais from "@/app/components/redesSociais/redesSociais";

const ft1 = "/images/logo 1.png"

const About =  () => {
    return(
        <div className="mx-auto max-w-screen-lg">
            <p className="text-5xl">Quem somos?</p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit illum facere odio quos a et distinctio adipisci impedit rerum eligendi assumenda ullam, commodi optio ratione sit, veritatis quia tempore molestiae?
                Nam voluptate assumenda sapiente eum facere quis facilis mollitia, aspernatur exercitationem nemo sunt, libero iste incidunt illo eveniet tempore. Quidem error autem, vitae soluta recusandae quam harum nihil qui ducimus!jaka
            </p>
            <div id="contato" className="min-h-screen mt-4 p-1">
                <div className="mx-auto max-w-screen-lg">
                <div className="flex flex-col items-center">
                    <Image src={ft1} alt="logo" width={270} height={270} />
                    <RedesSociais />
                    <div className="flex flex-col items-center m-2 p-1">
                    <p>rua w, numero x , cidade y</p>
                    <p>cep-135698540</p>
                    </div>
                    <div className="bg-lime-500 w-80 h-52" />
                </div>
                </div>
            </div>
        </div>
    );
}

export default About;