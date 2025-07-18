function suma(a){
    return a+2;
    //return se escribe cuando estamos devolviendo un valor
}
//posterior a crear una funcion y sus variables
//podemos llamarla y darle diferentes valores a sus variables
//en este caso estamos reusando la variable suma para
//darle el valor 5 a 'a'
let resultado = suma(5);
console.log(resultado);

function operacion(a, b, c){
    if(a>b)
        return a+c
    else 
        return b+c
}
let ope1 = operacion(1,2,3)
let ope2 = operacion(5,2,5)
console.log('operacion 1',ope1, 'operacion2 ',ope2)