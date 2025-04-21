// Lista de logos para exibir
const logos = [
    { name: 'Amazon', image: '../../assets/img/logos/amazon.png' },
    { name: 'Apple', image: '../../assets/img/logos/apple.png' },
    { name: 'Google', image: '../../assets/img/logos/google.png' },
    { name: 'IBM', image: '../../assets/img/logos/ibm.png' },
    { name: 'Itau', image: '../../assets/img/logos/itau.png' },
    { name: 'Linkedin', image: '../../assets/img/logos/Linkedin.png' },
    { name: 'Meta', image: '../../assets/img/logos/meta.png' },
    { name: 'Microsoft', image: '../../assets/img/logos/microsoft.png' },
    { name: 'Nvidia', image: '../../assets/img/logos/nvidia.png' },
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