// Obtenemos referencias al modal y al botón de cierre
var modal = document.getElementById('modal');
var btnPopup = document.getElementById("btnPopup");
var closeBtn = document.getElementsByClassName("close")[0];
const divNumeros=document.getElementById("numeroSeleccionado");
divNumeros.innerText="";

// Función para abrir el modal
btnPopup.onclick = function() {
  modal.style.display = "block";
}

// Función para cerrar el modal cuando se hace clic en el botón de cierre
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Función para cerrar el modal cuando se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.addEventListener("click",function(){
  var codigoInput = divNumeros.textContent;
      if(codigoInput === "5314") {
        divNumeros.style.backgroundColor="#4CAF50";
      }
})
document.addEventListener("DOMContentLoaded", function() {
  // Recuperar el código guardado al cargar la página
  var savedCode = localStorage.getItem('codigoGuardado');
    if (savedCode) {
        divNumeros.textContent = savedCode;
    }
  
  setTimeout(function() {
      var imagen = document.getElementById('imagen-cargada');
      imagen.src = "../imagenes/candadopuerta.png";
      imagen.classList.remove('hidden');
  }, 100); // 2000 milisegundos = 2 segundos
});


// Función para verificar el código
function verificarCodigo() {
    var codigoInput = divNumeros.textContent;
    
  
      if(codigoInput === "5314") { // Verificar si el código es correcto  
        localStorage.setItem('codigoGuardado', codigoInput);
        divNumeros.style.backgroundColor="#4CAF50";

        // Redirigir a una ruta relativa si el código es correcto
        window.location.href = "salaMesa.html"; // Reemplaza con la ruta relativa deseada
      } else {
        divNumeros.style.backgroundColor="red";
      }
    
   // Cerramos el modal después de verificar el código
  }

  function escribirNumero(numero) {
    if(divNumeros.textContent.length<=3){
      console.log(numero);
      divNumeros.textContent += numero;
    }
  }
  
  function borrarCodigo(){
    divNumeros.innerText="";
    localStorage.removeItem('codigoGuardado');
    divNumeros.style.backgroundColor="rgb(8, 138, 170)";
  }
  