import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomerView from "./components/CustomerView";
import ContestList from "./components/ContestList";
import CustomerIndex from "./components/CustomerIndex";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CustomerView />} />
          <Route exact path="/contests" element={<ContestList />} />
          <Route path="/customer-details" element={<CustomerIndex />} />
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
