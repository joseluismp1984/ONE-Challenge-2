/*----------------------------------------------------------------------------*/
function ocultarInicio() {
  document.querySelector("#iniciar-agregar").classList.add("no-mostrar");
  document.querySelector("#iniciar").classList.add("no-mostrar");
  document.querySelector("#agregar").classList.add("no-mostrar");
}
function mostrarInicio() {
  document.querySelector("#iniciar-agregar").classList.remove("no-mostrar");
  document.querySelector("#iniciar").classList.remove("no-mostrar");
  document.querySelector("#agregar").classList.remove("no-mostrar");
}
/*----------------------------------------------------------------------------*/
function ocultarAgregar() {
  document.querySelector("#texto-palabra").classList.remove("mostrar-block");
  document.querySelector("#main-alert").classList.remove("mostrar-flex");
  document.querySelector("#main-alert-icono").classList.remove("mostrar-block");
  document.querySelector("#main-alert-text").classList.remove("mostrar-block");
  document.querySelector("#guardar-cancelar").classList.remove("mostrar-flex");
  document.querySelector("#guardar").classList.remove("mostrar-block");
  document.querySelector("#cancelar").classList.remove("mostrar-block");
}
function mostrarAgregar() {
  document.querySelector("#texto-palabra").classList.add("mostrar-block");
  document.querySelector("#main-alert").classList.add("mostrar-flex");
  document.querySelector("#main-alert-icono").classList.add("mostrar-block");
  document.querySelector("#main-alert-text").classList.add("mostrar-block");
  document.querySelector("#guardar-cancelar").classList.add("mostrar-flex");
  document.querySelector("#guardar").classList.add("mostrar-block");
  document.querySelector("#cancelar").classList.add("mostrar-block");
}
/*----------------------------------------------------------------------------*/
function ocultarJuego() {
  document.querySelector("#canva").classList.remove("mostrar-block");
  document.querySelector("#secreto-juego").classList.remove("mostrar-flex");
  document.querySelector("#error-juego").classList.remove("mostrar-flex");
  document
    .querySelector("#nuevo-desistir-juego")
    .classList.remove("mostrar-flex");
  document.querySelector("#nuevo-juego").classList.remove("mostrar-block");
  document.querySelector("#desistir-juego").classList.remove("mostrar-block");

  document.querySelector("body").classList.remove("body-juego");
  document.querySelector("#principal").classList.remove("principal-juego");
  document.querySelector("footer").classList.remove("foot-juego");
}
function ocultarCajasErrores() {
  for (i = 1; i <= letrasSecreto.length; i++) {
    document.querySelector("#" + "caja" + i).classList.remove("mostrar-flex");
    document
      .querySelector("#" + "caja" + i)
      .classList.remove("mostrar-letras-cajas");
    document.querySelector("#" + "caja" + i).innerHTML = "";
  }

  for (i = 1; i <= 9; i++) {
    document.querySelector("#" + "error" + i).classList.remove("mostrar-block");
    document
      .querySelector("#" + "error" + i)
      .classList.remove("mostrar-letras-error");
    document.querySelector("#" + "error" + i).innerHTML = "";
  }
}
function mostrarJuego() {
  document.querySelector("#canva").classList.add("mostrar-block");
  document.querySelector("#secreto-juego").classList.add("mostrar-flex");
  document.querySelector("#error-juego").classList.add("mostrar-flex");
  document.querySelector("#nuevo-desistir-juego").classList.add("mostrar-flex");
  document.querySelector("#nuevo-juego").classList.add("mostrar-block");
  document.querySelector("#desistir-juego").classList.add("mostrar-block");

  document.querySelector("body").classList.add("body-juego");
  document.querySelector("#principal").classList.add("principal-juego");
  document.querySelector("footer").classList.add("foot-juego");
}
/*----------------------------------------------------------------------------*/
