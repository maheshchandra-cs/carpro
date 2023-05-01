import React, { useEffect, useState } from "react";
import "../Home/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../../services/customer/authentication/auth_service";
import Logo from "../../assets/images/logo-carpro.png";

function CustNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const logout = () => {
    AuthService.logout();
  };

  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
      <a href="/cust_home">
        <img className="nav__logo" src={Logo} alt="CarPro"/>
      </a>
      <div
        className={`nav__container nav__borderXwidth ${
          show && "nav__containerscroll nav__borderXwidthscroll"
        }`}
      >
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home"
        >
          HOME
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home/contact"
        >
          CONTACT US
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home/mybookings"
        >
          MY BOOKINGS
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home/feedback"
          // "https://docs.google.com/forms/d/e/1FAIpQLSfdLd6FmUUvyn9WObcK3CNOHcgdGrcSyYT6o_r8sXncB1l_fA/viewform"
        >
          FEEDBACK
        </NavLink>
        <NavLink
          onClick={logout}
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/login"
        >
          LOGOUT
        </NavLink>
      </div>
    </nav>
  );
}

export default CustNav;
