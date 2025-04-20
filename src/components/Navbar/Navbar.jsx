import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { MdShoppingCart, MdBookmarkAdd } from "react-icons/md";
import { CartContext } from "../../Providers/Context";

const Navbar = () => {
  const {cart}= useContext(CartContext);
  console.log(cart);
  return (
    <div className="navbar p-0 bg-base-100 w-11/12 lg:container mx-auto">
      {/* small device drop down menu */}
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="font-bold">
            <NavLink to="/" className={({isActive})=> isActive? "text-indigo-500":""}>Home</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="about" className={({isActive})=> isActive? "text-indigo-500":""}>About</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="cart" className={({isActive})=> isActive? "text-indigo-500":""}><MdShoppingCart size={20} /></NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="favorites" className={({isActive})=> isActive? "text-indigo-500":""}><MdBookmarkAdd size={20} /></NavLink>
          </li>
          </ul>
        </div>
        {/* logo */}
        <Link to="/" className="text-xl font-bold">
          FlagshipPhones
        </Link>
      </div>

      {/* large device nav menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold">
            <NavLink to="/" className={({isActive})=> isActive? "text-indigo-500":""}>Home</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="about" className={({isActive})=> isActive? "text-indigo-500":""}>About</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="carts" className={({isActive})=> isActive? "text-indigo-500":""}><MdShoppingCart size={20} />
            <p className="relative top-0 right-0">{cart.length}</p>
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="favorites" className={({isActive})=> isActive? "text-indigo-500":""}><MdBookmarkAdd size={20} /></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
