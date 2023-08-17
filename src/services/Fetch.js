import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'd783920aea034ba2adae6031a0bf96c0';

export async function fetchTrends() {
  const response = await axios.get(`/trending/movie/day`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}

export async function fetchMovies(endpoint, feature) {
  const ENDPOINTS = {
    trends: `/trending/movie/day`,
    query: `/search/movie?query=${feature}`,
    movie: `/movie/${feature}`,
    cast: `/movie/${feature}/credits`,
    reviews: `/movie/${feature}/reviews`,
  };

  const response = await axios.get(`${ENDPOINTS[endpoint]}`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
}
