import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home/HomePage.js";
import TopMenu from "./Common/Header.js";
import AboutUs from "./About/About.js";
import PageNotFound from "./PageNotFound.js";
import SignUp from "./Users/Index.js";

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <TopMenu />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
