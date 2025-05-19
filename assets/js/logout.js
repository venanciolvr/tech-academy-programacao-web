import { auth } from './firebase.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Elemento do botão de logout
const logoutButton = document.getElementById('logoutButton');

// Função para realizar o logout
async function handleLogout() {
    try {
        // Desativa o botão durante o processo
        logoutButton.style.pointerEvents = 'none';
        logoutButton.style.opacity = '0.7';

        // Realiza o logout
        await signOut(auth);
        
        // Redireciona para a página de login
        window.location.href = '../login/login.html';
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        alert('Ocorreu um erro ao tentar sair. Por favor, tente novamente.');
        
        // Reativa o botão em caso de erro
        logoutButton.style.pointerEvents = 'auto';
        logoutButton.style.opacity = '1';
    }
}

// Adiciona o evento de clique ao botão
logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    handleLogout();
}); 