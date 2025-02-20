// Importamos os hooks `useEffect` e `useState` do React
// - `useState` é usado para armazenar o estado dos vídeos carregados.
// - `useEffect` permite executar código (efeitos colaterais) quando o componente é montado.
import { useEffect, useState } from "react";

// Importamos os componentes reutilizáveis do projeto.
import Banner from "../../components/Banner"; // Componente responsável por exibir um banner na página inicial.
import Card from "../../components/Card";     // Componente que representa um vídeo/filme individual na interface.
import Titulo from "../../components/Titulo"; // Componente para exibir títulos estilizados.

// Importamos o arquivo CSS modular para estilização específica deste componente.
import styles from "./inicio.module.css";

// Definição do componente funcional `Inicio`
function Inicio() {
    // Criamos um estado `videos`, inicializado como um array vazio.
    // Ele será preenchido com os dados vindos da API.
    const [videos, setVideos] = useState([]);

    // `useEffect` é chamado assim que o componente é montado na tela.
    // Ele busca os vídeos da API externa simulada e armazena os dados no estado `videos`.
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Nxtlevelbr/cinetag-api/videos') // Faz uma requisição GET para a API.
            .then(resposta => resposta.json()) // Converte a resposta em JSON.
            .then(dados => setVideos(dados)); // Atualiza o estado com os vídeos recebidos.
    }, []); // O array vazio `[]` faz com que o efeito ocorra apenas uma vez (quando o componente monta).

    // Renderização do componente
    return (
        <>
            <Banner imagem="home" /> {/* Exibe um banner na página inicial */}

            <Titulo>
                <h1>Um Lugar Para guardar seus vídeos e filmes!</h1> {/* Título principal da página */}
            </Titulo>

            <section className={styles.container}>
                {/* Mapeia os vídeos carregados e renderiza um `Card` para cada um */}
                {videos.map((video) => (
                    <Card {...video} key={video.id} /> // O operador `...video` espalha as propriedades do objeto `video` para o componente `Card`.
                ))}
            </section>
        </>
    );
}

// Exportamos o componente `Inicio` para ser usado em outras partes do projeto.
export default Inicio;
