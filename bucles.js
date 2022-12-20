for (let i = 1; i <=5; i++) {
    console.log('dificultad para entender ciertas materias');
    console.log('reprobar materias');
    console.log('trabajar');
    console.log('no tener los recursos suficientes');
    if (i===3) {
           continue 
    } 
}

let j=1
while (j<=5) {
    console.log(j);
    j++
}

let k=6;
do {
    console.log(k);
    k++
} while (k<=5);

const numeritos=[1,2,3,4,5,6,7,8,9]
const nuevoNumeritos=[]

for (let i = 0; i < numeritos.length ; i++) {
    nuevoNumeritos.push(numeritos[i]*2)
}
console.log(nuevoNumeritos);

