const BASE_URL = `https://api.thecatapi.com/v1`;
const API_KEY = `9d4b250a-c7b8-4757-b5e0-eb1bb5b44189`;

export function fetchCats(){
    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}`).then(response => response.json());
}

export function fetchBreeds(){
    return fetch(`${BASE_URL}/breeds/?api_key=${API_KEY}`).then((response) => response.json());
}

export function fetchBreed(breedId : string){
    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}?breed_id=${breedId}`).then((response) => response.json());
}