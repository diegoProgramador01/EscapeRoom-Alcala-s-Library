document.addEventListener("DOMContentLoaded", function() {
    // Obtener el tiempo restante del almacenamiento local (si existe)
    let tiempoRestante = localStorage.getItem("tiempoRestante");
    if (tiempoRestante === null || tiempoRestante == 0) {
      tiempoRestante = 3600; // Resetear a 1 hora si no hay valor o es 0
      localStorage.setItem("tiempoRestante", tiempoRestante);
  }
  
    // Mostrar el tiempo restante inicialmente
    mostrarTiempoRestante(tiempoRestante);
  
    // Iniciar el contador
    const intervalo = setInterval(function() {
      tiempoRestante--;
      localStorage.setItem("tiempoRestante", tiempoRestante);
      mostrarTiempoRestante(tiempoRestante);
      
  
      // Si el tiempo restante llega a 0, detener el contador
      if (tiempoRestante <= 0) {
        clearInterval(intervalo);
        tiempoRestante = 3600;
        localStorage.setItem("tiempoRestante", tiempoRestante);
        document.body.style.backgroundImage = "url('../imagenes/game_over.webp')";
        document.body.style.backgroundSize = "cover";
        document.body.innerHTML="";
        document.body.style.backgroundPosition = "center";
        
        const gameOverMensaje = document.createElement('div');
        gameOverMensaje.id = "gameOverMessage";
        gameOverMensaje.textContent="Game Over!";
        document.body.appendChild(gameOverMensaje);
      }
    }, 1000);
  
    // Función para mostrar el tiempo restante en el HTML
    function mostrarTiempoRestante(tiempoRestante) {
      const minutos = Math.floor(tiempoRestante / 60);
      const segundos = tiempoRestante % 60;
      document.getElementById("contador").textContent = ` ${minutos} : ${segundos}`;
    }
  });
  
let inicio=document.getElementById('inicio');

inicio.addEventListener('click',function(){
  tiempoRestante = 3600;
        localStorage.setItem("tiempoRestante", tiempoRestante);
        localStorage.clear();
});