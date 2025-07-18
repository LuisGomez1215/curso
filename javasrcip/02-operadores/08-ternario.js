let edad;

function obtenerAcceso() {
    return edad > 17 ? 'SI' : 'no';
}

edad = 16;
console.log(obtenerAcceso()); // no

edad = 18;
console.log(obtenerAcceso()); // SI
