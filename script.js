const numeroAdivinar = Math.floor(Math.random() * 15) + 1;
let intentos = 0;
function pedirNumero() {
    const numero = prompt('Tienes que adivinar el número que estoy pensando del 1 al 15, tienes tres intentos');
    return parseInt(numero);
}
function comprobarNumero(numero) {
    intentos++;

    if (numero === numeroAdivinar) {
        alert(`¡Muy bien, solo has necesitado ${intentos} intentos.`);
        return true;
    } else if (numero < numeroAdivinar) {
        alert('El número que has introducido es menor al que estoy pensando.');
    } else {
        alert('El número que has introducido es mayor al que estoy pensando.');
    }
    if (intentos === 3 && numero != numeroAdivinar) {
        alert(`Lo siento, no has adivinado el número, el numero era ${numeroAdivinar}.`);
    }

    return false;
}
for (let i = 0; i < 3; i++) {
    const numero = pedirNumero();
    if (comprobarNumero(numero)) {
        break;
    }
}