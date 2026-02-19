// Define an object 'person' with various properties including a nested 'address' object
const person = {
    name: 'Juan', // Person's first name
    lastname: 'Perez', // Person's last name
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

// Use console.table to display the 'person' object in a tabular format (commented out)
// console.table(person);

// Use console.log to print the 'person' object to the console
console.log(person);

// Create a shallow copy of the 'person' object and assign it to 'person2'
const person2 = {...person};

// Modify the 'name' property of the 'person2' object
person2.name = 'Pepe';

// Use console.log to print the modified 'person2' object to the console
console.log(person2);