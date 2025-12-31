import "./Bibliografia.css";
import { useEffect } from "react";

export default function Bibliografia() {
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


    const referencias = [
        {
            titulo: "A formação do Candomblé",
            autor: "Luis Nicolau Parés",
            descricao: "História e ritual da nação Jeje na Bahia.",
            imagem: "/img/formacao-jeje-luis.jpg",
            link: "https://loja.editoraunicamp.com.br/produto/470/formacao-do-candomble-a--historia-e-ritual-da-nacao-jeje-na-bahia"
        },
        {
            titulo: "O Rei, o Pai e a Morte",
            autor: "Luis Nicolau Parés",
            descricao: "Este livro examina as práticas religiosas na antiga Costa dos Escravos, na África Ocidental, correspondente à extensão onde hoje está a República do Benim. Nesse pequeno trecho de litoral, embarcou-se parte significativa dos africanos que chegaram escravizados ao Brasil, em particular à Bahia.",
            imagem: "/img/o-rei-o-pai-e-a-morte.jpg",
            link: "https://www.companhiadasletras.com.br/livro/9788535927368/o-rei-o-pai-e-a-morte?srsltid=AfmBOopshUR2gX0LlY2Q2IKeqo1oMAD4Uieu9jwblTfxUhP1K5eHGa4c"
        },
        {
            titulo: "Terreiro do Bogum",
            autor: "Everaldo Conceição Duarte",
            descricao: "Memórias de uma comunidade Jeje-Mahi na Bahia",
            imagem: "/img/terreiro-bogum.png",
            link: "https://solisluna.com.br/products/terreiro-do-bogum?srsltid=AfmBOoodhjiy70K6a4iY5vlnE4mCojjEvRHY1ME9tN-DRyT0jdR2nc_h"
        },
        {
            titulo: "Nação Jejê no Candomblé da Bahia, Nação Jejê Batuque no Rio Grande do Sul",
            autor: "Gilmara Rita Oliveira Castro",
            descricao: "Este livro propõe uma análise comparativa entre a Nação Jejê no Candomblé da Bahia e o Jejê Batuque do Rio Grande do Sul, resgatando suas raízes históricas, religiosas e culturais.",
            imagem: "/img/jeje-batuque-sul.jpg",
            link: "https://editora.pucrs.br/livro/1846/"
        }
    ];

    return (
        <div className="bibliografia">
            <h2>Bibliografias</h2>
            <div className="lista-bibliografia">
                {referencias.map((ref, index) => (
                    <div className="card-bibliografia" key={index}>
                        <img className="img-bibliografia" src={ref.imagem} alt={ref.titulo} />
                        <div className="info-bibliografia">
                            <h3>{ref.titulo}</h3>
                            <p><em>{ref.autor}</em></p>
                            <p>{ref.descricao}</p>
                            <a href={ref.link} target="_blank" rel="noopener noreferrer">
                                Saiba mais
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}