import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import CreateProduct from '../pages/CreateProduct';

function AppRender()
{
    return(
        <Routes>
            <Route path="/" element={<Dashboard />} />    
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
    );
}

export default AppRender;