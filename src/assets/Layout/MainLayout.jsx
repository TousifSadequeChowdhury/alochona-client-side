import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen"> {/* Optional class for layout styling */}
        <Outlet /> {/* Renders child routes */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
