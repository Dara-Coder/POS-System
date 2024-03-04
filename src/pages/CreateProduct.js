import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';
import validation from '../helper/Validation';
import chooseFile from '../images/icons/choose_file.svg';

function CreateProduct()
{
    const navigate = useNavigate();
    const handleRoute = (route) => {
        navigate(route);
    }

    const [formData, setFormData] = useState({
        code: '',
        name: '',
        category_id: '',
        brand_id: '',
        code_symbol: '',
        cost: '',
        price: '',
        unit: '',
        qty: '',
        alert_stock: '',
        order_tax: '',
        tax_type: '',
        note: ''
    });

    const handleChange = (e,obj=null) => {
        if(e.target)
        {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
            validation(e);
        }
        else
        {
            setFormData({
                ...formData,
                [obj.name]: obj.option.value
            });
        }
    };

    const getDataForm = (e) => {
        e.preventDefault();
        console.log(formData);
    }

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
                className="needs-validation py-3"
                onSubmit={getDataForm}>
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
                                            onChange={handleChange}
                                            value={formData.code}
                                            type="text"
                                            className="form-control"
                                            name="code"
                                            pattern="^[a-zA-Z0-9\s\-]+$"
                                            placeholder="Auto"
                                            readOnly/>
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
                                            onChange={handleChange}
                                            value={formData.name}
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
                                            value={formData.category_id}
                                            onChange={handleChange}
                                            name="category_id"
                                            placeholder="Select A Category"
                                            isClearable/>
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
                                            value={formData.brand_id}
                                            onChange={handleChange}
                                            name="brand_id"
                                            placeholder="Select A Brand"
                                            isClearable/>
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
                                            value={formData.code_symbol}
                                            onChange={handleChange}
                                            name="code_symbol"
                                            placeholder="Select A Barcode Symbology"
                                            isClearable/>
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
                                            value={formData.cost}
                                            onChange={handleChange}
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
                                        <input
                                            value={formData.price}
                                            onChange={handleChange}
                                            type="number"
                                            className="form-control"
                                            name="price"
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
                                            htmlFor="unit"
                                            className="form-label">Product Unit</label>
                                        <CreatableSelect
                                            value={formData.unit}
                                            onChange={handleChange}
                                            name="unit"
                                            placeholder="Select A Product Unit"
                                            isClearable/>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="qty"
                                            className="form-label">Product Quantity</label>
                                        <input
                                            value={formData.qty}
                                            onChange={handleChange}
                                            type="number"
                                            className="form-control"
                                            name="qty"
                                            placeholder="0"
                                            required/>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="alert_stock"
                                            className="form-label">Stock Alert</label>
                                        <input
                                            value={formData.alert_stock}
                                            onChange={handleChange}
                                            type="number"
                                            className="form-control"
                                            name="alert_stock"
                                            placeholder="0"
                                            required/>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="order_tax"
                                            className="form-label">Order Tax</label>
                                        <div
                                            className="input-group flex-nowrap">
                                            <input
                                                value={formData.order_tax}
                                                onChange={handleChange}
                                                type="number"
                                                className="form-control"
                                                name="order_tax"
                                                placeholder="0"
                                                required/>
                                            <span
                                                className="input-group-text">%</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="tax_type"
                                            className="form-label">Tax Type</label>
                                        <CreatableSelect
                                            value={formData.tax_type}
                                            onChange={handleChange}
                                            name="tax_type"
                                            placeholder="Select A Tax Type"
                                            isClearable/>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div
                                        className="form-group">
                                        <label
                                            htmlFor="note"
                                            className="form-label">Note</label>
                                        <textarea
                                            value={formData.note}
                                            onChange={handleChange}
                                            className="form-control"
                                            name="note"
                                            placeholder="enter your note"
                                            required></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div
                        className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div
                            className="d-flex justify-content-center">
                            <div
                                className="d-flex align-items-center justify-content-center border rounded-3 width-height-product-chooser" role="button">
                                <img
                                    className="object-fit-scale"
                                    src={chooseFile}
                                    alt="choose-file"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex mt-3">
                    <button
                        onClick={() => handleRoute('/product-list')}
                        type="submit"
                        className="btn btn-sm btn-primary">
                        <span
                            className="text-nowrap">Submit Product</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateProduct;