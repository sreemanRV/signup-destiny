import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './signup';

function App() {
  return (

    <div>
  <Router>
      <Routes>
        <Route path='/' element={<Signup />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;