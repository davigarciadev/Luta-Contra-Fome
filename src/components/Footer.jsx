export default function Footer() {

    return (
        <footer className="fixed bottom-0 left-0 w-full bg-[#526525] text-white p-4">
            <div className="flex justify-between items-center" style={{ height: "100px" }}>
                <div className="flex text-start">
                    <img src="./assets/logo.png" alt="logo" className="h-48 object-contain" />
                </div>
                <div style={{ marginRight: "40px"}}>
                    <div className="flex flex-col gap-2 text-end">
                        <p className="font-bold">CONTATO PARA DOAÇÃO</p>
                        <p>doação@contrafome.org </p>
                        <p className="font-bold">REDES SOCIAIS</p>

                    </div>
                    <div className="flex gap-4 justify-end">
                        <a href="https://www.instagram.com/"><img src="./assets/instagram.png" alt="logo instagram" className="transition-all transform hover:scale-105 duration-300" style={{ height: "30px", width: "30px", }} /></a>
                        <a href="https://www.linkedin.com/"><img src="./assets/linkedin.png" alt="logo linkedin" className="transition-all transform hover:scale-105 duration-300" style={{ height: "30px", width: "30px" }}/></a>
                        <a href="https://web.facebook.com/"><img src="./assets/facebook.png" alt="logo facebook" className="transition-all transform hover:scale-105 duration-300" style={{ height: "30px", width: "30px" }}/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
