// Functions

// Definition of an arrow function 'saludar2' that takes a parameter 'name' 
// and returns a greeting string
const saludar2 = (name: string) => {
    return `Hello, ${name}`; // Template literal used to embed the 'name' parameter within the greeting
}

// Definition of an arrow function 'saludar3' that takes a parameter 'name' 
// and returns a greeting string in a single line
const saludar3 = (name: string) => `Hello, ${name}`; // Concise body syntax for arrow functions

// Definition of an arrow function 'saludar4' that takes no parameters 
// and returns a fixed greeting string
const saludar4 = () => `Hello World`; // Function returns a constant string

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

// Definition of an arrow function 'getUserActive' that takes a parameter 'name' 
// and returns an object with user details
const getUserActive = (name: string) => ({
    uid: 'ABC567', // User ID
    username: name // Username set to the passed parameter 'name'
})

// Calling 'getUserActive' with 'Fernando' and storing the result in 'userActive'
const userActive = getUserActive('Fernando'); // Calls 'getUserActive' with 'Fernando'

// Logging the result of calling 'getUserActive'
console.log(userActive); // Logs the returned object from 'getUserActive'