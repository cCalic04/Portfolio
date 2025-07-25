//cartas
const imagenes = [
  "https://cdn.glitch.global/b9547f30-d27e-4ca3-8ef2-267d73725f75/hangedman.png?v=1726029380354",
  "https://cdn.glitch.global/b9547f30-d27e-4ca3-8ef2-267d73725f75/tower.png?v=1726029377877",
  "https://cdn.glitch.global/b9547f30-d27e-4ca3-8ef2-267d73725f75/death.png?v=1726029375410",
  "https://cdn.glitch.global/b9547f30-d27e-4ca3-8ef2-267d73725f75/justiec.png?v=1726029371776",
  "https://cdn.glitch.global/b9547f30-d27e-4ca3-8ef2-267d73725f75/wheel.png?v=1726029368886",
  "https://cdn.glitch.global/b9547f30-d27e-4ca3-8ef2-267d73725f75/chariot.png?v=1726041582366",
];
//titulo
const cabecera = [
  "Obra de un malparido",
  "Nada bueno dura para siempre",
  "Doble vida",
  "Post-Crucifixión",
  "Superchería",
  "Niñx condenado",
  "Niñx perdonado",
  "Canción para mi muerte",
  "Nos veremos otra vez",
  "Efecto Residual",
  "Bajan",
];
//muerte
const titulos = [
  "Vas a fenecer",
  "Todo se vuelve trémulo",
  "Esto no pinta bien...",
  "Malas noticias",
  "Nada de esto es bueno",
  "Pronto llegará el día de tu muerte",
  "Es una fecha lejana, si, pero no menos fatídica",
  "Mi más sentido pésame",
  "Lo lamento mucho, se acabó",
  "Realmente, creo que te lo mereces",
  "Espero que estés preparado...",
];
//condiciones
const titulos1 = [
  "Pasará cuando menos lo esperes",
  "Por lo menos, estarás rodeado de seres queridos",
  "No habrá nadie que oiga tus últimas palabras",
  "Cosecharás lo que sembraste",
  "Espero que tengas claro que nadie va a extrañarte",
  "Los ángeles tocarán un requiem solemne a tu partida",
  "El mismo diablo se retorcerá cuando te vea a las puertas de su reino",
  "Estarás condenado a vagar eternamente",
  "Sucederá de tu propia mano",
  "El que a hierro mata, a hierro termina",
  "Te irás en tu propia ley",
];
//tu vida
const titulos2 = [
  "Regocíjate, porque aprovechaste bien tu tiempo",
  "Tu tiempo en este mundo fue un desperdicio, un pecado contra la obra divina",
  "Nunca hubo orden en tu vida. Tu retirada del mundo terrenal hará colapsar una montaña de problemas, todos de tu propia factura",
  "Tu existencia fue un monumento al amor. Incluso muchos años después de tu muerte, te recordarán con añoranza",
  "Tu vida habrá de ser corta, pero jubilosa y bien recordada",
  "No sé qué decirte. Deberías recapacitar tus acciones. Nadie te va a recordar si sigues por este camino",
  "Tu vida fue solitaria. No habrá nadie que llore tu muerte o lleve flores a tu tumba. El mundo te olvidará con facilidad",
  "Pasaste una cantidad innecesaria de tiempo persiguiendo metas inútiles. Tu epitafio será una lista de obras sin publicar",
  "Tu nombre será recordado solo por la vileza que evoca. Los que heriste aprenderán a perdonarte. Y, entonces, caerás en el olvido",
  "Tu vida fue increíblemente aburrida. No tengo nada que decir al respecto",
  "Ojalá que haya valido la pena...",
];
//Precauciones
const titulos3 = [
  "Tienes que resolver tus problemas familiares pronto.",
  "Deberías buscar a alguien que cuide a tus mascotas después de tu muerte.",
  "Es necesario que saldes tu deuda con esa persona, o tu alma no encontrará descanso.",
  "Antes de irte, tienes que encontrarlo. Y matarlo.",
  "Elimina tus redes sociales lo más pronto posible. Será mejor que no te recuerden por las palabras e imágenes que posteaste.",
  "Encuentra un heredero, es urgente.",
  "Aún queda tiempo para experimentar el amor.",
  "Abandona tus posesiones y emprende un peregrinaje. No hay otro modo de prepararte para lo que viene.",
  "Termina lo que comenzaste. No hay vuelta atrás.",
  "Reconcilia tus conflictos, que no son pocos ni leves.",
  "Deja ir. Aprende a perdonar.",
];



const header = document.getElementById("cabecera");
const titulo = document.getElementById("titulo");
const titulo1 = document.getElementById("titulo1");
const titulo2 = document.getElementById("titulo2");
const titulo3 = document.getElementById("titulo3");
const boton = document.getElementById("boton1");
const imagen = document.getElementById("foto");
const imagen1 = document.getElementById("foto1");
const imagen2 = document.getElementById("foto2");


function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  const indiceHeader = numeroRandom(0, cabecera.length);
  const indiceTitulo = numeroRandom(0, titulos.length);
  const indiceTitulo1 = numeroRandom(0, titulos1.length);
  const indiceTitulo2 = numeroRandom(0, titulos2.length);
  const indiceTitulo3 = numeroRandom(0, titulos3.length);
  const fotos = numeroRandom(0, imagenes.length);
  const fotos1 = numeroRandom(0, imagenes.length);
  const fotos2 = numeroRandom(0, imagenes.length);

  header.innerText = cabecera[indiceHeader];
  titulo.innerText = titulos[indiceTitulo];
  titulo1.innerText = titulos1[indiceTitulo1];
  titulo2.innerText = titulos2[indiceTitulo2];
  titulo3.innerText = titulos3[indiceTitulo3];
  imagen.src = imagenes[fotos];
  imagen1.src = imagenes[fotos1];
  imagen2.src = imagenes[fotos2];
}

boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();

const audio = document.getElementById("musica");
audio.volume = 0.1; 
const audio1 = document.getElementById("musica1");
audio1.volume = 0.1; 