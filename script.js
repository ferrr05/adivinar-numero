const numeroAdivinar = Math.floor(Math.random() * 15) + 1;
let intentos = 0;
function pedirNumero() {
    const numero = prompt('Introduce un número entre 1 y 15, tienes tres intentos');
    return parseInt(numero);
}
function comprobarNumero(numero) {
    intentos++;

    if (numero === numeroAdivinar) {
        alert(`¡Has acertado el número en ${intentos} intentos.`);
        return true;
    } else if (numero < numeroAdivinar) {
        alert('El número que has introducido es menor.');
    } else {
        alert('El número que has introducido es mayor.');
    }
    if (intentos === 3 && numero != numeroAdivinar) {
        alert(`Has perdido, el numero era ${numeroAdivinar}.`);
    }

    return false;
}
for (let i = 0; i < 3; i++) {
    const numero = pedirNumero();
    if (comprobarNumero(numero)) {
        break;
    }
}