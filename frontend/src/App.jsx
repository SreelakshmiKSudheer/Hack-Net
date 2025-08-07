import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './layout/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    </Router>
  );
}

export default App
