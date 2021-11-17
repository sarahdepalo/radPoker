import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./customerView.scss";

const CustomerView = () => {
  const [customerList, setCustomerList] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const localUrl = "http://localhost:3000/customers";
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      console.log(response);
      setCustomerList(response.customers);
    };
    getData();
  }, []);

  const navigate = useNavigate();

  const handleClick = (customerId) => {
    navigate("customer-details", { state : customerId });
  };

  const formatDate = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    }
  };

  return (
    <>
      {customerList !== null ? (
        <main>
          <h1>Customers</h1>
          <p>{customerList.length} users</p>
          <div>
            <form>
              <FontAwesomeIcon
                icon={faSearch}
                size="sm"
                className="search-icon"
              />
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
                {customerList.map((customer) => (
                  <tr onClick={() => handleClick(customer.id)} key={customer.email}>
                    <td>
                      {customer.first_name} {customer.last_name}
                    </td>
                    <td>{customer.email}</td>
                    <td>{formatDate(customer.created_date)}</td>
                    <td>
                      <span
                        className={customer.active === 1 ? "active" : "offline"}
                      >
                        {customer.active === 1 ? "Online" : "Offline"}
                      </span>
                    </td>
                    <td className="arrow">
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      ) : (
        <p>Loading Customers...</p>
      )}
    </>
  );
};

export default CustomerView;
