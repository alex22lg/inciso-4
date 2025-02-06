let currentIndex = 0;

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const imageWidth = images[0].clientWidth;
    const totalImages = images.length;

    // Ajustar el índice para que no se salga de los límites
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Reinicia al inicio
    } else if (currentIndex < 0) {
        currentIndex = totalImages - (totalImages % 3 === 0 ? 3 : 1); // Reinicia al final ajustando si es impar
    }

    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function showNextImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 3) % images.length; // Avanza de dos en tres de manera cíclica
    updateCarousel();
}

function showPreviousImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex - 3 + images.length) % images.length; // Retrocede de tres en tres de manera cíclica
    updateCarousel();
}

document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);

// Asegura que el carrusel sea responsivo
window.addEventListener('resize', updateCarousel);

// Carrusel automático (opcional, ajustado a avanzar de dos en dos)
setInterval(showNextImage, 30000);

const music = document.getElementById('background-music');
const musicControl = document.getElementById('music-control');

musicControl.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicControl.textContent = 'Pausar Música';
    } else {
        music.pause();
        musicControl.textContent = 'Reproducir Música';
    }
});

