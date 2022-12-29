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

export default { renderImages };
