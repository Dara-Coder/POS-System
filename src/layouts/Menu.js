import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Menu = () => {
    const location = useLocation(),
    pathname = location.pathname.replace(/\//g,'');

    let previousElement = null;
    const setActive = (e) => {
        const li = e.target.closest('li'),
        length = li.children.length;

        if(length === 1)
        {
            if(previousElement)
            {
                previousElement.classList.remove('bg-primary');
                previousElement.firstElementChild.classList.replace('text-white','text-dark');
            }
            li.classList.add('bg-primary');
            li.firstElementChild.classList.replace('text-dark','text-white');
            previousElement = li;
        }
    }

    return(
        <ul
            className="m-0 p-0 list-unstyled">
            {
                [
                    {
                        title: 'Dashboard',
                        icon: <i className="fa-solid fa-chart-line fa-lg"></i>
                    },
                    {
                        title: 'Product',
                        icon: <i className="fa-solid fa-shop fa-lg"></i>,
                        sub_child: <ul className="list-group">
                            <li className="list-group-item border-0 rounded-0"></li>
                            <li className="list-group-item border-0 rounded-0"></li>
                            <li className="list-group-item border-0 rounded-0"></li>
                        </ul>
                    }
                ].map((nm, index) => (
                    <li
                        key={index}
                        onClick={setActive}
                        className={`w-100 ps-2 ${pathname === nm.title.toLowerCase() ? 'bg-primary' : ''}`}>
                        <Link
                            className={`${pathname === nm.title.toLowerCase() ? 'd-flex text-white' : 'd-inline-block text-dark'} w-100 py-2 text-decoration-none align-menu`}
                            to={`/${nm.title.toLowerCase()}`}>
                            <span
                                className="me-3">
                                {nm.icon}
                            </span>
                            <span
                                className="text-menu">
                                {nm.title || ''}
                            </span>
                        </Link>
                        {nm.sub_child || ''}
                    </li>
                ))
            }
        </ul>
    );
}

export default Menu;