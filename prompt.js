alert('Bienvenidos a nuestro sistema')
let nombre= prompt('Introduzca el nombre')

alert(nombre)
document.getElementById('nombre').innerHTML=nombre
let apellido= prompt('Introduzca el apellido')
alert(apellido)
document.getElementById('apellido').innerHTML=apellido
let ejemplo = 'patatas patatas patatas'
// tomatas patatas
console.log(ejemplo.replace(/pat/,'tom'));
console.log(ejemplo.replace(/pat/g,'tom'));
let numero=5 + ""
console.log(typeof numero);
let cadena="123"
console.log(+cadena);
let cadena2="hola"
console.log(+cadena2);

