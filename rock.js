//efectos cebollita
const cebollita = document.getElementById("pic1");
const sonidoesponja = document.getElementById("esponja");
const audios = document.querySelectorAll("audio");
const ojos = document.getElementsByClassName("pupila");
document.onmousemove = function () {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";
  for (const i = 0; i < 2; i++) {
    ojos[i].style.left = x;
    ojos[i].style.top = y;
    ojos[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
};

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
