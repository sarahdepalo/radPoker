import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./customerIndex.scss";

const CustomerIndex = () => {
  const [customerInfo, setCustomerInfo] = useState(null);
  const [accountInfo, setAccountInfo] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    const getData = async () => {
      const localUrl = `http://localhost:3000/customers/${state}`;
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      console.log(response);
      setCustomerInfo(response.customer);
      setAccountInfo(response.accounts);
    };
    getData();
  }, [state]);

  const formatDate = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      return (
        date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
      );
    }
  };

  return (
    <>
      <main>
        {customerInfo !== null ? (
          <section>
            <div className="name-container">
              <h1>
                {customerInfo.first_name} {customerInfo.last_name}
              </h1>
              <span
                className={customerInfo.active === 1 ? "active" : "offline"}
              >
                {customerInfo.active === 1 ? "Online" : "Offline"}
              </span>
            </div>
            <table className="customer-details">
              <tr>
                <th>Full Name</th>
                <td>
                  {customerInfo.first_name} {customerInfo.last_name}
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{customerInfo.email}</td>
              </tr>
              <tr>
                <th>Account Created</th>
                <td>{formatDate(customerInfo.created_date)}</td>
              </tr>
              <tr>
                <th>Reason for Joining</th>
                <td>{customerInfo.reason_for_joining}</td>
              </tr>
              <tr>
                <th>Account Manager Id</th>
                <td>{customerInfo.account_manager_id}</td>
              </tr>
            </table>
          </section>
        ) : (
          <p>Loading details...</p>
        )}
        {accountInfo !== null ? (
          <section className="accounts">
            <h2>Accounts</h2>
            {accountInfo.length === 0 ? (
              <p>No accounts associated with this user at this time.</p>
            ) : (
              <>
                {accountInfo.map((account) => (
                  <table key={`${account.address}-${account.id}`}>
                    <thead>
                      <tr>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Rating</th>
                        <th>Created Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{account.address}</td>
                        <td>{account.city}</td>
                        <td>{account.state}</td>
                        <td>{account.zip_code}</td>
                        <td>
                          {!!account.rating
                            ? `${account.rating}`
                            : "No ranking"}
                        </td>
                        <td>{formatDate(account.created_date)}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </>
            )}
          </section>
        ) : (
          <p>Loading accounts...</p>
        )}
      </main>
    </>
  );
};

export default CustomerIndex;
