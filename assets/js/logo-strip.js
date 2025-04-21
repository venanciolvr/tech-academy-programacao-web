// Lista de logos para exibir
const logos = [
    { name: 'Amazon', image: '/tech-academy-programacao-web/assets/img/logos/amazon.png' },
    { name: 'Apple', image: '/tech-academy-programacao-web/assets/img/logos/apple.png' },
    { name: 'Google', image: '/tech-academy-programacao-web/assets/img/logos/google.png' },
    { name: 'IBM', image: '/tech-academy-programacao-web/assets/img/logos/ibm.png' },
    { name: 'Itau', image: '/tech-academy-programacao-web/assets/img/logos/itau.png' },
    { name: 'Linkedin', image: '/tech-academy-programacao-web/assets/img/logos/Linkedin.png' },
    { name: 'Meta', image: '/tech-academy-programacao-web/assets/img/logos/meta.png' },
    { name: 'Microsoft', image: '/tech-academy-programacao-web/assets/img/logos/microsoft.png' },
    { name: 'Nvidia', image: '/tech-academy-programacao-web/assets/img/logos/nvidia.png' },
];

// Função para criar um elemento de logo
function createLogoElement(logo) {
    const logoElement = document.createElement('div');
    logoElement.className = 'logo-strip__item';
    
    const img = document.createElement('img');
    img.src = logo.image;
    img.alt = logo.name;
    img.loading = 'lazy';
    
    logoElement.appendChild(img);
    return logoElement;
}

// Função para inicializar a faixa de logos
function initLogoStrip() {
    const track = document.querySelector('.logo-strip__track');
    if (!track) return;

    // Duplica os logos para criar um efeito de loop contínuo
    const allLogos = [...logos, ...logos];
    
    // Cria e adiciona os elementos de logo
    allLogos.forEach(logo => {
        const logoElement = createLogoElement(logo);
        track.appendChild(logoElement);
    });
}

// Inicializa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initLogoStrip); 