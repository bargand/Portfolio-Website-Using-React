import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import Tilt from 'react-parallax-tilt';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <nav>
          <div className="logo"></div>
          <ul>
            <li>
                <Tilt>
              <NavLink to="/" className="listStyle">
                <AiOutlineHome style={{ margin: "0px 5px -2px 0px" }} />
                HOME
              </NavLink>
                </Tilt>
            </li>
            <li>
            <Tilt>
              <NavLink to="/about" className="listStyle">
                <AiOutlineUser style={{ margin: "0px 5px -2px 0px" }}/>
                ABOUT
              </NavLink>
              </Tilt>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
