// Importamos os estilos CSS específicos para estilizar o card.
import styles from './Card.module.css';

// Importamos os ícones de favoritar e desfavoritar para indicar a ação do usuário.
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from "./desfavoritar.png";

// Importamos o hook de contexto para acessar a lista de favoritos e a função de adicionar/remover favoritos.
import { useFavoritoContext } from "../../Contextos/Favoritos";

// Importamos o componente `Link` do React Router para permitir navegação entre páginas sem recarregar.
import { Link } from 'react-router-dom';

// Definição do componente funcional `Card`.
// Ele recebe `id`, `titulo` e `capa` como propriedades para exibir as informações do vídeo/filme.
function Card({ id, titulo, capa }) {
    // Obtém do contexto a lista de favoritos e a função para adicionar/remover um favorito.
    const { favorito, adicionarFavorito } = useFavoritoContext();

    // Verifica se o item atual já está na lista de favoritos.
    const ehFavorito = favorito.some((fav) => fav.id === id);

    // Define qual ícone será exibido com base no estado do item (favoritado ou não).
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={styles.container}>
            {/* Link para a página de detalhes do vídeo, utilizando seu `id` na URL */}
            <Link className={styles.link} to={`/${id}`}>
                {/* Exibe a imagem da capa do vídeo */}
                <img src={capa} alt={titulo} className={styles.capa} />
                {/* Exibe o título do vídeo */}
                <h2>{titulo}</h2>
            </Link>    

            {/* Ícone para favoritar/desfavoritar o vídeo */}
            <img 
                src={icone} 
                alt="Favoritar filme" 
                className={styles.favoritar} 
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa }); // Adiciona ou remove o vídeo dos favoritos
                }} 
            />
        </div>
    );
}

// Exporta o componente `Card` para ser utilizado em outras partes do projeto.
export default Card;
