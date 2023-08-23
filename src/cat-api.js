import axios from 'axios';
const API_KEY = "live_IPGWMc0smi2mGOtLyn6asDLlGVcOFazNNkfXj4KIh0ayOxisCysSyUU13k2932C7";
axios.defaults.headers.common['x-api-key'] = API_KEY;

const fetchBreeds = () => {
    return axios.get(`https://api.thecatapi.com/v1/breeds123`)
};

const fetchCatByBreed = (breedId) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
};

export { fetchBreeds, fetchCatByBreed };