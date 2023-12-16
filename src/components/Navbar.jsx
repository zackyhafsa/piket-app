import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-neutral-content flex justify-between px-60 text-slate-8006 max-sm:px-11 shadow-md fixed top-0 right-0 left-0 z-50">
        <div className="flex-1">
          <a className="font-bold text-2xl">Piket</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Piket</summary>
                <ul className="p-2 bg-base-100 rounded-t-none text-black">
                  <li>
                    <Link to="piket">Daftar Piket</Link>
                  </li>
                  <li>
                    <Link to="/">Hari Ini</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
