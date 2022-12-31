import Notiflix from 'notiflix';
import API from './API';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryREF = document.querySelector('.gallery');
const buttonLoadMore = document.querySelector('.load-more');

function renderImages({ hits, totalHits }) {
  let fetchedImagesCount = (API.returnPage() - 1) * API.paginatNumber();
  console.log('counter:', fetchedImagesCount);

  if (API.returnPage() - 1 === 1 && hits.length > 0) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
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
      return `
                  <a class="gallery__item" href="${hit.largeImageURL}">
                    <div class="photo-card">
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
                    </div>
                 </a>
             `;
    })
    .join('');
  galleryREF.insertAdjacentHTML('beforeend', markup);

  buttonLoadMore.classList.remove('is-hidden');
  if (fetchedImagesCount >= totalHits && hits.length > 0) {
    console.log("We're sorry, but you've reached the end of search results.");
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
    buttonLoadMore.classList.add('is-hidden');
  }

  var lightbox = new SimpleLightbox('.gallery a', {});
  lightbox.refresh();

  if (API.returnPage() > 2) {
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}

export default { renderImages };
