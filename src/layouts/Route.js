import React from "react";
import { Route, Routes } from "react-router-dom";
import {
    Dashboard,
    CreateProduct,
    ProductList,
    Category
} from "./Pages";

function AppRender()
{
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>} />    
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/create-product" element={<CreateProduct/>} />
            <Route path="/product-list" element={<ProductList/>}></Route>
            <Route path="/category" element={<Category/>}></Route>
        </Routes>
    );
}

export default AppRender;