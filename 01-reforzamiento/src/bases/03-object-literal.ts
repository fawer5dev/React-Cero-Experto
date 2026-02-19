interface Person {
    firstName: string; // The person's first name
    lastName: string; // The person's last name
    age: number; // The person's age
    address?: { // An object representing the person's address
        // ? simbol indicates that the 'address' property is optional
        street: string; // Street address
        city: string; // City of residence
        country: string; // Country of residence
        zip: number; // Zip code
        lat: number; // Latitude coordinate
        lng: number; // Longitude coordinate
    }
}

// Define an object 'person' with various properties including a nested 'address' object
const person: Person = {
    firstName: 'Juan', // Person's first name
    lastName: 'Perez', // Person's last name
    age: 26, // Person's age
    address: { // Nested object containing address information
        street: 'Calle falsa 123', // Street address
        city: 'Bogota', // City
        country: 'Colombia', // Country
        zip: 555, // Zip code
        lat: 14.15645, // Latitude coordinate
        lng: 14.15645 // Longitude coordinate
    }
};

const person3: Person = {
    firstName: 'Juan', // Person's first name
    lastName: 'Perez', // Person's last name
    age: 26, // Person's age
    // No address provided, demonstrating the optional property
};

// Use console.table to display the 'person' object in a tabular format (commented out)
// console.table(person);

// Use console.log to print the 'person' object to the console
console.log(person);

// Create a shallow copy of the 'person' object and assign it to 'person2'
// The spread operator (...) is used to copy all properties of 'person' into a new object
const person2 = {...person};

// Modify the 'firstName' property of the 'person2' object
person2.firstName = 'Pepe';

// Use console.log to print the modified 'person2' object to the console
console.log(person2);