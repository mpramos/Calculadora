//! forEach, map, filter, find, every, some, sort, reduce

let caras=['😊','🤩','🙄','😣','😗']
// ForEach == PARA CADA
caras.forEach((cara)=>{console.log(cara)})

//map == MAPA
const numeros=[1,2,3,4,5]
// let cuadrado1= numeros.map(numero=>{let cuadradito= numero*numero
//                                        let suma=numero + numero 
//                                         return cuadradito
//                                     })
// console.log(cuadrado1);

const cuadrado = numeros.map((numero)=>numero*numero)
const cuadradoDelCuadrado= cuadrado.map((numero)=>numero*numero)
console.log(cuadradoDelCuadrado);
console.log('Haciendo uso del map');
console.log(cuadrado);
 //Filter ===  Filtrar
const paises=['Bolivia','Argentina','Paraguay','Chile','Perú','Colombia']
const paisesPorTamaño=paises.filter(pais=>pais.length >5)
console.log('filter');
console.log(paisesPorTamaño);
