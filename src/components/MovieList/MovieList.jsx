import { Link } from "react-router-dom";
import style from "../MovieList/MovieList.module.css";

const MovieList = ({ movies, state }) => {
  return (
    <ul className={style.MovieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={state}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
