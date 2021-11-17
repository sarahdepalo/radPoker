import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomerView from "./components/CustomerView";
import ContestList from "./components/ContestList";
import CustomerIndex from "./components/CustomerIndex"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CustomerView />} />
          <Route exact path="/contests" element={<ContestList />} />
          <Route path="/customer-details" element={<CustomerIndex/>}/>
          {/* Add in a 404 route later */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
