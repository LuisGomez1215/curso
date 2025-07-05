//primer dato de referencia
let nombre= 'guts';
let serie= 'berserk';
let edad= 35;
//este es el objeto
let personaje={
    nom:'guts',
    manga:'berserk',
    annos:35,
};
//traer toda la info del objeto
console.log(personaje);
console.log(personaje.nom);
console.log(personaje['annos']);
//cambiar valor de un atributo de un objeto
personaje.manga= 'Ultimate Berserk'
console.log(personaje.manga)
//eliminar (sirve tamvien para eliminar enteramente el opbjeto) un atributo
delete personaje.annos
console.log(personaje)