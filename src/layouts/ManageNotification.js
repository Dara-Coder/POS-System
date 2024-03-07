import { useEffect, useRef, useState } from "react";

function ManageNotifications()
{
    const notificationRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const notificationElement = notificationRef.current;
        document.onmouseup = function(e)
        {
            if(notificationElement &&!notificationElement.contains(e.target))
            {
                setShow(false);
            }
        }
    });

    return(
        <div
            ref={notificationRef}
            onClick={() => setShow(!show)}
            className="rounded-circle bg-secondary bg-opacity-25 py-1 px-2 shadow-sm position-relative"
            role="button">
            <i
                className="fa-regular fa-bell fa-lg text-danger"></i>
            {show ? <div
                className="border rounded-3 bg-white shadow position-absolute z-3 top-100 start-50 translate-middle-x overflow-hidden animate__animated animate__jackInTheBox">
                <div
                    className="px-3 py-1 bg-warning bg-opacity-50">
                    <b
                        className="p-0 m-0 text-capitalize text-light-emphasis">Notifications</b>
                </div>
                <div
                    className="p-3"></div>
            </div> : ''}
        </div>
    );
}

export default ManageNotifications;