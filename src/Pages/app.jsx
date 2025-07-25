import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import các trang
import Home from "./Home/Home";
import News from "./news";
import Policy from "./Policy";
import Post from "./Post";
import About from "./About";

// Import Navbar
import Navbar from "../components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

