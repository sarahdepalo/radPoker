import { Link } from "react-router-dom";
import gif from "./images/radPoker404.gif";

const Error404 = () => {
  return (
    <>
      <main className="error-container">
        <img src={gif} className="error-gif" alt="404 message" />
        <h4>Sorry, We Can't Find the Page You're Looking for.</h4>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </main>
    </>
  );
};

export default Error404;
