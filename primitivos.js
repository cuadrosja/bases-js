
//Variables primitivos son los datos que no se pueden dividir en partes mas pequeñas
//string, number, boolean, null, undefined, symbol y bigint

//Variables no primitivos son los datos que se pueden dividir en partes mas pequeñas
//array, object, function, date, regex y set

let nombre = 'Juan Marquina';
console.log(nombre);

nombre = 'Pedro Perez';
console.log(nombre);

nombre = 'Destino Final';
console.log(nombre);

console.log(typeof nombre); //string

//nombre[0]="J";


let edad = 25;
//console.log(edad);

edad = 30;
//console.log(edad);
//console.log(typeof edad);//numbre
//los prinitivos son inmutables
//edad[0]=2; //nose puede cambiar un caracter de un numero
//console.log(edad);//30

let personaje = {
    nombre:'Juan Marquina',
    edad:25,
    habilidades:['JavaScript','Pyton','Java'],
    direccion:{ciudad:'Lima',pais:'Peru'},
    saludar:function(){
        console.log('Hola, soy'+ this.nombre);
    }
}

personaje.nombre = 'Pedro Peres';
console.log('nombre',personaje.nombre);
console.log('edad',personaje.edad);

console.log('******************************************')
let listaPersonajes=['Devpool','Capitan Peru','Sentry'];
console.log('listaPersonajes',listaPersonajes);

listaPersonajes[1]= 'Capitan Planeta';
console.log('listaPersonajes',listaPersonajes);