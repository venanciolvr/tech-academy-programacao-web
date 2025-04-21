document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('[data-menu-item]');
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;
    
    // Função para atualizar o item ativo baseado na URL atual
    function setActiveMenuItemByPath() {
        const currentPath = window.location.pathname;
        
        menuItems.forEach(item => {
            const link = item.querySelector('a');
            if (!link) return;
            
            // Remove a classe active de todos os itens primeiro
            item.classList.remove('active');
            
            // Verifica se o href do link está contido no caminho atual
            const href = link.getAttribute('href');
            if (href && currentPath.includes(href.split('/').slice(-2).join('/'))) {
                item.classList.add('active');
            }
            
            // Caso especial para a home
            if (currentPath.includes('home-aluno') && href.includes('home-aluno')) {
                item.classList.add('active');
            }
        });
    }
    
    // Função para alternar o menu mobile
    function toggleMobileMenu() {
        body.classList.toggle('menu-open');
        const isOpen = body.classList.contains('menu-open');
        hamburger.setAttribute('aria-expanded', isOpen);
        
        // Previne rolagem do body quando o menu está aberto
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
    
    // Adiciona evento de clique ao botão hambúrguer
    hamburger?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMobileMenu();
    });
    
    // Adiciona evento de clique a cada item do menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // O item ativo será atualizado automaticamente na nova página
            // através da função setActiveMenuItemByPath
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });

    // Define o item ativo inicial baseado na URL atual
    setActiveMenuItemByPath();

    // Fecha o menu mobile ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && body.classList.contains('menu-open')) {
            body.classList.remove('menu-open');
            body.style.overflow = '';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}); 