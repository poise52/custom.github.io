const images = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg',
    'assets/4.jpg',
    'assets/5.jpg'
];

let currentIndex = 0;
const imgElement = document.getElementById('slider-image');
const counterElement = document.getElementById('counter');

function updateSlider() {
    imgElement.src = images[currentIndex];
    counterElement.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});
