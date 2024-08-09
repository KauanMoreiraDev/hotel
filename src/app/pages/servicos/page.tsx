import CardQuarto from "@/app/components/cardQuartos/cardQuartos";

const Serviços = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <CardQuarto leftPosition={true} indexNumber={1} title="Chalé" subTitle="Tipo suiço até 7 pessoas" label="O Chalé Tipo Suíço do Hotel Marina do Lago é uma hospedagem charmosa e acolhedora, inspirada na arquitetura alpina. Oferece um ambiente rústico e confortável, ideal para casais ou famílias que buscam tranquilidade em meio à natureza."/>

            <CardQuarto leftPosition={false} indexNumber={5} title="Suítes" subTitle="Suíte Sol, Lua e Estrela" label="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam asperiores labore earum, ipsam iure commodi incidunt excepturi ad aliquid neque ullam obcaecati numquam dolor maxime sint eum cupiditate modi quos!" />
        </div>
    );
}

export default Serviços;