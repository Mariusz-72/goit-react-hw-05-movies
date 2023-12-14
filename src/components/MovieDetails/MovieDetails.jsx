import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, Outlet} from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from 'services/Api';
import css from './MovieDetails.module.css';





const MovieDetails = () => {
const { movieId } = useParams();
const [movie, setMovie] = useState(null);
const [setCast] = useState([]);
const [setReviews] = useState([]);
const navigate = useNavigate();
const [activeTab] = useState(null);

useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        const castData = await getMovieCredits(movieId);
        setMovie(movieData);
        setCast(castData.cast);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

fetchData();
  }, [setCast,movieId]);

useEffect(() => {
const fetchReviews = async () => {
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        console.log('Error fetching movie reviews:', error);
      }
    };

    if (activeTab === 'reviews') {
      fetchReviews();
    }
}, [movieId, activeTab, setReviews]);
  
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getMovieCredits(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.log('Error fetching movie cast:', error);
      }
    };

    if (activeTab === 'cast') {
      fetchCast();
    }
  }, [movieId, activeTab, setCast]);

const getYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };

const getGenres = genres => {
    return genres.map(genre => genre.name).join(', ');
  };

const handleGoBack = () => {
    navigate('/movies');
  };

  //  const handleTabClick = tab => {
  //    setActiveTab(tab);
  //  };

  return (
    <>
      <div className={css.movieDetails}>
        <button className={css.goBack} onClick={handleGoBack}>
          <Link to="/movies" className={css.linkStyle}>
            &larr; Go Back
          </Link>
        </button>

        {movie && (
          <>
            <div className={css.movieInfo}>
              <div className={css.moviePoster}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                  className={css.posterImage}
                />
              </div>
              <div className={css.movieDetailsText}>
                <h1>
                  {movie.original_title} ({getYear(movie.release_date)})
                </h1>
                <h2>User Score: {movie.vote_average * 10}%</h2>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <p>{getGenres(movie.genres)}</p>
              </div>
            </div>

            <div>
              <div className={css.tabs}>
                <ul className={css.ulStyle}>
                  <li>
                    <Link
                      to={`/movies/${movieId}/cast`}
                      className={`${css.castButton} ${
                        activeTab === 'cast' ? css.activeTab : ''
                      }`}
                    >
                      Cast
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/movies/${movieId}/reviews`}
                      className={`${
                        activeTab === 'reviews' ? css.activeTab : ''
                      }`}
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>
              <Outlet />
              
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
