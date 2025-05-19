console.log('conteudo-curso.js carregado');
// Estrutura de dados do curso
const courseData = {
    modules: [
        {
            id: 1,
            title: "Módulo 1: Introdução ao Desenvolvimento Web",
            chapters: [
                {
                    id: "1.1",
                    title: "Introdução ao HTML5",
                    videoId: "VIDEO_ID_1",
                    duration: "15:30",
                    description: "Aprenda os fundamentos do HTML5 e sua estrutura básica.",
                    materials: [
                        { type: "pdf", title: "Slides da Aula", url: "#" },
                        { type: "link", title: "Documentação HTML5", url: "#" }
                    ],
                    completed: false
                },
                {
                    id: "1.2",
                    title: "Estrutura Básica HTML",
                    videoId: "VIDEO_ID_2",
                    duration: "20:15",
                    description: "Entenda como estruturar corretamente um documento HTML.",
                    materials: [
                        { type: "pdf", title: "Exercícios Práticos", url: "#" },
                        { type: "link", title: "Referência W3C", url: "#" }
                    ],
                    completed: false
                }
            ]
        },
        {
            id: 2,
            title: "Módulo 2: CSS e Estilização",
            chapters: [
                {
                    id: "2.1",
                    title: "Introdução ao CSS3",
                    videoId: "VIDEO_ID_3",
                    duration: "18:45",
                    description: "Conheça os conceitos básicos do CSS3 e suas propriedades.",
                    materials: [
                        { type: "pdf", title: "Guia de Estilos", url: "#" },
                        { type: "link", title: "CSS Tricks", url: "#" }
                    ],
                    completed: false
                },
                {
                    id: "2.2",
                    title: "Seletores e Propriedades",
                    videoId: "VIDEO_ID_4",
                    duration: "25:20",
                    description: "Aprenda a usar seletores e propriedades CSS de forma eficiente.",
                    materials: [
                        { type: "pdf", title: "Cheat Sheet CSS", url: "#" },
                        { type: "link", title: "MDN Web Docs", url: "#" }
                    ],
                    completed: false
                }
            ]
        }
    ]
};

// Elementos do DOM
const videoPlayer = document.getElementById('videoPlayer');
const chapterTitle = document.getElementById('chapterTitle');
const chapterDescription = document.getElementById('chapterDescription');
const materialsList = document.getElementById('materialsList');
const markCompleteBtn = document.createElement('button');
markCompleteBtn.className = 'mark-complete-btn';
markCompleteBtn.textContent = 'Marcar como concluído';

// Rastreamento do capítulo atual
let currentChapter = null;

// Constantes
const COURSE_ID = 'web-dev';
const STORAGE_KEY = `course_progress_${COURSE_ID}`;

// Elementos do DOM
const progressBar = document.querySelector('.progress-bar');
const progressPercentage = document.querySelector('.progress-percentage');
const chapterItems = document.querySelectorAll('.chapter-item');

// Estado do curso
let courseProgress = {
    completedChapters: new Set(),
    totalChapters: courseData.modules.reduce((acc, module) => acc + module.chapters.length, 0)
};

// Inicializar o curso
function initializeCourse() {
    // Adicionar event listeners aos cabeçalhos de módulo
    document.querySelectorAll('.module-header').forEach(header => {
        header.addEventListener('click', () => {
            const module = header.parentElement;
            module.classList.toggle('active');
            header.setAttribute('aria-expanded', 
                header.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
    });

    // Adicionar event listeners aos itens de capítulo
    document.querySelectorAll('.chapter-item').forEach(item => {
        item.addEventListener('click', () => {
            const chapterId = item.dataset.chapterId;
            loadChapter(chapterId);
        });
    });

    // Adicionar botão de conclusão ao detalhes do capítulo
    document.querySelector('.chapter-details').appendChild(markCompleteBtn);
    markCompleteBtn.addEventListener('click', markChapterComplete);
}

// Carregar conteúdo do capítulo
function loadChapter(chapterId) {
    // Debug: conferir se os elementos existem
    console.log('chapterId:', chapterId);
    console.log('videoPlayer:', videoPlayer);
    console.log('chapterTitle:', chapterTitle);
    console.log('chapterDescription:', chapterDescription);
    console.log('materialsList:', materialsList);

    // Encontrar dados do capítulo
    const chapter = findChapter(chapterId);
    if (!chapter) return;

    currentChapter = chapter;

    // Atualizar vídeo
    if (videoPlayer) videoPlayer.src = `https://www.youtube.com/embed/${chapter.videoId}`;

    // Atualizar detalhes do capítulo
    if (chapterTitle) chapterTitle.textContent = `${chapterId} - ${chapter.title}`;
    if (chapterDescription) chapterDescription.textContent = chapter.description;

    // Atualizar lista de materiais
    if (materialsList) {
        materialsList.innerHTML = chapter.materials.map(material => `
            <li>
                <a href="${material.url}" target="_blank">
                    <i class="fas fa-${material.type === 'pdf' ? 'file-pdf' : 'link'}"></i>
                    ${material.title}
                </a>
            </li>
        `).join('');
    }

    // Atualizar o estilo do item de capítulo
    document.querySelectorAll('.chapter-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.chapterId === chapterId) {
            item.classList.add('active');
        }
    });
}

// Encontrar dados do capítulo por ID
function findChapter(chapterId) {
    for (const module of courseData.modules) {
        const chapter = module.chapters.find(ch => ch.id === chapterId);
        if (chapter) return chapter;
    }
    return null;
}

// Marcar capítulo como concluído
function markChapterComplete() {
    if (!currentChapter) return;

    currentChapter.completed = true;
    markCompleteBtn.textContent = 'Concluído';
    markCompleteBtn.classList.add('completed');

    // Atualizar o estilo do item de capítulo
    const chapterItem = document.querySelector(`.chapter-item[data-chapter-id="${currentChapter.id}"]`);
    if (chapterItem) {
        chapterItem.classList.add('completed');
    }

    // Atualizar o progresso do curso
    updateCourseProgress();
}

// Atualizar o progresso do curso
function updateCourseProgress() {
    const totalChapters = courseData.modules.reduce((acc, module) => acc + module.chapters.length, 0);
    const completedChapters = courseData.modules.reduce((acc, module) => 
        acc + module.chapters.filter(chapter => chapter.completed).length, 0
    );
    
    const progress = (completedChapters / totalChapters) * 100;
    
    // Atualizar a barra de progresso se existir
    const progressBar = document.querySelector('.course-progress .progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

// Funções de utilidade
function loadProgress() {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
        const { completedChapters } = JSON.parse(savedProgress);
        courseProgress.completedChapters = new Set(completedChapters);
    }
    updateUI();
    // Atualiza o dashboard assim que carregar o progresso
    updateDashboardProgress();
}

function saveProgress() {
    const progressData = {
        completedChapters: Array.from(courseProgress.completedChapters)
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
    
    // Atualiza o progresso no card do curso na dashboard
    updateDashboardProgress();
}

function calculateProgress() {
    const completedCount = courseProgress.completedChapters.size;
    return Math.round((completedCount / courseProgress.totalChapters) * 100);
}

function updateChapterStates() {
    chapterItems.forEach(item => {
        const chapterId = item.dataset.chapterId;
        const chapterTitle = item.querySelector('.chapter-title');
        
        // Remove checkmark existente se houver
        const existingCheck = item.querySelector('.chapter-check');
        if (existingCheck) {
            existingCheck.remove();
        }

        if (courseProgress.completedChapters.has(chapterId)) {
            item.classList.add('completed');
            // Adiciona o checkmark
            const checkmark = document.createElement('i');
            checkmark.className = 'fas fa-check chapter-check';
            chapterTitle.appendChild(checkmark);
        } else {
            item.classList.remove('completed');
        }
    });
}

function updateCompleteButton() {
    const currentChapterId = markCompleteBtn.dataset.chapterId;
    if (currentChapterId && courseProgress.completedChapters.has(currentChapterId)) {
        markCompleteBtn.classList.add('completed');
        markCompleteBtn.innerHTML = '<i class="fas fa-check"></i> Concluído';
    } else {
        markCompleteBtn.classList.remove('completed');
        markCompleteBtn.innerHTML = '<i class="fas fa-check"></i> Marcar como concluído';
    }
}

function updateUI() {
    updateChapterStates();
    updateCompleteButton();
}

function updateDashboardProgress() {
    const progress = calculateProgress();
    // Dispara um evento personalizado para atualizar o card na dashboard
    const event = new CustomEvent('courseProgressUpdated', {
        detail: {
            courseId: COURSE_ID,
            progress: progress
        }
    });
    window.dispatchEvent(event);
}

// Atualizar listeners para troca de capítulo SEMPRE funcionar
function initializeEventListeners() {
    // Delegação de eventos para capítulos
    const modulesColumn = document.querySelector('.modules-column');
    if (modulesColumn) {
        modulesColumn.addEventListener('click', function(event) {
            const chapterBtn = event.target.closest('.chapter-item');
            if (chapterBtn) {
                const chapterId = chapterBtn.dataset.chapterId;
                console.log('chapterId:', chapterId);
                loadChapter(chapterId);
            }
        });
    }

    // Expansão dos módulos
    document.querySelectorAll('.module-header').forEach(header => {
        header.addEventListener('click', function() {
            const module = this.parentElement;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            module.classList.toggle('active');
        });
    });
}

// Atualizar: Selecionar automaticamente o primeiro capítulo ao carregar a página, apenas se nenhum estiver ativo
function selectFirstChapter() {
    const alreadyActive = document.querySelector('.chapter-item.active');
    if (alreadyActive) return;
    const firstModule = courseData.modules[0];
    if (firstModule && firstModule.chapters && firstModule.chapters.length > 0) {
        const firstChapter = firstModule.chapters[0];
        loadChapter(firstChapter.id);
    }
}

// Inicializar o curso quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM totalmente carregado');
    loadProgress();
    initializeEventListeners();
    selectFirstChapter();
}); 