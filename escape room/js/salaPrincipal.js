document.addEventListener("DOMContentLoaded", function() {
    // Cargar el estado inicial de los billetes desde localStorage
    const billetes = ['billete1', 'billete2', 'billete3', 'billete4'];
    billetes.forEach(function(billeteId) {
        const billete = document.getElementById(billeteId);
        
        if (billete && localStorage.getItem(billeteId) === 'true') {
            billete.style.visibility = "visible";
            if(billeteId=="billete1"){
            document.getElementById("bt1").style.visibility ="hidden";
            }
            if(billeteId=="billete2"){
                document.getElementById("bt2").style.visibility ="hidden";
            }
            if(billeteId=="billete3"){
                document.getElementById("bt3").style.visibility ="hidden";
            }
            if(billeteId=="billete4"){
                document.getElementById("bt4").style.visibility ="hidden";
            }
        }
    });

    // Función para manejar la visibilidad de los billetes
    function mostrarImagen(billeteId) {
        const billete = document.getElementById(billeteId);
        if (billete) {
            billete.style.visibility = "visible";
            localStorage.setItem(billeteId, 'true'); // Guardar el estado en localStorage
        }
    }

    // Eventos para los botones que revelan cada billete
    document.getElementById("bt1").addEventListener("click", function() { mostrarImagen('billete1'); });
    document.getElementById("bt2").addEventListener("click", function() { mostrarImagen('billete2'); });
    document.getElementById("bt3").addEventListener("click", function() { mostrarImagen('billete3'); });
    document.getElementById("bt4").addEventListener("click", function() { mostrarImagen('billete4'); });

    // Manejar el cierre de modales y otros elementos interactivos
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Evento para el cajón que activa el modal
    document.getElementById("cajon").addEventListener("click", function() {
        modal.style.display = "block";
    });
});
var lugar1 = document.getElementById("billete1");
var modal1 = document.getElementById("modal1");

lugar1.addEventListener("click", function () {
    // Mostrar el otro modal
    modal1.style.visibility="visible";
  });
  
  modal1.addEventListener("click", function () {
    // Ocultar el otro modal cuando se hace clic en él
    
    
    modal1.style.visibility = "hidden";
    
  });
  var lugar22 = document.getElementById("billete2");
var modal22 = document.getElementById("modal22");

lugar22.addEventListener("click", function () {
    // Mostrar el otro modal
    modal22.style.visibility="visible";
  });
  
  modal22.addEventListener("click", function () {
    // Ocultar el otro modal cuando se hace clic en él
    
    
    modal22.style.visibility = "hidden";
    
  });

  var lugar3 = document.getElementById("billete3");
var modal3 = document.getElementById("modal3");

lugar3.addEventListener("click", function () {
    // Mostrar el otro modal
    modal3.style.visibility="visible";
  });
  
  modal3.addEventListener("click", function () {
    // Ocultar el otro modal cuando se hace clic en él
    
    
    modal3.style.visibility = "hidden";
    
  });

  var lugar4 = document.getElementById("billete4");
var modal4 = document.getElementById("modal4");

lugar4.addEventListener("click", function () {
    // Mostrar el otro modal
    modal4.style.visibility="visible";
  });
  
  modal4.addEventListener("click", function () {
    // Ocultar el otro modal cuando se hace clic en él
    
    
    modal4.style.visibility = "hidden";
    
  });

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var elementos = document.querySelectorAll('.hidden');
        elementos.forEach(function(elemento) {
            elemento.classList.add('visible');
        });
    }, 100); // 2000 milisegundos = 2 segundos
    
});



document.getElementById('ocultarBoton').addEventListener('click', function() {
    var div = document.querySelector('.objetos');
    if (div.style.bottom === "20px" || div.style.bottom === "") {
        // Cambia el color de fondo a rojo solo cuando el div se oculta
        // Calcula la nueva posición del div para que se deslice hacia abajo, excepto el botón
        div.style.bottom = `-${div.offsetHeight - document.getElementById('ocultarBoton').offsetHeight + 20}px`;
    } else {
        // Restaura el color de fondo original cuando el div vuelve a su posición
        // Devuelve el div a su posición original
        div.style.bottom = "20px";
    }
});


function candadoMapa(){
    
}

// ***
// Combination Lock
// ***
var combinationLock = {
    combination: 12101492,
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

var cajon = document.getElementById("cajon");
  var modal = document.getElementById("modal");

  // Cuando el usuario haga clic en el cajón, mostrar el modal
  cajon.addEventListener("click", function() {
    modal.style.display = "block";
  });

  // Obtener el elemento que cierra el modal
  var span = document.getElementsByClassName("close")[0];

  // Cuando el usuario haga clic en el botón de cerrar (×) o fuera del modal, cerrar el modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    
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
    }
    
    var cajon2 = document.getElementById("cajon2");
    var otroModal = document.getElementById("otroModal");

    cajon2.addEventListener("click", function() {
        // Mostrar el otro modal
        otroModal.classList.remove("hidden");
    });

    otroModal.addEventListener("click", function() {
        // Ocultar el otro modal cuando se hace clic en él
        otroModal.classList.add("hidden");
    });
});
