let index = 0;
const images = document.querySelectorAll('.carousel img');

function changeImage() {
    images.forEach((img, i) => {
        img.style.transform = `translateX(-${index * 100}%)`;
    });
    index = (index + 1) % images.length;
}

setInterval(changeImage, 3000); // Cambia cada 3 segundos