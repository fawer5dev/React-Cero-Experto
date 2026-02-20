// Functions

// Definition of an arrow function 'saludar2' that takes a parameter 'name' 
// and returns a greeting string
const saludar2 = (name: string) => {
    return `Hola, ${name}`; // Template literal used to embed the 'name' parameter within the greeting
}

// Definition of an arrow function 'saludar3' that takes a parameter 'name' 
// and returns a greeting string in a single line
const saludar3 = (name: string) => `Hola, ${name}`; // Concise body syntax for arrow functions

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
const user = getUser(); // Calls 'getUser' and stores the returned object
console.log(user); // Logs the returned object

// Definition of an arrow function 'getUsuarioActivo' that takes a parameter 'name' 
// and returns an object with user details
const getUsuarioActivo = (name: string) => ({
    uid: 'ABC567', // User ID
    username: name // Username set to the passed parameter 'name'
})

// Calling 'getUsuarioActivo' with 'Fernando' and storing the result in 'usuarioActivo'
const usuarioActivo = getUsuarioActivo('Fernando'); // Calls 'getUsuarioActivo' with 'Fernando'

// Logging the result of calling 'getUsuarioActivo'
console.log(usuarioActivo); // Logs the returned object from 'getUsuarioActivo'