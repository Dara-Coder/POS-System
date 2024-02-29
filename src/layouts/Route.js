import { Route, Routes } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import Shop from '../components/Shop';

const AppRender = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard />} />    
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Shop" element={<Shop />} />
        </Routes>
    );
}

export default AppRender;