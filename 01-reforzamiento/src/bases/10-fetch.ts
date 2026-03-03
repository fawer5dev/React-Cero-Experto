import type { GiphyRandomResponse } from '../data/giphy.response';

const API_KEY = 'Q9tmbLooBB2dWLIm3e0PQQgkEqIoJB3y';

const myRequest = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest
    .then(resp => resp.json())
    .then(({ data }: { data: GiphyRandomResponse['data'] }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);