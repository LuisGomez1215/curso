let b;

function a() {
    let i = 0;  // i es local y se reinicia cada vez que se llama la función
    while (i < 20) {
        i = i + b;
        if (i == 10) {
            console.log('paso');
            continue;
        
        }
        if(i==16){
            console.log('ya paso 15')
            break
        } 
        else {
            console.log(i);
        }
    }
}

b = 3;
a(); // primera ejecución

b = 1;
a(); // segunda ejecución, con i reiniciado
//antes habia hecho este codigo, pero dio error debido a que defini i fuera de la funcion lo cual generaba que esta retuviera el valor
// let i=0;
// let b
// function a(){
//     while(i<20){
//         i=i+b;
//         if (i==10){
//             console.log('paso')
//             continue
//         }
//         else{
//             console.log(i)
//         }
//     }
// }
// b=3
// a()
// b=1
// a()