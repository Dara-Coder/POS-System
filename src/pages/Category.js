import React, { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import DataTable from "react-data-table-component";
import Modal from '../helper/Modal';

const columns = [
    {
        name: 'Photo'
    },
    {
        name: 'Code'
    },
    {
        name: 'Name'
    },
    {
        name: 'Description'
    },
    {
        name: 'Action'
    }
];

const data = [
    {
        id: 1,
        code: 'CT-0001',
        name: 'Category 1',
        description: 'Category 1 Description'
    }
];

const customStyles = {
    headCells: {
        style: {
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#0d6efd'
        }
    }
};

function Category()
{
    const [show, setShow] = useState(false);

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
                className="table-responsive p-3 rounded-3 border mt-3 bg-white animate__animated animate__fadeInRight">
                <DataTable
                    pagination
                    columns={columns}
                    data={data}
                    customStyles={customStyles}/>
            </div>
            {show && createPortal(<Modal
            title="New Category"
            setShow={setShow}/>,document.body)}
        </Fragment>
    );
}

export default Category;