// Importando o arquivo de estilos CSS modularizado para aplicar os estilos ao componente.
import styles from './Container.module.css';

// Definindo o componente funcional 'Container'. Ele recebe 'children' como uma propriedade.
function Container({ children }) {

    // O componente retorna um elemento 'section' que envolve o conteúdo passado como 'children'.
    // A classe CSS 'container' será aplicada ao elemento 'section' através da propriedade 'className'.
    return (
        // A tag 'section' é usada como um contêiner semântico para envolver o conteúdo.
        // O 'className={styles.container}' aplica os estilos definidos em 'Container.module.css'.
        <section className={styles.container}>

            {/* 'children' é o conteúdo passado entre as tags de abertura e fechamento do componente Container */}
            {children}

        </section>
    )
}

// Exportando o componente Container para que ele possa ser importado e usado em outros arquivos.
export default Container;
