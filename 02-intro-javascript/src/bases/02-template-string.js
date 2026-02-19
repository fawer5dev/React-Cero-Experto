// Variables and constants

// Definition of a constant 'nombre' with the value 'Juan'
const nombre = 'Juan';

// Definition of a constant 'apellido' with the value 'Perez'
const apellido = 'Perez';

// Concatenation of the constants 'nombre' and 'apellido' 
// into a constant 'nombreCompleto' using template literals (backticks)
// This includes a simple arithmetic expression (1+1) to demonstrate 
// that expressions can be evaluated within the template literal
const nombreCompleto = `
${nombre} 
${apellido}
${1+1}
`;

// Definition of a function 'getSaludo' that takes a parameter 'nombre' 
// and returns a greeting concatenated with the given name
function getSaludo(nombre) {
    return 'Hola ' + nombre; // Note: A space was added after 'Hola' to make the greeting correct
}

// An attempt to print a text that includes a call to 'getSaludo', 
// but it is incorrectly written because it uses single quotes
// The correct syntax for interpolation in JavaScript is to use backticks (``) 
// instead of single quotes ('')
console.log('este es un texto: ${getSaludo(nombre)}');

// Corrected code to properly print the text with the greeting
console.log(`este es un texto: ${getSaludo(nombre)}`);