// Importando os componentes necessários: Banner, Card, Titulo.
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
// Importando o hook personalizado useFavoritoContext, que fornece o estado de favoritos.
import { useFavoritoContext } from '../../Contextos/Favoritos';
// Importando o arquivo de estilos CSS modularizado.
import styles from './Favoritos.module.css';

// Componente 'Favoritos', responsável por exibir a lista de favoritos.
function Favoritos() {
    // Obtendo a lista de favoritos do contexto utilizando o hook useFavoritoContext.
    const { favorito } = useFavoritoContext();

    return (
        <>
            {/* Componente 'Banner' exibindo a imagem correspondente à página de favoritos. */}
            <Banner imagem='favoritos' />
            
            {/* Componente 'Titulo' exibindo o título da página. */}
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            
            {/* Seção principal onde os cartões de favoritos serão exibidos. */}
            <section className={styles.container}>
                {/* Usando o método 'map' para iterar sobre a lista de favoritos e renderizar um 'Card' para cada item */}
                {favorito.map((fav) => {
                    return (
                        // Passando todas as propriedades de cada 'fav' para o componente 'Card' usando o spread operator.
                        // A chave 'key' é definida como o 'id' de cada favorito para otimização de renderização no React.
                        <Card {...fav} key={fav.id} />
                    );
                })}
            </section>
        </>
    );
}

// Exportando o componente para que possa ser utilizado em outras partes da aplicação.
export default Favoritos;
