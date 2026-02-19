// Functions

// Definition of an arrow function 'saludar2' that takes a parameter 'nombre' 
// and returns a greeting string
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`; // Template literal used to embed the 'nombre' parameter within the greeting
}

// Definition of an arrow function 'saludar3' that takes a parameter 'nombre' 
// and returns a greeting string in a single line
const saludar3 = (nombre) => `Hola, ${nombre}`; // Concise body syntax for arrow functions

// Definition of an arrow function 'saludar4' that takes no parameters 
// and returns a fixed greeting string
const saludar4 = () => `Hola Mundo`; // Function returns a constant string

// Logging the results of calling the greeting functions with specific names
console.log(saludar2('Vegeta')); // Calls 'saludar2' with 'Vegeta' and logs the result
console.log(saludar3('Goku')); // Calls 'saludar3' with 'Goku' and logs the result
console.log(saludar4()); // Calls 'saludar4' with no parameters and logs the result

// Definition of an arrow function 'getUser' that returns an object with user details
const getUser = () => {
    return {
        uid: 'ABC123', // User ID
        username: 'El_Papi1502' // Username
    }
}

// Logging the result of calling 'getUser' function
const user = console.log(getUser()); // Calls 'getUser' and logs the returned object
console.log(user); // Logs 'undefined' because console.log returns 'undefined'

// Definition of an arrow function 'getUsuarioActivo' that takes a parameter 'nombre' 
// and returns an object with user details
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567', // User ID
    username: nombre // Username set to the passed parameter 'nombre'
})

// Calling 'getUsuarioActivo' with 'Fernando' and storing the result in 'usuarioActivo'
const usuarioActivo = getUsuarioActivo('Fernando'); // Calls 'getUsuarioActivo' with 'Fernando'

// Logging the result of calling 'getUsuarioActivo'
console.log(usuarioActivo); // Logs the returned object from 'getUsuarioActivo'