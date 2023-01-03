import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import API from './API';
import renderImgCard from './renderImgCard';

var lightbox = new SimpleLightbox('.gallery a', {});

const buttonLoadMore = document.querySelector('.load-more');

function renderGallery({ hits, totalHits }) {
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

  renderImgCard.renderImgCard(hits);

  buttonLoadMore.classList.remove('is-hidden');
  if (fetchedImagesCount >= totalHits && hits.length > 0) {
    console.log("We're sorry, but you've reached the end of search results.");
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
    buttonLoadMore.classList.add('is-hidden');
  }

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

export default { renderGallery };
