
import './App.css'
import React, { useEffect, useState } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CandidateEnquiryForm from './Components/CandidateEnquiryForm';
import { Login } from './Components/Dashboard/Login';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { use } from 'react';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
 useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);


 

  return (
    <>
    
 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CandidateEnquiryForm />} />
    
      <Route path="/Admin" element={isLoggedIn ? <Navigate to='/Dashboard/' /> :<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/Dashboard/*" element={isLoggedIn ? <Dashboard /> :<Navigate to='/Admin'/>} />


    </Routes>
  </BrowserRouter>
  {/* <Dashboard/> */}

    </>
  )
}

export default App
