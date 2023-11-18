// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import BlogPage from './BlogPage';
import '../css/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Blog</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/createblog">Create Blog</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <BlogPage />
      </main>

      <footer>
        <p>&copy; 2023 Your Blog App</p>
      </footer>
    </div>
  );
};

export default Home;
