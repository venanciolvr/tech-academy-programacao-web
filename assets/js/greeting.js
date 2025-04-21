document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.querySelector('.greeting h2');
    const subtitleElement = document.querySelector('.greeting .subtitle');
    const userName = 'Beltrano Costa';
    
    // Função para obter a saudação baseada na hora
    function getGreeting() {
        const hour = new Date().getHours();
        
        if (hour >= 5 && hour < 12) {
            return 'Bom dia';
        } else if (hour >= 12 && hour < 18) {
            return 'Boa tarde';
        } else {
            return 'Boa noite';
        }
    }
    
    // Define o texto da saudação diretamente
    const greeting = `${getGreeting()}, ${userName}`;
    greetingElement.textContent = greeting;
}); 