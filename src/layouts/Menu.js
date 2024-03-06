import MenuItem from "./MenuItem";
import {
    Dashboard,
    Product,
    CreateProduct,
    ProductList
} from "./Images";

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
                    title="Dashboard"
                    Title="Dashboard"
                    setTitle={props.title}>
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
                            title="Create Product"
                            Title="Create Product"
                            setTitle={props.title}>
                        </MenuItem>
                        <MenuItem
                            class="ps-3"
                            path="/product-list"
                            icon={ProductList}
                            title="Product List"
                            Title="Product List"
                            setTitle={props.title}>
                        </MenuItem>
                    </ul>
                </MenuItem>
            </ul>
        </div>
    );
}

export default Menu;