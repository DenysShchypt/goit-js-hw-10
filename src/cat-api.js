import axios from 'axios';
const API_KEY = "live_IPGWMc0smi2mGOtLyn6asDLlGVcOFazNNkfXj4KIh0ayOxisCysSyUU13k2932C7";
const url = 'https://api.thecatapi.com/v1'
axios.defaults.headers.common['x-api-key'] = API_KEY;

const fetchBreeds = () => {
    return axios.get(`${url}/breeds`)
};

const fetchCatByBreed = (breedId) => {
    return axios.get(`${url}/images/search?breed_ids=${breedId}`)
};

export { fetchBreeds, fetchCatByBreed };