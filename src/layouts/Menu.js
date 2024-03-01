import MenuItem from "./MenuItem";

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
                icon={<i className="fa-solid fa-chart-line fa-lg"></i>}
                title="Dashboard"
                setActive={setActive}>
            </MenuItem>
            <MenuItem
                icon={<i className="fa-solid fa-shop fa-lg"></i>}
                title="Product">
                <ul
                    className="p-0 m-0 list-unstyled">
                    <MenuItem
                        class="ps-3"
                        path="/create-product"
                        icon={<i className="fa-solid fa-chart-line fa-lg"></i>}
                        title="Create Product"
                        setActive={setActive}>
                    </MenuItem>
                </ul>
            </MenuItem>
        </ul>
    );
}

export default Menu;