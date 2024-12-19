// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';


// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProfileSetup from './pages/ProfileSetup';
import UserDiscovery from './pages/UserDiscovery';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/user-discovery" element={<UserDiscovery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
