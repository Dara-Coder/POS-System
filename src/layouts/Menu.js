import { Link } from "react-router-dom";

const Menu = () => {
    const menuList = [
        'Dashboard',
        'Shop'
    ];

    return(
        <ul
            className="m-0 p-0 list-unstyled">
            {
                menuList.map((nm, index) => (
                    <li
                        key={index}
                        className="w-100 ps-2">
                        <Link
                            className="d-inline-block w-100 text-dark py-2 text-decoration-none align-menu"
                            to={`/${nm.toLowerCase()}`}>
                            <span
                                className="me-3">
                                <i
                                    className="fa-solid fa-chart-line fa-lg">
                                </i>
                            </span>
                            <span
                                className="text-menu">
                                {nm}
                            </span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default Menu;