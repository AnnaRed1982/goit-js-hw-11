const axios = require('axios').default;

const API_KEY = '32381232-0d08b52c11723d23aba771294';
const per_page = 40;
let page = 1;

async function fetchImages(searchQuery) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`
    );

    page += 1;
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(`${error}`);
  }
}
function resetPage() {
  page = 1;
}
function returnPage() {
  return page;
}
function paginatNumber() {
  return per_page;
}
export default { fetchImages, resetPage, returnPage, paginatNumber };

// function fetchImages(searchQuery) {
//   return fetch(
//     `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     page += 1;
//     return response.json();
//   });
// }
