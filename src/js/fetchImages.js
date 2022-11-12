import axios from 'axios';

// Fetch images from Pixabay API using Axios
const baseURL = 'https://pixabay.com/api/';
const key = '31260556-12ba6cd11582ca12a10f5b3d6';

async function fetchImages(name, page, perPage) {
  try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ', error.name);
  }
}

export { fetchImages };
