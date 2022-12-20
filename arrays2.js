const array1=['😀','😁','😃']
array1.push('😖')
console.log(array1);
const array2=['😀','😁','😃']
array2.unshift('😖')
console.log(array2);
const array3=['😀','😁','😃','😄']
array3.pop()
console.log(array3);
const array4=['😀','😁','😃','😄']
array4.shift()
console.log(array4);
const numeritos='nombre'
console.log(Array.isArray(numeritos));
const numeros=[1,2,3,4,5]
console.log(numeros.toString())
// console.log(numeros.includes(3));
numeros.reverse()
console.log(numeros);

const nombres=['Brayan','Adela','Felix','Cecilia']
const letras=['a','r','m','a','n','d','o']
console.log(letras.join(''));
nombres.sort()
console.log(nombres);
const numeros3=[1,2,3,4,5,6]
console.log(numeros3.join());
console.log(numeros3.join(''))
const numeros4=[1,2,3,4,5]
console.log(numeros4.slice(1,4));

const numeros5=['😀',2,3,4,5]
console.log(numeros5.splice(0,4));
const array5=[[1,2,3],['😀','😎','😁']]
console.log(array5[1]);
let arr=['😀',[1,2,3,4,5],true,false,'ahahaha']
console.log(arr);