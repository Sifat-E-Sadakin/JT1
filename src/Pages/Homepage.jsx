import React from 'react';
import { Outlet } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <h1 className='text-blue-600 text-3xl font-semibold my-2 text-center'>ShunyEka Systems Private Limited</h1>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Homepage;