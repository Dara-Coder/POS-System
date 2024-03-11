import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList()
{
    const navigate = useNavigate();
    const handleRoute = (route) => navigate(route);

    return(
        <Fragment>
            <div
                className="d-flex justify-content-between gap-2 bg-white p-3 rounded-3 border overflow-y-hidden overflow-x-auto animate__animated animate__fadeInRight">
                <div
                    className="input-group input-group-sm flex-nowrap width-search-input">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="search by name of product"/>
                    <span
                        className="input-group-text" role="button">
                        <i
                            className="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
                <button
                    onClick={() => handleRoute('/create-product')}
                    type="button"
                    className="btn btn-sm btn-primary">
                    <span
                        className="text-nowrap">Create Product</span>
                </button>
            </div>
            <div
                className="bg-white rounded-3 p-3 border mt-3 animate__animated animate__fadeInRight"></div>
        </Fragment>
    );
}

export default ProductList;