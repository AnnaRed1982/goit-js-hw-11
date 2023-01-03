import './css/styles.css';
import API from './API';
import render from './renderGallery';
import Notiflix from 'notiflix';

const formREF = document.querySelector('.search-form');
const galleryREF = document.querySelector('.gallery');
const buttonLoadMore = document.querySelector('.load-more');

let searchQuery = '';

buttonLoadMore.classList.add('is-hidden');

formREF.addEventListener('submit', onSearch);
buttonLoadMore.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();
  galleryREF.innerHTML = '';

  searchQuery = evt.currentTarget.elements.searchQuery.value;
  API.resetPage();
  API.fetchImages(searchQuery).then(render.renderGallery).catch(onCatchError);
}

function onLoadMore() {
  API.fetchImages(searchQuery).then(render.renderGallery).catch(onCatchError);
}

function onCatchError(error) {
  Notiflix.Notify.failure(`${error}`);
}
