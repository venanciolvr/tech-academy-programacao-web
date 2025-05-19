import { auth } from './firebase.js';
import { 
    signInWithEmailAndPassword, 
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

// Verificar se o usuário já está logado
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Usuário já está autenticado, redirecionando...');
        window.location.href = '../home-aluno/home-aluno.html';
    }
});

// Obter elementos do formulário
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const submitButton = loginForm.querySelector('button[type="submit"]');

// Função para exibir mensagem de erro
function showError(message, isSignupSuggestion = false) {
    errorMessage.innerHTML = '';
    if (isSignupSuggestion) {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'error-message signup-suggestion';
        const errorText = document.createElement('p');
        errorText.textContent = message;
        const signupLink = document.createElement('a');
        signupLink.href = '../signup/signup.html';
        signupLink.textContent = 'Faça sua matrícula agora';
        signupLink.className = 'signup-link';
        messageContainer.appendChild(errorText);
        messageContainer.appendChild(signupLink);
        errorMessage.appendChild(messageContainer);
    } else {
        errorMessage.textContent = message;
    }
    errorMessage.style.display = 'block';
}

function clearError() {
    errorMessage.innerHTML = '';
    errorMessage.style.display = 'none';
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Formulário de login submetido');
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    console.log('Tentando login com:', { email });
    try {
        submitButton.disabled = true;
        clearError();
        if (!email || !password) {
            throw new Error('Por favor, preencha todos os campos.');
        }
        // Tenta autenticar diretamente
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Login bem-sucedido:', userCredential.user.email);
        window.location.href = '../home-aluno/home-aluno.html';
    } catch (error) {
        console.error('Erro no login:', error);
        let errorMessageText = '';
        let isSignupSuggestion = false;
        if (error.code) {
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessageText = 'E-mail não cadastrado.';
                    isSignupSuggestion = true;
                    break;
                case 'auth/wrong-password':
                    errorMessageText = 'Senha incorreta. Por favor, verifique suas credenciais.';
                    break;
                case 'auth/invalid-email':
                    errorMessageText = 'E-mail inválido. Por favor, verifique o formato.';
                    break;
                case 'auth/too-many-requests':
                    errorMessageText = 'Muitas tentativas de login. Por favor, tente novamente mais tarde.';
                    break;
                case 'auth/user-disabled':
                    errorMessageText = 'Esta conta foi desativada. Entre em contato com o suporte.';
                    break;
                default:
                    errorMessageText = 'Erro ao fazer login. Por favor, tente novamente.';
            }
        } else {
            errorMessageText = error.message;
        }
        showError(errorMessageText, isSignupSuggestion);
        submitButton.disabled = false;
    }
});

// Validação em tempo real dos campos
const formInputs = loginForm.querySelectorAll('input');
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (emailInput.value.trim() && passwordInput.value) {
            submitButton.disabled = false;
            clearError();
        } else {
            submitButton.disabled = true;
        }
    });
});
