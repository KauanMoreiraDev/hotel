import SliderChale from "@/app/components/slider Chalé/slider";

export default function Acomodações() {
    return(
        <div className="mx-auto max-w-screen-lg">
            <div className="min-h-screen mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-5xl">
                        Chalé
                        <p className="text-2xl">Tipo suiço</p>
                    </div>
                        <div className="m-2 p-2 columns-2">
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rs-wifi"></i>Wi-Fi</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rr-snowflake"></i>Ar-Condicionado</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rs-screen"></i>Tv via satélite</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-tr-couch"></i>Sala de estar</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rr-refrigerator"></i>Frigobar</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rs-bed-empty"></i>Cama-box</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rs-bed-bunk"></i>Cama extra</p>
                        </div>
                </div>
                <SliderChale />
            </div>

                <div className="min-h-screen">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-5xl">
                        Suíte
                        <p className="text-2xl">Apartamento</p>
                    </div>
                        <div className="m-2 p-2 columns-2">
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rs-wifi"></i>Wi-Fi</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rr-snowflake"></i>Ar-Condicionado</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rs-screen"></i>Tv via satélite</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-tr-lamp-desk"></i>Escrivaninha</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rr-refrigerator"></i>Frigobar</p>
                            <p className="text-lg m-2"><i className="pr-2 fi fi-rs-bed-empty"></i>Cama-box</p>
                        </div>
                    </div>
                    <div className="bg-slate-200 m-5 py-5">
                        <div className="flex flex-row justify-evenly">
                            <p className="text-xl"><i className="fi fi-rc-moon-stars"></i> 2 pessoas</p>
                            <p className="text-xl"><i className="fi fi-rr-star"></i> 2 pessoas</p>
                            <p className="text-xl"><i className="fi fi-rr-brightness"></i> 3 pessoas</p>
                        </div>
                    </div>
                    <div className="h-64 bg-slate-400" />
                </div>

        </div>
    );
}