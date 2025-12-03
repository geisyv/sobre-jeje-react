// src/pages/Terreiros.jsx
import React, { useEffect } from "react";
import "./Terreiros.css";

export default function Terreiros() {
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

    return (
        <main>
            <section className="localizacao">
                <h2 className="local">Os Terreiros Matrizes</h2>

                <div className="card-terreiro">
                    <div className="texto-terreiro">
                        <h3>Zògodò Bogum Malê Rundó</h3>
                        <p>
                            Localizado no bairro Engenho Velho, em Salvador - BA, fundado em
                            1858. Seu patrono é o Vodum Sogbo, e é conhecido como Terreiro do
                            Bogum.
                        </p>
                    </div>
                    <div className="conteudo-terreiro">
                        <img
                            src="/img/fachada-bogum.jpg"
                            alt="Fachada do terreiro Bogum em Salvador - BA"
                            className="img-terreiro"
                        />
                        <iframe
                            className="mapa-terreiro"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.2008977624077!2d-38.49794302486527!3d-12.99860008731923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604af61a8d4f7%3A0x40fee922ce894a49!2zQ2FuZG9tYmzDqSBab29nb2TDtCBCb2d1bSBNYWzDqiBIdW5kw7M!5e1!3m2!1spt-BR!2sbr!4v1761598941133!5m2!1spt-BR!2sbr"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Terreiro Bogum"
                        ></iframe>
                    </div>
                </div>

                <div className="card-terreiro">
                    <div className="texto-terreiro">
                        <h3>Zògbodò Malè Bogun Sejá Húnde</h3>
                        <p>
                            Localizado na cidade de Cachoeira - BA, fundado em 1858. Seu
                            patrono é o Vodum Dan, e é conhecido como Roça do Ventura.
                        </p>
                    </div>
                    <div className="conteudo-terreiro">
                        <img
                            src="/img/seja-hunde.jpg"
                            alt="Fachada do terreiro Seja Hundê - Cachoeira - BA"
                            className="img-terreiro"
                        />
                        <iframe
                            className="mapa-terreiro"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.316073946039!2d-38.946235289996835!3d-12.59834898763239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x715c700528c12a5%3A0xde4a15e67441b78b!2sRo%C3%A7a%20do%20Ventura%20(Kw%C3%A9%20Seja%20H%C3%B9nde&#39;)!5e1!3m2!1spt-BR!2sbr!4v1761600157070!5m2!1spt-BR!2sbr"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Roça do Ventura"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
