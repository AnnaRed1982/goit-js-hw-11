import Notiflix from 'notiflix';
import API from './API';
const galleryREF = document.querySelector('.gallery');
const buttonLoadMore = document.querySelector('.load-more');

function renderImages({ hits, totalHits }) {
  let fetchedImagesCount = (API.returnPage() - 1) * 40;

  console.log('counter:', fetchedImagesCount);

  if (fetchedImagesCount >= totalHits) {
    console.log('No more images to load');
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
    buttonLoadMore.classList.add('is-hidden');
  }

  if (hits.length === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    buttonLoadMore.classList.add('is-hidden');
    return;
  }

  if (API.returnPage() === 1) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
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
  galleryREF.insertAdjacentHTML('beforeend', markup);
}

export default { renderImages };
