// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Mentorship Matching Platform</h1>
      <nav>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/user-discovery">Browse Mentors</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
