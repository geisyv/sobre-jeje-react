import { Link } from "react-router-dom";
import "./../index.css";

export default function Header() {
    return (
        <header className="header">
            <section>
                <img className="logo" src="/img/logo1.png" alt="logo" />
                <nav className="navbar">
                    <Link to="/">Início</Link>
                    <Link to="/historia">História</Link>
                    <Link to="/voduns">Voduns</Link>
                    <Link to="/terreiros">Terreiros Matrizes</Link>
                </nav>
                <div className="icon">
                    <img height="30" width="30" src="/img/icons8-search-50.png" alt="search" />
                </div>
            </section>
        </header>
    );
}

