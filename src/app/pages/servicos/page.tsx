import CardQuarto from "@/app/components/cardQuartos/cardQuartos";

const Serviços = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <CardQuarto leftPosition={true} title="Chalé" subTitle="Tipo suiço até 7 pessoas" label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza."/>

            <CardQuarto leftPosition={false}/>
        </div>
    );
}

export default Serviços;