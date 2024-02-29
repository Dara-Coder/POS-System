import { useLocation } from "react-router-dom";
import english from '../images/icons/english.jpg';
import user from '../images/user/profile.png';

const Navbar = () => {
  const location = useLocation(),
  title = location.pathname.replace(/\//g,'');

  return(
    <div
      className="height-container-navbar d-flex justify-content-between align-items-center gap-3 px-3">
        <div
          className="d-flex align-items-center p-2 bg-secondary bg-opacity-25 rounded-5 shadow-sm flex-grow-1">
          <h5
            className="p-0 m-0 text-uppercase">
            {title}
          </h5>
        </div>
        <div
          className="d-flex align-items-center gap-2">
          <div
            className="rounded-5 p-1 bg-secondary bg-opacity-25 shadow-sm"
            role="button">
            <img
              className="rounded-circle"
              src={english}
              alt="image-language"
              height={25}
              width={25}/>
            <span
              className="fw-semibold ps-2">
              English
            </span>
          </div>
        <div
          className="rounded-circle bg-secondary bg-opacity-25 py-1 px-2 shadow-sm"
          role="button">
          <i
            className="fa-regular fa-bell fa-lg text-danger">
          </i>
        </div>
        <div
          className="rounded-5 bg-secondary bg-opacity-25 shadow-sm p-1"
          role="button">
          <img
            className="rounded-circle"
            src={user}
            alt="user-image"
            height={30}
            width={30}/>
          <span
            className="ps-2 fw-semibold">
            Admin
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;