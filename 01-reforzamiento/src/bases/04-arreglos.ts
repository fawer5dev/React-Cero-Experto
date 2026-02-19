// Arrays in JS

// Definition of a constant array 'arreglo' with the values [1, 2, 3, 4]
const arreglo = [1, 2, 3, 4];

// Creation of a new array 'arreglo2' by spreading the elements of 'arreglo' 
// and adding the value 5 at the end
let arreglo2 = [...arreglo, 5];

// Creation of a new array 'arreglo3' by mapping over 'arreglo2'
// Each element 'numero' in 'arreglo2' is multiplied by 2 
// and returned in the new array 'arreglo3'
const arreglo3 = arreglo2.map(function (numero) { 
    return numero * 2; // Multiply each number by 2
});

// Print the original array 'arreglo' to the console
console.log(arreglo);

// Print the new array 'arreglo2' (which includes an additional element) to the console
console.log(arreglo2);

// Print the mapped array 'arreglo3' (with each element doubled) to the console
console.log(arreglo3);