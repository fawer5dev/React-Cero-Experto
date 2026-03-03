import type { CSSProperties } from 'react';

export const MyAwesomeApp = () => {
    const name = 'fawer5Dev'
    const title = 'Welcome to my awesome app!'
    const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
    const isActive = false;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canadá',
    };

    const myStyles: CSSProperties = {
        backgroundColor: '#fafafa',
        borderRadius: 20,
        padding: 10,
        marginTop: 30,
    };


    return (
        <>
            <h1>{name}</h1>
            <h3>{title}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    )
}

// This is the same as above, but using function declaration instead of arrow function
// export function MyAwesomeApp() {
//     const name = 'fawer5Dev'
//     const title = 'Welcome to my awesome app!'
//   return (
//     <>
//       <h1>{name}</h1>
//       <h3>{title}</h3>
//     </>
//   )
// }