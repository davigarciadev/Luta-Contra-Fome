import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <div className="p-4 flex justify-evenly items-center text-white" style={{ backgroundColor: "#526525", height: "100px" }}>
                
                <Link to="/">
                    <img 
                        src="./assets/logo.png" 
                        alt="Logo" 
                        className="h-28 object-contain transition-all transform hover:scale-105 duration-300" 
                        style={{ marginRight: "100px" }} 
                    />
                </Link>
                
                <ul className="flex space-x-4" style={{ color: "#1E1E1E" }}>
                    <li>
                        <Link 
                            to="/Doar" 
                            className="hover:text-gray-400 transform hover:-translate-y-1 hover:scale-110 duration-300 border-2 border-white bg-white text-black px-2 py-1 rounded-xl hover:bg-transparent hover:text-white hover:border-white transition duration-300 ease-in-out"
                        >
                            ONDE DOAR
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/Combater" 
                            className="hover:text-gray-400 transform hover:scale-110 duration-300 transition ease-in-out"
                        >
                            COMO COMBATER
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/Formulario" 
                            className="hover:text-gray-400 transform hover:scale-110 duration-300 transition ease-in-out"
                        >
                            ENTRE EM CONTATO
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
