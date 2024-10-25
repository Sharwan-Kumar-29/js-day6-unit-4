const images = [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
];

let currentIndex = 0;
let isPlaying = true;
let intervalId = startSlideshow();

function startSlideshow() {
    return setInterval(() => {
        showNextImage();
    }, 2000);
}

function showImage(index) {
    const imgElement = document.getElementById('slideshow-image');
    imgElement.src = images[index];
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPreviousImage);

document.getElementById('play-pause').addEventListener('click', () => {
    if (isPlaying) {
        clearInterval(intervalId);
        isPlaying = false;
    } else {
        intervalId = startSlideshow();
        isPlaying = true;
    }
});

document.getElementById('add-image').addEventListener('click', () => {
    const url = document.getElementById('image-url').value;
    const position = parseInt(document.getElementById('image-position').value);
    if (url && !isNaN(position) && position >= 0 && position <= images.length) {
        images.splice(position, 0, url);
        alert('Image added successfully!');
    } else {
        alert('Invalid input. Please provide a valid URL and position.');
    }
});

showImage(currentIndex);
