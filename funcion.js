console.log('Este es mi tecer script externo');

//Funcion de flecha Arrow Function
  let nombre=()=>{

  }
  //Funcion declarativa
  function name(params) {
    
  }
function ImprimirNombre(x) {
    console.log('hola soy ' + x);
}
ImprimirNombre('Rocio')

function cuadrado() {
    let num=3
   return num*num
}
 console.log(cuadrado());  

function ImprimirNombreCompleto(primerNombre, segundoNombre, apellido) {
    let espacio=' '
    let nombreCompleto= primerNombre + espacio + segundoNombre + espacio + apellido
    return nombreCompleto
}
function EstáCasado(x) {
    return x
}
console.log(EstáCasado(ImprimirNombreCompleto('marcelo','juan','alvarez')));
console.log(ImprimirNombreCompleto('juana','ana','linares'))
console.log(ImprimirNombreCompleto('maria','paula','linares'))

function sumArrayValues(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma = suma + arr[i];
    }
    return suma;
  }
  const numeros = [1, 2, 3, 4, 5];
  const numeros1 = [1, 2, 3, 4, 5,6,7,8,9,10,11];
  console.log(sumArrayValues(numeros1));
  console.log(sumArrayValues(numeros));

  function sumaTodosLosNumeros() {
    let sum=0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
  }
  console.log( sumaTodosLosNumeros(1,2,3,4,5));
 
  const sumAllNumbers=(...args)=>{
        let sum=0
        for (const numero of args) {
            sum=sum + numero
        }
        console.log(sum);
  }

  sumAllNumbers(1,2,3,4,5)

  let caras=['😊','🤩','🙄','😣','😗']
  for (let cara of caras) {
    console.log(cara);
  }
let getFullName=function (params) {
    
}
  
let cuadrado= function (n) {
    return n*n 
}
console.log(cuadrado(2));

(function(n) {
    console.log(n*n);
})(3)

let cuadrado=(function (n) {
    return n*n
})(4)
console.log(cuadrado);

const ImprimirNombreCompleto=(nombre,apellido)=>{
    // return nombre + ' '+ segundo +' '+apellido
    return `Su nombre completo es : ${nombre} ${apellido}`
}
console.log( ImprimirNombreCompleto('ximena','choque')); 
console.log( ImprimirNombreCompleto('ximena','ana','choque')); 