// Mapeamento dos cursos para suas respectivas páginas
const coursePages = {
    'web-dev': 'conteudo-programacao-web.html',
    'data-science': 'conteudo-data-science.html',
    'cloud': 'conteudo-cloud.html',
    'cyber': 'conteudo-cybersecurity.html',
    'mobile': 'conteudo-mobile.html',
    'design': 'conteudo-design.html',
    'ai': 'conteudo-ai.html',
    'blockchain': 'conteudo-blockchain.html',
    'game': 'conteudo-game.html',
    'iot': 'conteudo-iot.html',
    'qa': 'conteudo-qa.html',
    'agile': 'conteudo-agile.html'
};

// Função para inicializar a navegação dos cards
function initializeCourseNavigation() {
    // Seleciona todos os cards de curso
    const courseCards = document.querySelectorAll('.course-card');
    
    // Adiciona evento de clique para cada card
    courseCards.forEach(card => {
        // Adiciona cursor pointer ao card
        card.style.cursor = 'pointer';
        
        // Adiciona evento de clique
        card.addEventListener('click', () => {
            const courseId = card.getAttribute('data-course');
            if (courseId && coursePages[courseId]) {
                // Ajusta o caminho baseado na localização atual
                const basePath = window.location.pathname.includes('/pages/cursos/') ? '../' : 'pages/';
                window.location.href = basePath + coursePages[courseId];
            }
        });
    });
}

// Inicializa a navegação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initializeCourseNavigation); 