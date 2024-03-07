import React from "react";
import { useLocation } from "react-router-dom";
import ManageLanguage from "./ManageLanguage";
import ManageUser from "./ManageUser";
import ManageNotifications from "./ManageNotification";
import ManageSidebar from "./ManageSidebar";

function Navbar(props)
{
  const location = useLocation();
  const title = location.pathname.replace(/\//g,'').replace(/\-/g,' ');

  return(
    <div
      className="height-container-navbar d-flex justify-content-between align-items-center gap-3 px-3">
      <ManageSidebar
        {...props}/>
      <div
        className="d-flex align-items-center p-2 bg-secondary bg-opacity-25 rounded-5 shadow-sm flex-grow-1">
        <h5
          className="p-0 m-0 text-uppercase text-nowrap">
          {props.title || title || 'Dashboard'}
        </h5>
      </div>
      <div
        className="d-md-flex d-none align-items-center gap-2">
        <ManageLanguage/>
        <ManageNotifications/>
        <ManageUser/>
      </div>
    </div>
  );
}

export default Navbar;