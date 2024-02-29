import { Link, Router } from "react-router-dom";

const Menu = () => {
    return(
        <Router>
            <ul
                className="m-0 p-0 list-unstyled">
                <li
                    className="w-100 ps-2">
                    <Link
                        className="d-inline-block w-100 text-dark py-2 text-decoration-none align-menu"
                        to="/Dashboard">
                        <span
                            className="me-3">
                            <i
                                className="fa-solid fa-chart-line fa-lg"></i>
                        </span>
                        <span className="text-menu">Dashboard</span>
                    </Link>
                </li>
                <li
                    className="w-100 ps-2">
                    <Link
                        className="d-inline-block w-100 text-dark py-2 text-decoration-none align-menu"
                        to="/Shop">
                        <span
                            className="me-3">
                            <i
                                className="fa-solid fa-chart-line fa-lg"></i>
                        </span>
                        <span className="text-menu">Shop</span>
                    </Link>
                </li>
            </ul>
        </Router>
    );
}

export default Menu;