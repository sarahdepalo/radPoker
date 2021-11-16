import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log("Location,", location);
  const currentRoute = window.location.pathname;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={currentRoute === "/" ? "active-tab" : null}>
            Customers
          </Link>
        </li>
        <li>
          <Link
            to="/contests"
            className={currentRoute === "/contests" ? "active-tab" : null}
          >
            Contests
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
