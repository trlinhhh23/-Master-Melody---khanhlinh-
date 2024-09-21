const imageWithShake = document.querySelector('.element'); // Selects the image with class "element"

imageWithShake.addEventListener('click', () => {
  imageWithShake.style.animation = 'shake 0.5s'; // Bật hiệu ứng rung
  imageWithShake.addEventListener('animationend', () => {
    imageWithShake.style.animation = '';
  }, { once: true });
});

const pianoImage = document.querySelector('.onlypiano'); // Selects the image with class "onlypiano"
const audio = document.getElementById('myAudio');

pianoImage.addEventListener('click', () => {
  audio.play();
});

