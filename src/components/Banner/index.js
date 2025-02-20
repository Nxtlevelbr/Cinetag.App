// Importamos o arquivo CSS modular que contém os estilos específicos do componente.
import styles from './Banner.module.css';

// Definição do componente funcional `Banner`
// Ele recebe uma `prop` chamada `imagem`, que será usada para definir o banner exibido.
function Banner({ imagem }) {
    return (
        <div 
            className={styles.capa} // Aplica a classe `capa` definida no arquivo CSS do Banner
            style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }} // Define a imagem de fundo dinamicamente
        >
        </div>
    );
}

// Exportamos o componente `Banner` para ser reutilizado em outras partes do projeto.
export default Banner;
