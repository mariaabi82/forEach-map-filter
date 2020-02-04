// ------------------------  Ejercicio 1

const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlist.forEach(playlistEach => {
    console.log(playlistEach)
});

// ------------------------ Ejercicio 2

const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
  ];

let totalLibros = 0;

librosDeJS.forEach(libros => {
    //totalLibros = totalLibros + 1 ==
    totalLibros++
});

console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');

// ------------------------  Ejercicio 3

const playlistDos = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlistDos.forEach((cadaCancion, i) => {
    console.log(i + ' - ' + cadaCancion +' ');
});


// ------------------------  Ejercicio 4

const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

numbers.forEach(num => {
    // sum = sum + num
    sum += num
});

console.log(sum);


// ------------------------  Ejercicio 5

// const notas = [8, 3, 5, 1, 10];

// const mostrarenConsola = (nota,i) => nota

// console.log(mostrarenConsola)

const notas = [8.6, 3.8, 5.6, 1.5, 10.0];

const nuevoArray = notas.map((nota,i) => {
    return parseInt(nota)
    // sí o sí la función tiene que retornar;
    // se pueden obviar las llaves:
    // const nuevoArray = notas.map(nota,i) => parseInt(nota)
    
})

console.log(notas)
console.log(nuevoArray)



// ------------------------  Ejercicio 1: MAP

const numeros = [1, 2, 3, 4, 5];

let numerosMasDiez = numeros.map(numero => {
    return numero+10
})

console.log(numeros); 
console.log(numerosMasDiez); 

// ------------------------  Ejercicio 2: MAP

const numeros2 = [3, 7, 13, 99];

let dobles = numeros2.map(numeroDos => {
    return numeroDos*2
})

console.log(numeros2); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]

// ------------------------  Ejercicio 3: MAP

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

let frasesExclamadas = frases.map(frase => {
    return exclamacion = '¡' + frase + '!';
})


console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

// ------------------------  Ejercicio 4: MAP

const librosJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
  ];
  
let librosEnLista = librosJS.map(libro => {
    return lista = '<li>' + libro + '</li>';
})

librosUL = '<ul>' + librosEnLista.join("") + '</ul>'

console.log(librosUL)

// *********************  ejercicio de muestra de FILTER

const grades = [7, 1, 2, 9, 3]

const gradesFiltradas = notas.filter(grade => {
    return grade < 6
})

console.log(gradesFiltradas)

// ------------------------  Ejercicio de muestra 2: FILTER

var frases = [
    'Ut vero.',
    'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
    'Diam rebum nonumy et.',
    'Kasd stet.',
    'Sit et dolor.',
    'Est diam justo gubergren dolores et vero.',
    'Et sanctus sanctus et dolor clita.',
    'Dolores.',
    'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'
  ];

const frasesFiltradas = frases.filter(frase => frase.length < 20 || frase.length > 10);

const frasesFiltradas = [];

for (let i = 0; i < frases.length; i++) {
    if (frases[i].length < 20) {
        frasesFiltradas.push(frases[i])
    }
}

console.log(frasesFiltradas)

// ------------------------  Ejercicio 1: FILTER
// Ejercicio Array 042
// Crear un documento con el nombre arr_042.js
// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
// Mostrar el array original y el filtrado
// var costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];
// // codear acá la solución del ejercicio


// console.log(costos);
// console.log(losMasCaros);
// // deberia mostrar
// // [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// // [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]


// // ------------------------  Ejercicio 2: FILTER

// Ejercicio Array 043
// Crear un documento con el nombre arr_043.js
// Tenemos un array en una variable frases con frases al azar.
// Usando filter, crear un nuevo array con las frases que tengan menos de 20 caracteres y guardarlo en la variable frasesCortas
// Mostrar el array resultante
// var frases = [
//   'Ut vero.',
//   'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
//   'Diam rebum nonumy et.',
//   'Kasd stet.',
//   'Sit et dolor.',
//   'Est diam justo gubergren dolores et vero.',
//   'Et sanctus sanctus et dolor clita.',
//   'Dolores.',
//   'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'
// ];

// // codear acá la solución del ejercicio
// var frasesCortas = ;

// console.log(frasesCortas);
// // deberia mostrar
// // [ 'Ut vero.', 'Kasd stet.', 'Sit et dolor.', 'Dolores.' ]

// // ------------------------  Ejercicio 3: FILTER
// Ejercicio Array 044
// Crear un documento con el nombre arr_044.js
// Tenemos un array en una variable numeros con números al azar.
// También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
// Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
// Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares
// var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// // codea acá tu solución
// var numerosPares = ;
// var numerosImpares = ;

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// // deberias tener como resultado
// // pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// // impares: [43, 11, 37, 29, 9, 3, 37, 25]


// // ------------------------  Ejercicio 4: FILTER
// Ejercicio Array 045
// Crear un documento con el nombre arr_045.js
// Tenemos un array en una variable mix con varios elementos, de distintos tipos de datos.
// Usando filter, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable soloStrings.
// Ayuda: para saber si algo es un string en javascript, podés usar typeof ver más
// Mostrar el array resultante
// var mix = [
//   'Ut vero.',
//   2,
//   function () { console.log('hola mundo!') },
//   56,
//   'Diam rebum nonumy et.',
//   true,
//   false,
//   'Kasd stet.',
//   'Sit et dolor.',
//   null,
//   null,
//   [ 1, 2, 3],
//   'Dolore.'
// ];

// // codear acá la solución del ejercicio

// console.log(soloStrings);
// // deberia mostrar
// // [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]


// // ------------------------  Ejercicio 5: FILTER
// Ejercicio Array 046
// Crear un documento con el nombre arr_046.js
// Tenemos un array playlist con canciones seleccionadas al azar por spotify para reproducir.
// Tenemos otro array playlistEscuchada que tiene canciones que ya escuchamos anteriormente.
// Usando filter, queremos crear una nueva lista que solo contenga aquellas canciones guardadas en playlist que no están en playlistEscuchada
// Guarda el resultado en la variable playlistSinEscuchar
// var playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
// var playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']

// /// codea aca tu solución


// console.log(playlistSinEscuchar);
// // deberia mostrar
// // [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]