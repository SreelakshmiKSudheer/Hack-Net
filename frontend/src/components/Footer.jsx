import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        
        {/* Left - Logo & Name */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="App" className="h-6 w-6 object-contain" />
          <span className="font-semibold text-base">CampusBook</span>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex gap-4 text-gray-500 text-sm">
          <a href="/" className="hover:text-black transition">Home</a>
          <a href="/book" className="hover:text-black transition">Book a Venue</a>
          <a href="/bookings" className="hover:text-black transition">My Bookings</a>
          <a href="/admin" className="hover:text-black transition">Admin</a>
        </div>

        {/* Right - Contact & Info */}
        <div className="text-center md:text-right text-gray-500 text-sm">
          <p>&copy; 2025 CampusBook. All rights reserved.</p>
          <p>
            Made with ❤️ by students of RIT College <br />
            <a href="mailto:support@campusbook.com" className="hover:underline text-blue-500">
              support@campusbook.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
