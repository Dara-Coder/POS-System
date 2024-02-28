import Accordion from 'react-bootstrap/Accordion';

const Menu = (props) => {
    return(
        <ul className="m-0 p-0 list-unstyled">
            <li className="w-100 ps-2">
                <a className="d-inline-block w-100 text-dark py-2 text-decoration-none" href="/">
                    <span className="me-3">
                        <i className="fa-solid fa-chart-line fa-lg"></i>
                    </span>
                    <span>Dashboard</span>
                </a>
            </li>
        </ul>
    );
}

export default Menu;