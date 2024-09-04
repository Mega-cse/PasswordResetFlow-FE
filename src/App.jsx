// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import './App.css'
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword/>} />
    <Route path='/dashboard' element={<Dashboard/>}/>
    
         </Routes>
    </Router>
  );
};

export default App;
