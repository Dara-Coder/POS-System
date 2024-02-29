import { Link } from "react-router-dom";

const Menu = () => {
    let previousElement = null;
    const setActive = (e) => {
        const li = e.target.closest('li');
        if(previousElement)
        {
            previousElement.classList.remove('bg-primary');
            previousElement.firstElementChild.classList.replace('text-white','text-dark');
        }
        li.classList.add('bg-primary');
        li.firstElementChild.classList.replace('text-dark','text-white');
        previousElement = li;
    }

    return(
        <ul
            className="m-0 p-0 list-unstyled">
            {
                [
                    'Dashboard',
                    'Shop'
                ].map((nm, index) => (
                    <li
                        key={index}
                        onClick={setActive}
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