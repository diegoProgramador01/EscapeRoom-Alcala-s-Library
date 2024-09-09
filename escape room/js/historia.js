const textos = ["Good evening Sir!, I am afraid to tell you that you are going to die.Why?The king has found that you are having a bit much fun with the queen, and he doesn't quite like that.", "Because of that you have been incarcerated in an old library and you have one hour until your execution time is due.I once was in a similar situation, but I got lost and ended starving to death.I will give you some guidance in exange for making the king furious.", "One hour is the time you have to try to escape,or your death will be inevitable.But there is an alternative ending for you if you are good enough.There is a way through hidden rooms and puzzles that might lead you to live another day.", "Search for hidden rooms,find clues,solve enigmas,and use anything in your power to escape your fate.Good luck!"];
let index = 0;

const textoElement = document.getElementById('texto');
const siguienteBtn = document.getElementById('siguienteBtn');


siguienteBtn.addEventListener('click', () => {
    if (index === textos.length - 1) {
        // Si es el último texto, redirigir a otra página
        window.location.href = "SalaPrincipal.html";
    } else {
        // Si no es el último texto, mostrar el siguiente texto
        index = (index + 1) % textos.length;
        textoElement.textContent = textos[index];
        console.log(index);
        if(index==2){
            siguienteBtn.textContent="Start";
        }
    }
});