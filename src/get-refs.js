export default function getRefs() {
   return {
        select: document.querySelector('select.breed-select'),
        catInfo: document.querySelector('.cat-info'),
        loader: document.querySelector('.loader'),
        error: document.querySelector('.error'),
        options: document.querySelector('.ss-search')
    };
}