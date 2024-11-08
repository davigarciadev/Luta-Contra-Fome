export default function Doar() {
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
            <div className="flex flex-col justify-center items-center gap-2 h-full">
                <div className="flex gap-12 font-bold">
                    <p className="" style={{ color: "#FFFFFF"}}>Av. Marginal Direita Anchieta km 11, s/n</p>
                    <p style={{ color: "#FFFFFF"}}>ATACADÃO - ANCHIETA - São Paulo (SP)</p>
                </div>
                <div className="" style={{ width: "80%", maxWidth: "90vh", height: "450px" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2064136350473!2d-46.60122752391217!3d-23.632777764221306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b40e3bcea07%3A0x32e773a07fbced03!2sAtacad%C3%A3o%20-%20Anchieta!5e0!3m2!1spt-BR!2sbr!4v1731018469044!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
