
let producto;
do{
alert("Solamente podes elegir los productos que mostramos en la página")
alert("Los productos disponibles son: peppa,sirenita,stitch,bob esponja,chavo y leon")
producto=prompt("qué producto/s deseas llevar")
if(!isNaN(producto)){
alert("Pone letras por favor")
}
else if (producto==="peppa"||producto==="sirenita"||producto==="stitch"||producto==="bob esponja"||producto==="chavo"||producto==="leon"){

}
else{

}
}while(producto!="peppa"||producto!="sirenita"||producto!="stitch"||producto!="bob esponja"||producto!="chavo"||producto!="leon");



let productos = [
    { nombre: "peppa", precio: 3500 },
    { nombre: "sirenita", precio: 6000 },
    { nombre: "stitch", precio: 7000 },
    { nombre: "bob esponja", precio: 10000 },
    { nombre: "chavo", precio: 6000 },
    { nombre: "leon", precio: 5000 }
];
