export default function getCharacters ( url ){
    return fetch(url)
    .then( res => res.json())
    .then( res => res)
    .catch( err => {
        console.error(err)
    })
}