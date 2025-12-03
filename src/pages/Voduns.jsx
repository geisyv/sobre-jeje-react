import React, { useEffect } from "react";
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

    return (
        <main>
            <section className="panteoes">
                <div className="panteao">
                    <h2>Panteão da Serpente (Dan)</h2>
                    <img src="" alt="" className="img-panteao" />
                    <p>
                        Neste panteão agrupam-se todos os “Voduns Serpentes”. Estão ligados
                        diretamente ao movimento, à vida, à renovação e à adivinhação. <br />
                        <strong>Alguns Voduns Dan:</strong> Gbesén, Dangbala, Áidò Wèdò,
                        Frekwen ou Kwenkwen, Dan Ikó, Dan Xwevé, Dan Akasú, Dan Jikún ou
                        Ojikún, Azannadô ou Zoonodô (também ligado a Hevioso), Aziri ou Azli.
                    </p>
                </div>

                <div className="panteao">
                    <h2>Panteão do Trovão (Hevioso)</h2>
                    <img src="" alt="" className="img-panteao" />
                    <p>
                        Nesta família agrupam-se os Voduns Kavionos, ligados ao fogo, à
                        justiça e ao raio, além dos Voduns do oceano (Tòvodum), que mantêm
                        estreitas ligações com os Kavionos. <br />
                        <strong>Líder:</strong> Vodum Sogbo. <br />
                        <strong>Voduns Kavionos:</strong> Sògbò, Gbadé, Akarumbé, Adeen,
                        Kposu, Averekete, Lissá, Agbé Tayó (vodum do oceano), Djó, Agbé
                        Hunnòn (avejidá), Loko.
                    </p>
                </div>

                <div className="panteao">
                    <h2>Panteão da Terra (Sakpata)</h2>
                    <img src="" alt="" className="img-panteao" />
                    <p>
                        Agrupa os Voduns da terra, das riquezas e das doenças, ligados à vida
                        e à morte. <br />
                        <strong>Líder:</strong> Azansú (Sakpata). <br />
                        <strong>Voduns:</strong> Azansú, Ewá, Parará ou Pararalibu, Avimadje,
                        Agué, Ayizan, Nanã, Agbé Gèlèdè, Abè Afefè (Avejidá). Kposu também é
                        relacionado, embora pertença a Hevioso.
                    </p>
                </div>

                <div className="panteao">
                    <h2>Nagô-Vodum</h2>
                    <img src="" alt="" className="img-panteao" />
                    <p>
                        Esses voduns são na verdade orixás, pois são de origem nagô. Os
                        principais são: Gú (Ogum), Odé, Oyá, Oxun, e Yemanjá. No Bogun,
                        pode-se encontrar o culto a Logun Edé.
                    </p>
                </div>

                <div className="panteao">
                    <h2>Guardiões</h2>
                    <img src="" alt="" className="img-panteao" />
                    <p>
                        Responsáveis pela defesa e fiscalização da casa, como Sòhòkwe, Legba
                        e mesmo Ogun. Legbá por suas diversas funções está ligado aos diversos
                        panteões.
                    </p>
                </div>
            </section>
        </main>
    );
}
