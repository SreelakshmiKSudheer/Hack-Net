import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole") || "student"; // mock role logic

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to CampusBook</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Your one-stop platform to book classrooms, seminar halls, and other college venues with ease.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          onClick={() => navigate('/book')}
        >
          Book a Venue
        </button>
        <button
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          onClick={() => navigate('/my-bookings')}
        >
          View My Bookings
        </button>
        {userRole === 'admin' && (
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
            onClick={() => navigate('/admin')}
          >
            Admin Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
