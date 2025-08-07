import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader'; // ✅ Import preloader

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // match duration with Preloader animation

    return () => clearTimeout(timer);
  }, [location.pathname]); // ⬅ triggers on route change

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
