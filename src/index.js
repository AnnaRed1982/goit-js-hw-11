import './css/styles.css';
import API from './fetch';
import Notiflix from 'notiflix';
const axios = require('axios').default;

formREF = document.querySelector('#search-form');
galleryREF = document.querySelector('.gallery');

const API_KEY = '32381232-0d08b52c11723d23aba771294';

formREF.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const searchQuery = evt.currentTarget.elements.searchQuery.value;

  //   const options = {
  //     headers: {
  //       Authorization: '32381232-0d08b52c11723d23aba771294',
  //     },
  //   };

  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(url)
    .then(response => response.json())
    .then(renderImages);
}

// function onInput() {
//   API.fetchCountries(inputREF.value.trim())
//     .then(renderCountryList)
//     .catch(onCatchError);
// }
function renderImages({ hits }) {
  const markup = hits
    .map(hit => {
      return `<div class="photo-card">
                <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
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
