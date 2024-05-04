import React, { memo } from "react";
import "./Navbar.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import logo from "../../../assets/images/footerLogo.svg";

function Navbar() {
  return (
    <header className="navbar__wrapper">
      <div className="container">
        <nav className="navbar">
          <NavLink to={"/"} className="navbar__logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <button className="navbar__category-btn">
            <IoMenu />
            <span>Katalog</span>
          </button>
          <div className="navbar__search">
            <input type="text" placeholder="Search..." />
            <button>
              <IoSearch />
            </button>
          </div>
          <div className="navbar__collection">
            <NavLink to={"/"} className="navbar__item">
              <IoHome />
              <span>Bosh Sahifa</span>
            </NavLink>
            <NavLink to={"/login"} className="navbar__item">
              <FaRegUser />
              <span>Account</span>
            </NavLink>
            <NavLink to={"/wishes"} className="navbar__item">
              <FaRegHeart />

              <span>Wishlist</span>
            </NavLink>
            <NavLink to={"/admin"} className="navbar__item">
              <RiAdminLine />
              <span>Admin</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default memo(Navbar);
