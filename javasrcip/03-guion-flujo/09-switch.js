let accion
function ewe(){
    switch(accion){
        case 'si'||'SI'||'Si'||'sI':
            console.log('joya');
            break;
        case 'no'||'NO'||'No'||'nO':
            console.log('chucha');
            break;
        default:
            console.log('mi loco elige algo')
    }
}
accion='si'
ewe()
accion='no'
ewe()
accion=123412
ewe()
accion='SI'
ewe()
//recomendacion del gepencio poruqe no sabia como hacer lo que queria
function awa() {
    switch (String(accion).toLowerCase()) {
        case 'si':
            console.log('joya');
            break;
        case 'no':
            console.log('chucha');
            break;
        default:
            console.log('mi loco elige algo');
    }
}
accion = 'si';
awa(); // joy
accion = 'SI';
awa(); // joya
accion = 'No';
awa(); // chucha
accion = 123412;
awa(); // mi loco elige algo