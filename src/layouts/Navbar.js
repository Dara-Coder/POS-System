import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ManageLanguage from "./ManageLanguage";
import ManageUser from "./ManageUser";
import ManageNotifications from "./ManageNotification";
import ManageSidebar from "./ManageSidebar";

function Navbar(props)
{
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const title = location.pathname.replace(/\//g,'').replace(/\-/g,' ');

  return(
    <div
      className="height-container-navbar d-flex justify-content-between align-items-center gap-3 px-3 position-relative">
      <ManageSidebar
        {...props}/>
      <div
        className="d-flex align-items-center p-2 bg-secondary bg-opacity-25 rounded-5 shadow-sm flex-grow-1">
        <h5
          className="p-0 m-0 text-uppercase text-nowrap">
          {props.title || title || 'Dashboard'}
        </h5>
      </div>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="bg-transparent border-0 d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
        <i
          className="fa-solid fa-sliders fa-lg"></i>
      </button>
      <div
        className={`${open ? 'd-flex d-sm-flex position-absolute flex-column bg-white rounded-3 border shadow z-3 menu-container p-2 animate__animated animate__jackInTheBox' : 'd-none d-sm-none'} d-md-flex d-lg-flex d-xl-flex d-xxl-flex align-items-center gap-2`}>
        <ManageLanguage/>
        <ManageNotifications/>
        <ManageUser/>
      </div>
    </div>
  );
}

export default Navbar;