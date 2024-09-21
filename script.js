const imageWithShake = document.querySelector(".element"); // Selects the image with class "element"

imageWithShake.addEventListener("click", () => {
  imageWithShake.style.animation = "shake 0.5s"; // Bật hiệu ứng rung
  imageWithShake.addEventListener(
    "animationend",
    () => {
      imageWithShake.style.animation = "";
    },
    { once: true }
  );
});

const pianoKeys = document.querySelectorAll(".piano-keys .key");

let allKeys = [],
  audio = new Audio(`tunes/a.wav`);
const playTune = (key, event) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 200);
  const keyRect = clickedKey.getBoundingClientRect();
  var girlNotes = document.getElementsByClassName("girlNote");
  for (let i = 0; i < girlNotes.length; i++) {
    girlNotes[i].style.left = keyRect.left + "px";
    girlNotes[i].style.top =
      keyRect.top - girlNotes[i].offsetHeight - 160 + "px";
    girlNotes[i].style.display = "block";
  }
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

document.addEventListener("keydown", pressedKey);
