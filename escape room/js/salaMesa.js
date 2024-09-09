var modal = document.getElementById("modal");
var modalLibro = document.getElementById("modalLibroID");
var btnPopup = document.getElementById("btnPopup");
var closeBtn = document.getElementsByClassName("close")[0];
var closeLibro = document.getElementById("closeLibro");
var pruebaCrucigrama = document.getElementById("pruebaCrucigramaID");
var botonesLugar = document.getElementsByClassName("lugar");
var libro = document.getElementById("libro");
var lugar1 = document.getElementById("lugarCarta1");
var modal1 = document.getElementById("modal1");
var lugar2 = document.getElementById("lugarCarta2");
var modal2 = document.getElementById("modal2");
var lugar3 = document.getElementById("lugarCarta3");
var modal3 = document.getElementById("modal3");
var lugar4 = document.getElementById("lugarCarta4");
var modal4 = document.getElementById("modal4");
var lugar5 = document.getElementById("lugarCarta5");
var modal5 = document.getElementById("modal5");
var lugar6 = document.getElementById("lugarCarta6");
var modal6 = document.getElementById("modal6");


//window.onload=eventosLugares();

// Función para abrir el modal
btnPopup.onclick = function () {
  modal.style.display = "block";
};

libro.onclick = function () {
  modalLibro.style.display = "block";
};

// Función para cerrar el modal cuando se hace clic en el botón de cierre
closeBtn.onclick = function () {
  modal.style.display = "none";
};

closeLibro.onclick = function () {
  modalLibro.style.display = "none";
};

lugar1.addEventListener("click", function () {
  // Mostrar el otro modal
  modal1.style.display = "block";
});

modal1.addEventListener("click", function () {
  // Ocultar el otro modal cuando se hace clic en él
  
  modal1.style.display = "none";
  var libro1 = document.getElementById("carta1");
  libro1.style.visibility = "visible";
  lugar1.style.display = "none";
  
});


lugar2.addEventListener("click", function () {
  // Mostrar el otro modal
  modal2.style.display = "block";
});

modal2.addEventListener("click", function () {
  // Ocultar el otro modal cuando se hace clic en él
  
  modal2.style.display = "none";
  var libro2 = document.getElementById("carta2");
  libro2.style.visibility = "visible";
  lugar2.style.display = "none";
  
});

lugar3.addEventListener("click", function () {
  // Mostrar el otro modal
  modal3.style.display = "block";
});

modal3.addEventListener("click", function () {
  // Ocultar el otro modal cuando se hace clic en él
  
  modal3.style.display = "none";
  var libro3 = document.getElementById("carta3");
  libro3.style.visibility = "visible";
  lugar3.style.display = "none";
  
});

/* */

lugar4.addEventListener("click", function () {
  // Mostrar el otro modal
  modal4.style.display = "block";
});

modal4.addEventListener("click", function () {
  // Ocultar el otro modal cuando se hace clic en él
  
  modal4.style.display = "none";
  var libro4 = document.getElementById("carta4");
  libro4.style.visibility = "visible";
  lugar4.style.display = "none";
  
});


lugar5.addEventListener("click", function () {
  // Mostrar el otro modal
  modal5.style.display = "block";
});

modal5.addEventListener("click", function () {
  // Ocultar el otro modal cuando se hace clic en él
  
  modal5.style.display = "none";
  var libro5 = document.getElementById("carta5");
  libro5.style.visibility = "visible";
  lugar5.style.display = "none";
  
});

lugar6.addEventListener("click", function () {
  // Mostrar el otro modal
  modal6.style.display = "block";
});

modal6.addEventListener("click", function () {
  // Ocultar el otro modal cuando se hace clic en él
  
  modal6.style.display = "none";
  var libro6 = document.getElementById("carta6");
  libro6.style.visibility = "visible";
  lugar6.style.display = "none";
  
});


/*window.onclick = function (event) {
  // Si el clic no es dentro de una ventana modal
  if (!event.target.closest(".modal")) {
    document.querySelectorAll("[id*=ventana]").forEach(modal => {
      modal.style.display = "none";
    });
  }
};*/


// Función para cerrar el modal cuando se hace clic fuera de él
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modalLibro) {
    modalLibro.style.display = "none";
  }
};

function cerrarModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function cerrarLibro() {
  var modalLibro = document.getElementById("modalLibroID");
  modalLibro.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var elementos = document.querySelectorAll(".hidden");
    elementos.forEach(function (elemento) {
      elemento.classList.remove("hidden");
    });
  }, 100); // 2000 milisegundos = 2 segundos
});

document.querySelectorAll(".cartas").forEach((carta) => {
  carta.addEventListener("click", function () {
    let textoConBordes = carta.querySelector(".texto-con-bordes");

    if (carta.classList.contains("carta1")) {
      carta.classList.add("girada");
      setTimeout(() => {
        carta.classList.add("cartaReversa1");
        textoConBordes.classList.add("oculto");
      }, 200);
      setTimeout(() => {
        carta.classList.remove("girada");
        carta.classList.remove("cartaReversa1");

        textoConBordes.classList.remove("oculto");
      }, 3000); // 3000 milisegundos = 3 segundos
    }

    if (carta.classList.contains("carta2")) {
      carta.classList.add("girada");
      setTimeout(() => {
        carta.classList.add("cartaReversa2");
        textoConBordes.classList.add("oculto");
      }, 200);
      setTimeout(() => {
        carta.classList.remove("girada");
        carta.classList.remove("cartaReversa2");
        textoConBordes.classList.remove("oculto");
      }, 3000); // 3000 milisegundos = 3 segundos
    }

    if (carta.classList.contains("carta3")) {
      carta.classList.add("girada");
      setTimeout(() => {
        carta.classList.add("cartaReversa3");
        textoConBordes.classList.add("oculto");
      }, 200);
      setTimeout(() => {
        carta.classList.remove("girada");
        carta.classList.remove("cartaReversa3");
        textoConBordes.classList.remove("oculto");
      }, 3000); // 3000 milisegundos = 3 segundos
    }

    if (carta.classList.contains("carta4")) {
      carta.classList.add("girada");
      setTimeout(() => {
        carta.classList.add("cartaReversa4");
        textoConBordes.classList.add("oculto");
      }, 200);
      setTimeout(() => {
        carta.classList.remove("girada");
        carta.classList.remove("cartaReversa4");
        textoConBordes.classList.remove("oculto");
      }, 3000); // 3000 milisegundos = 3 segundos
    }

    if (carta.classList.contains("carta5")) {
      carta.classList.add("girada");
      setTimeout(() => {
        carta.classList.add("cartaReversa5");
        textoConBordes.classList.add("oculto");
      }, 200);
      setTimeout(() => {
        carta.classList.remove("girada");
        carta.classList.remove("cartaReversa5");
        textoConBordes.classList.remove("oculto");
      }, 3000); // 3000 milisegundos = 3 segundos
    }

    if (carta.classList.contains("carta6")) {
      carta.classList.add("girada");
      setTimeout(() => {
        carta.classList.add("cartaReversa6");
        textoConBordes.classList.add("oculto");
      }, 200);
      setTimeout(() => {
        carta.classList.remove("girada");
        carta.classList.remove("cartaReversa6");
        textoConBordes.classList.remove("oculto");
      }, 3000); // 3000 milisegundos = 3 segundos
    }
  });
});


/*document.addEventListener("DOMContentLoaded",eventosLugares);

function eventosLugares() {
  let indice = 0;
  Array.from(botonesLugar).forEach((btnLugar) => {
    indice++;
    btnLugar.addEventListener("click", function () {

      let ventanaLibroCarta;
      ventanaLibroCarta = document.createElement("div");
      ventanaLibroCarta.id = indice;
      ventanaLibroCarta.classList.add("modal");
      ventanaLibroCarta.style.display = "block";
      document.body.appendChild(ventanaLibroCarta);

      let divCartaReves = document.createElement("div");
      divCartaReves.classList.add(
        "cartaReversa".concat("", indice.toString()),
        "lugarCartaLibro"
      );
      ventanaLibroCarta.appendChild(divCartaReves);

      divCartaReves.addEventListener("click", function () {
        divCartaReves.style.visibility = "hidden";
        let a = document.getElementById("carta".concat("", indice.toString()));
        a.style.visibility = "visible";
      });

      let divTextCarta = document.createElement("div");
      divTextCarta.classList.add("textosCartas");
    });
  });
}*/

function lugar1() {
  var libro1 = document.getElementById("carta1");
  libro1.style.visibility = "visible";
}



var combinationLock = {
  combination: 68441672,
  locked: true,
  wheels: [0, 0, 0, 0, 0, 0, 0, 0],
  increment: function(wheel) {
      if (this.wheels[wheel] === 9) {
          this.wheels[wheel] = 0;
      } else {
          this.wheels[wheel]++;
      }
  },
  decrement: function(wheel) {
      if (this.wheels[wheel] === 0) {
          this.wheels[wheel] = 9;
      } else {
          this.wheels[wheel]--;
      }
  },
  check: function() {
      if (this.combination === parseInt(this.wheels.join(''))) {
          this.locked = false;
      } else {
          this.locked = true;
      }
  }
};

var candadoFinal = document.getElementById("candadoFinalID");
  var modalFinal = document.getElementById("modalFinal");

  // Cuando el usuario haga clic en el cajón, mostrar el modal
  candadoFinal.addEventListener("click", function() {
    modalFinal.style.display = "block";
  });

  // Obtener el elemento que cierra el modal
  var span = document.getElementsByClassName("closeFinal")[0];

  // Cuando el usuario haga clic en el botón de cerrar (×) o fuera del modal, cerrar el modal
  span.onclick = function() {
    modalFinal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modalFinal) {
      modalFinal.style.display = "none";
    }
  }
  
// Increment buttons
var increments = document.getElementsByClassName('increment');

for (var i = 0; i < increments.length; i++) {
    increments[i].addEventListener('click', function(){
        let wheelIndex = parseInt(this.getAttribute('index'));
        combinationLock.increment(wheelIndex);
        document.querySelectorAll('.digit')[wheelIndex].value = combinationLock.wheels[wheelIndex];
        checkLock();
    });
}

// Decrement buttons
var decrements = document.getElementsByClassName('decrement');

for (var i = 0; i < decrements.length; i++) {
    decrements[i].addEventListener('click', function(){
        let wheelIndex = parseInt(this.getAttribute('index'));
        combinationLock.decrement(wheelIndex);
        document.querySelectorAll('.digit')[wheelIndex].value = combinationLock.wheels[wheelIndex];
        checkLock();
    });
}

// Keypress
var wheels = document.getElementsByClassName('digit');

for (var i = 0; i < wheels.length; i++) {
    wheels[i].addEventListener('keyup', function(e){

        // arrow key up
        if (e.which === 38) {
            let wheelIndex = parseInt(this.getAttribute('index'));
            combinationLock.increment(wheelIndex);
            document.querySelectorAll('.digit')[wheelIndex].value = combinationLock.wheels[wheelIndex];
            checkLock();
        }

        // arrow key down
        if (e.which === 40) {
            let wheelIndex = parseInt(this.getAttribute('index'));
            combinationLock.decrement(wheelIndex);
            document.querySelectorAll('.digit')[wheelIndex].value = combinationLock.wheels[wheelIndex];
            checkLock();
        }

        // number key (0 - 9)
        if (e.which > 47 && e.which < 58 ) {
            let wheelIndex = parseInt(this.getAttribute('index'));
            combinationLock.wheels[wheelIndex] = parseInt(document.querySelectorAll('.digit')[wheelIndex].value);
            checkLock();
        }

        // if number is longer than 1 digit
        if (this.value.length > 1) {
            this.value = 0;
        }

        // if number is less that 1 digit
        if (this.value.length < 1) {
            this.value = 0;
        }
    });
}

// Check lock
function checkLock() {
    combinationLock.check();
    if (combinationLock.locked === false) {
        document.querySelector('#indicator').classList.remove('locked');
        document.querySelector('#indicator').classList.add('unlocked');

        localStorage.setItem('locked', 'false');
        localStorage.setItem('combination', combinationLock.wheels.join(''));
    } else {
        document.querySelector('#indicator').classList.add('locked');
        document.querySelector('#indicator').classList.remove('unlocked');
        localStorage.setItem('locked', 'true');
    }
}

document.addEventListener("DOMContentLoaded", function() {
   /*
  var locked = localStorage.getItem('locked');
  var savedCombination = localStorage.getItem('combination');

  if (locked === 'false' && savedCombination) {
      combinationLock.locked = false;
      combinationLock.wheels = savedCombination.split('').map(Number);
      document.querySelector('#indicator').classList.remove('locked');
      document.querySelector('#indicator').classList.add('unlocked');
      // Actualizar los valores visuales de los inputs
      document.querySelectorAll('.digit').forEach((input, index) => {
          input.value = combinationLock.wheels[index];
      });
  }*/
});