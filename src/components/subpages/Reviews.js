import { useState, useEffect, Suspense } from 'react';
import { fetchMovies } from 'services/Fetch';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/loader/Loader';
import { Author, ReviewsInfo } from './Subpages.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);
    fetchMovies('reviews', movieId)
      .then(response => setReviews(response.results))
      .catch(error => console.log(error))
      .finally(setLoader(false));
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {reviews && (
        <ReviewsInfo>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <Author>Author: {review.author}</Author>
                <p>Review: {review.content}</p>
              </li>
            );
          })}
        </ReviewsInfo>
      )}
      {reviews.length === 0 && <h3>No reviews</h3>}
      <Suspense fallback={<Loader />} />
    </>
  );
};

export default Reviews;
