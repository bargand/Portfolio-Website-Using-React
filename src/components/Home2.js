import React from "react";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <>
      <div className="HomeT">
        <div className="HomeTLeft">
          <h1>
            LET ME <span className="HomeSpan">INTRODUCE</span> MYSELF
          </h1>
          <p>
            I learned to make websites from youtube ,name{" "}
            <span className="HomeSpan">CODE WITH HARRY</span> and{" "}
            <span className="HomeSpan">APNA COLLEGE</span>. I know how fun and
            rewarding it is, but I also know that it can be incredibly
            frustrating. I'm here to help make your journey into web development
            as easy and as fun as possible.{" "}
          </p>
        </div>
        <div className="HomeTRight">
          <Tilt>
            <img src="/images/Home2IMG2.svg" alt="" />
          </Tilt>
        </div>
      </div>
      <div className="HomeTICON">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="HomeSpan">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home2;
