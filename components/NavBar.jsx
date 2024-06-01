import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className=" fixed left-0 top-0 flex w-full  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <div className="flex w-full flex-row navbar-container">
          <p className="logo">
            <Link href="/">Belinda's Hair</Link>
          </p>
            <ul className="pages">
              <li>
                <a class="menu__link" href="#about">
                  HOME
                </a>
              </li>
              <li>
                <a class="menu__link" href="#featured">
                  ABOUT US
                </a>
              </li>
              <li>
                <a class="menu__link" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
