// Importamos o hook `useParams` do React Router para capturar os parâmetros da URL
import { useParams } from 'react-router-dom';

// Importamos os componentes reutilizáveis do projeto
import Banner from '../../components/Banner';  // Componente responsável por exibir um banner na página
import Titulo from '../../components/Titulo';  // Componente que renderiza um título estilizado

// Importamos os estilos CSS do módulo específico para o componente `Player`
import styles from './Player.module.css';

// Importamos o banco de dados JSON local que contém a lista de vídeos disponíveis
import db from "../../json/db.json";  // Aqui garantimos que estamos acessando o JSON corretamente

// Definição do componente funcional `Player`
function Player() {
    // Capturamos os parâmetros da URL, como o `id` do vídeo
    const parametros = useParams();

    // Buscamos no JSON local o vídeo correspondente ao `id` passado na URL
    // `find()` retorna o primeiro vídeo que satisfaz a condição
    const video = db.videos.find(video => video.id === Number(parametros.id)); // ✅ Acessando db.videos corretamente

    // Caso o vídeo não seja encontrado, renderizamos uma mensagem informando o erro
    if (!video) {
        return (
            <>
                <Banner imagem="player" /> {/* Exibe o banner na tela */}
                <Titulo>
                    <h1>Vídeo não encontrado</h1> {/* Mensagem de erro personalizada */}
                </Titulo>
            </>
        );
    }

    // Se o vídeo for encontrado, renderizamos a interface do player
    return (
        <>
            <Banner imagem="player" /> {/* Componente de banner na página */}
            <Titulo>
                <h1>{video.titulo}</h1> {/* Exibe o título do vídeo atual */}
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"  // Ocupa toda a largura do container
                    height="100%" // Ocupa toda a altura do container
                    src={video.link}  // URL do vídeo do YouTube embutido
                    title={video.titulo}  // Adiciona um título acessível ao iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen  // Permite o modo tela cheia
                ></iframe>
            </section>                
        </>
    );
}

// Exportamos o componente `Player` para que possa ser utilizado em outras partes do projeto
export default Player;
