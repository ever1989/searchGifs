/* Se exporta funcionalidad para dejar el codigo de app lo más limpio posible
*/

const apikey = "KPcIANrrhbvLb5lTZukvWFhSDjx6lKQW";


export default function getGifs({ 
/* Para poder utilizar las constantes o variables en un string debemos usar la sistaxis de comillas invertidas y así reconoce los datos */
keyword = 'morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

    return fetch(apiURL)
    // la respuesta la convierte a json
    .then(res => res.json())
    // procesando el json convertido
    .then(response => {
        const {data = []} = response
        if(Array.isArray(data)){
            //volcando por cada elementos del json y retonar una propiedad
            const gifs = data.map(image => image.images.downsized_medium.url)
            console.log(gifs)
            return gifs
        }
    })    
}

