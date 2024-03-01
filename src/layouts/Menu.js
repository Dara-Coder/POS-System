import MenuItem from "./MenuItem";
import Dashboard from '../images/icons/dashboard.svg';
import Product from '../images/icons/products.svg';
import CreateProduct from '../images/icons/create_product.svg';

function Menu(props)
{
    return(
        <div
            className="height-container-menu">
            <ul
                className="m-0 p-0 list-unstyled">
                <MenuItem
                    path="/dashboard"
                    icon={Dashboard}
                    title="Dashboard">
                </MenuItem>
                <MenuItem
                    icon={Product}
                    title="Product"
                    hidden={props.hidden}>
                    <ul
                        className="p-0 m-0 list-unstyled">
                        <MenuItem
                            class="ps-3"
                            path="/create-product"
                            icon={CreateProduct}
                            title="Create Product">
                        </MenuItem>
                    </ul>
                </MenuItem>
            </ul>
        </div>
    );
}

export default Menu;