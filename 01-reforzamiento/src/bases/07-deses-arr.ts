const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);

// Task
// 1. first value of array is called nombre
// 2. called setNombre
const useState = ( value: string ): [ string, () => void ] => {
    return [ value, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();