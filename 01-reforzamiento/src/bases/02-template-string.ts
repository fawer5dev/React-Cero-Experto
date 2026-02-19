// Variables and constants

// Definition of a constant 'firstName' with the value 'Juan'
const firstName = 'Juan';

// Definition of a constant 'lastName' with the value 'Perez'
const lastName = 'Perez';

// Concatenation of the constants 'firstName' and 'lastName' 
// into a constant 'fullName' using template literals (backticks)
// This includes a simple arithmetic expression (1+1) to demonstrate 
// that expressions can be evaluated within the template literal
const fullName = `
${firstName} 
${lastName}
${1+1}
`;

// Definition of a function 'getSaludo' that takes a parameter 'firstName' 
// and returns a greeting concatenated with the given name
function getSaludo(firstName: string) {
    return 'Hola ' + firstName; // Note: A space was added after 'Hola' to make the greeting correct
}

// An attempt to print a text that includes a call to 'getSaludo', 
// but it is incorrectly written because it uses single quotes
// The correct syntax for interpolation in JavaScript is to use backticks (``) 
// instead of single quotes ('')
console.log('este es un texto: ${getSaludo(firstName)}');

// Corrected code to properly print the text with the greeting
console.log(`este es un texto: ${getSaludo(fullName)}`);