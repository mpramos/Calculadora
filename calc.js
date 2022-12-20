let operandoa;
let operandob;
let operacion;
function init() {
    let resultado=document.getElementById('resultado')
    let reset=document.getElementById('reset')
    let suma=document.getElementById('suma')
    let igual=document.getElementById('igual')

    let uno=document.getElementById("uno") 
    let dos=document.getElementById("dos") 
    let tres=document.getElementById("tres") 
    let cuatro=document.getElementById("cuatro") 
    let cinco=document.getElementById("cinco") 
    let seis=document.getElementById("seis") 
    let siete=document.getElementById("siete") 
    let ocho=document.getElementById("ocho") 
    let nueve=document.getElementById("nueve") 
    let cero=document.getElementById("cero") 
}
uno.onclick=function () {
    console.log('hiciste click al numero 1');
    resultado.textContent=resultado.textContent + '1'
}
dos.onclick=function () {
    console.log('hiciste click al numero 2');
    resultado.textContent=resultado.textContent + '2'
}
tres.onclick=function () {
    console.log('hiciste click al numero 2');
    resultado.textContent=resultado.textContent + '3'
}
reset.onclick=function () {
    resetear()
}
function resetear() {
    resultado.textContent=""
    operandoa=0
    operandob=0
    operacion=""
}
suma.onclick=()=>{
    operandoa= resultado.textContent;
    operacion="+"
    limpiar()
}
function limpiar() {
    resultado.textContent=""
}
igual.onclick=function () {
    operandob=resultado.textContent;
    resolver()
}
function resolver() {
    let res=0
    switch (operacion) {
        case "+":
            res=parseFloat(operandoa) + parseFloat(operandob)
            console.log(res);
            break;
        case "-":
            console.log(res);
             break;
        case "*":
            console.log(res);
            break;
        case "/":
            console.log(res);
            break;
        
    }
    resetear()
    resultado.textContent=res
}