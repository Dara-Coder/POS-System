import React, { Fragment, useState } from "react";
import Helper from "./Helper";
import ImagesHelper from '../helper/ImageHelper';
import { chooseFile } from '../layouts/Images';

function Modal(props)
{
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    const handleChange = (e,name=null) => {
        if(e && e.target)
        {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
            Helper.Validation(e);
        }
    }

    const getDataForm = (e) => {
        e.preventDefault();
    }

    return(
        <Fragment>
            <div
                className="modal fade show animate__animated animate__fadeInTopLeft d-block"
                tabIndex={-1}
                aria-labelledby="category-title"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-hidden="true"
                aria-modal="true"
                role="dialog">
                <div
                    className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <form
                        action=""
                        className="modal-content rounded-3 needs-validation"
                        method="POST"
                        encType="multipart/form-data"
                        name="category"
                        onSubmit={getDataForm}>
                        <div
                            className="modal-header border-bottom-0">
                            <h5
                                className="modal-title">{props.title || ''}</h5>
                            <button
                                onClick={() => props.setShow(false)}
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                data-bs-dismiss="modal"></button>
                        </div>
                        <div
                            className="modal-body">
                            <div
                                className="row gy-3">
                                <div
                                    className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                                    <div
                                        className="container-image-dialog border rounded-3"
                                        role="button">
                                        <div
                                            onClick={(e) => ImagesHelper({
                                                target: e.target,
                                                fun: ImagesHelper
                                            })}
                                            className="d-flex align-items-center justify-content-center w-100 h-100">
                                            <img
                                                className="object-fit-scale choose-image"
                                                src={chooseFile}
                                                alt="choose-file"/>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                                    <div
                                        className="row gy-3">
                                        <div
                                            className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div
                                                className="form-group">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label">Name</label>
                                                <input
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="enter your category name"
                                                    pattern="^[a-zA-Z0-9\s\-]+$"
                                                    title="Accept only character"
                                                    required/>
                                            </div>
                                        </div>
                                        <div
                                            className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div
                                                className="form-group">
                                                <label
                                                    htmlFor="description"
                                                    className="form-label">Description</label>
                                                <textarea
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                    name="description"
                                                    className="form-control"
                                                    placeholder="enter your category description"
                                                    title="Should be enter as character"
                                                    required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="modal-footer border-top-0">
                            <button
                                onClick={() => props.setShow(false)}
                                type="button"
                                className="btn btn-sm btn-secondary"
                                data-bs-dismiss="modal">Cancel</button>
                            <button
                                type="submit"
                                className="btn btn-sm btn-primary">Save</button>
                        </div>
                    </form>
                </div>
                </div>
                <div
                    className="modal-backdrop fade show"></div>
        </Fragment>
    );
}

export default Modal;