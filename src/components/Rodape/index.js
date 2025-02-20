// Importando o arquivo de estilos CSS modularizado para aplicar os estilos ao componente.
import styles from './Rodape.module.css';

// Definindo o componente funcional 'Rodape'. Ele não recebe nenhuma propriedade, apenas renderiza o conteúdo estático.
function Rodape() {

    // O componente retorna um elemento 'footer' que contém um título 'h2'.
    // A classe CSS 'rodape' será aplicada ao elemento 'footer' através da propriedade 'className'.
    return (
        // A tag 'footer' é usada como um contêiner semântico para informações de rodapé.
        // O 'className={styles.rodape}' aplica os estilos definidos em 'Rodape.module.css'.
        <footer className={styles.rodape}>
            {/* Exibindo um título 'h2' com o nome do desenvolvedor */}
            <h2>Desenvolvido por Marcel Prado Soddano.</h2>
        </footer>
    )
}

// Exportando o componente Rodape para que ele possa ser importado e usado em outros arquivos.
export default Rodape;
