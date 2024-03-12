import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import ImagesHelper from '../helper/ImageHelper';
import { chooseFile } from '../layouts/Images';

function Category()
{
    const [show, setShow] = useState(false);

    const getDataForm = (e) => {
        e.preventDefault();
    }

    return(
        <Fragment>
            <div
                className="d-flex justify-content-between gap-2 p-3 bg-white rounded-3 border overflow-y-hidden overflow-x-auto animate__animated animate__fadeInRight">
                <button
                    onClick={() => setShow(true)}
                    type="button"
                    className="btn btn-sm btn-primary">
                    <span
                        className="text-nowrap">Add New</span>
                </button>
                <div
                    className="input-group flex-nowrap input-sm-group width-search-input">
                    <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder="search by name of category"/>
                    <span
                        className="input-group-text"
                        role="button">
                        <i
                            className="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>
            <div
                className="table-responsive p-3 rounded-3 border mt-3 bg-white animate__animated animate__fadeInRight"></div>
            {show && createPortal(<Fragment>
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
                                    className="modal-title">New Category</h5>
                                <button
                                    onClick={() => setShow(false)}
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
                                    onClick={() => setShow(false)}
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
            </Fragment>,document.body)}
        </Fragment>
    );
}

export default Category;