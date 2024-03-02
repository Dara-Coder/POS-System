import React from 'react';
import CreatableSelect from 'react-select/creatable';
import validation from '../helper/Validation';

function Shop()
{
    return(
        <div
            className="bg-white p-3 rounded-3 border animate__animated animate__fadeInRight">
            <h5
                className="fw-semibold">Create Product</h5>
            <hr
                className="p-0 m-0 border border-light-subtle"/>
            <form
                action=""
                method="POST"
                encType="multipart/form-data"
                name="create_product"
                className="needs-validation py-3">
                <div
                    className="row gy-3">
                    <div
                        className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                            <div
                                className="row gy-3">
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="code"
                                            className="form-label">Product Code</label>
                                        <input
                                            onChange={validation}
                                            type="text"
                                            className="form-control"
                                            name="code"
                                            pattern="^[a-zA-Z0-9\s\-]+$"
                                            placeholder="enter product code"
                                            required/>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="name"
                                            className="form-label">Product Name</label>
                                        <input
                                            onChange={validation}
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            pattern="^[a-zA-Z0-9\s\-]+$"
                                            placeholder="enter product name"
                                            required/>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="category_id"
                                            className="form-label">Category</label>
                                        <CreatableSelect
                                            isClearable/>
                                        <select
                                            className="d-none"
                                            name="category_id"
                                            required></select>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="brand_id"
                                            className="form-label">Brand</label>
                                        <CreatableSelect
                                            isClearable/>
                                        <select
                                            className="d-none"
                                            name="brand_id"
                                            required></select>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="code_symbol"
                                            className="form-label">Barcode Symbology</label>
                                        <CreatableSelect
                                            isClearable/>
                                        <select
                                            className="d-none"
                                            name="code_symbol"
                                            required></select>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="cost"
                                            className="form-label">Product Cost</label>
                                        <input
                                            onChange={validation}
                                            type="number"
                                            className="form-control"
                                            name="cost"
                                            placeholder="0.00"
                                            min={0}
                                            required/>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="price"
                                            className="form-label">Product Price</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div
                        className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4"></div>
                </div>
            </form>
        </div>
    );
}

export default Shop;