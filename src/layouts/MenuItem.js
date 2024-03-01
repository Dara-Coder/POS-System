import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
    const location = useLocation();
    const [expandable, setExpandable] = useState(false);
    const isActive = location.pathname === props.path;

    return(
        props.children ? 
        <Fragment>
            <li
                className="ps-2 pe-3 w-100 d-flex align-items-center">
                <button
                    onClick={() => setExpandable(!expandable)}
                    className="align-menu border-0 bg-transparent w-100 py-2">
                    <span
                        className="me-3">
                        <img className="width-height-icon" src={props.icon} alt={props.title || ''}/>
                    </span>
                    <span
                        className="text-menu">
                        {props.title || ''}
                    </span>
                </button>
                <div
                    className={expandable ? 'fa-rotate-90' : ''}>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </li>
            <li
                className={expandable ? 'animate__animated animate__slideInLeft d-block' : 'd-none'}>{props.children || ''}
            </li>
        </Fragment> : 
        <Fragment>
            <li
                onClick={props.setActive}
                className={`w-100 ps-2 ${isActive ? 'bg-primary' : ''}`}>
                <Link
                    className={`${props.class || ''} d-flex align-items-center w-100 py-2 text-decoration-none align-menu ${isActive ? 'text-white' : 'text-dark'}`}
                    to={props.path || ''}>
                    <span
                        className="me-3">
                        <img className="filter-icon width-height-icon object-fit-scale" src={props.icon} alt={props.title || ''}/>
                    </span>
                    <span
                        className="text-menu">
                        {props.title || ''}
                    </span>
                </Link>
            </li>
        </Fragment>
    );
}

export default MenuItem;