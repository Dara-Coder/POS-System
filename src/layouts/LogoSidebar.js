import { useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu.js';
import Navbar from './Navbar.js';
import MainBoard from './MainBoard.js';
import logo from '../images/logo/logo.avif';

function LogoSidebar()
{
    const sidebar = useRef(null);
    const [title, setTitle] = useState(null);
    const [flip, setFlip] = useState(false);

    const handleClick = () => {
        const self = sidebar.current;

        if(self.classList.contains('width-lg-sidebar'))
        {
            setFlip(true);
        }
        else
        {
            setFlip(false);
        }
    }

    return(
        <Router>
            <div
                ref={sidebar}
                className={`${flip ? 'width-sm-sidebar' : 'width-lg-sidebar'} d-none d-lg-block d-xl-block d-xxl-block h-100 shadow bg-white position-md-absolute`}>
                <div
                    className="height-container-logo d-flex align-items-center">
                    <div
                        className={`${flip ? 'd-none' : 'd-flex align-items-center justify-content-center'} w-75 h-100`}>
                        <img
                            className="object-fit-scale"
                            src={logo}
                            alt="logo-company"
                            height={55}
                            width={55}/>
                    </div>
                    <div
                        onClick={handleClick}
                        className={`d-flex align-items-center justify-content-center h-100 ${flip ? 'fa-flip-horizontal w-100' : 'w-25'}`}>
                        <i
                            className="fa-solid fa-angles-left fa-lg"
                            role="button">
                        </i>
                    </div>
                </div>
                <Menu
                    hidden={flip}
                    title={setTitle}/>
            </div>
            <div
                className={`${flip ? 'width-lg-container' : 'width-sm-container'} h-100 w-sm-100 w-md-100`}>
                <Navbar
                    title={title}
                    sidebar={sidebar}/>
                <MainBoard />
            </div>
        </Router>
    );
}

export default LogoSidebar;