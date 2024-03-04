import React from "react";
import { Route, Routes } from "react-router-dom";
import {
    Dashboard,
    CreateProduct,
    ProductList
} from "./Pages";

function AppRender()
{
    return(
        <Routes>
            <Route path="/" element={<Dashboard />} />    
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/product-list" element={<ProductList />}></Route>
        </Routes>
    );
}

export default AppRender;