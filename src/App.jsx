import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Logout from './components/Logout';
import DashBoard from './pages/DashBoard';
import SignUp from './pages/SignUp';
import SinglePost from './pages/SinglePost';

import Home from './pages/Home';
import { authContext } from './context/AuthContext';

function App() {
  console.log("aap component");
  
const {loading}=useContext(authContext)

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/createpost' element={<DashBoard />} />
          <Route path='/singlepost/:id' element={<SinglePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
