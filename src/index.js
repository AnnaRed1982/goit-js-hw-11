import './css/styles.css';
import API from './API';
import render from './renderIMG';
import Notiflix from 'notiflix';
const axios = require('axios').default;

const formREF = document.querySelector('.search-form');
const galleryREF = document.querySelector('.gallery');
const buttonLoadMore = document.querySelector('.load-more');

let searchQuery = '';

formREF.addEventListener('submit', onSearch);
buttonLoadMore.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();
  galleryREF.innerHTML = '';

  searchQuery = evt.currentTarget.elements.searchQuery.value;
  API.resetPage();

  API.fetchImages(searchQuery).then(render.renderImages).catch(onCatchError);
}

function onLoadMore() {
  API.fetchImages(searchQuery).then(render.renderImages).catch(onCatchError);
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
