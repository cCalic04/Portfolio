//efectos cebollita
const cebollita = document.getElementById("pic1");
const sonidoesponja = document.getElementById("esponja");
const audios = document.querySelectorAll("audio");

cebollita.addEventListener(
  "mouseover",
  function () {
    [].forEach.call(audios, function (audio) {
      // do whatever
      audio.play();
    });
  },
  false
);

cebollita.addEventListener(
  "mouseleave",
  function () {
    esponja.pause();
    esponja.currentTime = 0;
  },
  false
);
