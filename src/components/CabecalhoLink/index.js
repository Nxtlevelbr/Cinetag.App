// Importamos o componente `Link` do React Router para permitir a navegação entre páginas sem recarregamento.
import { Link } from 'react-router-dom';

// Importamos os estilos CSS específicos para o link do cabeçalho.
import styles from './CabecalhoLink.module.css';

// Definição do componente funcional `CabecalhoLink`.
// Ele recebe duas propriedades (`url` e `children`), tornando-o um botão de navegação reutilizável.
function CabecalhoLink({ url, children }) {
    return (
        // Criamos um link estilizado usando `react-router-dom` e aplicamos uma classe CSS.
        <Link to={url} className={styles.link}>
            {children} {/* Renderiza o conteúdo dentro do link, que pode ser um texto ou outro elemento */}
        </Link>
    );
}

// Exportamos o componente `CabecalhoLink` para ser utilizado em outras partes do projeto.
export default CabecalhoLink;
