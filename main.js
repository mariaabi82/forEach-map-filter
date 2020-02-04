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