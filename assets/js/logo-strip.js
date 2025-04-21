// Lista de logos para exibir
const logos = [
    { name: 'Logo 1', image: 'assets/images/logos/logo1.png' },
    { name: 'Logo 2', image: 'assets/images/logos/logo2.png' },
    { name: 'Logo 3', image: 'assets/images/logos/logo3.png' },
    { name: 'Logo 4', image: 'assets/images/logos/logo4.png' },
    { name: 'Logo 5', image: 'assets/images/logos/logo5.png' },
    { name: 'Logo 6', image: 'assets/images/logos/logo6.png' },
    { name: 'Logo 7', image: 'assets/images/logos/logo7.png' },
    { name: 'Logo 8', image: 'assets/images/logos/logo8.png' }
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