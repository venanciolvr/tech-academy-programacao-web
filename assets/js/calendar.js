// Função para obter as datas da semana atual
function getCurrentWeekDates() {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Domingo, 1 = Segunda, etc.
    
    // Calcular o início da semana (Domingo)
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - currentDay);
    
    const weekDates = [];
    
    // Gerar array de datas para a semana
    for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        weekDates.push(date);
    }
    
    return weekDates;
}

// Função para obter o nome do mês em português
function getMonthName(month) {
    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return months[month];
}

// Função para obter o rótulo do dia da semana em português
function getWeekdayLabel(day) {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return weekdays[day];
}

// Função para atualizar o calendário
function updateCalendar() {
    const weekDates = getCurrentWeekDates();
    const today = new Date();
    
    // Atualizar o mês e o ano no cabeçalho
    const monthYearHeader = document.querySelector('.calendar-section h2');
    const firstDate = weekDates[0];
    const lastDate = weekDates[6];
    
    // Se a semana abrange dois meses, mostrar ambos
    if (firstDate.getMonth() !== lastDate.getMonth()) {
        const firstMonth = getMonthName(firstDate.getMonth());
        const lastMonth = getMonthName(lastDate.getMonth());
        monthYearHeader.textContent = `${firstMonth}/${lastMonth} ${firstDate.getFullYear()}`;
    } else {
        monthYearHeader.textContent = `${getMonthName(firstDate.getMonth())} ${firstDate.getFullYear()}`;
    }
    
    // Atualizar os dias da semana
    const weekView = document.querySelector('.week-view');
    weekView.innerHTML = ''; // Limpar o conteúdo existente
    
    weekDates.forEach(date => {
        const dayElement = document.createElement('div');
        dayElement.className = 'week-day';
        
        // Adicionar a classe ativa se for hoje
        if (date.toDateString() === today.toDateString()) {
            dayElement.classList.add('active');
        }
        
        dayElement.innerHTML = `
            <span class="day-label">${getWeekdayLabel(date.getDay())}</span>
            <span class="day-number">${date.getDate()}</span>
        `;
        
        weekView.appendChild(dayElement);
    });
}

// Atualização inicial
document.addEventListener('DOMContentLoaded', () => {
    updateCalendar();
    
    // Atualizar o calendário à meia-noite
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow - now;
    
    // Configurar timeout para atualizar à meia-noite
    setTimeout(() => {
        updateCalendar();
        // Após a primeira atualização à meia-noite, configurar intervalo para atualizações subsequentes
        setInterval(updateCalendar, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
}); 