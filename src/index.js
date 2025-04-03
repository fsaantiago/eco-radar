import React from 'react';
import { createRoot } from 'react-dom/client'; // Importando createRoot
import App from './App';
import '@/styles/globals.css';

// Selecionando o elemento raiz
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Elemento com ID "root" não encontrado!');
}

// Criando a raiz e renderizando o aplicativo
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
