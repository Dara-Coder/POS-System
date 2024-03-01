import { useRef, useState } from 'react';
import logo from '../images/logo/logo.avif';

const LogoSidebar = () => {
    const sidebar = useRef(null);
    const [flip, setFlip] = useState(false);

    const handleClick = (e) => {
        const self = sidebar.current,
        parent = self.parentElement,
        sibling = parent.nextElementSibling;

        if(parent.classList.contains('width-lg-sidebar'))
        {
            parent.classList.replace('width-lg-sidebar','width-sm-sidebar');
            self.firstElementChild.classList.replace('d-flex','d-none');
            self.lastElementChild.classList.replace('w-25','w-100');
            sibling.classList.replace('width-sm-container','width-lg-container');
            setFlip(true);
        }
        else
        {
            parent.classList.replace('width-sm-sidebar','width-lg-sidebar');
            self.firstElementChild.classList.replace('d-none','d-flex');
            self.lastElementChild.classList.replace('w-100','w-25');
            sibling.classList.replace('width-lg-container','width-sm-container');
            setFlip(false);
        }
    }

    return(
        <div
            ref={sidebar}
            className="height-container-logo d-flex align-items-center">
            <div
                className="d-flex align-items-center justify-content-center w-75 h-100">
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
    );
}

export default LogoSidebar;