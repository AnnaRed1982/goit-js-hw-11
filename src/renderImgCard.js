const galleryREF = document.querySelector('.gallery');

function renderImgCard(hits) {
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
}

export default { renderImgCard };
