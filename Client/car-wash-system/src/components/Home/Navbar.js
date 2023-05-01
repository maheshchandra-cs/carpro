import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo-carpro.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        console.log("");
      });
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
      <a href="/">
        <img
          className="nav__logo"
          src={Logo}
          alt="CarPro Logo"
        />
      </a>
      <div
        className={`nav__container nav__borderXwidth ${
          show && "nav__containerscroll nav__borderXwidthscroll"
        }`}
      >
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/whyus"
        >
          WHY US?
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/working"
        >
          HOW IT WORKS
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/contact"
        >
          CONTACT US
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/login"
        >
          LOGIN
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
