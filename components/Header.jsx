"use client";

import React from "react";
import "../styles/header.css";
import "../styles/utils.css";

let isMobileNavOpen = false;

const handleClick = () => {
  let barIcon = document.querySelector(".header__bars");
  let mobileMenu = document.querySelector(".mobile-nav");
  let mobileLinks = document.querySelectorAll(".mobile-nav__link");

  console.log(mobileMenu);
  isMobileNavOpen = !isMobileNavOpen;
  const styleProps = (display, overflowY, isOpen) => {
    mobileMenu.style.display = display;
    document.body.style.overflowY = overflowY;
    isMobileNavOpen = !isOpen;
  };

  isMobileNavOpen
    ? styleProps("none", "auto", false)
    : styleProps("flex", "hidden", true);

  mobileLinks.forEach((el) => {
    el.addEventListener("click", () => {
      styleProps("none", "auto", false);
    });
  });
};

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

          <li className="a">
            <a
              href="./résume.html"
              target="_blank"
              className="menu__resume btn"
            >
              Book Now
            </a>
          </li>
        </ul>
        <button className="header__bars" onClick={handleClick}>
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
  );
};

export default Header;
