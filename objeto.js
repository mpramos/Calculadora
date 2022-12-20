let person={
    nombre:'Juan', //string
    apellido:'Ramirez', //string
    edad:30, //number
    ciudad:'La Paz',
    skills:[
        'HTML',
        'CSS',
        'JAVASCRIPT'
    ],
    isCasado: true, //booleano
    ObtenerNombreCompleto:function () {
        return `${this.nombre} ${this.apellido}`
    },
}
console.log('allPerson',person);
console.log('namePerson',person.nombre);
console.log(person.edad);
console.log(person['ciudad']);
console.log(person.ObtenerNombreCompleto());

person.nacionalidad='boliviano'
console.log(person.nacionalidad);

const copiaPerson= Object.assign({},person)
console.log('Ésta es la copia');
console.log(copiaPerson);
const propiedad= Object.keys(copiaPerson)
console.log('Sacando las propiedades del objeto person');
console.log(propiedad);
const valores= Object.values(copiaPerson)
console.log('Sacando los valores del objeto person');
console.log(valores);
const entries=Object.entries(copiaPerson)
console.log('Sacando los entries del objeto person');
console.log(entries);
console.log('Buscando la propiedad nombre en mi objetos copiado');
console.log(copiaPerson.hasOwnProperty('pais'));