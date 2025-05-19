// Mapeamento do número total de capítulos por curso
const courseTotalChapters = {
    'web-dev': 4, // Total de capítulos no curso de programação web
    'data-science': 6,
    'cloud': 5,
    'cyber': 4,
    'mobile': 5,
    'design': 4,
    'ai': 6,
    'blockchain': 4,
    'game': 5,
    'iot': 4,
    'qa': 4,
    'agile': 4
};

// Atualiza o progresso do card do curso
function updateCourseCardProgress(courseId, progress) {
    const courseCard = document.querySelector(`.course-card[data-course="${courseId}"]`);
    if (!courseCard) return;

    const progressFill = courseCard.querySelector('.progress-fill');
    const progressText = courseCard.querySelector('.progress-text');

    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }

    if (progressText) {
        progressText.textContent = `${progress}% Concluído`;
    }
}

// Carrega o progresso salvo ao inicializar a página
function loadSavedProgress() {
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const courseId = card.dataset.course;
        const savedProgress = localStorage.getItem(`course_progress_${courseId}`);
        
        if (savedProgress) {
            const { completedChapters } = JSON.parse(savedProgress);
            const totalChapters = courseTotalChapters[courseId] || 0;
            const progress = Math.round((completedChapters.length / totalChapters) * 100);
            updateCourseCardProgress(courseId, progress);
        } else {
            // Se não houver progresso salvo, define como 0%
            updateCourseCardProgress(courseId, 0);
        }
    });
}

// Listener para o evento de atualização do progresso
window.addEventListener('courseProgressUpdated', (event) => {
    const { courseId, progress } = event.detail;
    updateCourseCardProgress(courseId, progress);
});

// Inicializa a página
document.addEventListener('DOMContentLoaded', () => {
    loadSavedProgress();
}); 