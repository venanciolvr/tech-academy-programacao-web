import { auth, db } from '../../assets/js/firebase.js';
import { 
    createUserWithEmailAndPassword,
    updateProfile,
    fetchSignInMethodsForEmail
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    doc, 
    setDoc,
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Verificar se Firebase está carregando corretamente
console.log('Firebase conectado:', auth, db);

// Elementos do DOM
const signupForm = document.getElementById('signupForm');
const errorMessage = document.getElementById('errorMessage');
const submitButton = signupForm.querySelector('button[type="submit"]');
const emailInput = document.getElementById('email');
const confirmEmailInput = document.getElementById('confirmEmail');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
const termsCheckbox = document.querySelector('input[name="terms"]');
    const strengthCriteria = document.querySelectorAll('.strength-criteria li');
const strengthBar = document.querySelector('.strength-level');

// Critérios de validação da senha
const passwordCriteria = {
    length: password => password.length >= 8,
    uppercase: password => /[A-Z]/.test(password),
    lowercase: password => /[a-z]/.test(password),
    number: password => /[0-9]/.test(password),
    special: password => /[!@#$%^&*(),.?":{}|<>]/.test(password)
};

// Função para validar a senha e atualizar a interface
function validatePassword(password) {
    let validCriteria = 0;
    const totalCriteria = Object.keys(passwordCriteria).length;

    // Atualiza cada critério
    strengthCriteria.forEach(criterion => {
        const criterionType = criterion.dataset.criterion;
        const isValid = passwordCriteria[criterionType](password);
        
        // Atualiza a classe e o ícone do critério
        criterion.classList.toggle('valid', isValid);
        criterion.classList.toggle('invalid', !isValid);
        
        // Atualiza o ícone
        const icon = isValid ? 'fa-check-circle' : 'fa-times-circle';
        criterion.innerHTML = `<i class="fas ${icon}"></i> ${criterion.textContent.replace(/<[^>]*>/g, '')}`;
        
        if (isValid) validCriteria++;
    });

    // Atualiza a barra de força
    const strengthPercentage = (validCriteria / totalCriteria) * 100;
    strengthBar.style.width = `${strengthPercentage}%`;

    // Atualiza a cor da barra baseado na força
    if (strengthPercentage <= 20) {
        strengthBar.style.backgroundColor = '#dc3545'; // Vermelho
    } else if (strengthPercentage <= 40) {
        strengthBar.style.backgroundColor = '#ffc107'; // Amarelo
    } else if (strengthPercentage <= 60) {
        strengthBar.style.backgroundColor = '#fd7e14'; // Laranja
    } else if (strengthPercentage <= 80) {
        strengthBar.style.backgroundColor = '#20c997'; // Verde claro
    } else {
        strengthBar.style.backgroundColor = '#198754'; // Verde
    }

    return validCriteria === totalCriteria;
    }

// Função para exibir mensagem de erro
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.style.color = '#dc3545';
    errorMessage.style.marginTop = '10px';
    errorMessage.style.marginBottom = '10px';
    errorMessage.style.padding = '10px';
    errorMessage.style.backgroundColor = '#f8d7da';
    errorMessage.style.border = '1px solid #f5c6cb';
    errorMessage.style.borderRadius = '4px';
}

// Função para limpar mensagem de erro
function clearError() {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    }

// Função para verificar se o e-mail já está em uso
async function checkEmailExists(email) {
    try {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length > 0) {
            return {
                exists: true,
                message: 'Este e-mail já está sendo utilizado por outra conta. Por favor, utilize um e-mail diferente ou faça login se já possui uma conta.'
            };
        }
        return { exists: false };
    } catch (error) {
        console.error('Erro ao verificar e-mail:', error);
        throw new Error('Erro ao verificar disponibilidade do e-mail. Tente novamente.');
    }
}

// Função para validar o formulário
    function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = emailInput.value.trim();
    const confirmEmail = confirmEmailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const course = document.getElementById('course').value;
    const experience = document.querySelector('input[name="experience"]:checked')?.value;
    const terms = termsCheckbox.checked;

    // Validações básicas
    if (!firstName || !lastName) {
        throw new Error('Por favor, preencha seu nome e sobrenome.');
    }

    if (!email || !confirmEmail) {
        throw new Error('Por favor, preencha seu e-mail e confirmação.');
    }

    if (email !== confirmEmail) {
        throw new Error('Os e-mails não coincidem.');
    }

    if (!password || !confirmPassword) {
        throw new Error('Por favor, preencha sua senha e confirmação.');
    }

    if (password !== confirmPassword) {
        throw new Error('As senhas não coincidem.');
    }

    // Validação da força da senha
    if (!validatePassword(password)) {
        throw new Error('A senha não atende a todos os requisitos de segurança.');
    }

    if (!course) {
        throw new Error('Por favor, selecione um curso de interesse.');
    }

    if (!experience) {
        throw new Error('Por favor, selecione seu nível de experiência.');
    }

    if (!terms) {
        throw new Error('Você precisa aceitar os termos de uso para continuar.');
    }

    return {
        firstName,
        lastName,
        email,
        password,
        course,
        experience,
        terms,
        newsletter: document.querySelector('input[name="newsletter"]').checked
    };
}

// Função para criar o usuário no Firestore
async function createUserProfile(user, userData) {
    const userRef = doc(db, 'usuarios', user.uid);
    
    await setDoc(userRef, {
        nome: userData.firstName,
        sobrenome: userData.lastName,
        email: userData.email,
        cursoInteresse: userData.course,
        nivelExperiencia: userData.experience,
        aceitouTermos: userData.terms,
        newsletter: userData.newsletter,
        dataCadastro: serverTimestamp()
    });
}

// Função para lidar com o envio do formulário
async function handleSignup(event) {
    event.preventDefault();
    
    try {
        // Desabilita o botão durante o processo
        submitButton.disabled = true;
        clearError();
        
        // Valida o formulário
        const userData = validateForm();
        
        // Verifica se o e-mail já está em uso
        const emailCheck = await checkEmailExists(userData.email);
        if (emailCheck.exists) {
            showError(emailCheck.message);
            submitButton.disabled = false;
            return;
        }
        
        // Cria o usuário no Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            userData.email,
            userData.password
        );
        
        // Atualiza o perfil do usuário com o nome completo
        await updateProfile(userCredential.user, {
            displayName: `${userData.firstName} ${userData.lastName}`
        });
        
        // Cria o perfil do usuário no Firestore
        await createUserProfile(userCredential.user, userData);
        
        // Log para debug do redirecionamento
        console.log('Cadastro concluído com sucesso. Redirecionando...');
        
        // Redireciona para o portal do aluno
        window.location.href = '../home-aluno/home-aluno.html';
        
    } catch (error) {
        console.error('Erro no cadastro:', error);
        
        // Mensagens de erro amigáveis
        let errorMessageText = 'Ocorreu um erro durante o cadastro. ';
        
        if (error.code) {
            // Erros do Firebase
        switch (error.code) {
            case 'auth/email-already-in-use':
                    errorMessageText += 'Este e-mail já está em uso.';
                break;
            case 'auth/invalid-email':
                    errorMessageText += 'O e-mail fornecido é inválido.';
                break;
            case 'auth/weak-password':
                    errorMessageText += 'A senha é muito fraca.';
                break;
            default:
                    errorMessageText += error.message;
            }
        } else {
            // Erros manuais ou outros erros
            errorMessageText = error.message;
        }
        
        showError(errorMessageText);
        submitButton.disabled = false;
    }
}

// Event Listeners
signupForm.addEventListener('submit', handleSignup);

// Validação em tempo real dos campos
const formInputs = signupForm.querySelectorAll('input, select');
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        try {
            validateForm();
            submitButton.disabled = false;
            clearError();
        } catch (error) {
            submitButton.disabled = true;
            showError(error.message);
        }
    });
});

// Validação em tempo real da senha
passwordInput.addEventListener('input', () => {
    validatePassword(passwordInput.value);
}); 