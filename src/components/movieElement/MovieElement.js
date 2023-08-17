import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';
import PropTypes from 'prop-types';
import {
  AdditionalLink,
  MovieTitle,
  Poster,
  Wrap,
} from './MovieElement.styled';

const MovieElement = ({ movie }) => {
  const location = useLocation();
  const getGenres = genres => {
    if (!genres) return 'No genres';
    return genres.map(genre => genre.name).join(', ');
  };
  return (
    <Wrap>
      <Poster
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
            : `https://cdn.pixabay.com/photo/2022/11/16/23/57/movie-theater-7597054_960_720.png`
        }
        width="350"
        height="500"
        alt={movie.title}
      />
      <MovieTitle>
        {movie.title}({new Date(movie.release_date).getFullYear()})
      </MovieTitle>
      <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>

      <h3>Gengres:</h3>
      <p>{getGenres(movie.genres)}</p>

      <h3>Additional information</h3>
      <AdditionalLink to={'cast'} state={location.state}>
        Cast
      </AdditionalLink>
      <AdditionalLink to={'reviews'} state={location.state}>
        Reviews
      </AdditionalLink>
      <Suspense fallback={<Loader />} />
    </Wrap>
  );
};

export default MovieElement;

MovieElement.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    release_date: PropTypes.string,

    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};
