var images = [
  {
    src: "assets/huge.gif",
    size: 570,
    collisionLT: 24,
    collisionRB: 530,
    startY: 530,
    startX: 311,
    win: {
      x: 201,
      y: 25,
    },
  }
];



var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x = images[0].startX;
var y = images[0].startY;
var WIDTH = 570; // Cambiado para adaptarse al tamaño del laberinto "large"
var HEIGHT = 570; // Cambiado para adaptarse al tamaño del laberinto "large"
var img = new Image();
var treeImg = new Image();
var caraImg = new Image();
treeImg.src = '../imagenes/arbol_final.png';
caraImg.src = '../imagenes/cara_final.png';
 

var collision = 0;

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(img, 0, 0);
}


function checkcollision() {
  var index = 0;
  var imgd = ctx.getImageData(x, y, 15, 15).data; // Obtener los datos de imagen en la posición actual del cuadrado
  var hasCollision = false;

  // Comprobar si algún pixel dentro del cuadrado es negro (suponiendo que las paredes son negras)
  for (var i = 0; i < imgd.length; i += 4) {
    if (imgd[i] === 0 && imgd[i + 1] === 0 && imgd[i + 2] === 0) { // Verificar si el pixel es negro
      hasCollision = true;
      break;
    }
  }

  if (hasCollision) {
    return true; // Devolver true si hay colisión
  } else {
    // Verificar si el jugador ha alcanzado el punto de victoria
    if (x === images[index].win.x && y === images[index].win.y) {
      clearInterval(interval); // Detener el juego
      window.location.href = 'escena_final.html';  // Redirigir al jugador a la nueva página HTML
            return false;  // Devolver false para evitar acciones adicionales
    }
    return false; // Devolver false si no hay colisión
  }
}

function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
}

function doKeyDown(evt) {
  var oldX = x;
  var oldY = y;
  
  switch (evt.keyCode) {
    case 87: // W - Arriba
      if (y - dy >= 0) { // Asegura que no te muevas fuera del canvas hacia arriba
        y -= dy;
      }
      break;
    case 83: // S - Abajo
      if (y + dy <= HEIGHT - 30) { // Asegura que no te muevas fuera del canvas hacia abajo, ajusta 15 que es la altura del cuadrado
        y += dy;
      }
      break;
    case 65: // A - Izquierda
      if (x - dx >= 0) { // Asegura que no te muevas fuera del canvas hacia la izquierda
        x -= dx;
      }
      break;
    case 68: // D - Derecha
      if (x + dx <= WIDTH - 15) { // Asegura que no te muevas fuera del canvas hacia la derecha, ajusta 15 que es el ancho del cuadrado
        x += dx;
      }
      break;
  }
  if (checkcollision()) {
    // Revertir el movimiento si hay colisión
    x = oldX;
    y = oldY;
  } else {
    clear();
  }
}

function draw() {
  clear();
  if (caraImg.complete) { // Verifica que la imagen esté completamente cargada antes de dibujarla
    ctx.drawImage(caraImg, x, y, 15, 15); // Dibuja la imagen en la posición del jugador
  }
  // Dibujar la imagen del árbol en la posición de victoria
  if (treeImg.complete) { // Verifica que la imagen esté completamente cargada antes de dibujarla
    ctx.drawImage(treeImg, images[0].win.x-3, images[0].win.y-25, 25, 44); // Dibuja la imagen del árbol
  }
}



function startTheGame() {
  document.getElementById("btnStart").classList.add("hide");
  document.getElementById("canvasRow").classList.remove("hide"); // Asegurarte de que el canvas sea visible
  init();
  window.addEventListener("keydown", doKeyDown, true);
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  img.onload = function() {
      ctx.drawImage(img, 0, 0);
  };
  img.src = images[0].src;

  ctx.canvas.width = images[0].size;
  ctx.canvas.height = images[0].size;
  interval = setInterval(draw, 1);
}