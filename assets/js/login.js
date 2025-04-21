document.addEventListener('DOMContentLoaded', function() {
    // Elementos do formulário
    const form = document.querySelector('.login-form__fields');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordInput = document.getElementById('password');

    // Função para validar o formato do e-mail
    function validateEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Função para atualizar o estado visual do campo de e-mail
    function updateEmailValidationState(email) {
        const isValid = validateEmailFormat(email);
        const isEmpty = email.trim() === '';

        if (!isEmpty && !isValid) {
            emailInput.classList.add('error');
            emailError.textContent = 'Insira um e-mail válido';
            emailError.classList.add('show');
        } else {
            emailInput.classList.remove('error');
            emailError.classList.remove('show');
        }

        return isValid || isEmpty;
    }

    // Event listeners
    emailInput.addEventListener('input', function() {
        updateEmailValidationState(this.value);
    });

    emailInput.addEventListener('blur', function() {
        updateEmailValidationState(this.value);
    });

    // Validação do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailValid = updateEmailValidationState(emailInput.value);
        
        if (emailValid && passwordInput.value.trim() !== '') {
            /**
             * Aqui você pode adicionar a lógica de autenticação
             * Redireciona para a página home-aluno.html
             */
            window.location.href = '../../pages/home-aluno/home-aluno.html';
        }
    });
});
