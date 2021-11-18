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
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getData = async () => {
      const url = "https://radpoker.herokuapp.com/customers";
      const response = await fetch(url).then((response) =>
        response.json()
      );
      console.log(response);
      setCustomerList(response.customers);
    };
    getData();
  }, []);

  const navigate = useNavigate();

  const handleClick = (customerId) => {
    navigate("customer-details", { state: customerId });
  };

  const formatDate = (inputDate) => {
    let date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      return (
        date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
      );
    }
  };

  const search = (event) => {
    setSearchInput(event.target.value);
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
                value={searchInput}
                onChange={(event) => search(event)}
              />
            </form>
          </div>
          <section>
            <table className="customer-list">
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
                {customerList
                // eslint-disable-next-line
                  .filter((val) => {
                    if (searchInput === "") {
                      return val;
                    } else if (
                      val.first_name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())){
                        return val
                    }
                  })
                  .map((customer) => (
                    <tr
                      onClick={() => handleClick(customer.id)}
                      key={customer.email}
                    >
                      <td>
                        {customer.first_name} {customer.last_name}
                      </td>
                      <td>{customer.email}</td>
                      <td>{formatDate(customer.created_date)}</td>
                      <td>
                        <span
                          className={
                            customer.active === 1 ? "active" : "offline"
                          }
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
