import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { chooseFile } from '../layouts/Images';

let parent = null;

function ImagesHelper(options)
{
    parent = parent || ReactDOM.createRoot(options.target.closest('div[role=\'button\']'));
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = options || 'image/*';

    const setChooser = (options) => {
        const chooser = <Fragment>
            <div
                onClick={(e) => ImagesHelper({
                    target: e.target,
                    fun: options.fun
                })}
                className="d-flex align-items-center justify-content-center w-100 h-100">
                <img
                    className="object-fit-scale choose-image"
                    src={chooseFile}
                    alt="choose-file"/>
            </div>
        </Fragment>;
        parent.render(chooser);
    }

    input.onchange = function(e)
    {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e)
        {
            const dataURL = e.target.result;
            const image = <Fragment>
                <img
                    className="object-fit-scale w-100 h-100"
                    src={dataURL || ''}
                    alt={file.name || ''}/>
                <div
                    className="position-absolute top-0 end-0 p-1 bg-dark">
                    <button
                        onClick={() => setChooser({
                            parent: parent,
                            fun: options.fun
                        })}
                        type="button"
                        className="bg-transparent border-0 btn-delete-image">
                        <i
                            className="fa-regular fa-trash-can fa-lg text-danger"></i>
                    </button>
                </div>
            </Fragment>
            parent.render(image);
        }
        reader.readAsDataURL(file);
    }
    input.click();
}

export default ImagesHelper;