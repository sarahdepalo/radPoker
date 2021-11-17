import { useEffect, useState } from "react";
import "./contestList.scss";

const ContestList = () => {
  const [contests, setContests] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const url = `https://radpoker.herokuapp.com/contests`;
      const response = await fetch(url).then((response) =>
        response.json()
      );
      console.log(response);
      setContests(response);
    };
    getData();
  }, []);

  return (
    <>
      <main>
        <h1>Contests</h1>
        {contests !== null ? (
          <section>
              <table className="contests">
                  <thead>
                      <tr>
                          <th>Contest Name</th>
                          <th>Number of Players</th>
                      </tr>
                  </thead>
                  <tbody>
                  {contests.map((contest) => (
                  <tr key={`${contest.id}-${contest.name}`}>
                      <td data-label="Contest Name">{contest.name}</td>
                      <td data-label="Number of Players">{contest.contestInfo.length}</td>
                  </tr>
              ))}
                  </tbody>
              
              </table>
          </section>
        ) : (
          <p>Loading contest information...</p>
        )}
      </main>
    </>
  );
};

export default ContestList;
