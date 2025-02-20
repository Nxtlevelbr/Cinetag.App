// Importamos o componente `Link` do React Router para criar navegação sem recarregar a página.
import { Link } from "react-router-dom";

// Importamos a logo do projeto.
import logo from './logo.png';

// Importamos o arquivo de estilos específicos para o cabeçalho.
import styles from './Cabecalho.module.css';

// Importamos o componente `CabecalhoLink`, que é um botão de navegação reutilizável.
import CabecalhoLink from "../CabecalhoLink";

// Definição do componente funcional `Cabecalho`
function Cabecalho() {
    return (
        // O cabeçalho do site é estilizado com a classe definida no CSS modular.
        <header className={styles.cabecalho}>
            
            {/* Link que redireciona para a página inicial ao clicar na logo */}
            <Link to="./">
                <img src={logo} alt="Logo do Cinetag"></img>
            </Link>

            {/* Barra de navegação com os links do site */}
            <nav>
                {/* Componente `CabecalhoLink` que encapsula a lógica dos botões de navegação */}
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    );
}

// Exportamos o componente `Cabecalho` para ser utilizado em outras partes do projeto.
export default Cabecalho;
