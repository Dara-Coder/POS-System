import React, { useEffect, useRef, useState } from 'react';
import { User } from './Images';

function ManageUser()
{
    const userRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const userElement = userRef.current;
        document.addEventListener('mouseup',function(e)
        {
            if(userElement && !userElement.contains(e.target))
            {
                setShow(false);
            }
        });
    });

    return(
        <div
            ref={userRef}
            onClick={() => setShow(!show)}
            className="rounded-5 bg-secondary bg-opacity-25 shadow-sm px-2 py-1 text-nowrap position-relative"
            role="button">
            <img
                className="rounded-circle"
                src={User}
                alt="user-image"
                height={30}
                width={30}/>
            <span
                className="ps-2 fw-semibold">
                Admin
            </span>
            {show ? <div
                className="position-absolute z-3 top-100 end-0 shadow bg-white rounded-3 border overflow-hidden animate__animated animate__jackInTheBox">
                <div
                    className="p-2 d-flex justify-content-center flex-column gap-2">
                    <div
                        className="d-flex justify-content-center rounded-circle overflow-hidden">
                        <img
                            className="object-fit-scale"
                            src={User}
                            alt="user-image"
                            height={50}
                            width={50}/>
                    </div>
                    <div
                        className="d-flex justify-content-center align-items-center flex-column">
                        <b
                            className="text-capitalize p-0 m-0 fw-semibold">Admin</b>
                        <p
                            className="p-0 m-0">admin.info@gmail.com</p>
                    </div>
                </div>
                <ul
                    className="p-0 m-0 list-unstyled border-top">
                    <li
                        className="on-active px-3 py-2 d-flex align-items-center">
                        <i
                            className="fa-solid fa-gear fa-lg"></i>
                        <p
                            className="ms-2 p-0 m-0 text-capitalize fw-semibold">About System</p>
                    </li>
                    <li
                        className="on-active px-3 py-2 d-flex align-items-center border-top">
                        <i
                            className="fa-solid fa-right-from-bracket fa-lg"></i>
                        <p
                            className="ms-2 p-0 m-0 text-capitalize fw-semibold">Logout</p>
                    </li>
                </ul>
            </div> : ''}
        </div>
    );
}

export default ManageUser;