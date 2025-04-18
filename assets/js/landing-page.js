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
