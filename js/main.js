var jugador = 0, pc = 0, victorias = 0, derrotas = 0, max = 3, min = 1
var text = document.getElementById("texto");

alert("\n   Bienvenido a tu juego de piedra 🪨 papel 🧻 o tijera ✂️ \n  \
Tienes que ganar 3 veses para llevarte al victoria: 🏆");

function reiniciarJuego() { victorias = 0; derrotas = 0; };

function tiro(lider,name){
    if(lider == 1){alert(`${name} ha elegido 🪨`)}
    else if(lider == 2){alert(`${name} ha elegido 🧻`)}
    else if(lider == 3){alert(`${name} ha elegido ✂️`)}
    else{ alert(`${name} ha ingresado un opcion invalida pierde 🤬`)}
    return lider;
};

function deciciones() {
    if (jugador == pc) {
        alert ("empate 😮");
    } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
        alert ("GANASTE 💪🏼");
        victorias = victorias + 1;
    } else {
        alert ("PERDISTE🤮");
        derrotas = derrotas + 1
    };
    return victorias, derrotas;
};

function juego() {
    while (victorias < 3 && derrotas < 3) {
        jugador = prompt("Ingrese su eleccion: ");
        jugador = tiro(jugador,'Usted');
        pc = Math.floor(Math.random() * (max - min + 1) + 1);
        pc = tiro(pc, 'pc');
        deciciones(jugador, pc);
    };
    if (victorias == 3) {
        text.innerHTML = `🎉 Felicidades has ganado 🏆 ${victorias} veces 🎉`;
        reiniciarJuego();
    } else if (derrotas == 3) {
        text.innerHTML = `Pero que 🐷 has perdido ${derrotas} veces`;
        reiniciarJuego();
    }
};