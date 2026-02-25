// Desestructuración
// Asignación Desestructurante
const persona = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// const { age, key, name, } = persona;
 
// console.log( name );
// console.log( age );
// console.log( key );

const useContext = ({ key, name, age, rango = 'Capitán' }: { key: string; name: string; age: number; rango?: string }) => {


    // console.log( name, age, rango );
    
    return {
        keyName: key,
        anios: age,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { keyName, anios, latlng: { lat, lng } } = useContext( persona );

console.log(keyName, anios);
console.log( lat, lng );