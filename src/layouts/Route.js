import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import Shop from '../components/Shop';

const AppRender = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRender;