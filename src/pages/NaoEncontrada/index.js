// Importando o arquivo de estilos CSS para este componente.
import styles from './NaoEncontrada.module.css';

// Definindo o componente funcional NaoEncontrada.
function NaoEncontrada() {
    return (
        // O JSX abaixo retorna um elemento <section> com a classe CSS 'container' aplicada.
        // O uso de 'styles.container' faz referência ao arquivo CSS importado, garantindo que o estilo seja aplicado corretamente.
        <section className={styles.container}>
            {/* Exibindo um título de nível 2 (h2) com o texto "Ops!" */}
            <h2>Ops!</h2>
            {/* Exibindo um parágrafo com a mensagem "O conteúdo que você procura não foi encontrado!" */}
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

// Exportando o componente para que ele possa ser utilizado em outras partes da aplicação.
export default NaoEncontrada;
