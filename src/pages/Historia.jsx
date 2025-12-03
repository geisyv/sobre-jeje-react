// src/pages/Historia.jsx
import React, { useEffect } from "react";
import "./Historia.css";

export default function Historia() {
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
            <section className="paragrafo">
                <h1>História da Nação Jeje e dos Voduns</h1>
                <p>
                Djedje (jeje) é uma palavra de origem yorubá que significa estrangeiro, forasteiro e estranho, e que
                recebeu
                uma conotação pejorativa como “inimigo” por parte dos povos conquistados pelos reis de Dahomey e seu
                exército. Quando os conquistadores eram avistados pelos nativos de uma aldeia, muitos gritavam dando o
                alarme: “Pou okan, djedje hum wa!” (olhem, os jejes estão chegando!). Quando os primeiros daomeanos
                chegaram
                ao Brasil como escravizados, aqueles que já estavam aqui reconheceram o inimigo e repetiram o mesmo
                alerta.
                Assim, o culto dos Voduns passou a ser conhecido no Brasil como “nação Jeje”.

                Entre os daomeanos escravizados, destacou-se Ludovina Pessoa, natural da cidade de Mahi (Marri),
                escolhida
                pelos Voduns para fundar três templos na Bahia. Ela fundou um templo para Dan — “Ceja Hundê”, mais
                conhecido
                como o “terreiro do Ventura” ou “Axé Pó Zehen” (Pó Zerrêm), em Cachoeira de São Félix; um templo para
                Hevioso — “Zoogodo Bogun Male Hundô”, em Salvador; e um templo para Ajunsun, que não chegou a ser
                fundado
                por razões desconhecidas. Esse é o segmento Jeje-Mahi do povo Fon.

                O templo de Ajunsun/Sakpata foi fundado posteriormente pela africana Gaiacu Satu, também em Cachoeira de
                São
                Félix, recebendo o nome de Axé Pó Egi, mais conhecido como Corcunda de Ayá. Esse grupo é conhecido como
                Jejes Savalu ou Savaluno. Sakpata era rei da cidade de Savalu, na África. Segundo alguns historiadores,
                foi
                o único rei que preferiu o exílio a se render aos conquistadores de Dahomey. O dialeto dos Savalus
                também é
                o Fon.

                No Maranhão, destaca-se a Casa das Minas, fundada por Maria Jesuína, conforme registros de Sergio
                Ferretti.
                Essa casa é considerada a mais conhecida do segmento Jeje no Brasil, representando o povo Jeje-Mina.

                Ainda no Maranhão, foi fundada a casa Fanti-Ashanti por Euclides Menezes Ferreira, representando o
                segmento
                Jeje-Fanti-Ashanti do povo Akan, originário de Gana.

                No Rio de Janeiro, a africana Gaiaku Rosena, natural de Allada, fundou o “Terreiro do Pó Dabá”, no
                bairro da
                Saúde. O terreiro foi herdado por sua filha Adelaide do Espírito Santo, conhecida como Mejitó, que
                transferiu a casa de santo para o bairro Coelho da Rocha. Posteriormente, Antônio Pinto de Oliveira,
                conhecido como Tata Fomutinho, fundou o Ceja Nassó no bairro de Santo Cristo, mudando-se depois para
                Madureira, na Estrada do Portela, e finalmente para São João de Meriti, onde se estabeleceu na Rua
                Paraíba.

                Segundo relatos dos mais velhos, Mejitó teve papel fundamental no início da trajetória religiosa de Tata
                Fomutinho no Rio de Janeiro. Este deixou uma legião de filhos, netos e bisnetos. Entre eles estão Jorge
                de
                Yemanjá, fundador do Kwe Ceja Tessi; Pai Zezinho da Boa Viagem, fundador do Terreiro de Nossa Senhora
                dos
                Navegantes; Tia Belinha, fundadora da Colina de Oxóssi; Doné Neide de Oyá, fundadora do Hùnkpámè Avejidá
                Dan Oyá, conhecido como "Roça do Vargedo".
                </p>

                <h1>Vodum</h1>
                <p>
                    Vodou – Vodoun – Vodum – Voodoo – Voudun – Vodu – Vudu – Hoodoo, entre outras variações. A palavra
                “vodou” é
                de origem Ewe/Fon e significa força divina, espírito, força espiritual. É utilizada pelos povos do oeste
                da
                África para designar os deuses e ancestrais divinizados.

                No século XVIII, o rei Agajá consolidou as crenças de diversos clãs e aldeias, formando um sistema
                espiritual dos Voduns. Essa consolidação gerou variações fonéticas do termo, influenciadas pelos
                diferentes
                dialetos locais e pela presença francesa. A diversidade de idiomas dos pesquisadores que exploraram a
                África
                também contribuiu para essa multiplicidade de formas.

                No Brasil, o termo utilizado é “Vodum”. Já o “Hoodoo” não é uma variação de Vodou, mas sim uma sociedade
                haitiana semelhante às existentes no Benin (Sociedade do Bo) e em Gana (Sociedade Jou-Jou), voltada para
                o
                uso de oráculos e fórmulas mágicas com elementos naturais.

                Quando o reino de Dahomey foi estabelecido, não havia culto aos Voduns. O rei, em busca de auxílio
                espiritual, consultou um bokono (adivinho), que recomendou a construção de templos e a convocação de
                Voduns
                de diversas regiões. Com isso, Dahomey passou a incorporar clãs e aldeias dedicadas aos Voduns. Mais
                tarde,
                o rei Agajá consolidou esse sistema.

                Durante o período da escravidão, muitos daomeanos foram levados ao Novo Mundo, trazendo consigo a
                cultura e
                o culto dos Voduns. No Brasil, os Voduns mantiveram suas práticas e tradições originais, como eram em
                Dahomey (atual Benin). A nação Jeje, no entanto, enfrentou um período de declínio devido à escassez de
                informações.

                Muitos dos mais antigos preferiram guardar seus conhecimentos, evitando transmiti-los. Alguns
                descendentes
                da nação Jeje, sem acesso ao saber tradicional, mudaram de nação ou decidiram investigar suas origens.
                Graças a esses esforços, a nação Jeje voltou a crescer e a preservar sua cultura ancestral.

                Hoje, existem kwes e praticantes que conhecem profundamente o culto dos Voduns, tendo aprendido por
                experiência direta. Com o aumento das pesquisas e estudos, alguns dos mais velhos decidiram compartilhar
                seus conhecimentos. Um dos primeiros aprendizados para os adeptos do Jeje é a distinção entre Voduns e
                Orixá.

                Vodum é Vodum, Orixá é Orixá. Oya não é Vodum Jô, Aziri não é Oxum, Naetê não é Yemanjá. Embora os
                templos
                de Vodum também realizem cultos a Orixás, estes são considerados deuses estrangeiros, aceitos e
                respeitados,
                mas não confundidos com Voduns. Em templos de Orixás, os Voduns costumam receber nomes diferentes — por
                exemplo, Dan/Bessen é chamado de Oxumarê, Sakpata de Omolu. Essa prática também ocorre na Nigéria.

                Falar sobre os Voduns exige responsabilidade. O conteúdo apresentado resulta de décadas de vivência no
                culto, somadas a estudos e pesquisas. Os Voduns são organizados por famílias — Savaluno, Dambirá,
                Davice,
                Hevioso — que se subdividem em linhagens.

                A sociedade daomeana é patrilinear e poligínica, ou seja, estruturada pela linha paterna, com homens
                casados
                com várias mulheres. Organiza-se em sibs, grupos de irmãos com os mesmos pais, sem base territorial
                própria,
                subdivididos em famílias.

                No Brasil, as casas de santo cultuam todas as famílias. Os Voduns são interligados por comportamentos,
                costumes e atitudes herdadas dos ancestrais ou chefes das casas. Foram identificados mais de 450 Voduns
                —
                alguns cultuados no Brasil, outros não.

                Com o resgate cultural, é possível ampliar os cultos e reverenciar Voduns esquecidos. O Brasil herdou
                vastos
                panteões de divindades, regionalizados de forma que apenas alguns Voduns alcançaram domínio nacional. A
                cultura dos Voduns é rica e profunda, e os maiores fundamentos estão embutidos nela.
                </p>
            </section>
        </main>
    );
}
