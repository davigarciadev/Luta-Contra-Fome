export default function About() {
    return (
        <div
            className="h-full"
            style={{
                backgroundImage: "url('./src/assets/criancas-comendo2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "80vh",

            }}
        >

            <div className="text-white flex flex-col h-full justify-center" style={{ padding: "20px", marginLeft: "80px" }}>
                <p style={{ fontSize: "50px", fontWeight: "bold" }}>
                    No Brasil do futuro, a <br /> fome não tem vez
                </p>
                <p
                    className="text-3xl"
                >
                    Doe agora e faça parte da construção de <br /> um país mais justo e bem alimentado
                </p>
            </div>
            <div className="flex justify-center items-center gap-20" style={{ height: "120vh"}}>
                <div className="h-full flex justify-center align-center items-center">
                    <div className="h-full flex flex-col justify-center gap-6">
                        <p className="text-7xl " style={{ color: "#B23434", fontWeight: "bold" }}>Barrigas vazias e <br /> lixeiras cheias </p>
                        <p className="text-2xl font-bold">Enquanto 64 milhões de pessoas no Brasil têm <br /> acesso restrito à comida, o país joga fora 55 <br /> milhões de toneladas de alimentos, todos os <br /> anos. Juntos podemos mudar essa realidade.</p>
                    </div>
                </div>
                <div className="">
                    <img src="./src/assets/informacao-alimento.png" alt="Inforção de Alimento" style={{ height: "600px" }} />
                </div>
            </div>
        </div>
    )
}
