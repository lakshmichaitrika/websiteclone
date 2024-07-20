
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './routes/Header/index';
import Home from './routes/Home/index';

import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
  );
};

export default App;


