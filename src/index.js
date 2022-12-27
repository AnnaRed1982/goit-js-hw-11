import './css/styles.css';
import API from './fetch';
import Notiflix from 'notiflix';
const axios = require('axios').default;

formREF = document.querySelector('#search-form');
galleryREF = document.querySelector('.gallery');

formREF.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const searchQuery = evt.currentTarget.elements.searchQuery.value;

  //   const options = {
  //     headers: {
  //       Authorization: '32381232-0d08b52c11723d23aba771294',
  //     },
  //   };

  const url = `https://pixabay.com/api/?key=32381232-0d08b52c11723d23aba771294&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

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
                        <b>Likes${hit.likes}</b>
                    </p>
                    <p class="info-item">
                        <b>Views${hit.views}</b>
                    </p>
                    <p class="info-item">
                        <b>Comments${hit.comments}</b>
                    </p>
                    <p class="info-item">
                        <b>Downloads${hit.downloads}</b>
                    </p>
                </div>
             </div>`;
    })
    .join('');
  galleryREF.innerHTML = markup;
}
