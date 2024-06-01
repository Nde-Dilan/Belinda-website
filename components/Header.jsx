import React from "react";
import "../styles/header.css";
import "../styles/utils.css";


const Header = () => {
  return (
    <header className="header container">
        <div className="logo">Belinda's Hair</div>
      <nav>
        <ul className="header__menu">
        <li>
            <a className="menu__link" href="#about">
              Home
            </a>
          </li>
          <li>
            <a className="menu__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="menu__link" href="#featured">
              Work
            </a>
          </li>
          <li>
            <a className="menu__link" href="#contact">
              Contact
            </a>
          </li>
          <li className="menu__line"></li>
          <li>
            <button id="theme-toggle" className="menu__sun">
              <svg
                fill="white"
                className="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5-q</title>
                <rect x="234" y="26" width="44" height="92" />
                <rect x="234" y="394" width="44" height="92" />
                <rect
                  x="340.11"
                  y="103.89"
                  width="92"
                  height="44"
                  transform="translate(24.07 309.89) rotate(-45)"
                />
                <rect
                  x="79.89"
                  y="364.11"
                  width="92"
                  height="44"
                  transform="translate(-236.14 202.1) rotate(-45)"
                />
                <rect x="394" y="234" width="92" height="44" />
                <rect x="26" y="234" width="92" height="44" />
                <rect
                  x="364.11"
                  y="340.11"
                  width="44"
                  height="92"
                  transform="translate(-159.93 386.11) rotate(-45)"
                />
                <rect
                  x="103.89"
                  y="79.89"
                  width="44"
                  height="92"
                  transform="translate(-52.15 125.89) rotate(-45)"
                />
                <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z" />
              </svg>
            </button>
          </li>
          <li className="a">
            <a href="./résume.html" target="_blank" className="menu__resume btn">
              Book Now
            </a>
          </li>
        </ul>
        <button className="header__bars">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </header>
  )
};

export default Header;
