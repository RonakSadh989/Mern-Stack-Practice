// App.js

import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import CreateBlogPage from "./pages/Createblog";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/createblog" element={<CreateBlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
