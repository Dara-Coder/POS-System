import Menu from './layouts/Menu.js';
import Navbar from './layouts/Navbar.js';
import MainBoard from './layouts/MainBoard.js';
import LogoSidebar from './layouts/LogoSidebar.js';
import './App.css';

const App = () => {
  return(
    <div
      className="d-flex h-100">
      <div
        className="width-lg-sidebar h-100 shadow">
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
    </div>
  );
}

export default App;