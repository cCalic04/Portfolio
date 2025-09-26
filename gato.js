//canciones del gato
const radio = [
  "https://github.com/cCalic04/Portfolio/raw/refs/heads/revert-2-cCalic04-Oraculo/y2mate.com%20-%20Conductor.mp3?raw=true",
  "https://github.com/cCalic04/Portfolio/raw/refs/heads/revert-2-cCalic04-Oraculo/y2mate.com%20-%20Hijueputa%20Perreo%20Hijueputa%20Reggaeton%20Hijueputa%20Perreo%20HP%20LLG%20Musik%20Letra.mp3?raw=true",
  "https://github.com/cCalic04/Portfolio/raw/refs/heads/revert-2-cCalic04-Oraculo/y2mate.com%20-%20Kumbia%20Queers%20Feriado%20Nacional%20Videoclip.mp3?raw=true",
  "https://github.com/cCalic04/Portfolio/raw/refs/heads/revert-2-cCalic04-Oraculo/y2mate.com%20-%20Los%20Prisioneros%20Maldito%20Sudaca%20Audio.mp3?raw=true",
  "https://github.com/cCalic04/Portfolio/raw/refs/heads/revert-2-cCalic04-Oraculo/y2mate.com%20-%20Mano%20Negra%20El%20Senor%20Matanza%20Official%20Music%20Video.mp3?raw=true",
];

const gato = [
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/cat.png",
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/cat1.gif",
];

const aradio = [
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/Unnamed.png",
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/Untitled.gif",
];

const musica = document.getElementById("pic2");
const mradio = document.getElementById("musica");
const gatopic = document.getElementById("picgato");
const radiopic = document.getElementById("pic2");

function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function playmusica() {
  const indexmusica = numeroRandom(0, radio.length);
  mradio.src = radio[indexmusica];
  mradio.play;
  gatopic.src = gato[1];
  radiopic.src = aradio[1];
}

musica.addEventListener("click", function () {
  playmusica();
  const audio = document.querySelector("#musica");
  audio.play();
  console.log("hpta");
});
