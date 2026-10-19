import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './SharedRoute/Navbar';
import Footer from './SharedRoute/Footer';

const Main = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;