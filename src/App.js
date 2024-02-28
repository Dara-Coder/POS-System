import Menu from './components/Menu.js';
import './App.css';

const App = () => {
  return(
    <div className="d-flex h-100">
      <div className="width-lg-sidebar h-100 shadow-sm">
        <div className="height-container-logo d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center w-75 h-100"></div>
          <div className="d-flex align-items-center justify-content-center w-25 h-100">
            <i className="fa-solid fa-angles-left fa-lg" role="button"></i>
          </div>
        </div>
        <div className="height-container-menu">
          <Menu/>
        </div>
      </div>
      <div className="width-sm-container h-100">
        <div className="height-container-navbar shadow-sm"></div>
        <div className="height-container-board"></div>
      </div>
    </div>
  );
}

export default App;