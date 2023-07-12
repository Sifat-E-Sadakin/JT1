import React from 'react';
import { Outlet } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <h1 className='text-blue-600'>home</h1>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Homepage;