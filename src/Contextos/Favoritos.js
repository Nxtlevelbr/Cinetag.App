// Importando funções do React: createContext, useContext e useState.
import { createContext, useContext, useState } from "react";

// Criando o contexto FavoritosContext. O contexto será utilizado para compartilhar os favoritos entre diferentes componentes.
export const FavoritosContext = createContext();
// Definindo o nome do contexto para facilitar a identificação e depuração.
FavoritosContext.displayName = "Favoritos";

// Criando o provider 'FavoritosProvider', que gerencia o estado global dos favoritos.
export default function FavoritosProvider({ children }) {
    // Usando o hook useState para criar um estado 'favorito', que vai armazenar a lista de itens favoritos.
    const [favorito, setFavorito] = useState([]);

    return (
        // O contexto é envolvido pelo Provider, permitindo que qualquer componente filho acesse o contexto.
        // O valor do contexto inclui o estado atual dos favoritos e a função para atualizar esse estado.
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}
        >
            {/* 'children' são os componentes que serão renderizados dentro do provider, permitindo o acesso ao contexto */}
            {children}
        </FavoritosContext.Provider>
    );
}

// Criando um hook customizado para acessar e manipular o contexto de favoritos.
export function useFavoritoContext() {
    // Usando o hook useContext para acessar os valores do contexto FavoritosContext.
    const { favorito, setFavorito } = useContext(FavoritosContext);

    // Função para adicionar ou remover favoritos da lista de favoritos.
    function adicionarFavorito(novoFavorito) {
        // Verificando se o item já está na lista de favoritos.
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        // Criando uma cópia da lista de favoritos para não modificar diretamente o estado.
        let novaLista = [...favorito];

        // Se o item não está na lista de favoritos, adiciona-o.
        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista); // Atualizando o estado com a nova lista.
        }

        // Se o item já está na lista, remove-o.
        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista); // Atualizando o estado com a lista após a remoção.
    }

    // Retorna o estado atual dos favoritos e a função para adicionar ou remover favoritos.
    return {
        favorito,
        adicionarFavorito
    };
}
