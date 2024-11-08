export default function Footer() {

    return (
        <footer className="fixed bottom-0 left-0 w-full bg-[#526525] text-white p-4">
            <div className="flex justify-between items-center" style={{ height: "100px" }}>
                <div className="flex text-start">
                    <img src="./src/assets/logo.png" alt="logo" className="h-48 object-contain" />
                </div>
                <div style={{ marginRight: "40px"}}>
                    <div className="flex flex-col gap-2 text-end">
                        <p className="font-bold">CONTATO PARA DOAÇÃO</p>
                        <p>doação@contrafome.org </p>
                        <p className="font-bold">REDES SOCIAIS</p>

                    </div>
                    <div className="flex gap-4 h-8 justify-end">
                        <img src="./src/assets/instagram.png" alt="logo instagram" />
                        <img src="./src/assets/linkedin.png" alt="logo linkedin" />
                        <img src="./src/assets/facebook.png" alt="logo facebook" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
