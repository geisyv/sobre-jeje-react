import "./Homenagens.css";
import { useEffect } from "react";

export default function Homenagens() {
    // efeito para esconder/mostrar o header ao rolar
    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const header = document.querySelector(".header");

            if (!header) return;

            if (prevScrollPos < currentScrollPos) {
                // rolando para baixo → esconder
                header.style.top = "-80px"; // ajuste conforme altura do header
            } else {
                // rolando para cima → mostrar
                header.style.top = "0";
            }

            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const homenageados = [
        {
            nome: "Ludovina Pessoa",
            descricao:
                "Foi escolhida pelos voduns para fundar três templos na Bahia. Ela fundou: templo para Dã, Kwe Sejá Hundé, mais conhecido como a Roça do Ventura, em Cachoeira de São Felix; templo para Hevioso Zoogodo Bogun Male Hundô, Terreiro do Bogum em Salvador; E o templo para Sapatá que não se sabe porque não foi fundado.",
            imagem: "/img/icons-person.png",
        },
        {
            nome: "José Maria Belchior (Zé de Brechó)",
            descricao:
                "Figura de extrema importancia para história do candomblé Jeje na cidade de Cachoeira-BA",
            imagem: "/img/icons-person.png",
        },
        {
            nome: "Tata Fomotinho",
            descricao:
                "Durante uma visita ao hunkpame, Antonio foi tomado por seu vodun e precisou ser iniciado. Apesar da tradição de não raspar homens, a Mãe de Santo obedeceu ao Jogo de búzios e realizou a iniciação por vontade de Oxum. Tata fomotinho se torna o primeiro vodunsí do sexo masculino a ser iniciado no Jeje no Brasil.",
            imagem: "/img/tata-fomotinho.jpg",
        },
        {
            nome: "Gaiaku Luiza",
            descricao:
                "Gaiaku Luíza de Oyá foi uma ialorixá brasileira do Candomblé Jeje-Maí. Nasceu no Terreiro Zogbodo Male Bogun Seja Unde, também conhecido como Roça do Ventura",
            imagem: "/img/gaiaku-luiza.png",
        },
    ];

    return (
        <div className="homenagens">
            {/* título separado do container dos cards */}
            <h2 className="homenagens-titulo">In Memoriam</h2>

            {/* container só para os cards */}
            <div className="homenagens-lista">
                {homenageados.map((h, index) => (
                    <div className="card-homenagem" key={index}>
                        {h.imagem ? (
                            <img className="img-homenagem" src={h.imagem} alt={h.nome} />
                        ) : (
                            <div className="placeholder-homenagem">
                                {h.nome.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                            </div>
                        )}
                        <div className="info-homenagem">
                            <h3>{h.nome}</h3>
                            <p>{h.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
