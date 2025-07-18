//devuelve faldo
//false
//0
//''
//null
//undefined
//NaN
//estos se definen como falsy
let nombre= '';
//aqui el operador or analisa si nombre tiene valor
//al no tener usa la variable prepuesta manolo
let username = nombre || 'manolo';
console.log(username);
function f1() {
    console.log('f1 fun')
    return true
}
function f2(){
    console.log("f2 fun")
    return true;
}
let x = f1() && f2();