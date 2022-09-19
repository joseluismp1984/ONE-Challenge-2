const lienzo = document.getElementById("canva");
const pincel = lienzo.getContext("2d");

function mostrarHorca(y) {
  if (y == 0) {
    // DIBUJAR LA BASE
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(50, 300);
    pincel.lineTo(250, 300);
    pincel.stroke();
  }
  if (y == 1) {
    // DIBUJAR INTENTO FALLIDO 1
    pincel.lineWidth = 4;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(80, 300);
    pincel.lineTo(80, 50);
    pincel.stroke();
  }
  if (y == 2) {
    // DIBUJAR INTENTO FALLIDO 2
    pincel.lineWidth = 4;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(80, 50);
    pincel.lineTo(200, 50);
    pincel.stroke();
  }
  if (y == 3) {
    // DIBUJAR INTENTO FALLIDO 3
    pincel.lineWidth = 4;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(200, 50);
    pincel.lineTo(200, 100);
    pincel.stroke();
  }
  if (y == 4) {
    // DIBUJAR INTENTO FALLIDO 4
    pincel.lineWidth = 3;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.arc(200, 135, 35, 0, 2 * Math.PI);
    pincel.stroke();
  }
  if (y == 5) {
    // DIBUJAR INTENTO FALLIDO 5
    pincel.lineWidth = 3;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(200, 170);
    pincel.lineTo(200, 250);
    pincel.stroke();
  }
  if (y == 6) {
    // DIBUJAR INTENTO FALLIDO 6
    pincel.lineWidth = 3;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(200, 250);
    pincel.lineTo(170, 290);
    pincel.stroke();
  }
  if (y == 7) {
    // DIBUJAR INTENTO FALLIDO 7
    pincel.lineWidth = 3;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(200, 250);
    pincel.lineTo(230, 290);
    pincel.stroke();
  }
  if (y == 8) {
    // DIBUJAR INTENTO FALLIDO 8
    pincel.lineWidth = 3;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(200, 200);
    pincel.lineTo(170, 250);
    pincel.stroke();
  }
  if (y == 9) {
    // DIBUJAR INTENTO FALLIDO 9
    pincel.lineWidth = 3;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(200, 200);
    pincel.lineTo(230, 250);
    pincel.stroke();
  }
}

function ocultarHorca() {
  pincel.clearRect(0, 0, 300, 350);
  pincel.fillStyle = "#f3f5fc";
  pincel.fillRect(0, 0, 300, 350);
}
