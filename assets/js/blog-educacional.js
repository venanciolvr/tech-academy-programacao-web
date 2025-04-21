document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to article cards
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the article title for future implementation of article view
            const title = card.querySelector('h3').textContent;
            console.log(`Article clicked: ${title}`);
            // Future implementation: navigate to article page or open article modal
        });
    });

    // Add click event listeners to author cards
    const authorCards = document.querySelectorAll('.author-card');
    authorCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the author name for future implementation of author profile view
            const name = card.querySelector('h3').textContent;
            console.log(`Author clicked: ${name}`);
            // Future implementation: navigate to author profile or open author modal
        });
    });
}); 