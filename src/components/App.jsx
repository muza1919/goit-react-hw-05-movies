import { Routes, Route } from 'react-router-dom';
import { Loader } from './loader/Loader';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/home/Home'));
const Movies = lazy(() => import('pages/movies/Movies'));
const MoviePage = lazy(() => import('pages/moviePage/MoviePage'));
const Layout = lazy(() => import('./layout/Layout'));
const Cast = lazy(() => import('./subpages/Cast'));
const Reviews = lazy(() => import('./subpages/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
