import React, { useEffect, useState } from "react";
import "../../Home/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../../../services/member/auth_service";
import Logo from "../../../assets/images/logo-carpro.png";

function MechanicNav() {
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
    AuthService.logoutMechanic();
  };

  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
      <a href="/mechanic_home">
        <img
          className="nav__logo"
          src={Logo}
          alt="CarPro"
        />
      </a>
      <div
        className={`nav__container nav__borderXwidth ${
          show && "nav__containerscroll nav__borderXwidthscroll"
        }`}
      >
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/mechanic_home"
        >
          STORE
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

export default MechanicNav;
