import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomerView from "./components/CustomerView";
import ContestList from "./components/ContestList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CustomerView />} />
          <Route exact path="/contests" element={<ContestList />} />
          {/* Add in a 404 route later */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
