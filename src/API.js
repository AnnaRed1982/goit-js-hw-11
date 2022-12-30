const API_KEY = '32381232-0d08b52c11723d23aba771294';
let page = 1;

function fetchImages(searchQuery) {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    page += 1;
    return response.json();
  });
}
function resetPage() {
  page = 1;
}
function returnPage() {
  return page;
}
// function alertTotalHits() {
//   if (page === 1) {
//     Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
//   }
// }
export default { fetchImages, resetPage, returnPage };
