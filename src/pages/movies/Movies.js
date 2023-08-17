import MoviesList from 'components/moviesList/MoviesList';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/Fetch';
import { StyledForm, StyledInput, StyledSearchBtn } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setSearchParams({ movieName: form.elements.movieName.value });
  };

  useEffect(() => {
    if (!movieName) return;
    fetchMovies('query', movieName)
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, [movieName]);

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" name="movieName" />
        <StyledSearchBtn type="submit">Search</StyledSearchBtn>
      </StyledForm>
      <MoviesList movies={movies} state={{ from: location }} />
      <Outlet />
    </>
  );
};

export default Movies;
