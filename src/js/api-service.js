const API_KEY = '39057867-f9b54f51581e5f2d5762c62b3';
const BASE_URL = 'https://pixabay.com/api/?';

export function fetchCards(searchQuery) {
  const SEARCH_PARAMS = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${SEARCH_PARAMS}`).then(res => res.json());
}
