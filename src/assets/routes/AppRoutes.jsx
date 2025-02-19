import React from 'react';
import { Route, Router, Routes } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../pages/HomePage';
import MembershipPage from '../pages/MembershipPage';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import AddPost from '../pages/AddPost';
import MyPosts from '../pages/MyPosts';
import PostDetails from '../components/PostDetails';
import PrivateRoutes from './PrivateRoutes';
import Error from '../pages/Error';

const AppRoutes = () => {
    return (
     
        <Routes>
                <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/membership' element={<MembershipPage></MembershipPage>}/>
                <Route path='/login' element={<Login></Login>}/>
                <Route path='/register' element={<Registration></Registration>}/>
                <Route path='/addpost' element={<PrivateRoutes><AddPost/></PrivateRoutes>}/>
                <Route path='/myposts' element={<PrivateRoutes><MyPosts/></PrivateRoutes>}/>
                <Route path='/post/:postId' element={<PrivateRoutes> <PostDetails/></PrivateRoutes>}/>
                <Route path='*' element={<Error></Error>}/>
            </Route>
        </Routes>
  
    );
};

export default AppRoutes;