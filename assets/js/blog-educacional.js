document.addEventListener('DOMContentLoaded', () => {
    // Adicionar eventos de clique aos cartões de artigo
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('click', () => {
            // Obter o título do artigo para futura implementação de visualização de artigo
            const title = card.querySelector('h3').textContent;
            console.log(`Artigo clicado: ${title}`);
            // Futura implementação: navegar para a página de artigo ou abrir modal de artigo
        });
    });

    // Adicionar eventos de clique aos cartões de autor
    const authorCards = document.querySelectorAll('.author-card');
    authorCards.forEach(card => {
        card.addEventListener('click', () => {
            // Obter o nome do autor para futura implementação de visualização de perfil de autor
            const name = card.querySelector('h3').textContent;
            console.log(`Autor clicado: ${name}`);
            // Futura implementação: navegar para o perfil de autor ou abrir modal de autor
        });
    });
}); 