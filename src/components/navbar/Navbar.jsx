import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  let Links = [
    { name: "Top charts", link: "/topcharts" },
    { name: "News", link: "/" },
    { name: "Singers", link: "/singers" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-sq border-solid border divide-slate-600 justify-center sticky top-5">
      <div className="md:flex items-center justify-between bg-white py-3 md:px-8 px-7">
        <Link
          to={"/"}
          className=" font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className=" text-3xl text-indigo-600 mr-1 pt-2"></span>
          <a>MuzifyNews</a>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={open ? faBars : faBars} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className=" p-2 md:ml-8 text-xl md:my-0 my-7 border-l-solid border-l-4 border-bgu hover:border-dotted"
            >
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
