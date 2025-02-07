import { useState } from 'react';
import './App.css';
import MovieCard from './components/moviecard';
import Home from './pages/home';
import Favorite from './pages/favorites';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
