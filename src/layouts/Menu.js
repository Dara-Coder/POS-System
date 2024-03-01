import MenuItem from "./MenuItem";
import Dashboard from '../images/icons/dashboard.svg';
import Product from '../images/icons/products.svg';
import CreateProduct from '../images/icons/create_product.svg';

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
            <MenuItem
                path="/dashboard"
                icon={Dashboard}
                title="Dashboard"
                setActive={setActive}>
            </MenuItem>
            <MenuItem
                icon={Product}
                title="Product">
                <ul
                    className="p-0 m-0 list-unstyled">
                    <MenuItem
                        class="ps-3"
                        path="/create-product"
                        icon={CreateProduct}
                        title="Create Product"
                        setActive={setActive}>
                    </MenuItem>
                </ul>
            </MenuItem>
        </ul>
    );
}

export default Menu;