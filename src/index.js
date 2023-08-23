import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api'
import getRefs from "./get-refs";

const API_KEY = "live_IPGWMc0smi2mGOtLyn6asDLlGVcOFazNNkfXj4KIh0ayOxisCysSyUU13k2932C7";
axios.defaults.headers.common['x-api-key'] = API_KEY;
const refs = getRefs();
refs.select.classList.toggle('breed-select-js');
refs.select.addEventListener("change", setOutput);

fetchBreeds().then(renderCatsBreeds).catch(error => { 
    console.log(error);
    Notify.failure('Oops! Something went wrong! Try reloading the page!',{
        timeout: 100000000000000,
      },);
    refs.loader.classList.toggle('loader'); });


function renderCatsBreeds(cats) {
    const markupSelect = createMarkupViewCat(cats.data);
    selectIsActive(markupSelect) 
    new SlimSelect({
        select: '#single'
      })
};

function selectIsActive(markupSelect) {
    if (markupSelect) {
        refs.select.insertAdjacentHTML('beforeend', markupSelect);
        refs.select.classList.toggle('breed-select-js');
        refs.loader.classList.toggle('loader');
    }
 
};

function createMarkupViewCat(cats) {
    return cats.map(({ id, name }) => {
        return `<option value="${id}">${name}</option>`
    }).join('');
};

function setOutput(e) {
    louderCatCardIsActive()
    fetchCatByBreed(e.target.value).then(renderCatCard).catch(error => {
        console.log(error);
        Notify.failure('Oops! Something went wrong! Try reloading the page!',{
            timeout: 100000000000000,
          },);
        refs.loader.classList.toggle('loader');
    }); 
};

function renderCatCard(res) {
    const markupCat = createMarkupDescriptionCat(res.data[0])
    refs.catInfo.innerHTML = markupCat;
    louderCatCardNotActive(markupCat)
};

function louderCatCardIsActive() {
    refs.catInfo.classList.toggle('cat-card-js');
    refs.loader.classList.toggle('loader');
};

function louderCatCardNotActive(markupCat) {
    if (markupCat) {
        refs.catInfo.classList.toggle('cat-card-js');
        refs.loader.classList.toggle('loader');
    }
};

function createMarkupDescriptionCat(cat) {
    const { url, breeds } = cat;
    return `  <img class="cat-img" src="${url}" alt="" width="300" height="300">
   <h2 class="name-cat">
     ${breeds[0].name}
   </h2>
   <p class="description-cat">${breeds[0].description
        }</p>
   <h3>
     Temperament:
   </h3>
   <p class="temperament-cat">${breeds[0].temperament}</p>`
};







