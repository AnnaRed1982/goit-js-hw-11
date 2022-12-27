import './css/styles.css';
import API from './fetch';
import Notiflix from 'notiflix';
const axios = require('axios').default;

formREF = document.querySelector('#search-form');
galleryREF = document.querySelector('.gallery');

formREF.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const searchQuery = evt.currentTurget.elements.searchQuery.value;

  const options = {
    headers: {
      Authorization: '32381232-0d08b52c11723d23aba771294',
    },
  };

  const url = 'https://pixabay.com/api/';

  fetch(url, options)
    .then(response => response.json())
    .then(console.log);
}

// function onInput() {
//   API.fetchCountries(inputREF.value.trim())
//     .then(renderCountryList)
//     .catch(onCatchError);
// }
