//Variables

const btnTodasImagenes = document.querySelector("#ver-todas-imagenes");
const btnCierra = document.querySelector("#btn-cierra");
const btnAdelanta = document.querySelector("#btn-adelanta");
const btnRetrocede = document.querySelector("#btn-retrocede");
const imagenActiva = document.querySelector("#img-activa");
const imagenes = document.querySelectorAll("#galeria img");
const lightbox = document.querySelector("#contenedor-principal");
let indiceImagen = 1; //La cambiaremos en un futuro para poder pasar de una imagen a otra

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funcion que se activa con el evento click para que se muestre el light-box

const abreLightbox = (event) => {
  // Asociamos la propiedad src de la imagen con el src de la imagen que sufrio un evento en este

  imagenActiva.src = event.target.src;

  lightbox.style.display = "flex";

  // cambia la variable indice imagen a la que se le haya hecho clik con el ratón

  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

// Crea un array de la variable imagenes y les añade a cada una el evento click que activa la funcion
// abreLighBox

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", abreLightbox);
});

btnTodasImagenes.addEventListener("click", abreLightbox);

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
};

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
};

// Cierra el Lightbox

btnCierra.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Llamada a eventos

btnAdelanta.addEventListener("click", adelantaImagen);

btnRetrocede.addEventListener("click", retrocederImagen);
