export default function Combater() {
    return (
        <div className="flex flex-col gap-20 justify-center items-center align-center" style={{ height: "80vh" }}>

            <div className="flex gap-20 justify-center align-center items-center text-white">
                <div className="flex flex-col items-center gap-10">
                    <img src="./assets/dieta.png" alt="Icone Garfo" style={{ height: "10vh", width: "10vh" }} />
                    <div className="flex flex-col items-center align-center text-center gap-10" style={{ height: "40vh", width: "40vh",         backgroundColor: "#CAAF46", borderRadius: "10%" }}>
                        <p className="font-bold" style={{ fontSize: "22px", marginTop: "50px" }}>Educação e Capacitação em <br /> Sustentabilidade Alimentar</p>
                        <p>Oferecer treinamentos para <br /> agricultores sobre técnicas de <br /> cultivo sustentável, manejo de <br /> recursos naturais e inovação <br /> agrícola.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <img src="./assets/lanche-icon.png" alt="Icone Garfo" style={{ height: "10vh", width: "10vh" }} />
                    <div className="flex flex-col items-center align-center text-center gap-10" style={{ height: "40vh", width: "40vh", backgroundColor: "#B56224", borderRadius: "10%" }}>
                        <p className="font-bold" style={{ fontSize: "22px", marginTop: "50px" }}>Aumentar o Acesso à <br /> Alimentação Adequada</p>
                        <p>Criar e expandir programas de <br /> doação de alimentos e bancos de <br /> alimentos para apoiar <br /> comunidades em vulnerabilidade.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <img src="./assets/peoples-icon.png" alt="Icone Garfo" style={{ height: "10vh", width: "10vh" }} />
                    <div className="flex flex-col items-center align-center text-center gap-10" style={{ height: "40vh", width: "40vh", backgroundColor: "#B23434", borderRadius: "10%" }}>
                        <p className="font-bold" style={{ fontSize: "22px", marginTop: "50px" }}>Investir em Políticas <br /> Públicas de Proteção Social</p>
                        <p> Implementar e fortalecer <br /> programas de transferência de <br /> renda para garantir que famílias em <br /> situação de pobreza extrema <br /> possam comprar alimentos.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}