import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./customerView.scss";

const CustomerView = () => {
  return (
    <>
      <main>
        <h1>Customers</h1>
        <p>40 users</p>
        <div>
          <form>
            <FontAwesomeIcon icon={faSearch} size="s" className="search-icon" />
            <input
              type="text"
              placeholder="Search for user..."
              aria-label="Search bar"
              className="search-bar"
            />
          </form>
        </div>
        <section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Member Since</th>
                <th>Active</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfred Hitchcock</td>
                <td>alfred@emial.com</td>
                <td>January 01, 2020</td>
                <td><span className="active">Online</span></td>
                <td className="arrow">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </td>
              </tr>
              <tr>
                <td>Alfred Two</td>
                <td>Hitchcock@email.com</td>
                <td>January 01, 2020</td>
                <td><span className="active">Online</span></td>
                <td className="arrow">
                  {/* Add a link here for customerindex/customerid */}
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    aria-label="click to view more customer information"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default CustomerView;
