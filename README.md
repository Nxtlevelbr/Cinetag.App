# 🎬 **Cinetag - App de Vídeos** ==> acesse: https://cinetag-app-xi.vercel.app

## 📜 Descrição

**Cinetag** é um aplicativo moderno e dinâmico de vídeos, projetado para fornecer uma experiência de usuário simples e agradável. O projeto foi desenvolvido por **Marcel Prado Soddano**, formado em Análise e Desenvolvimento de Sistemas Full Stack pela FIAP. A aplicação permite aos usuários explorar, assistir e organizar vídeos de maneira eficiente, além de gerenciar vídeos favoritos e assistir conteúdo de maneira intuitiva.

Com a utilização de **React.js**, **React Router** e **Context API**, a aplicação oferece uma navegação fluída e funcionalidades como o gerenciamento de vídeos favoritos, além de um design responsivo para diferentes dispositivos.

---

## 🛠️ **Tecnologias Utilizadas**

- **Frontend**:

  - 🔧 **React.js** - Biblioteca JavaScript para construir a interface interativa.
  - 🛣️ **React Router** - Gerenciamento das rotas da aplicação.
  - 🌍 **Context API** - Gerenciamento de estado global, especialmente para a lista de favoritos.
  - 🎨 **CSS** - Estilos com CSS Modules para componentes isolados e CSS global para a aplicação.

- **Desenvolvimento**:
  - ⚡ **React Strict Mode** - Ativado para identificar problemas de desempenho e otimizar a aplicação.

---

## 🗂️ **Estrutura do Projeto**

A estrutura foi organizada para facilitar a escalabilidade e manutenção. Cada componente é responsável por uma funcionalidade específica, seguindo boas práticas de desenvolvimento com **React**.

### Estrutura de Diretórios

```bash
cinetag/
├── components/               # Componentes reutilizáveis (Cabeçalho, Rodapé, etc.)
│   ├── Cabecalho.js          # Componente de cabeçalho
│   ├── Container.js          # Componente para layout centralizado
│   ├── Rodape.js             # Componente de rodapé
├── pages/                    # Páginas da aplicação (Início, Favoritos, Player, etc.)
│   ├── Inicio.js             # Página inicial
│   ├── Favoritos.js          # Página de vídeos favoritos
│   ├── Player.js             # Página de exibição do vídeo
│   ├── NaoEncontrada.js      # Página de erro (404)
│   ├── PaginaBase.js         # Layout base da aplicação
├── contextos/                # Gerenciamento de estado global com Context API
│   ├── FavoritosProvider.js  # Provedor de contexto para favoritos
├── routes.js                 # Definição das rotas principais
├── index.css                 # Estilos globais
├── App.js                    # Componente principal com rotas
└── README.md                 # Este arquivo
🔍 Como Funciona o Aplicativo

1. Gerenciamento de Favoritos
A aplicação utiliza Context API para armazenar e gerenciar a lista de vídeos favoritos de forma global, tornando esses dados acessíveis em qualquer parte da aplicação.

Adicionar aos Favoritos: Os usuários podem adicionar vídeos à lista de favoritos.
Remover dos Favoritos: Os vídeos podem ser removidos facilmente da lista.
Exibição de Favoritos: A lista de vídeos favoritos está disponível em qualquer página que precise desses dados.
2. Roteamento com React Router
React Router gerencia as rotas da aplicação de forma eficiente:
🏠 Página Inicial (/): Exibe os vídeos ou conteúdos em destaque.
💖 Favoritos (/favoritos): Exibe os vídeos marcados como favoritos.
🎥 Player (/:id): Exibe o vídeo selecionado.
❓ Página Não Encontrada (*): Exibe uma página de erro caso o usuário acesse uma URL inválida.
3. Componente de Layout Base
PaginaBase.js contém a estrutura de layout principal da aplicação, incluindo o cabeçalho, corpo (onde o conteúdo é exibido) e rodapé. A Context API é fornecida globalmente dentro deste componente, tornando as informações dos favoritos acessíveis para todos os outros componentes.

4. Responsividade e Estilização
A aplicação é responsiva, adaptando-se automaticamente a diferentes tamanhos de tela (desktop, tablet, mobile). A estilização foi feita usando CSS Modules para componentes e um arquivo global para estilos gerais, garantindo uma aparência consistente e bem estruturada.

⚙️ Como Rodar o Projeto

Pré-requisitos
Antes de iniciar o projeto, verifique se você tem o Node.js e o npm instalados:

node -v
npm -v
Passos para Executar
Clone o repositório:
git clone https://github.com/usuario/cinetag.git
Instale as dependências: Navegue até o diretório do projeto:
cd cinetag
E instale as dependências:

npm install
Inicie o servidor de desenvolvimento: Após a instalação, inicie a aplicação:
npm start
Acesse a aplicação no navegador em http://localhost:3000.
```

LINK :🎬 **Cinetag - App de Vídeos** ==> acesse: https://cinetag-app-xi.vercel.app
