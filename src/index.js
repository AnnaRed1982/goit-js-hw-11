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
    .then(console.log);
}

// function onInput() {
//   API.fetchCountries(inputREF.value.trim())
//     .then(renderCountryList)
//     .catch(onCatchError);
// }

{
  /* <div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>; */
}
