// Importação de componentes e recursos necessários para o funcionamento da página.
import { Outlet } from "react-router-dom";  // 'Outlet' é usado para renderizar os componentes filhos de rotas definidas no React Router.
import Cabecalho from "../../components/Cabecalho";  // Componente para exibir o cabeçalho da página.
import Container from "../../components/Container";  // Componente para envolver o conteúdo da página com estilos específicos.
import FavoritosProvider from "../../Contextos/Favoritos";  // Componente de contexto para fornecer dados de favoritos para toda a aplicação.
import Rodape from "../../components/Rodape";  // Componente para exibir o rodapé da página.

function PaginaBase() {
    return (
        // O componente PaginaBase define a estrutura geral da página, com cabeçalho, corpo, rodapé e um contexto para gerenciar favoritos.
        <main>
            {/* Exibindo o componente de cabeçalho, que provavelmente contém o logo, navegação, etc. */}
            <Cabecalho />
            
            {/* 'FavoritosProvider' é um componente de contexto que fornece um estado compartilhado relacionado aos favoritos para os componentes filhos */}
            <FavoritosProvider>
                {/* O componente 'Container' é usado para aplicar estilos e organizar o layout do conteúdo da página */}
                <Container>
                    {/* O 'Outlet' é o ponto onde os componentes filhos da rota serão renderizados, ou seja, o conteúdo da página será inserido aqui */}
                    <Outlet />
                </Container>
            </FavoritosProvider>
            
            {/* Exibindo o rodapé da página */}
            <Rodape />
        </main>        
    )
}

// Exportando o componente PaginaBase para ser utilizado em outras partes da aplicação.
export default PaginaBase;
