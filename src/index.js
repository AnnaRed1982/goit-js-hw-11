import './css/styles.css';
import API from './API';
import Notiflix from 'notiflix';
const axios = require('axios').default;

formREF = document.querySelector('#search-form');
galleryREF = document.querySelector('.gallery');

formREF.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const searchQuery = evt.currentTarget.elements.searchQuery.value;

  API.fetchImages(searchQuery.trim()).then(renderImages).catch(onCatchError);
}

function renderImages({ hits }) {
  if (hits.length === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  const markup = hits
    .map(hit => {
      return `<div class="photo-card">
                <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy"/>
                <div class="info">
                    <p class="info-item">
                        <b>Likes</b>${hit.likes}
                    </p>
                    <p class="info-item">
                        <b>Views</b>${hit.views}
                    </p>
                    <p class="info-item">
                        <b>Comments</b>${hit.comments}
                    </p>
                    <p class="info-item">
                        <b>Downloads</b>${hit.downloads}
                    </p>
                </div>
             </div>`;
    })
    .join('');
  galleryREF.innerHTML = markup;
}

function onCatchError(error) {
  if ('failed') {
    Notiflix.Notify.failure(`${error}`);
    return;
  }
  // if ((error = '404')) {
  //   Notiflix.Notify.failure('Oops, there is no country with that name');
  //   return;
  // }
  else Notiflix.Notify.failure(`${error}`);
}
