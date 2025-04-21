/**
 * JavaScript específico para a Landing Page
 * Contém todas as funcionalidades interativas para a landing page
 */

// Dados dos cursos
const coursesData = {
    'web-dev': {
        title: 'Desenvolvimento Web Full Stack',
        description: 'Aprenda a criar aplicações web completas, desde o frontend até o backend, utilizando as tecnologias mais modernas do mercado.',
        learnings: [
            'HTML5, CSS3 e JavaScript moderno',
            'Frameworks frontend (React, Vue ou Angular)',
            'Backend com Node.js e Express',
            'Banco de dados SQL e NoSQL',
            'APIs RESTful e GraphQL',
            'Deploy e DevOps básico'
        ],
        duration: '6 meses'
    },
    'data-science': {
        title: 'Data Science e Machine Learning',
        description: 'Domine as técnicas de análise de dados e machine learning para extrair insights valiosos e criar modelos preditivos.',
        learnings: [
            'Python para análise de dados',
            'Bibliotecas como Pandas e NumPy',
            'Visualização de dados com Matplotlib e Seaborn',
            'Algoritmos de machine learning',
            'Deep learning e redes neurais',
            'Processamento de linguagem natural'
        ],
        duration: '8 meses'
    },
    'ai': {
        title: 'Inteligência Artificial',
        description: 'Explore o fascinante mundo da IA, aprendendo desde os fundamentos até aplicações práticas em diversos setores.',
        learnings: [
            'Fundamentos de IA e machine learning',
            'Redes neurais e deep learning',
            'Visão computacional',
            'Processamento de linguagem natural',
            'Reinforcement learning',
            'Ética e responsabilidade em IA'
        ],
        duration: '8 meses'
    },
    'cloud': {
        title: 'Cloud Computing e DevOps',
        description: 'Aprenda a arquitetar, implementar e gerenciar soluções em nuvem, além de dominar as práticas de DevOps.',
        learnings: [
            'Fundamentos de cloud computing',
            'AWS, Azure e Google Cloud',
            'Infraestrutura como código',
            'CI/CD e automação',
            'Monitoramento e observabilidade',
            'Segurança em cloud'
        ],
        duration: '6 meses'
    },
    'cyber': {
        title: 'Cybersecurity',
        description: 'Proteja sistemas e dados contra ameaças cibernéticas, aprendendo as melhores práticas de segurança da informação.',
        learnings: [
            'Fundamentos de segurança da informação',
            'Testes de penetração',
            'Análise de vulnerabilidades',
            'Criptografia e segurança de redes',
            'Compliance e governança',
            'Resposta a incidentes'
        ],
        duration: '6 meses'
    },
    'mobile': {
        title: 'Mobile Development',
        description: 'Desenvolva aplicativos móveis nativos e híbridos para iOS e Android, utilizando as tecnologias mais modernas.',
        learnings: [
            'Desenvolvimento iOS com Swift',
            'Desenvolvimento Android com Kotlin',
            'React Native e Flutter',
            'UI/UX para mobile',
            'APIs e integrações',
            'Publicação nas lojas'
        ],
        duration: '6 meses'
    },
    'design': {
        title: 'UI/UX Design',
        description: 'Crie interfaces intuitivas e experiências de usuário memoráveis, combinando design e tecnologia.',
        learnings: [
            'Fundamentos de UI/UX',
            'Design thinking',
            'Ferramentas de prototipagem',
            'Design system',
            'Acessibilidade',
            'Testes de usabilidade'
        ],
        duration: '4 meses'
    },
    'blockchain': {
        title: 'Blockchain',
        description: 'Explore o mundo das criptomoedas e blockchain, aprendendo a desenvolver aplicações descentralizadas.',
        learnings: [
            'Fundamentos de blockchain',
            'Smart contracts',
            'Desenvolvimento DApps',
            'Segurança em blockchain',
            'Tokens e criptomoedas',
            'Regulamentação e compliance'
        ],
        duration: '6 meses'
    },
    'game': {
        title: 'Game Development',
        description: 'Aprenda a criar jogos 2D e 3D, desde a concepção até a publicação, utilizando engines modernas.',
        learnings: [
            'Unity e Unreal Engine',
            'Programação de jogos',
            'Design de níveis',
            'Física e animação',
            'IA para jogos',
            'Monetização e publicação'
        ],
        duration: '8 meses'
    },
    'iot': {
        title: 'Internet of Things',
        description: 'Desenvolva soluções IoT, conectando dispositivos físicos à internet e criando aplicações inteligentes.',
        learnings: [
            'Fundamentos de IoT',
            'Sensores e atuadores',
            'Protocolos de comunicação',
            'Plataformas IoT',
            'Segurança em IoT',
            'Análise de dados IoT'
        ],
        duration: '6 meses'
    },
    'qa': {
        title: 'Quality Assurance',
        description: 'Aprenda as melhores práticas de teste de software, garantindo a qualidade dos produtos digitais.',
        learnings: [
            'Fundamentos de QA',
            'Testes manuais e automatizados',
            'Selenium e Cypress',
            'Testes de performance',
            'Testes de segurança',
            'Metodologias ágeis'
        ],
        duration: '4 meses'
    },
    'agile': {
        title: 'Agile & Scrum',
        description: 'Domine as metodologias ágeis e o framework Scrum para gerenciar projetos de forma eficiente.',
        learnings: [
            'Fundamentos do Agile',
            'Framework Scrum',
            'Kanban e outras metodologias',
            'Gestão de equipes ágeis',
            'Métricas e KPIs',
            'Transformação ágil'
        ],
        duration: '3 meses'
    }
};

// Elementos do Modal
const courseModal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');
const modalTitle = document.querySelector('.modal__title');
const modalDescription = document.querySelector('.modal__description');
const modalLearnings = document.querySelector('.modal__list');
const modalDuration = document.querySelector('.modal__duration');
const modalButton = document.querySelector('.modal__button');

// Dados dos cursos
const courses = {
    'web-dev': {
        title: 'Desenvolvimento Web Full Stack',
        description: 'Aprenda a criar aplicações web completas, desde o frontend até o backend, utilizando as tecnologias mais modernas do mercado.',
        learnings: [
            'HTML5, CSS3 e JavaScript moderno',
            'Frameworks frontend (React, Vue ou Angular)',
            'Backend com Node.js e Express',
            'Banco de dados SQL e NoSQL',
            'APIs RESTful e GraphQL',
            'Deploy e DevOps básico'
        ],
        duration: '6 meses',
        buttonLink: '#'
    },
    'data-science': {
        title: 'Data Science e Machine Learning',
        description: 'Domine as técnicas de análise de dados e machine learning para extrair insights valiosos e criar modelos preditivos.',
        learnings: [
            'Python para análise de dados',
            'Bibliotecas como Pandas e NumPy',
            'Visualização de dados com Matplotlib e Seaborn',
            'Algoritmos de machine learning',
            'Deep learning e redes neurais',
            'Processamento de linguagem natural'
        ],
        duration: '8 meses',
        buttonLink: '#'
    },
    'cloud': {
        title: 'Cloud Computing e DevOps',
        description: 'Aprenda a arquitetar, implementar e gerenciar soluções em nuvem, além de dominar as práticas de DevOps.',
        learnings: [
            'Fundamentos de cloud computing',
            'AWS, Azure e Google Cloud',
            'Infraestrutura como código',
            'CI/CD e automação',
            'Monitoramento e observabilidade',
            'Segurança em cloud'
        ],
        duration: '6 meses',
        buttonLink: '#'
    },
    'cyber': {
        title: 'Cybersecurity',
        description: 'Proteja sistemas e dados contra ameaças cibernéticas, aprendendo as melhores práticas de segurança da informação.',
        learnings: [
            'Fundamentos de segurança da informação',
            'Testes de penetração',
            'Análise de vulnerabilidades',
            'Criptografia e segurança de redes',
            'Compliance e governança',
            'Resposta a incidentes'
        ],
        duration: '6 meses',
        buttonLink: '#'
    },
    'mobile': {
        title: 'Mobile Development',
        description: 'Desenvolva aplicativos móveis nativos e híbridos para iOS e Android, utilizando as tecnologias mais modernas.',
        learnings: [
            'Desenvolvimento iOS com Swift',
            'Desenvolvimento Android com Kotlin',
            'React Native e Flutter',
            'UI/UX para mobile',
            'APIs e integrações',
            'Publicação nas lojas'
        ],
        duration: '6 meses',
        buttonLink: '#'
    },
    'design': {
        title: 'UI/UX Design',
        description: 'Crie interfaces intuitivas e experiências de usuário memoráveis, combinando design e tecnologia.',
        learnings: [
            'Fundamentos de UI/UX',
            'Design thinking',
            'Ferramentas de prototipagem',
            'Design system',
            'Acessibilidade',
            'Testes de usabilidade'
        ],
        duration: '4 meses',
        buttonLink: '#'
    },
    'ai': {
        title: 'Inteligência Artificial',
        description: 'Explore o fascinante mundo da IA, aprendendo desde os fundamentos até aplicações práticas em diversos setores.',
        learnings: [
            'Fundamentos de IA e machine learning',
            'Redes neurais e deep learning',
            'Visão computacional',
            'Processamento de linguagem natural',
            'Reinforcement learning',
            'Ética e responsabilidade em IA'
        ],
        duration: '8 meses',
        buttonLink: '#'
    },
    'blockchain': {
        title: 'Blockchain',
        description: 'Explore o mundo das criptomoedas e blockchain, aprendendo a desenvolver aplicações descentralizadas.',
        learnings: [
            'Fundamentos de blockchain',
            'Smart contracts',
            'Desenvolvimento DApps',
            'Segurança em blockchain',
            'Tokens e criptomoedas',
            'Regulamentação e compliance'
        ],
        duration: '6 meses',
        buttonLink: '#'
    },
    'game': {
        title: 'Game Development',
        description: 'Aprenda a criar jogos 2D e 3D, desde a concepção até a publicação, utilizando engines modernas.',
        learnings: [
            'Unity e Unreal Engine',
            'Programação de jogos',
            'Design de níveis',
            'Física e animação',
            'IA para jogos',
            'Monetização e publicação'
        ],
        duration: '8 meses',
        buttonLink: '#'
    },
    'iot': {
        title: 'Internet of Things',
        description: 'Desenvolva soluções IoT, conectando dispositivos físicos à internet e criando aplicações inteligentes.',
        learnings: [
            'Fundamentos de IoT',
            'Sensores e atuadores',
            'Protocolos de comunicação',
            'Plataformas IoT',
            'Segurança em IoT',
            'Análise de dados IoT'
        ],
        duration: '6 meses',
        buttonLink: '#'
    },
    'qa': {
        title: 'Quality Assurance',
        description: 'Aprenda as melhores práticas de teste de software, garantindo a qualidade dos produtos digitais.',
        learnings: [
            'Fundamentos de QA',
            'Testes manuais e automatizados',
            'Selenium e Cypress',
            'Testes de performance',
            'Testes de segurança',
            'Metodologias ágeis'
        ],
        duration: '4 meses',
        buttonLink: '#'
    },
    'agile': {
        title: 'Agile & Scrum',
        description: 'Domine as metodologias ágeis e o framework Scrum para gerenciar projetos de forma eficiente.',
        learnings: [
            'Fundamentos do Agile',
            'Framework Scrum',
            'Kanban e outras metodologias',
            'Gestão de equipes ágeis',
            'Métricas e KPIs',
            'Transformação ágil'
        ],
        duration: '3 meses',
        buttonLink: '#'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o efeito de rolagem suave para os links de navegação
    initSmoothScrolling();
    
    // Inicializa qualquer outra funcionalidade específica para a landing page
    initLandingPageFeatures();

    // Adicionar evento de clique nos cards
    const courseCards = document.querySelectorAll('.curso-card');
    console.log('Found course cards:', courseCards.length);
    
    courseCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const courseId = card.getAttribute('data-course');
            console.log('Clicked card with courseId:', courseId);
            
            if (courses[courseId]) {
                console.log('Opening modal for course:', courses[courseId].title);
                openModal(courses[courseId]);
            } else {
                console.log('Course not found:', courseId);
            }
        });
    });

    // Fechar modal ao clicar no botão de fechar
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // Fechar modal ao clicar fora do conteúdo
    if (courseModal) {
        courseModal.addEventListener('click', (e) => {
            if (e.target === courseModal) {
                closeModal();
            }
        });
    }

    // Fechar modal com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && courseModal.classList.contains('show')) {
            closeModal();
        }
    });

    // Inicializa o carrossel quando o DOM está carregado
    new Carousel();

    // Initialize logo strip
    new LogoStrip();
});

/**
 * Inicializa o efeito de rolagem suave para os links de navegação
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Inicializa as funcionalidades específicas para a landing page
 */
function initLandingPageFeatures() {
    // Adiciona o efeito de hover para os cards de especialistas
    const specialistCards = document.querySelectorAll('.especialista-card');
    specialistCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Adiciona a animação para os elementos da seção hero
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    
    if (heroTitle && heroSubtitle) {
        heroTitle.style.opacity = '0';
        heroSubtitle.style.opacity = '0';
        
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.5s ease';
            heroSubtitle.style.transition = 'opacity 0.5s ease';
            heroTitle.style.opacity = '1';
            heroSubtitle.style.opacity = '1';
        }, 100);
    }
}

function openModal(courseData) {
    if (!courseData) return;
    
    modalTitle.textContent = courseData.title;
    modalDescription.textContent = courseData.description;
    modalLearnings.innerHTML = courseData.learnings.map(learning => `<li>${learning}</li>`).join('');
    modalDuration.textContent = `Duração: ${courseData.duration}`;
    modalButton.href = '/pages/signup/signup-options.html';

    courseModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    courseModal.classList.remove('show');
    document.body.style.overflow = '';
}

class Carousel {
    constructor() {
        this.carousel = document.querySelector('.cursos__carousel');
        this.track = document.querySelector('.cursos__track');
        this.cards = document.querySelectorAll('.curso-card');
        this.prevBtn = document.querySelector('.cursos__nav-btn--prev');
        this.nextBtn = document.querySelector('.cursos__nav-btn--next');
        this.dotsContainer = document.querySelector('.cursos__dots');
        
        this.currentIndex = 5; // Inicia com um card clonado no centro
        this.cardWidth = this.cards[0].offsetWidth;
        this.gap = 32; // 2rem de espaço entre os cards
        this.isAutoScrolling = false;
        this.autoScrollInterval = null;
        this.isAnimating = false;
        this.isHovered = false;
        
        this.init();
    }
    
    init() {
        // Clona os cards para loop infinito
        this.cloneCards();
        
        // Cria a navegação por pontos
        this.createDots();
        
        // Define a posição inicial
        requestAnimationFrame(() => {
            this.centerCarousel(false);
            // Inicia com a animação após a posição inicial
            setTimeout(() => {
                this.centerCarousel(true);
                this.startAutoScroll();
            }, 50);
        });
        
        // Adiciona os eventos de clique
        this.prevBtn.addEventListener('click', () => this.handleManualNavigation('prev'));
        this.nextBtn.addEventListener('click', () => this.handleManualNavigation('next'));
        
        // Eventos de toque para dispositivos móveis
        this.addTouchEvents();
        
        // Cuida do estado de hover
        this.carousel.addEventListener('mouseenter', () => {
            this.isHovered = true;
            this.pauseAutoScroll();
        });
        
        this.carousel.addEventListener('mouseleave', () => {
            this.isHovered = false;
            this.startAutoScroll();
        });
        
        // Cuida do redimensionamento da janela
        window.addEventListener('resize', () => {
            this.cardWidth = this.cards[0].offsetWidth;
            this.centerCarousel();
        });
    }
    
    createDots() {
        // Limpa os pontos existentes
        this.dotsContainer.innerHTML = '';
        
        // Cria pontos para os cards originais (excluindo clones)
        const originalCardsCount = this.cards.length - 10; // Subtrai os clones
        for (let i = 0; i < originalCardsCount; i++) {
            const dot = document.createElement('button');
            dot.classList.add('cursos__dot');
            dot.setAttribute('aria-label', `Ir para o card ${i + 1}`);
            dot.addEventListener('click', () => this.handleDotClick(i));
            this.dotsContainer.appendChild(dot);
        }
        
        // Atualiza o ponto ativo
        this.updateDots();
    }
    
    handleDotClick(index) {
        this.pauseAutoScroll();
        
        // Calcula o índice alvo considerando os clones
        const targetIndex = index + 5;
        this.currentIndex = targetIndex;
        
        this.centerCarousel();
        
        // Atualiza os pontos
        this.updateDots();
        
        // Reinicia o auto-scroll após o atraso
        setTimeout(() => {
            if (!this.isHovered) {
                this.startAutoScroll();
            }
        }, 1000);
    }
    
    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.cursos__dot');
        const originalIndex = (this.currentIndex - 5) % (this.cards.length - 10);
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === originalIndex);
        });
    }
    
    handleManualNavigation(direction) {
        this.pauseAutoScroll();
        this.move(direction);
        // Reinicia o auto-scroll após a navegação manual
        setTimeout(() => {
            if (!this.isHovered) {
                this.startAutoScroll();
            }
        }, 1000);
    }
    
    move(direction) {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        if (direction === 'prev') {
            this.currentIndex--;
        } else {
            this.currentIndex++;
        }
        
        this.centerCarousel();
        
        // Reseta a posição se estiver no final
        setTimeout(() => {
            if (direction === 'prev' && this.currentIndex <= 0) {
                this.currentIndex = this.cards.length - 10;
                this.centerCarousel(false);
            } else if (direction === 'next' && this.currentIndex >= this.cards.length - 5) {
                this.currentIndex = 5;
                this.centerCarousel(false);
            }
            this.isAnimating = false;
        }, 500);
    }
    
    centerCarousel(animate = true) {
        const carouselWidth = this.carousel.offsetWidth;
        const centerOffset = (carouselWidth - this.cardWidth) / 2;
        const targetOffset = -(this.currentIndex * (this.cardWidth + this.gap)) + centerOffset;
        
        this.track.style.transition = animate ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
        this.track.style.transform = `translateX(${targetOffset}px)`;
        
        // Atualiza o card ativo
        this.cards.forEach((card, index) => {
            const isActive = index === this.currentIndex;
            card.classList.toggle('active', isActive);
            
            // Calcula a distância do centro para o efeito de escala
            const distanceFromCenter = Math.abs(index - this.currentIndex);
            const scale = Math.max(0.9, 1 - (distanceFromCenter * 0.1));
            const opacity = Math.max(0.7, 1 - (distanceFromCenter * 0.3));
            
            card.style.transform = `scale(${scale}) translateY(${isActive ? '-10px' : '0'})`;
            card.style.opacity = opacity;
            card.style.zIndex = isActive ? '2' : '1';
        });
        
        // Atualiza os pontos
        this.updateDots();
    }
    
    startAutoScroll() {
        if (this.isAutoScrolling || this.isHovered) return;
        
        this.isAutoScrolling = true;
        this.autoScrollInterval = setInterval(() => {
            if (!this.isAnimating && !this.isHovered) {
                this.move('next');
            }
        }, 3000);
    }
    
    pauseAutoScroll() {
        this.isAutoScrolling = false;
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
            this.autoScrollInterval = null;
        }
    }
    
    addTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            this.pauseAutoScroll();
        });
        
        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
            // Restart auto-scroll depois de tocar
            setTimeout(() => {
                if (!this.isHovered) {
                    this.startAutoScroll();
                }
            }, 1000);
        });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.move('next');
            } else {
                this.move('prev');
            }
        }
    }
    
    cloneCards() {
        // Clona os primeiros 5 cards para o final
        const firstCards = Array.from(this.cards).slice(0, 5);
        firstCards.forEach(card => {
            const clone = card.cloneNode(true);
            this.track.appendChild(clone);
        });
        
        // Clona os últimos 5 cards para o início
        const lastCards = Array.from(this.cards).slice(-5);
        lastCards.forEach(card => {
            const clone = card.cloneNode(true);
            this.track.insertBefore(clone, this.track.firstChild);
        });
        
        // Atualiza a referência dos cards
        this.cards = document.querySelectorAll('.curso-card');
    }
}

// Animação da Faixa de Logos
class LogoStrip {
    constructor() {
        this.track = document.querySelector('.logo-strip__track');
        this.items = [];
        this.logoFiles = [];
        this.gap = window.innerWidth <= 768 ? 32 : 64; // 2rem ou 4rem em pixels
        this.isAnimating = false;
        
        this.init();
    }

    async init() {
        try {
            // Carrega arquivos de logo do diretório
            await this.loadLogoFiles();
            
            // Cria itens iniciais
            this.createItems();
            
            // Clona itens para loop suave
            this.cloneItems();
            
            // Calcula e define a largura da faixa de logos
            this.setTrackWidth();
            
            // Inicia a animação
            this.startAnimation();
            
            // Cuida do redimensionamento da janela
            window.addEventListener('resize', () => {
                this.gap = window.innerWidth <= 768 ? 32 : 64;
                this.setTrackWidth();
            });
        } catch (error) {
            console.error('Error initializing LogoStrip:', error);
        }
    }

    async loadLogoFiles() {
        try {
            // Busca a lista de arquivos de logo do servidor
            const response = await fetch('/assets/images/logos/');
            const text = await response.text();
            
            // Analisa a lista de diretórios para obter arquivos de imagem
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const links = doc.querySelectorAll('a');
            
            this.logoFiles = Array.from(links)
                .map(link => link.href)
                .filter(href => {
                    const fileName = href.split('/').pop();
                    return fileName.match(/\.(png|jpg|jpeg|svg)$/i);
                })
                .map(href => {
                    const fileName = href.split('/').pop();
                    return {
                        src: `/assets/images/logos/${fileName}`,
                        alt: fileName.split('.')[0].toUpperCase()
                    };
                });
            
            if (this.logoFiles.length === 0) {
                throw new Error('No logo files found in the directory');
            }
        } catch (error) {
            console.error('Error loading logo files:', error);
            // Retorna um conjunto padrão de logos se a lista de diretórios falhar
            this.logoFiles = [
                { src: '/assets/images/logos/google.png', alt: 'GOOGLE' },
                { src: '/assets/images/logos/apple.png', alt: 'APPLE' },
                { src: '/assets/images/logos/nvidia.png', alt: 'NVIDIA' },
                { src: '/assets/images/logos/meta.png', alt: 'META' },
                { src: '/assets/images/logos/ibm.png', alt: 'IBM' },
                { src: '/assets/images/logos/amazon.png', alt: 'AMAZON' }
            ];
        }
    }

    createItems() {
        // Limpa os itens existentes
        this.track.innerHTML = '';
        this.items = [];
        
        // Cria itens para cada logo
        this.logoFiles.forEach(logo => {
            const item = document.createElement('div');
            item.className = 'logo-strip__item';
            
            const img = document.createElement('img');
            img.src = logo.src;
            img.alt = logo.alt;
            img.className = 'logo-strip__logo';
            
            item.appendChild(img);
            this.track.appendChild(item);
            this.items.push(item);
        });
    }

    cloneItems() {
        // Clona todos os itens e os adiciona à faixa de logos
        const items = Array.from(this.items);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            this.track.appendChild(clone);
        });
    }

    setTrackWidth() {
        if (this.items.length === 0) return;
        
        const itemWidth = this.items[0].offsetWidth;
        const totalItems = this.items.length * 2; // Original + cloned items
        const totalWidth = (itemWidth * totalItems) + (this.gap * (totalItems - 1));
        
        // Coloca a largura da faixa de logos para exatamente corresponder ao conteúdo
        this.track.style.width = `${totalWidth}px`;
        
        // Garante que a faixa de logos esteja posicionada corretamente
        this.track.style.transform = 'translateX(0)';
    }

    startAnimation() {
        // A animação é tratada pelo CSS
    }
}
