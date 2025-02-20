// Importando as bibliotecas e arquivos necessários para a aplicação.
import React from 'react';  // Importa o React, necessário para criar componentes e trabalhar com JSX.
import ReactDOM from 'react-dom/client';  // Importa o ReactDOM para manipular o DOM e renderizar a aplicação na página web.
import './index.css';  // Importa o arquivo de estilos globais (CSS) para a aplicação.
import AppRoutes from './routes.js';  // Importa o componente 'AppRoutes' que define as rotas da aplicação.

// Cria a referência para o elemento de root no DOM onde a aplicação será montada.
const root = ReactDOM.createRoot(document.getElementById('root'));

// A renderização do componente principal ocorre dentro do elemento 'root'.
// O componente AppRoutes será responsável por gerenciar as rotas e o conteúdo da aplicação.
root.render(
  <React.StrictMode>
    {/* O StrictMode ajuda a identificar problemas no desenvolvimento, alertando sobre práticas potencialmente inseguras. */}
    <AppRoutes />
  </React.StrictMode>
);
