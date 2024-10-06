import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={style.NotFoundPage}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
};
export default NotFoundPage;
