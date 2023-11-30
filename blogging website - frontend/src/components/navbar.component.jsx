import React, { useState } from "react";
import logo from "../imgs/logo.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isClicked, setIsclicked] = useState(false);

  const [visible, setVisible]=useState("hide")
  return (
    <>
    <nav className="navbar">
      <Link to="/" className="w-10">
        <img src={logo} className="w-full" />
      </Link>
      <div className={" absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show "+ (visible)}>
        <input
          type="text"
          placeholder="search"
          className=" w-full rounded-full bg-grey md:w-auto p-4 pl-6 pr-[12%] md:pr-6 placeholder:text-dark-grey md:pl-12 "
        />
        <i className="fi fi-rr-search absolute right-[10%] md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
      </div>
      <div className="flex items-center gap-3 md:gap-6 ml-auto" onClick={()=>{
        setIsclicked(!isClicked)
        isClicked ? setVisible("show") : setVisible("hide")
      }}>
        <button className=" md:hidden bg-grey w-12 h-12 rounded-full flex justify-center items-center">
        <i className="fi fi-rr-search text-xl"></i>
        </button>

        <Link to='/editor' className=" hidden md:flex gap-2 link">
        <i class="fi fi-rr-edit"></i>
          <p>write</p>
        </Link>

        <Link to='/signin' className=" btn-dark py-2">
          Sign In
        </Link>

        <Link to='/signup' className=" btn-light py-2 hidden md:block">
          Sign UP
        </Link>

      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
