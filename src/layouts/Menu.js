import MenuItem from "./MenuItem";
import {
    Dashboard,
    Product,
    CreateProduct,
    ProductList,
    Category,
    Sales,
    Purchases,
    Returns,
    CustomerList
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
                <MenuItem
                    path="/category"
                    icon={Category}
                    title="Category"
                    Title="Category"
                    setTitle={props.title}>
                </MenuItem>
                <MenuItem
                    icon={Sales}
                    title="Sales"
                    hidden={props.hidden}>
                    <ul
                        className="p-0 m-0 list-unstyled"></ul>
                </MenuItem>
                <MenuItem
                    path="/purchases"
                    icon={Purchases}
                    title="Purchases"
                    Title="Purchases"
                    setTitle={props.title}>
                </MenuItem>
                <MenuItem
                    path="/returns"
                    icon={Returns}
                    title="Returns"
                    Title="Returns"
                    setTitle={props.title}>
                </MenuItem>
                <MenuItem
                    path="/customer-list"
                    icon={CustomerList}
                    title="Customer List"
                    Title="Customer List"
                    setTitle={props.title}>
                </MenuItem>
            </ul>
        </div>
    );
}

export default Menu;