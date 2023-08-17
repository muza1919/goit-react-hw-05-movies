import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LinkList, MovieLink } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <LinkList>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </li>
          );
        })}
      </LinkList>
    </>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
