// Function to get the current week's dates
function getCurrentWeekDates() {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Calculate the start of the week (Sunday)
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - currentDay);
    
    const weekDates = [];
    
    // Generate array of dates for the week
    for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        weekDates.push(date);
    }
    
    return weekDates;
}

// Function to get the month name in Portuguese
function getMonthName(month) {
    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return months[month];
}

// Function to get the weekday label in Portuguese
function getWeekdayLabel(day) {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return weekdays[day];
}

// Function to update the calendar
function updateCalendar() {
    const weekDates = getCurrentWeekDates();
    const today = new Date();
    
    // Update month and year in the header
    const monthYearHeader = document.querySelector('.calendar-section h2');
    const firstDate = weekDates[0];
    const lastDate = weekDates[6];
    
    // If the week spans two months, show both
    if (firstDate.getMonth() !== lastDate.getMonth()) {
        const firstMonth = getMonthName(firstDate.getMonth());
        const lastMonth = getMonthName(lastDate.getMonth());
        monthYearHeader.textContent = `${firstMonth}/${lastMonth} ${firstDate.getFullYear()}`;
    } else {
        monthYearHeader.textContent = `${getMonthName(firstDate.getMonth())} ${firstDate.getFullYear()}`;
    }
    
    // Update week days
    const weekView = document.querySelector('.week-view');
    weekView.innerHTML = ''; // Clear existing content
    
    weekDates.forEach(date => {
        const dayElement = document.createElement('div');
        dayElement.className = 'week-day';
        
        // Add active class if it's today
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

// Initial update
document.addEventListener('DOMContentLoaded', () => {
    updateCalendar();
    
    // Update calendar at midnight
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow - now;
    
    // Set timeout to update at midnight
    setTimeout(() => {
        updateCalendar();
        // After first midnight update, set interval for subsequent days
        setInterval(updateCalendar, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
}); 