import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { fetchMovies } from 'services/Fetch';
import MovieElement from 'components/movieElement/MovieElement';
import { Loader } from 'components/loader/Loader';
import { BackBtn } from './MoviePage.styled';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) return;
    fetchMovies('movie', movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    movie && (
      <>
        <BackBtn
          type="button"
          onClick={() => {
            navigate(location.state?.from ?? '/');
          }}
        >
          Go back
        </BackBtn>
        <MovieElement movie={movie} state={location.state} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default MoviePage;
