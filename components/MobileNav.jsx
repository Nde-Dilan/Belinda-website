import React from 'react'
import "../styles/mobile-nav.css";


const MobileNav = () => {
  return (
    
    // <!-- Mobile navigation -->
    <div class="mobile-nav">
      <nav>
        <ul class="mobile-nav__menu">
          <li><a class="mobile-nav__link" href="#about">HOME</a></li>
          <li><a class="mobile-nav__link" href="#featured">ABOUT US</a></li>
          <li><a class="mobile-nav__link" href="#contact">CONTACT</a></li>
          <li><a class="mobile-nav__link" href="#contact">694525931</a></li>
          <li class="mobile-nav__link-line"></li>
        </ul>
      </nav>
    </div>
    /* <!--End of Mobile navigation --> */
  )
}

export default MobileNav;