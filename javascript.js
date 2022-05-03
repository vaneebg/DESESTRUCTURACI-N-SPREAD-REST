// 1.  Ejercicios destructuring
// Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
// Extrae la empleada Ana con todos sus datos personales:

// {"name":"Ana", "email":"Ana@gmail.com"}
const [empleado1, empleado2, empleado3] = empleados
console.log(empleado2)
    // Extrae el email del empleado Luis --> Luis@gmail.com
const { name, email } = empleado1
console.log(email)



// Usa la desestructuración para intercambiar los valores de a y b
// // Inicialmente
let a = 5;
let b = 3;
[a, b] = [b, a]
console.log(a)
console.log(b)
    // // Al final
    // let a = 3;
    // let b = 5;


// 2. Ejercicios spread/rest
// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
const sumEveryOther = (...numbers) => numbers.reduce((a, b) => a + b)

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26 



// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
const addOnlyNums = (...numbers) => {
    let onlyNumbers = numbers.filter(numero => typeof numero === "number");
    return onlyNumbers.reduce((a, b) => a + b)

}

console.log(addOnlyNums(1, 'perro', 2, 4)); //7



// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
countTheArgs = (...args) => { return args.length }
console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const array11 = ["hola", 4, "prueba", "ejercicio"]
const array2 = ["pera", "manzana", 15, "platano"]

const combineTwoArrays = [...array11, ...array2]
console.log(combineTwoArrays)










// 3. Extras
// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
const { yesterday, today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy)
console.log(maximaManana)

// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
// onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); 
// //['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
// combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

// const sumAndSquare = (...sumAndSquare) => {
//     const numbersElevado = sumAndSquare.map(number => { return number ** 2 })


// }
// console.log(sumAndSquare(2, 3))