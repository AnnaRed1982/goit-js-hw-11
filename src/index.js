import './css/styles.css';
import API from './fetchCountries';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');



// function onInput() {
//   API.fetchCountries(inputREF.value.trim())
//     .then(renderCountryList)
//     .catch(onCatchError);
// }

