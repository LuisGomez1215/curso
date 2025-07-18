let p={
    id:1,
    name:"manolo",
    age:23,
};
for(let prop in p){
    console.log(prop);
};
for(let prop in p){
    console.log(p[prop]);
};
let a = ['a','b','c']
for(let indice in a){
    console.log(indice,a[indice])
}