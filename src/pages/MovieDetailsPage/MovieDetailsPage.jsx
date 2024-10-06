import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/themoviedb-api";
import { useEffect, useState } from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import style from "./MovieDetailsPage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLink = location.state || { from: "/" };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getMovieDetails(movieId)
      .then((data) => setMovie(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div className={style.MovieDetailsPage}>
      <div>
        <Link to={backLink}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Go back
        </Link>
      </div>

      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      {!isError && !isLoading && movie && (
        <>
          <MovieDetails movie={movie} />
          <hr />
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to="cast" state={{ ...location.state }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ ...location.state }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <hr />

          <Outlet context={movieId} />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
