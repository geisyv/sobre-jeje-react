import React, { useEffect, useState } from "react";
import "./Voduns.css";

export default function Voduns() {
    useEffect(() => {
        let lastScrollTop = 0;
        const header = document.querySelector(".header");

        const onScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                header.style.top = "-100px"; // Esconde o header
            } else {
                header.style.top = "0"; // Mostra o header
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const panteoes = [
        {
            nome: "Panteão da Serpente (Dan)",
            descricao:
                "Neste panteão agrupam-se todos os Voduns Serpentes. Estão ligados diretamente ao movimento, à vida, à renovação e à adivinhação.",
            voduns:
                "Voduns: Gbesén, Dangbala, Áidò Wèdò, Frekwen ou Kwenkwen, Dan Ikó, Dan Xwevé, Dan Akasú, Dan Jikún ou Ojikún, Azannadô ou Zoonodô (também ligado a Hevioso).",
            imagens: ["/img/gbessem.png", "/img/dan2.jpg", "/img/dan3.jpg"]
        },
        {
            nome: "Panteão do Trovão (Hevioso)",
            descricao:
                "Nesta família agrupam-se os Voduns Kavionos, ligados ao fogo, à justiça e ao raio, além dos Voduns do oceano.",
            voduns:
                "Voduns: Sògbò, Gbadé, Akarumbé, Adeen, Kposu, Averekete, Lissá, Agbé Tayó (vodum do oceano), Djó, Agbé Hunnòn (avejidá), Loko.",
            imagens: ["/img/sogbo.png", "/img/loko.png", "/img/averekete.png", "/img/kpossun.png"]
        },
        {
            nome: "Panteão da Terra (Sakpata)",
            descricao:
                "Agrupa os Voduns da terra, das riquezas e das doenças, ligados à vida e à morte.",
            voduns:
                "Voduns: Azansú, Ewá, Parará ou Pararalibu, Avimadje, Agué, Ayizan, Nanã, Agbé Gèlèdè, Abè Afefè (Avejidá). Kposu também é relacionado, embora pertença a Hevioso.",
            imagens: ["/img/azonssun.png", "/img/azonssun1.png"]
        },
        {
            nome: "Nagô-Vodum",
            descricao:
                "Esses voduns são na verdade orixás, pois são de origem nagô.",
            voduns:
                "Voduns: Gú (Ogum), Odé, Oyá, Oxun, Yemanjá, Logun Edé e Oxalá.",
            imagens: ["/img/lissá.png"]
        },
        {
            nome: "Guardiões",
            descricao:
                "Responsáveis pela defesa e fiscalização da casa, como Sòhòkwe, Legba e mesmo Ogun.",
            imagens: ["/img/legba.png", "/img/guardioes2.jpg"]
        }
    ];

    return (
        <main>
            <section className="panteoes">
                {panteoes.map((p, index) => (
                    <CardPanteao
                        key={index}
                        nome={p.nome}
                        descricao={p.descricao}
                        voduns={p.voduns}
                        imagens={p.imagens}
                    />
                ))}
            </section>
        </main>
    );
}

function destacarPalavra(texto, palavra) {
    if (!texto) return null;
    const partes = texto.split(new RegExp(`(${palavra})`, "gi"));
    return partes.map((parte, i) =>
        parte.toLowerCase() === palavra.toLowerCase() ? <strong key={i}>{parte}</strong> : parte
    );
}

function CardPanteao({ nome, descricao, voduns, imagens }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % imagens.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + imagens.length) % imagens.length);
    };

    return (
        <div className="panteao">
            <div className="carousel">
                <button onClick={prevSlide} className="carousel-btn">‹</button>
                <img src={imagens[current]} alt={nome} className="img-panteao" />
                <button onClick={nextSlide} className="carousel-btn">›</button>
            </div>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>{destacarPalavra(voduns, "Voduns")}</p>
        </div>
    );
}
