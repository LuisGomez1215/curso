let a
//se pueden definir variables fuera de una funcion para luego 
//darle valor a estas y usarlas con la misma 
let b
function sion(){
    if (a > 12){
        console.log('si')
    }
    else if (a ==12 && b=='si'){
        console.log('si esta')
    }
    else {
        console.log('no')
    }
}
b='si'
a= 12
sion()
a= 13
sion()
a='a'
sion()
a=15
sion()