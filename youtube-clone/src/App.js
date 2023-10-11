import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import React from 'react';

function App() {
  return (
    <div className="App">  
    <Router>
      <Routes>
        <Route path='/search/:searchTerm' element={<SearchPage />}/>

        <Route path='/' element={ <HomePage/> } />
      </Routes> 
    </Router>
    </div>
  );
}

export default App;
