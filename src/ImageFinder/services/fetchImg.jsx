import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '27725160-470a636dc677cf333fa2ad496';
const perPage = 12;

async function fetchPictures(searchQuery, page) {
  const url = `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage} `;
  const response = await axios.get(url);
  return response.data;
}

export default fetchPictures;
