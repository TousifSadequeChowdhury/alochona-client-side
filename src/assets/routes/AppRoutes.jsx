import React from 'react';
import { Route, Router, Routes } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../pages/HomePage';
import MembershipPage from '../pages/MembershipPage';

const AppRoutes = () => {
    return (
     
        <Routes>
                <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/membership' element={<MembershipPage></MembershipPage>}/>
            </Route>
        </Routes>
  
    );
};

export default AppRoutes;