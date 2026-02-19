// Variables and constants

// Definition of a constant 'firstName' with the value 'Juan'
const firstName = 'Juan';

// Definition of a constant 'lastName' with the value 'Perez'
const lastName = 'Perez';

// Definition of a variable 'givenValue' with the initial value 5
let givenValue = 5;

// Changing the value of 'givenValue' to 4
givenValue = 4;

// Print the values of 'firstName', 'lastName', and 'givenValue' to the console
console.log(firstName, lastName, givenValue);

// Using var is not recommended, this is shown in the comment
// Block of code with a new definition of the constant 'firstName' within a local scope
if (true) {
    // Definition of a new constant 'firstName' in a local scope with the value 'Pepe'
    const firstName = 'Pepe';
    // Print the value of 'firstName' inside the if block (which will be 'Pepe')
    console.log(firstName);
}

// Print the value of 'givenValue' outside the if block (it will be 4, 
// since the reassignment inside the if block does not affect the variable outside of it)
console.log(givenValue);