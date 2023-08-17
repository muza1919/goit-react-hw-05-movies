import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/Fetch';
import { Loader } from 'components/loader/Loader';
import { CastImage, CastInfo, CastList } from './Subpages.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);
    fetchMovies('cast', movieId)
      .then(data => setCast(data.cast))
      .catch(error => console.log(error))
      .finally(setLoader(false));
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      <CastList>
        {cast &&
          cast.map(star => {
            return (
              <li key={star.id}>
                <CastImage
                  src={
                    star.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${star.profile_path}`
                      : 'https://cdn.pixabay.com/photo/2022/11/16/23/57/movie-theater-7597054_960_720.png'
                  }
                  width="100"
                  height="135"
                  alt={star.name}
                />
                <CastInfo>Name: {star.name}</CastInfo>
                <CastInfo>Role: {star.character}</CastInfo>
              </li>
            );
          })}
        {cast.length === 0 && <h2>Mothing Here</h2>}
        <Suspense fallback={<Loader />} />
      </CastList>
    </>
  );
};

export default Cast;
