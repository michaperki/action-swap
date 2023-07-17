import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/Signup';
import LoginPage from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
