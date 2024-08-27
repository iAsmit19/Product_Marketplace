import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { mainContainer } from "./stylesheets/app.module.css";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className={mainContainer}>
      {/* <Router> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
};

export default App;
