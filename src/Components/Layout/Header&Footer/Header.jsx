import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../../assets/toys.png";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/alltoys">All Toys</Link>
              </li>
              <li>
                <Link to="/addtoys">Add a Toys</Link>
              </li>
              <li>
                <Link to="/mytoys">My Toys</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="flex ms-3 items-center">
            <img className="w-16 h-16" src={logo} alt="" />
            <Link className="btn btn-ghost normal-case text-xl" to="/">
              ToyHub
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoys">All Toys</Link>
            </li>
            <li>
              <Link to="/addtoys">Add a Toys</Link>
            </li>
            <li>
              <Link to="/mytoys">My Toys</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <FaUserCircle className="w-12 h-12 mr-4"></FaUserCircle>
          <Link to="/login">
            <button className="btn btn-accent mr-4">login</button>
          </Link>
          <button className="btn btn-accent">logOut</button>
        </div>
      </div>
    </>
  );
};

export default Header;
