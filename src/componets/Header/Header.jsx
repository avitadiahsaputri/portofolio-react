import React from "react";
import "../../App.css";
import {NavLink} from "react-router-dom";
import { pages } from "../../main"
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


const Header = () => {
  return (
    <header className="bg-gray-600/[.8] fixed w-full top-0 z-10 text-black flex flex-col items-center gap-2 py-2 md:flex-row md:justify-between md:py-5 md:px-8 border-b border-white/[.3]">
      {/* ===== Navbar ==== */}
      <nav className="flex items-center gap-5 font-bold">
        <div className="text-2xl flex item-center">
          Avita<span className="text-gray-700">dev</span>
        </div>

        <ul className="flex items-center gap-5 text-gray-900">
          {/* Gunakan map() dengan return untuk mengembalikan elemen JSX */}
          {pages.map((page, i) => {
            return (
              <React.Fragment key={i}>
                <li className="menu-item">
                  <NavLink to={page.path}>{page.title}</NavLink>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
      {/* ===== Media ===== */}
      <ul className="flex gap-3">
        <li className="hover:text-slate-200">
          <AiFillGithub size={25} />
        </li>
        <li className="hover:text-slate-200">
          <AiFillLinkedin size={25} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
