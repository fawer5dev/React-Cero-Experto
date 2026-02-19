// Variables and constants

// Definition of a constant 'nombre' with the value 'Juan'
const nombre = 'Juan';

// Definition of a constant 'apellido' with the value 'Perez'
const apellido = 'Perez';

// Definition of a variable 'valorDado' with the initial value 5
let valorDado = 5;

// Changing the value of 'valorDado' to 4
valorDado = 4;

// Print the values of 'nombre', 'apellido', and 'valorDado' to the console
console.log(nombre, apellido, valorDado);

// Using var is not recommended, this is shown in the comment
// Block of code with a new definition of the constant 'nombre' within a local scope
if (true) {
    // Definition of a new constant 'nombre' in a local scope with the value 'Pepe'
    const nombre = 'Pepe';
    // Print the value of 'nombre' inside the if block (which will be 'Pepe')
    console.log(nombre);
}

// Print the value of 'valorDado' outside the if block (it will be 4, 
// since the reassignment inside the if block does not affect the variable outside of it)
console.log(valorDado);