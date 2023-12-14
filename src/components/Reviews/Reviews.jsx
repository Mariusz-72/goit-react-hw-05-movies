import React, { useEffect, useState } from 'react';
import css from '../MovieDetails/MovieDetails.module.css';

    import { useNavigate, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
  const navigate = useNavigate();

//gdy brak movieId:
  useEffect(() => {

    if (!movieId) {
      navigate('../Home/Home.jsx');
      return;
    }

    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId, navigate]);

  return (
    <div className={css.reviewsMargin}>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <div>No reviews available</div>
      )}
    </div>
  );
};

export default Reviews;
