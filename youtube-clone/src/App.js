import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import React from 'react';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">  
    <Router>
      <Routes>
        <Route path='/search/:searchTerm' element={<SearchPage />}/>

        <Route path='/' element={ <HomePage/> } />
     
        <Route path='/register' element={ <Register/> } />
      </Routes> 
    </Router>
    </div>
  );
}

export default App;
