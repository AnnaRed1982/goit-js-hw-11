import './css/styles.css';
import API from './API';
import render from './renderIMG';
import Notiflix from 'notiflix';
const axios = require('axios').default;

formREF = document.querySelector('#search-form');
galleryREF = document.querySelector('.gallery');

formREF.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const searchQuery = evt.currentTarget.elements.searchQuery.value;

  API.fetchImages(searchQuery.trim())
    .then(render.renderImages)
    .catch(onCatchError);
}

function onCatchError(error) {
  if ('failed') {
    Notiflix.Notify.failure(`${error}`);
    return;
  } else Notiflix.Notify.failure(`${error}`);
  // if ((error = '404')) {
  //   Notiflix.Notify.failure('Oops, there is no country with that name');
  //   return;
  // }
}
