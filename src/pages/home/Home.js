import { useState, useEffect } from 'react';
import { fetchTrends } from 'services/Fetch';
import MoviesList from 'components/moviesList/MoviesList';
import { MainTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <MainTitle>Trending today</MainTitle>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
