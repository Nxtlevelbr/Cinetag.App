// Importando os componentes necessários do 'react-router-dom' para gerenciar a navegação entre as páginas.
import { BrowserRouter, Route } from "react-router-dom";  // 'BrowserRouter' para gerenciamento de rotas no navegador e 'Route' para definir as rotas.
import { Routes } from "react-router-dom";  // 'Routes' para agrupar e definir as diferentes rotas da aplicação.
import Inicio from "./pages/Inicio";  // Página inicial da aplicação.
import Favoritos from "./pages/Favoritos";  // Página de favoritos.
import Player from "./pages/Player";  // Página de detalhes do player, provavelmente relacionada a algum conteúdo específico.
import NaoEncontrada from "./pages/NaoEncontrada";  // Página de erro, exibida quando a rota não é encontrada.
import PaginaBase from "./pages/PaginaBase";  // Componente de layout base que envolve todas as páginas com cabeçalho, rodapé, etc.

function AppRoutes() {
    return (
        // O 'BrowserRouter' é usado para envolver toda a aplicação, possibilitando o uso de navegação baseada em URL.
        <BrowserRouter>
            {/* O 'Routes' agrupa todas as rotas da aplicação e é responsável por renderizar a rota correspondente ao caminho da URL */}
            <Routes>
                {/* Definindo a rota principal da aplicação ('/') que renderiza o layout base com o componente 'PaginaBase' */}
                <Route path="/" element={<PaginaBase />}>
                    {/* Definindo as rotas filhas dentro de 'PaginaBase' */}
                    {/* A rota 'index' renderiza a página 'Inicio' quando o usuário acessa a URL '/' */}
                    <Route index element={<Inicio />} />
                    {/* A rota '/favoritos' renderiza a página 'Favoritos' */}
                    <Route path="favoritos" element={<Favoritos />} />
                    {/* A rota '/:id' renderiza a página 'Player', onde ':id' é um parâmetro dinâmico (provavelmente um identificador de player) */}
                    <Route path=":id" element={<Player />} />
                    {/* A rota '*' é um coringa que captura qualquer caminho não definido e renderiza a página 'NaoEncontrada' */}
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>                            
            </Routes>
        </BrowserRouter>
    )
}

// Exportando o componente 'AppRoutes' para que seja utilizado na inicialização da aplicação.
export default AppRoutes;
