// Importando o arquivo de estilos CSS modularizado para aplicar os estilos ao componente.
import styles from './Titulo.module.css';

// Definindo o componente funcional 'Titulo'. Ele recebe 'children' como uma propriedade.
function Titulo({ children }) {

    // O componente retorna um elemento 'div' que envolve o conteúdo passado como 'children'.
    // A classe CSS 'texto' será aplicada ao elemento 'div' através da propriedade 'className'.
    return (
        // A tag 'div' é usada como um contêiner para envolver o conteúdo.
        // O 'className={styles.texto}' aplica os estilos definidos em 'Titulo.module.css'.
        <div className={styles.texto}>
            {/* 'children' é o conteúdo passado entre as tags de abertura e fechamento do componente Titulo */}
            {children}
        </div>
    )
}

// Exportando o componente Titulo para que ele possa ser importado e usado em outros arquivos.
export default Titulo;
