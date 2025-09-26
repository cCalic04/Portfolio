const madre = [
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/maria.gif",
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/maria1.png",
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/maria2.png",
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/maria3.png",
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/maria4.png",
  "https://raw.githubusercontent.com/cCalic04/Portfolio/refs/heads/revert-2-cCalic04-Oraculo/maria5.png",
];

let fase = 0;
const madrepic = document.getElementById("pic1");

madrepic.src = madre[fase];

const sollozo = new Audio(
  "https://github.com/cCalic04/Portfolio/raw/refs/heads/revert-2-cCalic04-Oraculo/llanto2n.mp3?raw=true"
);
const escombro = new Audio(
  "https://github.com/cCalic04/Portfolio/raw/refs/heads/revert-2-cCalic04-Oraculo/y2mate.com%20-%20SwordArmorTool%20Break%20Minecraft%20Sound%20Sound%20Effect%20for%20editing.mp3?raw=true"
);

madrepic.addEventListener("click", () => {
  if (fase < madre.length - 1) {
    fase++;
    madrepic.src = madre[fase];
     if (fase <= 4) {
      sollozo.play();
    }
  }
    if (fase === 5) {
    escombro.play();
  }
});
