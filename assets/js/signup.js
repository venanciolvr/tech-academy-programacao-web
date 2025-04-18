document.addEventListener('DOMContentLoaded', function() {
    // Máscara para o campo de telefone
    $('#phone').mask('(00) 00000-0000');

    // Elementos do formulário
    const form = document.getElementById('signupForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const emailError = document.getElementById('emailError');
    const submitButton = form.querySelector('button[type="submit"]');
    const strengthCriteria = document.querySelectorAll('.strength-criteria li');

    // Lista de conectivos que devem permanecer em minúsculas
    const lowercaseWords = ['de', 'da', 'do', 'das', 'dos', 'e'];

    // Função para capitalizar nomes
    function capitalizeName(name) {
        return name
            .toLowerCase()
            .split(' ')
            .map(word => {
                // Se a palavra estiver na lista de conectivos, mantém em minúscula
                if (lowercaseWords.includes(word)) {
                    return word;
                }
                // Capitaliza a primeira letra de cada palavra
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(' ');
    }

    // Função para formatar o campo de nome
    function formatNameField(input) {
        const formattedValue = capitalizeName(input.value);
        if (formattedValue !== input.value) {
            input.value = formattedValue;
        }
    }

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

    // Função para validar a força da senha
    function validatePassword(password) {
        const criteria = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        // Atualiza o estado visual de cada critério
        strengthCriteria.forEach(criterion => {
            const type = criterion.dataset.criterion;
            const isValid = criteria[type];
            const hasText = password.length > 0;

            // Remove todas as classes de estado
            criterion.classList.remove('valid', 'invalid');

            if (hasText) {
                // Se há texto, aplica o estado válido ou inválido
                criterion.classList.add(isValid ? 'valid' : 'invalid');
            }
        });

        return Object.values(criteria).every(Boolean);
    }

    // Função para validar se os e-mails são iguais
    function validateEmails() {
        const email = emailInput.value;
        const confirmEmail = confirmEmailInput.value;
        const isValid = email === confirmEmail && email !== '';

        confirmEmailInput.setCustomValidity(isValid ? '' : 'Os e-mails não coincidem');
        return isValid;
    }

    // Função para validar se as senhas são iguais
    function validatePasswords() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const isValid = password === confirmPassword && password !== '';

        confirmPasswordInput.setCustomValidity(isValid ? '' : 'As senhas não coincidem');
        return isValid;
    }

    // Função para verificar se todos os campos obrigatórios estão preenchidos
    function validateForm() {
        const requiredInputs = form.querySelectorAll('input[required], select[required]');
        const allRequiredFilled = Array.from(requiredInputs).every(input => input.value.trim() !== '');
        const passwordValid = validatePassword(passwordInput.value);
        const emailsValid = validateEmails();
        const passwordsValid = validatePasswords();
        const termsChecked = form.querySelector('input[name="terms"]').checked;
        const emailFormatValid = updateEmailValidationState(emailInput.value);

        submitButton.disabled = !(allRequiredFilled && passwordValid && emailsValid && passwordsValid && termsChecked && emailFormatValid);
    }

    // Event listeners para os campos de nome
    firstNameInput.addEventListener('input', function() {
        formatNameField(this);
        validateForm();
    });

    firstNameInput.addEventListener('blur', function() {
        formatNameField(this);
        validateForm();
    });

    lastNameInput.addEventListener('input', function() {
        formatNameField(this);
        validateForm();
    });

    lastNameInput.addEventListener('blur', function() {
        formatNameField(this);
        validateForm();
    });

    // Event listeners
    emailInput.addEventListener('input', function() {
        updateEmailValidationState(this.value);
        validateForm();
    });

    emailInput.addEventListener('blur', function() {
        updateEmailValidationState(this.value);
        validateForm();
    });

    passwordInput.addEventListener('input', function() {
        validatePassword(this.value);
        validateForm();
    });

    confirmPasswordInput.addEventListener('input', validateForm);
    confirmEmailInput.addEventListener('input', validateForm);

    // Adiciona event listeners para todos os campos obrigatórios
    form.querySelectorAll('input[required], select[required]').forEach(input => {
        input.addEventListener('input', validateForm);
    });

    // Event listener para o checkbox de termos
    form.querySelector('input[name="terms"]').addEventListener('change', validateForm);

    // Validação inicial
    validateForm();
}); 