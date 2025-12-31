import { useEffect } from "react";
import "./Cantigas.css";

export default function Cantigas() {
    // efeito para esconder/mostrar o header ao rolar
    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const header = document.querySelector(".header");

            if (!header) return;

            if (prevScrollPos < currentScrollPos) {
                header.style.top = "-80px"; // ajuste conforme altura do header
            } else {
                header.style.top = "0";
            }

            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const playlists = [
        {
            titulo: "Candomblé Jêje Mahi & Nagô (Edição Bahia) [Vol.2]",
            descricao: "Candombé Jêje Mahi e Nagô",
            embed: "https://open.spotify.com/intl-pt/album/6oTV0NVuARB3mg0wzhghih",
            link: "https://open.spotify.com/intl-pt/album/6oTV0NVuARB3mg0wzhghih"
        },
        {
            titulo: "Cânticos aos Voduns",
            descricao: "Candombé Jêje",
            embed: "https://open.spotify.com/intl-pt/album/41UpgGtFv54YiEmfZRg9xy",
            link: "https://open.spotify.com/intl-pt/album/41UpgGtFv54YiEmfZRg9xy"
        },
        {
            titulo: "Gravações e cantigas da nação Jeje (CAMINHOS DE AXÉ)",
            descricao: "Cantigas para Vodum Elegba, Vodum Agué, Otolu e muito mais.",
            embed: "https://www.youtube.com/watch?v=KTDjxFPuD6U",
            link: "https://www.youtube.com/watch?v=KTDjxFPuD6U"
        }, 
        {
            titulo: "Gravações e cantigas da nação Jeje (CAMINHOS DE AXÉ)",
            descricao: "Cantigas para Vodum Kpossun, Vodum Jó, Gbessen e muito mais.",
            embed: "https://www.youtube.com/watch?v=gzqkO_os8eA",
            link: "https://www.youtube.com/watch?v=gzqkO_os8eA"
        }
    ];

    return (
        <div className="cantigas">
            <h2 className="cantigas-titulo">Cantigas da Nação Jeje</h2>
            <div className="lista-cantigas">
                {playlists.map((p, index) => (
                    <div className="card-cantiga" key={index}>
                        <iframe
                            className="player-cantiga"
                            src={p.embed}
                            width="250"
                            height="200"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        ></iframe>
                        <div className="info-cantiga">
                            <h3>{p.titulo}</h3>
                            <p>{p.descricao}</p>
                            <a href={p.link} target="_blank" rel="noopener noreferrer">
                                Abrir
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
