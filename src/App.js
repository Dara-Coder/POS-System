import Menu from './layouts/Menu.js';
import Navbar from './layouts/Navbar.js';
import MainBoard from './layouts/MainBoard.js';
import LogoSidebar from './layouts/LogoSidebar.js';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return(
    <div
      className="d-flex h-100">
      <Router>
        <div
          className="width-lg-sidebar h-100 shadow bg-white">
          <LogoSidebar></LogoSidebar>
          <div
            className="height-container-menu">
            <Menu></Menu>
          </div>
        </div>
        <div
          className="width-sm-container h-100">
          <Navbar></Navbar>
          <MainBoard></MainBoard>
        </div>
      </Router>
    </div>
  );
}

export default App;