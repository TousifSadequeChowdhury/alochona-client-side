import React from 'react';
import { Route, Router, Routes } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../pages/HomePage';
import MembershipPage from '../pages/MembershipPage';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import AddPost from '../pages/AddPost';
import MyPosts from '../pages/MyPosts';

const AppRoutes = () => {
    return (
     
        <Routes>
                <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/membership' element={<MembershipPage></MembershipPage>}/>
                <Route path='/login' element={<Login></Login>}/>
                <Route path='/register' element={<Registration></Registration>}/>
                <Route path='/addpost' element={<AddPost></AddPost>}/>
                <Route path='/myposts' element={<MyPosts></MyPosts>}/>

            </Route>
        </Routes>
  
    );
};

export default AppRoutes;