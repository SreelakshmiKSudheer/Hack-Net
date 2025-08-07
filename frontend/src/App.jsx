import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './layout/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import BookVenue from './pages/BookVenue';
import MyBookings from './pages/MyBookings';
import AdminDashboard from './pages/AdminDashboard';

// ✅ Import FacultyHome page
import FacultyHome from './pages/FacultyHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookVenue />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/faculty" element={<FacultyHome />} /> {/* ✅ Faculty route */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
