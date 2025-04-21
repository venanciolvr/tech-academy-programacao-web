document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('[data-menu-item]');
    const menuIndicator = document.querySelector('.menu-indicator');
    
    // Função para atualizar a posição do indicador
    function updateIndicator(menuItem) {
        const rect = menuItem.getBoundingClientRect();
        const parentRect = menuItem.parentElement.getBoundingClientRect();
        
        menuIndicator.style.top = `${rect.top - parentRect.top}px`;
        menuIndicator.style.height = `${rect.height}px`;
    }
    
    // Atualiza o indicador para o item ativo atual
    function setInitialIndicator() {
        const activeItem = document.querySelector('[data-menu-item].active');
        if (activeItem) {
            updateIndicator(activeItem);
        }
    }
    
    // Atualiza o indicador ao carregar a página e após qualquer redimensionamento
    setInitialIndicator();
    window.addEventListener('resize', setInitialIndicator);
    
    // Adiciona evento de clique para cada item do menu
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const link = item.querySelector('a');
            if (link && !item.classList.contains('active')) {
                e.preventDefault();
                
                // Remove active class from all items
                menuItems.forEach(menuItem => menuItem.classList.remove('active'));
                
                // Add active class to clicked item
                item.classList.add('active');
                
                // Update indicator position with animation
                updateIndicator(item);
                
                // Navigate to the new page after animation
                setTimeout(() => {
                    window.location.href = link.href;
                }, 400); // Match the CSS transition duration
            }
        });
    });
}); 