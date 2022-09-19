/*-------------------------------------------------------------*/
/*--------------- BLOQUE CÓDIGO PARA EL JUEGO -----------------*/
/*-------------------------------------------------------------*/
let secreto;
let letrasSecreto = [];
let intentosFallidos = 0;
let adivinadas = 0;
let letrasAdivinadas = [];
let letrasFallidas = [];
let irJuego = false;
let palabras = [
  "ABUHADO",
  "ACECINAR",
  "AGIGOLADO",
  "ALVEO",
  "ARREBOL",
  "BAHORRINA",
  "BONHOMIA",
  "BURDEGANO",
  "CAGAPRISAS",
  "CELAJE",
  "CONFLICTUAR",
  "DEPAUPERAR",
  "DESLEIR",
  "DEYECCION",
  "EBURNEO",
  "ENTRONQUE",
  "ESMEGMA",
  "FALCADO",
  "FARMACOPEA",
  "FUL",
  "GARAMBAINA",
  "GARLITO",
  "GAZNAPIRO",
  "HAIGA",
  "HERESIARCA",
  "HERMENEUTA",
  "HISTRION",
  "IDIOTISMO",
  "INMARCESIBLE",
  "ISAGOGE",
  "JERAPELLINA",
  "JERIGONZA",
  "JIPIAR",
  "JOYEL",
  "LABARO",
  "LOBANILLO",
  "LIMERENCIA",
  "MELIFLUO",
  "MONDO",
  "NADIR",
  "NEFANDO",
  "NEFELIBATA",
  "NUBIL",
  "OCHAVO",
  "OLEAGINOSO",
  "ORATE",
  "PETRICOR",
  "PATIBULARIO",
  "PATOCHADA",
  "PICIO",
  "QUINCALLA",
  "RECIPIENDARIO",
  "REGODEO",
  "REGNICOLA",
  "REPROBO",
  "SABRIMIENTO",
  "SAPENCO",
  "SEMPITERNO",
  "SERENDIPIA",
  "TRAPISONDA",
  "TESTAFERRO",
  "TREMOLO",
  "UBERRIMO",
  "UCRONIA",
  "UEBOS",
  "UNIGENITO",
  "VAGIDO",
  "VERBIGRACIA",
  "VITUPERIO",
  "VULPINO",
  "XEROFITICO",
  "XEROFTALMIA",
  "XEROMICTERIA",
  "ZAINO",
  "ZANGOLOTEAR",
  "ZONZO",
];

/*-----------------------------------------------------------------------*/
/*CUANDO DAMOS CLICK EN BOTON INICIAR PARA JUGAR PARTIDA*/
function seleccionarPalabra() {
  secreto = palabras[Math.floor(Math.random() * palabras.length)];
}

function separarSecreto() {
  let index = 0;
  while (index < secreto.length) {
    letrasSecreto[index] = secreto[index];
    index++;
  }
}

function asignarSecretos() {
  let i = 0;
  let j = 1;
  while (i < letrasSecreto.length) {
    document.querySelector("#" + "caja" + j).innerHTML = letrasSecreto[i];
    document.querySelector("#" + "caja" + j).classList.add("mostrar-flex");
    i++;
    j++;
  }
}

function teclaUsuario(evento) {
  let tecla;
  let letraUsuario;

  tecla = evento.key;
  tecla = tecla.toUpperCase();

  if (tecla.length > 1) {
    alert("Digite una letra");
  } else {
    if (/[A-Z]/.test(tecla)) {
      letraUsuario = tecla;
      juego(letraUsuario);
    } else {
      alert("Digite una letra");
    }
  }
}

function juego(x) {
  if (intentosFallidos < 9) {
    if (adivinadas < letrasSecreto.length) {
      if (!(letrasFallidas.includes(x) || letrasAdivinadas.includes(x))) {
        let i = 0;
        let j = 1;
        let aciertos = 0;

        while (i < letrasSecreto.length) {
          if (x == letrasSecreto[i]) {
            document
              .querySelector("#" + "caja" + j)
              .classList.add("mostrar-letras-cajas");
            aciertos = aciertos + 1;
          }
          i++;
          j++;
        }

        if (aciertos == 0) {
          intentosFallidos++;
          letrasFallidas.push(x);

          document.querySelector("#" + "error" + intentosFallidos).innerHTML =
            x;
          document
            .querySelector("#" + "error" + intentosFallidos)
            .classList.add("mostrar-block");
          document
            .querySelector("#" + "error" + intentosFallidos)
            .classList.add("mostrar-letras-error");

          mostrarHorca(intentosFallidos);
        } else {
          adivinadas = adivinadas + aciertos;
          letrasAdivinadas.push(x);
        }
      }
    }
  }

  if (intentosFallidos == 9) {
    document.removeEventListener("keydown", teclaUsuario);
    alert("¡ HAS PERDIDO ! ");
  }

  if (adivinadas == letrasSecreto.length) {
    document.removeEventListener("keydown", teclaUsuario);
    alert("¡ HAS GANADO ! ");
  }
}

function escenarioUno() {
  ocultarInicio();
  mostrarJuego();
  mostrarHorca(intentosFallidos);
  seleccionarPalabra();
  separarSecreto();
  asignarSecretos();
  document.addEventListener("keydown", teclaUsuario);
}
/*-----------------------------------------------------------------------*/
/*CUANDO DAMOS CLICK EN BOTON DESISTIR PARA SALIR AL INICIO*/
function limpiarVariables() {
  secreto = "";
  letrasSecreto = [];
  intentosFallidos = 0;
  adivinadas = 0;
  letrasAdivinadas = [];
  letrasFallidas = [];
}
function escenarioDos() {
  document.removeEventListener("keydown", teclaUsuario);
  ocultarCajasErrores();
  limpiarVariables();
  ocultarHorca();
  ocultarJuego();
  mostrarInicio();
}
/*----------------------------------------------------------------------------*/
/*CUANDO DAMOS CLICK EN BOTON NUEVO JUEGO PARA EMPEZAR OTRA PARTIDA*/
function escenarioTres() {
  document.removeEventListener("keydown", teclaUsuario);
  ocultarCajasErrores();
  limpiarVariables();
  ocultarHorca();
  mostrarJuego();
  mostrarHorca(intentosFallidos);
  seleccionarPalabra();
  separarSecreto();
  asignarSecretos();
  document.addEventListener("keydown", teclaUsuario);
}
/*------------------------------------------------------------------------------*/
/*CUANDO DAMOS CLICK EN BOTON AGREGAR NUEVA PALABRA*/
function escenarioCuatro() {
  ocultarInicio();
  mostrarAgregar();
}
/*------------------------------------------------------------------------------*/
/*CUANDO DAMOS CLICK EN BOTON CANCELAR EN LA VISTA AGREGAR PALABRA*/
function escenarioCinco() {
  ocultarAgregar();
  document.querySelector("#texto-palabra").value = "";
  mostrarInicio();
}
/*------------------------------------------------------------------------------*/
/*CUANDO DAMOS CLICK EN BOTON GUARDAR Y AGREGAR EN VISTA AGREGAR PALABRA*/
function agregarPalabra() {
  let valido;
  if (document.querySelector("#texto-palabra").value == "") {
    alert("¡No Ha Ingresado Palabra!");
  } else {
    valido = /[^A-Z\s]/.test(document.querySelector("#texto-palabra").value);

    if (valido || document.querySelector("#texto-palabra").value.length > 8) {
      alert("¡Solo letras mayusculas y máximo 8 letras!");
    } else {
      palabras[palabras.length] =
        document.querySelector("#texto-palabra").value;
      secreto = palabras[palabras.length - 1];
      irJuego = true;
      document.querySelector("#texto-palabra").value = "";
    }
  }
}

function escenarioSeis() {
  agregarPalabra();
  if (irJuego == true) {
    ocultarAgregar();
    mostrarJuego();
    mostrarHorca(intentosFallidos);
    separarSecreto();
    asignarSecretos();
    document.addEventListener("keydown", teclaUsuario);
  }
}
