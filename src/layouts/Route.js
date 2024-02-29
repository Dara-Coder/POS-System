import { Route, Routes } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import Shop from '../components/Shop';

const AppRender = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard />} />    
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
    );
}

export default AppRender;