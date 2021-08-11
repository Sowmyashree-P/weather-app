
 export function getProducts(url) {
    return fetch(url)
    .then(response => response.json())
    .catch(error => error)
 }
 